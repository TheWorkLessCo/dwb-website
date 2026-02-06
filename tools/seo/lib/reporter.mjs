/**
 * Report Generator Module
 * Generates JSON and Markdown reports from analysis data
 */

export class ReportGenerator {
  constructor(config) {
    this.config = config;
  }

  generate(crawlData, analysis, schemas) {
    const jsonReport = this.generateJsonReport(crawlData, analysis, schemas);
    const markdownReport = this.generateMarkdownReport(crawlData, analysis, schemas);

    // Generate sitemap if missing
    let generatedSitemap = null;
    let sitemapUrlCount = 0;

    if (!crawlData.sitemap.found) {
      generatedSitemap = this.generateSitemap(crawlData);
      sitemapUrlCount = crawlData.pages.filter(p => p.desktop?.statusCode === 200).length;
    }

    // Generate redirect map CSV for migration helper
    const redirectMap = this.generateRedirectMap(crawlData);

    return {
      json: jsonReport,
      markdown: markdownReport,
      generatedSitemap,
      sitemapUrlCount,
      redirectMap
    };
  }

  generateJsonReport(crawlData, analysis, schemas) {
    return {
      meta: {
        generatedAt: new Date().toISOString(),
        tool: 'SEO Snapshot v1.0.0',
        targetUrl: crawlData.baseUrl,
        configuration: {
          maxPages: this.config.maxPages,
          businessName: this.config.businessName,
          location: this.config.location
        }
      },
      summary: analysis.summary,
      issues: analysis.issues,
      robots: {
        found: crawlData.robots.found,
        raw: crawlData.robots.raw
      },
      sitemap: {
        found: crawlData.sitemap.found,
        source: crawlData.sitemap.source,
        urlCount: crawlData.sitemap.urls?.length || 0,
        errors: crawlData.sitemap.errors
      },
      pages: crawlData.pages.map(page => ({
        url: page.url,
        finalUrl: page.finalUrl,
        statusCode: page.statusCode,
        robotsAllowed: page.robotsAllowed,
        redirectChain: page.desktop?.redirectChain || [],
        desktop: page.desktop ? {
          title: page.desktop.title,
          titleLength: page.desktop.title?.length || 0,
          metaDescription: page.desktop.metaDescription,
          metaDescriptionLength: page.desktop.metaDescription?.length || 0,
          metaRobots: page.desktop.metaRobots,
          canonical: page.desktop.canonical,
          h1: page.desktop.h1,
          h2: page.desktop.h2,
          openGraph: page.desktop.openGraph,
          jsonLdCount: page.desktop.jsonLd?.length || 0,
          jsonLdTypes: this.extractSchemaTypes(page.desktop.jsonLd),
          textLength: page.desktop.textLength
        } : null,
        mobile: page.mobile ? {
          title: page.mobile.title,
          metaDescription: page.mobile.metaDescription,
          metaRobots: page.mobile.metaRobots,
          canonical: page.mobile.canonical,
          h1: page.mobile.h1,
          textLength: page.mobile.textLength
        } : null,
        mobileParity: this.checkMobileParity(page)
      })),
      duplicates: {
        titles: analysis.titleDuplicates,
        metaDescriptions: analysis.metaDescriptionDuplicates
      },
      structuredData: analysis.structuredDataSummary,
      generatedSchemas: schemas.summary,
      internalLinks: Array.from(crawlData.internalLinks),
      externalLinks: Array.from(crawlData.externalLinks)
    };
  }

  extractSchemaTypes(jsonLd) {
    if (!jsonLd || jsonLd.length === 0) return [];

    const types = new Set();
    for (const schema of jsonLd) {
      const type = schema['@type'];
      if (type) {
        const typeArray = Array.isArray(type) ? type : [type];
        typeArray.forEach(t => types.add(t));
      }
    }
    return Array.from(types);
  }

  checkMobileParity(page) {
    if (!page.desktop || !page.mobile) return null;

    const issues = [];

    if (page.desktop.title !== page.mobile.title) {
      issues.push('title');
    }
    if (page.desktop.canonical !== page.mobile.canonical) {
      issues.push('canonical');
    }
    if (page.desktop.metaRobots !== page.mobile.metaRobots) {
      issues.push('metaRobots');
    }

    const desktopH1 = page.desktop.h1?.[0] || '';
    const mobileH1 = page.mobile.h1?.[0] || '';
    if (desktopH1 !== mobileH1) {
      issues.push('h1');
    }

    const textDiff = Math.abs((page.desktop.textLength || 0) - (page.mobile.textLength || 0));
    const textDiffPercent = page.desktop.textLength > 0
      ? (textDiff / page.desktop.textLength) * 100
      : 0;

    if (textDiffPercent > 20 && textDiff > 500) {
      issues.push('contentLength');
    }

    return {
      passed: issues.length === 0,
      issues
    };
  }

  generateMarkdownReport(crawlData, analysis, schemas) {
    const lines = [];
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Header
    lines.push(`# SEO Audit Report: ${this.config.businessName}`);
    lines.push('');
    lines.push(`**Target:** ${crawlData.baseUrl}`);
    lines.push(`**Generated:** ${date}`);
    lines.push(`**Location:** ${this.config.location}`);
    lines.push('');
    lines.push('---');
    lines.push('');

    // Executive Summary
    lines.push('## Executive Summary');
    lines.push('');
    lines.push(`| Metric | Value |`);
    lines.push(`|--------|-------|`);
    lines.push(`| Pages Crawled | ${analysis.summary.totalPagesCrawled} |`);
    lines.push(`| Successful Pages (200) | ${analysis.summary.successfulPages} |`);
    lines.push(`| Error Pages (4xx/5xx) | ${analysis.summary.errorPages} |`);
    lines.push(`| Blocked by Robots.txt | ${analysis.summary.blockedByRobots} |`);
    lines.push(`| Robots.txt | ${analysis.summary.robotsTxtFound ? 'Found' : 'Missing'} |`);
    lines.push(`| XML Sitemap | ${analysis.summary.sitemapFound ? `Found (${analysis.summary.sitemapUrlCount} URLs)` : 'Missing'} |`);
    lines.push('');

    // Issue counts
    const criticalCount = analysis.issues.filter(i => i.severity === 'critical').length;
    const highCount = analysis.issues.filter(i => i.severity === 'high').length;
    const mediumCount = analysis.issues.filter(i => i.severity === 'medium').length;
    const lowCount = analysis.issues.filter(i => i.severity === 'low').length;

    lines.push(`### Issue Summary`);
    lines.push('');
    lines.push(`- **Critical:** ${criticalCount}`);
    lines.push(`- **High:** ${highCount}`);
    lines.push(`- **Medium:** ${mediumCount}`);
    lines.push(`- **Low:** ${lowCount}`);
    lines.push('');
    lines.push('---');
    lines.push('');

    // Top 10 Issues
    lines.push('## Top 10 Priority Issues');
    lines.push('');

    const topIssues = analysis.issues.slice(0, 10);

    for (let i = 0; i < topIssues.length; i++) {
      const issue = topIssues[i];
      const severityBadge = this.getSeverityBadge(issue.severity);

      lines.push(`### ${i + 1}. ${issue.title} ${severityBadge}`);
      lines.push('');
      lines.push(`**Category:** ${issue.category}`);
      lines.push('');
      lines.push(issue.description);
      lines.push('');

      if (issue.affectedUrls.length > 0) {
        lines.push('**Affected URLs:**');
        for (const url of issue.affectedUrls.slice(0, 5)) {
          lines.push(`- ${url}`);
        }
        if (issue.affectedCount > 5) {
          lines.push(`- ... and ${issue.affectedCount - 5} more`);
        }
        lines.push('');
      }

      if (issue.recommendation) {
        lines.push(`**Recommendation:** ${issue.recommendation}`);
        lines.push('');
      }
    }

    lines.push('---');
    lines.push('');

    // Fix Now vs Fix Later
    lines.push('## Prioritization: Fix Now vs. Fix After UI Freeze');
    lines.push('');
    lines.push('### Fix Now (Pre-Launch / Critical)');
    lines.push('');
    lines.push('These issues should be addressed immediately as they directly impact crawlability and indexing:');
    lines.push('');

    const fixNowIssues = analysis.issues.filter(i =>
      i.severity === 'critical' || i.severity === 'high'
    );

    if (fixNowIssues.length > 0) {
      for (const issue of fixNowIssues) {
        lines.push(`- [ ] **${issue.title}** (${issue.affectedCount} affected)`);
      }
    } else {
      lines.push('*No critical or high-priority issues found.*');
    }

    lines.push('');
    lines.push('### Fix After UI Freeze (Post-Launch Optimization)');
    lines.push('');
    lines.push('These issues can be addressed after launch without significantly impacting SEO:');
    lines.push('');

    const fixLaterIssues = analysis.issues.filter(i =>
      i.severity === 'medium' || i.severity === 'low'
    );

    if (fixLaterIssues.length > 0) {
      for (const issue of fixLaterIssues) {
        lines.push(`- [ ] **${issue.title}** (${issue.affectedCount} affected)`);
      }
    } else {
      lines.push('*No medium or low-priority issues found.*');
    }

    lines.push('');
    lines.push('---');
    lines.push('');

    // Title/Meta Patterns
    lines.push('## Suggested Title & Meta Description Patterns');
    lines.push('');
    lines.push('### Service Pages');
    lines.push('');
    lines.push('**Title Pattern (50-60 chars):**');
    lines.push('```');
    lines.push(`{Service Name} in ${this.config.location.split(',')[0]} | ${this.config.businessName}`);
    lines.push('```');
    lines.push('');
    lines.push('**Examples:**');
    lines.push(`- "Window Cleaning in Dallas | ${this.config.businessName}"`);
    lines.push(`- "Commercial Window Washing in Fort Worth | ${this.config.businessName}"`);
    lines.push(`- "Residential Door Installation in Dallas | ${this.config.businessName}"`);
    lines.push('');
    lines.push('**Meta Description Pattern (120-155 chars):**');
    lines.push('```');
    lines.push(`Professional {service} services in {city}. {Unique value prop}. Free estimates. Call today!`);
    lines.push('```');
    lines.push('');
    lines.push('**Examples:**');
    lines.push(`- "Professional window cleaning services in Dallas-Fort Worth. Crystal-clear results guaranteed. Licensed & insured. Get your free estimate today!"`);
    lines.push('');
    lines.push('### Location Pages');
    lines.push('');
    lines.push('**Title Pattern:**');
    lines.push('```');
    lines.push(`Window Cleaning & Door Services in {City}, TX | ${this.config.businessName}`);
    lines.push('```');
    lines.push('');
    lines.push('**Meta Description Pattern:**');
    lines.push('```');
    lines.push(`${this.config.businessName} serves {City} with professional window cleaning, installation, and door services. Trusted by {X}+ local customers. Call for free quote!`);
    lines.push('```');
    lines.push('');
    lines.push('---');
    lines.push('');

    // Structured Data Recommendations
    lines.push('## Structured Data Recommendations');
    lines.push('');

    const existingTypes = analysis.structuredDataSummary.typeBreakdown;
    if (Object.keys(existingTypes).length > 0) {
      lines.push('### Currently Implemented');
      lines.push('');
      for (const [type, count] of Object.entries(existingTypes)) {
        lines.push(`- ${type}: ${count} page(s)`);
      }
      lines.push('');
    } else {
      lines.push('*No structured data currently detected on the website.*');
      lines.push('');
    }

    lines.push('### Recommended Additions');
    lines.push('');
    lines.push('The following schema files have been generated in the `schema/` folder:');
    lines.push('');

    for (const schema of schemas.files) {
      lines.push(`1. **${schema.filename}** - ${schema.description}`);
    }

    lines.push('');
    lines.push('**Implementation Priority:**');
    lines.push('');
    lines.push('1. `local-business.json` - Add to homepage (highest impact for local SEO)');
    lines.push('2. Service schemas - Add to respective service pages');
    lines.push('3. `faq-template.json` - Add to FAQ sections on service pages');
    lines.push('4. `breadcrumb-template.json` - Add to all pages with breadcrumb navigation');
    lines.push('');
    lines.push('---');
    lines.push('');

    // Action Checklist
    lines.push('## Next Actions Checklist');
    lines.push('');
    lines.push('### Immediate (This Week)');
    lines.push('');

    const immediateActions = [];

    if (!crawlData.robots.found) {
      immediateActions.push('Create and deploy robots.txt file');
    }
    if (!crawlData.sitemap.found) {
      immediateActions.push('Create and submit XML sitemap (generated sitemap.xml included)');
    }
    if (criticalCount > 0) {
      immediateActions.push(`Fix ${criticalCount} critical issue(s) identified above`);
    }
    if (highCount > 0) {
      immediateActions.push(`Address ${highCount} high-priority issue(s)`);
    }

    if (!this.hasLocalBusinessSchema(crawlData)) {
      immediateActions.push('Implement LocalBusiness schema on homepage');
    }

    if (immediateActions.length > 0) {
      for (const action of immediateActions) {
        lines.push(`- [ ] ${action}`);
      }
    } else {
      lines.push('- [x] No immediate actions required');
    }

    lines.push('');
    lines.push('### Short-term (This Month)');
    lines.push('');
    lines.push('- [ ] Review and update all page titles to follow recommended pattern');
    lines.push('- [ ] Write unique meta descriptions for all service pages');
    lines.push('- [ ] Implement Service schema on all service pages');
    lines.push('- [ ] Add FAQ schema to pages with Q&A content');
    lines.push('- [ ] Set up Google Search Console and Bing Webmaster Tools');
    lines.push('- [ ] Submit sitemap to search engines');
    lines.push('');
    lines.push('### Ongoing');
    lines.push('');
    lines.push('- [ ] Monitor crawl errors in Search Console weekly');
    lines.push('- [ ] Track keyword rankings for target service + location terms');
    lines.push('- [ ] Build local citations (Yelp, Google Business Profile, etc.)');
    lines.push('- [ ] Collect and respond to customer reviews');
    lines.push('- [ ] Re-run this audit monthly to track progress');
    lines.push('');
    lines.push('---');
    lines.push('');

    // Migration Checklist
    lines.push('## Migration Checklist');
    lines.push('');
    lines.push('Use this checklist when migrating to a new site or making significant URL structure changes.');
    lines.push('');
    lines.push('### Pre-Launch');
    lines.push('');
    lines.push('- [ ] Export current sitemap and URL inventory (see `redirect-map.csv`)');
    lines.push('- [ ] Document all existing 301/302 redirects');
    lines.push('- [ ] Map old URLs to new URLs for any URL structure changes');
    lines.push('- [ ] Test all redirects in staging environment');
    lines.push('- [ ] Verify robots.txt allows crawling of important pages');
    lines.push('- [ ] Ensure canonical tags point to new URLs');
    lines.push('- [ ] Update internal links to use new URL structure');
    lines.push('- [ ] Update XML sitemap with new URLs');
    lines.push('- [ ] Back up current Search Console data (performance, links)');
    lines.push('');
    lines.push('### Launch Day');
    lines.push('');
    lines.push('- [ ] Deploy 301 redirects from old URLs to new URLs');
    lines.push('- [ ] Submit new sitemap to Google Search Console');
    lines.push('- [ ] Submit new sitemap to Bing Webmaster Tools');
    lines.push('- [ ] Request indexing for key pages via Search Console');
    lines.push('- [ ] Verify no pages return 404 that should redirect');
    lines.push('- [ ] Test mobile rendering on key pages');
    lines.push('');
    lines.push('### Post-Launch (Week 1)');
    lines.push('');
    lines.push('- [ ] Monitor crawl errors daily in Search Console');
    lines.push('- [ ] Check for unexpected 404s in server logs');
    lines.push('- [ ] Verify redirect chains are not too long (max 2 hops)');
    lines.push('- [ ] Monitor organic traffic for significant drops');
    lines.push('- [ ] Update external backlinks if possible (high-value sites)');
    lines.push('');
    lines.push('### Post-Launch (Month 1)');
    lines.push('');
    lines.push('- [ ] Re-run this SEO audit on the new site');
    lines.push('- [ ] Compare indexed page count (site:domain.com)');
    lines.push('- [ ] Monitor keyword rankings for target terms');
    lines.push('- [ ] Address any new crawl issues discovered');
    lines.push('- [ ] Remove temporary redirects if applicable');
    lines.push('');
    lines.push('---');
    lines.push('');

    // Technical Details
    lines.push('## Technical Details');
    lines.push('');
    lines.push('### Crawl Statistics');
    lines.push('');
    lines.push(`- Internal URLs discovered: ${crawlData.internalLinks.size}`);
    lines.push(`- External links found: ${crawlData.externalLinks.size}`);
    lines.push(`- Pages analyzed: ${crawlData.pages.length}`);
    lines.push('');

    // Robots.txt summary
    if (crawlData.robots.found) {
      lines.push('### Robots.txt');
      lines.push('');
      lines.push('```');
      lines.push(crawlData.robots.raw?.substring(0, 500) || 'Empty');
      if (crawlData.robots.raw?.length > 500) {
        lines.push('... (truncated)');
      }
      lines.push('```');
      lines.push('');
    }

    // Sitemap summary
    if (crawlData.sitemap.found) {
      lines.push('### Sitemap');
      lines.push('');
      lines.push(`- Location: ${crawlData.sitemap.source}`);
      lines.push(`- URLs in sitemap: ${crawlData.sitemap.urls?.length || 0}`);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
    lines.push(`*Report generated by SEO Snapshot CLI Tool*`);

    return lines.join('\n');
  }

  hasLocalBusinessSchema(crawlData) {
    for (const page of crawlData.pages) {
      if (!page.desktop?.jsonLd) continue;
      for (const schema of page.desktop.jsonLd) {
        const type = schema['@type'];
        if (type) {
          const types = Array.isArray(type) ? type : [type];
          for (const t of types) {
            const lowerType = t.toLowerCase();
            if (lowerType.includes('localbusiness') ||
                lowerType.includes('homeandconstructionbusiness')) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  getSeverityBadge(severity) {
    const badges = {
      critical: '🔴',
      high: '🟠',
      medium: '🟡',
      low: '🟢'
    };
    return badges[severity] || '';
  }

  generateSitemap(crawlData) {
    const urls = crawlData.pages
      .filter(p => p.desktop?.statusCode === 200 && p.robotsAllowed)
      .map(p => p.finalUrl);

    const uniqueUrls = [...new Set(urls)];
    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const url of uniqueUrls) {
      xml += '  <url>\n';
      xml += `    <loc>${this.escapeXml(url)}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;

      // Assign priority based on URL depth
      const depth = new URL(url).pathname.split('/').filter(Boolean).length;
      const priority = depth === 0 ? '1.0' : depth === 1 ? '0.8' : '0.6';
      xml += `    <priority>${priority}</priority>\n`;

      xml += '  </url>\n';
    }

    xml += '</urlset>\n';

    return xml;
  }

  escapeXml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  /**
   * Generate redirect-map.csv for migration helper
   * Captures all discovered redirects: old_url -> new_url
   */
  generateRedirectMap(crawlData) {
    const redirects = [];

    for (const page of crawlData.pages) {
      // Get redirects from desktop crawl
      const chain = page.desktop?.redirectChain || [];

      for (const redirect of chain) {
        redirects.push({
          oldUrl: redirect.from,
          newUrl: redirect.to,
          statusCode: redirect.status
        });
      }

      // Also capture if the final URL differs from the original URL
      if (page.url !== page.finalUrl && page.finalUrl) {
        // Only add if not already captured in chain
        const alreadyCaptured = redirects.some(
          r => r.oldUrl === page.url && r.newUrl === page.finalUrl
        );

        if (!alreadyCaptured) {
          redirects.push({
            oldUrl: page.url,
            newUrl: page.finalUrl,
            statusCode: page.statusCode
          });
        }
      }
    }

    // Remove duplicates
    const uniqueRedirects = [];
    const seen = new Set();

    for (const redirect of redirects) {
      const key = `${redirect.oldUrl}|${redirect.newUrl}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueRedirects.push(redirect);
      }
    }

    // Generate CSV content
    let csv = 'old_url,new_url,status_code\n';

    for (const redirect of uniqueRedirects) {
      // Escape CSV values (wrap in quotes if contains comma)
      const oldUrl = this.escapeCsvValue(redirect.oldUrl);
      const newUrl = this.escapeCsvValue(redirect.newUrl);
      csv += `${oldUrl},${newUrl},${redirect.statusCode}\n`;
    }

    return {
      content: csv,
      count: uniqueRedirects.length
    };
  }

  /**
   * Escape a value for CSV (wrap in quotes if contains comma, quote, or newline)
   */
  escapeCsvValue(value) {
    if (!value) return '';
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
}
