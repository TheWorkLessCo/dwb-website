/**
 * SEO Analyzer Module
 * Analyzes crawl data for SEO issues and opportunities
 */

// Recommended lengths for SEO elements
const SEO_LIMITS = {
  title: { min: 30, max: 60, optimal: { min: 50, max: 60 } },
  metaDescription: { min: 70, max: 160, optimal: { min: 120, max: 155 } },
  // Thin page threshold: ~300 words ≈ 1500 characters minimum
  minContentLength: 1500
};

// Key paths to check in robots.txt
const KEY_PATHS = ['/', '/services/', '/contact/', '/about/', '/blog/'];

export class SEOAnalyzer {
  constructor(config) {
    this.config = config;
    this.issues = [];
    this.warnings = [];
  }

  analyze(crawlData) {
    this.issues = [];
    this.warnings = [];

    // A) Crawl/Indexing Analysis
    this.analyzeRobotsTxt(crawlData);
    this.analyzeMetaRobots(crawlData);

    // B) Sitemap Analysis
    this.analyzeSitemap(crawlData);

    // C) On-page Essentials
    this.analyzeOnPageSeo(crawlData);

    // D) Mobile-first Parity
    this.analyzeMobileParity(crawlData);

    // E) Structured Data
    this.analyzeStructuredData(crawlData);

    // Sort issues by severity
    const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    this.issues.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

    return {
      issues: this.issues,
      warnings: this.warnings,
      summary: this.generateSummary(crawlData),
      titleDuplicates: this.findDuplicates(crawlData, 'title'),
      metaDescriptionDuplicates: this.findDuplicates(crawlData, 'metaDescription'),
      structuredDataSummary: this.summarizeStructuredData(crawlData)
    };
  }

  addIssue(severity, category, title, description, affectedUrls = [], recommendation = '') {
    this.issues.push({
      id: `issue-${this.issues.length + 1}`,
      severity,
      category,
      title,
      description,
      affectedUrls: affectedUrls.slice(0, 10), // Limit for readability
      affectedCount: affectedUrls.length,
      recommendation
    });
  }

  // A) Robots.txt Analysis
  analyzeRobotsTxt(crawlData) {
    const { robots } = crawlData;

    if (!robots.found) {
      this.addIssue(
        'high',
        'crawlability',
        'Missing robots.txt',
        'No robots.txt file was found at the root of the domain.',
        [new URL('/robots.txt', crawlData.baseUrl).href],
        'Create a robots.txt file to control crawler access and specify sitemap location.'
      );
      return;
    }

    // Check key paths
    const blockedPaths = [];
    const parser = robots.parser;

    for (const path of KEY_PATHS) {
      const url = new URL(path, crawlData.baseUrl).href;
      if (parser && !parser.isAllowed(url, '*')) {
        blockedPaths.push(path);
      }
    }

    if (blockedPaths.length > 0) {
      this.addIssue(
        'high',
        'crawlability',
        'Important paths blocked in robots.txt',
        `The following key paths are blocked by robots.txt: ${blockedPaths.join(', ')}`,
        blockedPaths.map(p => new URL(p, crawlData.baseUrl).href),
        'Review robots.txt rules and ensure important pages are accessible to search engines.'
      );
    }

    // Check for sitemap directive
    if (robots.raw && !robots.raw.toLowerCase().includes('sitemap:')) {
      this.addIssue(
        'low',
        'crawlability',
        'No sitemap directive in robots.txt',
        'The robots.txt file does not contain a Sitemap directive.',
        [new URL('/robots.txt', crawlData.baseUrl).href],
        'Add a Sitemap directive to robots.txt to help search engines discover your sitemap.'
      );
    }

    // Check for common issues
    if (robots.raw) {
      if (robots.raw.includes('Disallow: /')) {
        const lines = robots.raw.split('\n');
        for (const line of lines) {
          if (line.trim() === 'Disallow: /') {
            this.addIssue(
              'critical',
              'crawlability',
              'Site-wide crawl block detected',
              'robots.txt contains "Disallow: /" which blocks all crawlers from the entire site.',
              [new URL('/robots.txt', crawlData.baseUrl).href],
              'Remove or modify the "Disallow: /" rule unless you intentionally want to block all crawlers.'
            );
            break;
          }
        }
      }
    }
  }

  // Meta robots analysis
  analyzeMetaRobots(crawlData) {
    const noindexPages = [];
    const nofollowPages = [];

    for (const page of crawlData.pages) {
      const metaRobots = page.desktop?.metaRobots?.toLowerCase() || '';

      if (metaRobots.includes('noindex')) {
        noindexPages.push(page.url);
      }
      if (metaRobots.includes('nofollow')) {
        nofollowPages.push(page.url);
      }
    }

    if (noindexPages.length > 0) {
      this.addIssue(
        'high',
        'indexability',
        'Pages with noindex directive',
        `${noindexPages.length} page(s) have a noindex meta robots tag, preventing indexing.`,
        noindexPages,
        'Review these pages and remove noindex if they should be indexed by search engines.'
      );
    }

    if (nofollowPages.length > 0) {
      this.addIssue(
        'medium',
        'indexability',
        'Pages with nofollow directive',
        `${nofollowPages.length} page(s) have a nofollow meta robots tag.`,
        nofollowPages,
        'Review these pages - nofollow prevents passing link equity to other pages.'
      );
    }
  }

  // B) Sitemap Analysis
  analyzeSitemap(crawlData) {
    const { sitemap } = crawlData;

    if (!sitemap.found) {
      this.addIssue(
        'high',
        'crawlability',
        'Missing XML sitemap',
        'No XML sitemap was found at common locations or in robots.txt.',
        [new URL('/sitemap.xml', crawlData.baseUrl).href],
        'Create an XML sitemap and submit it to search engines via Google Search Console and Bing Webmaster Tools.'
      );
      return;
    }

    // Check for errors
    if (sitemap.errors?.length > 0) {
      this.addIssue(
        'medium',
        'crawlability',
        'Sitemap parsing errors',
        `Errors occurred while parsing sitemap: ${sitemap.errors.map(e => e.error).join(', ')}`,
        sitemap.errors.map(e => e.url),
        'Fix XML syntax errors in your sitemap files.'
      );
    }

    // Check URL count
    if (sitemap.urls.length === 0) {
      this.addIssue(
        'high',
        'crawlability',
        'Empty sitemap',
        'The sitemap was found but contains no URLs.',
        [sitemap.source],
        'Add URLs to your sitemap or generate a new one with all important pages.'
      );
    }

    // Check for missing crawled pages in sitemap
    const sitemapUrls = new Set(sitemap.urls.map(u => u.loc));
    const missingFromSitemap = [];

    for (const page of crawlData.pages) {
      if (page.statusCode === 200 && !sitemapUrls.has(page.finalUrl) && !sitemapUrls.has(page.url)) {
        missingFromSitemap.push(page.finalUrl);
      }
    }

    if (missingFromSitemap.length > 0) {
      this.addIssue(
        'low',
        'crawlability',
        'Indexable pages missing from sitemap',
        `${missingFromSitemap.length} indexable page(s) found during crawl are not in the sitemap.`,
        missingFromSitemap,
        'Add these pages to your sitemap to ensure they are discovered by search engines.'
      );
    }
  }

  // C) On-page SEO Analysis
  analyzeOnPageSeo(crawlData) {
    const missingTitles = [];
    const shortTitles = [];
    const longTitles = [];
    const missingDescriptions = [];
    const shortDescriptions = [];
    const longDescriptions = [];
    const missingH1 = [];
    const multipleH1 = [];
    const missingCanonical = [];
    const thinPages = [];
    const brokenRedirects = [];
    const longRedirectChains = [];
    const errorPages = [];

    for (const page of crawlData.pages) {
      if (!page.desktop || page.error) continue;

      const { desktop } = page;

      // Status code issues
      if (desktop.statusCode >= 400) {
        errorPages.push({ url: page.url, status: desktop.statusCode });
      }

      // Redirect chain analysis
      if (desktop.redirectChain.length > 0) {
        if (desktop.redirectChain.length > 2) {
          longRedirectChains.push({
            url: page.url,
            chain: desktop.redirectChain
          });
        }
      }

      // Only analyze 200 OK pages for content issues
      if (desktop.statusCode !== 200) continue;

      // Title analysis
      if (!desktop.title) {
        missingTitles.push(page.finalUrl);
      } else {
        const titleLen = desktop.title.length;
        if (titleLen < SEO_LIMITS.title.min) {
          shortTitles.push({ url: page.finalUrl, title: desktop.title, length: titleLen });
        } else if (titleLen > SEO_LIMITS.title.max) {
          longTitles.push({ url: page.finalUrl, title: desktop.title, length: titleLen });
        }
      }

      // Meta description analysis
      if (!desktop.metaDescription) {
        missingDescriptions.push(page.finalUrl);
      } else {
        const descLen = desktop.metaDescription.length;
        if (descLen < SEO_LIMITS.metaDescription.min) {
          shortDescriptions.push({ url: page.finalUrl, length: descLen });
        } else if (descLen > SEO_LIMITS.metaDescription.max) {
          longDescriptions.push({ url: page.finalUrl, length: descLen });
        }
      }

      // H1 analysis
      if (!desktop.h1 || desktop.h1.length === 0) {
        missingH1.push(page.finalUrl);
      } else if (desktop.h1.length > 1) {
        multipleH1.push({ url: page.finalUrl, count: desktop.h1.length });
      }

      // Canonical analysis
      if (!desktop.canonical) {
        missingCanonical.push(page.finalUrl);
      }

      // Thin page detection (content length under threshold)
      const contentLength = desktop.textLength || 0;
      if (contentLength < SEO_LIMITS.minContentLength && contentLength > 0) {
        // Exclude pages that are likely utility pages (contact, privacy, etc.)
        const path = new URL(page.finalUrl).pathname.toLowerCase();
        const isUtilityPage = ['/contact', '/privacy', '/terms', '/404', '/login', '/signup', '/book', '/quote'].some(
          p => path.includes(p)
        );

        if (!isUtilityPage) {
          thinPages.push({
            url: page.finalUrl,
            contentLength,
            estimatedWords: Math.round(contentLength / 5) // rough estimate: 5 chars per word
          });
        }
      }
    }

    // Add issues based on findings
    if (missingTitles.length > 0) {
      this.addIssue('critical', 'on-page', 'Missing page titles',
        `${missingTitles.length} page(s) are missing title tags.`,
        missingTitles,
        'Add unique, descriptive title tags to all pages (50-60 characters recommended).');
    }

    if (longTitles.length > 0) {
      this.addIssue('medium', 'on-page', 'Title tags too long',
        `${longTitles.length} page(s) have title tags exceeding 60 characters.`,
        longTitles.map(t => t.url),
        'Shorten title tags to 60 characters or less to prevent truncation in search results.');
    }

    if (shortTitles.length > 0) {
      this.addIssue('low', 'on-page', 'Title tags too short',
        `${shortTitles.length} page(s) have title tags under 30 characters.`,
        shortTitles.map(t => t.url),
        'Expand title tags to be more descriptive (50-60 characters recommended).');
    }

    if (missingDescriptions.length > 0) {
      this.addIssue('high', 'on-page', 'Missing meta descriptions',
        `${missingDescriptions.length} page(s) are missing meta descriptions.`,
        missingDescriptions,
        'Add unique meta descriptions to all pages (120-155 characters recommended).');
    }

    if (longDescriptions.length > 0) {
      this.addIssue('medium', 'on-page', 'Meta descriptions too long',
        `${longDescriptions.length} page(s) have meta descriptions exceeding 160 characters.`,
        longDescriptions.map(d => d.url),
        'Shorten meta descriptions to 160 characters or less to prevent truncation.');
    }

    if (missingH1.length > 0) {
      this.addIssue('high', 'on-page', 'Missing H1 headings',
        `${missingH1.length} page(s) are missing H1 headings.`,
        missingH1,
        'Add a single, descriptive H1 heading to each page.');
    }

    if (multipleH1.length > 0) {
      this.addIssue('medium', 'on-page', 'Multiple H1 headings',
        `${multipleH1.length} page(s) have more than one H1 heading.`,
        multipleH1.map(h => h.url),
        'Use only one H1 per page. Convert additional H1s to H2 or lower.');
    }

    if (missingCanonical.length > 0) {
      this.addIssue('medium', 'on-page', 'Missing canonical tags',
        `${missingCanonical.length} page(s) are missing canonical tags.`,
        missingCanonical,
        'Add self-referencing canonical tags to prevent duplicate content issues.');
    }

    if (thinPages.length > 0) {
      this.addIssue('medium', 'on-page', 'Thin content pages',
        `${thinPages.length} page(s) have less than ~300 words of content, which may be considered thin content by search engines.`,
        thinPages.map(p => `${p.url} (~${p.estimatedWords} words)`),
        'Expand page content with valuable information, FAQs, or detailed descriptions to improve SEO value.');
    }

    if (longRedirectChains.length > 0) {
      this.addIssue('medium', 'crawlability', 'Long redirect chains',
        `${longRedirectChains.length} URL(s) have redirect chains longer than 2 hops.`,
        longRedirectChains.map(r => r.url),
        'Update links to point directly to final URLs to reduce redirect chains.');
    }

    if (errorPages.length > 0) {
      this.addIssue('high', 'crawlability', 'Pages returning error status codes',
        `${errorPages.length} page(s) returned 4xx or 5xx status codes.`,
        errorPages.map(e => `${e.url} (${e.status})`),
        'Fix or remove broken pages. Update internal links pointing to these URLs.');
    }
  }

  // D) Mobile-first Parity Analysis
  analyzeMobileParity(crawlData) {
    const parityIssues = [];

    for (const page of crawlData.pages) {
      if (!page.desktop || !page.mobile || page.error) continue;
      if (page.desktop.statusCode !== 200 || page.mobile.statusCode !== 200) continue;

      const issues = [];

      // Title parity
      if (page.desktop.title !== page.mobile.title) {
        issues.push(`Title mismatch: "${page.desktop.title}" vs "${page.mobile.title}"`);
      }

      // H1 parity
      const desktopH1 = page.desktop.h1?.[0] || '';
      const mobileH1 = page.mobile.h1?.[0] || '';
      if (desktopH1 !== mobileH1) {
        issues.push(`H1 mismatch: "${desktopH1}" vs "${mobileH1}"`);
      }

      // Canonical parity
      if (page.desktop.canonical !== page.mobile.canonical) {
        issues.push(`Canonical mismatch: "${page.desktop.canonical}" vs "${page.mobile.canonical}"`);
      }

      // Meta robots parity
      if (page.desktop.metaRobots !== page.mobile.metaRobots) {
        issues.push(`Meta robots mismatch: "${page.desktop.metaRobots}" vs "${page.mobile.metaRobots}"`);
      }

      // Content length parity (significant difference)
      const desktopLen = page.desktop.textLength || 0;
      const mobileLen = page.mobile.textLength || 0;
      const lengthDiff = Math.abs(desktopLen - mobileLen);
      const lengthDiffPercent = desktopLen > 0 ? (lengthDiff / desktopLen) * 100 : 0;

      if (lengthDiffPercent > 20 && lengthDiff > 500) {
        issues.push(`Content length difference: ${desktopLen} chars (desktop) vs ${mobileLen} chars (mobile) - ${lengthDiffPercent.toFixed(1)}% difference`);
      }

      if (issues.length > 0) {
        parityIssues.push({
          url: page.finalUrl,
          issues
        });
      }
    }

    if (parityIssues.length > 0) {
      this.addIssue(
        'high',
        'mobile',
        'Mobile-first parity issues',
        `${parityIssues.length} page(s) have differences between desktop and mobile versions that may affect mobile-first indexing.`,
        parityIssues.map(p => p.url),
        'Ensure mobile and desktop versions have equivalent content, titles, H1s, canonical tags, and meta robots directives.'
      );
    }
  }

  // E) Structured Data Analysis
  analyzeStructuredData(crawlData) {
    const pagesWithJsonLd = [];
    const pagesWithoutJsonLd = [];
    const schemaTypes = new Map();
    let hasLocalBusiness = false;
    const servicePages = [];

    for (const page of crawlData.pages) {
      if (!page.desktop || page.desktop.statusCode !== 200) continue;

      const jsonLd = page.desktop.jsonLd || [];

      if (jsonLd.length > 0) {
        pagesWithJsonLd.push(page.finalUrl);

        for (const schema of jsonLd) {
          const type = schema['@type'];
          if (type) {
            const types = Array.isArray(type) ? type : [type];
            for (const t of types) {
              schemaTypes.set(t, (schemaTypes.get(t) || 0) + 1);

              if (t.toLowerCase().includes('localbusiness') ||
                  t.toLowerCase().includes('homeandconstructionbusiness') ||
                  t.toLowerCase() === 'organization') {
                hasLocalBusiness = true;
              }
            }
          }
        }
      } else {
        pagesWithoutJsonLd.push(page.finalUrl);
      }

      // Detect service pages
      const url = page.finalUrl.toLowerCase();
      const title = page.desktop.title?.toLowerCase() || '';
      const h1 = page.desktop.h1?.[0]?.toLowerCase() || '';

      if (url.includes('/service') || url.includes('window') || url.includes('cleaning') ||
          title.includes('service') || title.includes('window') || title.includes('cleaning') ||
          h1.includes('service') || h1.includes('window') || h1.includes('cleaning')) {
        servicePages.push({
          url: page.finalUrl,
          title: page.desktop.title,
          h1: page.desktop.h1?.[0]
        });
      }
    }

    // Missing LocalBusiness schema
    if (!hasLocalBusiness) {
      this.addIssue(
        'high',
        'structured-data',
        'Missing LocalBusiness schema',
        'No LocalBusiness, HomeAndConstructionBusiness, or Organization schema was detected on the website.',
        [crawlData.baseUrl],
        'Add LocalBusiness JSON-LD schema to your homepage and key pages to improve local search visibility.'
      );
    }

    // Missing structured data on service pages
    const servicePagesWithoutSchema = servicePages.filter(
      sp => pagesWithoutJsonLd.includes(sp.url)
    );

    if (servicePagesWithoutSchema.length > 0) {
      this.addIssue(
        'medium',
        'structured-data',
        'Service pages missing structured data',
        `${servicePagesWithoutSchema.length} service page(s) lack JSON-LD structured data.`,
        servicePagesWithoutSchema.map(sp => sp.url),
        'Add Service schema to service pages to help search engines understand your offerings.'
      );
    }

    // Pages without any structured data
    if (pagesWithoutJsonLd.length > 0 && pagesWithoutJsonLd.length === crawlData.pages.filter(p => p.desktop?.statusCode === 200).length) {
      this.addIssue(
        'high',
        'structured-data',
        'No structured data found on site',
        'No JSON-LD structured data was detected on any page of the website.',
        pagesWithoutJsonLd.slice(0, 5),
        'Implement JSON-LD structured data (LocalBusiness, Service, FAQPage, etc.) to enhance search appearance.'
      );
    }

    return {
      pagesWithJsonLd,
      pagesWithoutJsonLd,
      schemaTypes: Object.fromEntries(schemaTypes),
      hasLocalBusiness,
      servicePages,
      servicePagesWithoutSchema
    };
  }

  findDuplicates(crawlData, field) {
    const valueMap = new Map();

    for (const page of crawlData.pages) {
      if (!page.desktop || page.desktop.statusCode !== 200) continue;

      const value = page.desktop[field];
      if (value) {
        if (!valueMap.has(value)) {
          valueMap.set(value, []);
        }
        valueMap.set(value, [...valueMap.get(value), page.finalUrl]);
      }
    }

    const duplicates = [];
    for (const [value, urls] of valueMap) {
      if (urls.length > 1) {
        duplicates.push({ value, urls });
      }
    }

    if (duplicates.length > 0) {
      const fieldName = field === 'title' ? 'title tags' : 'meta descriptions';
      this.addIssue(
        'medium',
        'on-page',
        `Duplicate ${fieldName}`,
        `${duplicates.length} ${fieldName} are used on multiple pages.`,
        duplicates.flatMap(d => d.urls).slice(0, 10),
        `Create unique ${fieldName} for each page to improve click-through rates.`
      );
    }

    return duplicates;
  }

  summarizeStructuredData(crawlData) {
    const schemaTypes = new Map();
    let totalSchemas = 0;

    for (const page of crawlData.pages) {
      if (!page.desktop?.jsonLd) continue;

      for (const schema of page.desktop.jsonLd) {
        totalSchemas++;
        const type = schema['@type'];
        if (type) {
          const types = Array.isArray(type) ? type : [type];
          for (const t of types) {
            schemaTypes.set(t, (schemaTypes.get(t) || 0) + 1);
          }
        }
      }
    }

    return {
      totalSchemas,
      typeBreakdown: Object.fromEntries(schemaTypes)
    };
  }

  generateSummary(crawlData) {
    const totalPages = crawlData.pages.length;
    const successfulPages = crawlData.pages.filter(p => p.desktop?.statusCode === 200).length;
    const errorPages = crawlData.pages.filter(p => p.desktop?.statusCode >= 400).length;
    const blockedPages = crawlData.pages.filter(p => !p.robotsAllowed).length;

    return {
      totalPagesFound: crawlData.internalLinks.size,
      totalPagesCrawled: totalPages,
      successfulPages,
      errorPages,
      blockedByRobots: blockedPages,
      robotsTxtFound: crawlData.robots.found,
      sitemapFound: crawlData.sitemap.found,
      sitemapUrlCount: crawlData.sitemap.urls?.length || 0
    };
  }
}
