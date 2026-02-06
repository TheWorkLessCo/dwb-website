/**
 * Web Crawler Module
 * Handles fetching pages, robots.txt parsing, sitemap detection, and mobile/desktop comparison
 */

import fetch from 'node-fetch';
import robotsParser from 'robots-parser';
import * as cheerio from 'cheerio';
import { XMLParser } from 'fast-xml-parser';

// User agents for desktop and mobile crawling
const USER_AGENTS = {
  desktop: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  mobile: 'Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
};

const BOT_USER_AGENT = 'SEOSnapshotBot/1.0 (+https://github.com/seo-snapshot)';

export class Crawler {
  constructor(config) {
    this.config = config;
    this.baseUrl = config.baseUrl;
    this.startUrl = config.startUrl;
    this.maxPages = config.maxPages;
    this.timeout = config.timeout;
    this.verbose = config.verbose;
    this.includePaths = config.includePaths || [];
    this.excludePaths = config.excludePaths || [];

    this.visited = new Set();
    this.queue = [];
    this.pages = [];
    this.internalLinks = new Set();
    this.externalLinks = new Set();
    this.robots = null;
    this.robotsRaw = null;
    this.sitemapData = null;
  }

  log(message) {
    if (this.verbose) {
      console.log(`  [Crawler] ${message}`);
    }
  }

  async crawl() {
    // Step 1: Fetch and parse robots.txt
    await this.fetchRobotsTxt();

    // Step 2: Detect and parse sitemap
    await this.fetchSitemap();

    // Step 3: Crawl pages starting from the start URL
    this.queue.push(this.startUrl);

    while (this.queue.length > 0 && this.pages.length < this.maxPages) {
      const url = this.queue.shift();

      if (this.visited.has(this.normalizeUrl(url))) {
        continue;
      }

      await this.crawlPage(url);

      // Small delay to be polite
      await this.delay(100);
    }

    return {
      baseUrl: this.baseUrl,
      crawledAt: new Date().toISOString(),
      pages: this.pages,
      internalLinks: this.internalLinks,
      externalLinks: this.externalLinks,
      robots: {
        found: this.robots !== null,
        raw: this.robotsRaw,
        parser: this.robots
      },
      sitemap: this.sitemapData
    };
  }

  async fetchRobotsTxt() {
    const robotsUrl = new URL('/robots.txt', this.baseUrl).href;
    this.log(`Fetching robots.txt from ${robotsUrl}`);

    try {
      const response = await this.fetch(robotsUrl);

      if (response.ok) {
        this.robotsRaw = await response.text();
        this.robots = robotsParser(robotsUrl, this.robotsRaw);
        this.log('robots.txt parsed successfully');
      } else {
        this.log(`robots.txt not found (${response.status})`);
        this.robotsRaw = null;
        this.robots = null;
      }
    } catch (err) {
      this.log(`Error fetching robots.txt: ${err.message}`);
      this.robotsRaw = null;
      this.robots = null;
    }
  }

  async fetchSitemap() {
    // Try to find sitemap from robots.txt directive first
    let sitemapUrls = [];

    if (this.robotsRaw) {
      const sitemapMatches = this.robotsRaw.match(/^Sitemap:\s*(.+)$/gim);
      if (sitemapMatches) {
        sitemapUrls = sitemapMatches.map(m => m.replace(/^Sitemap:\s*/i, '').trim());
      }
    }

    // Also try common sitemap locations
    const commonSitemaps = [
      '/sitemap.xml',
      '/sitemap_index.xml',
      '/sitemap-index.xml'
    ];

    for (const path of commonSitemaps) {
      const url = new URL(path, this.baseUrl).href;
      if (!sitemapUrls.includes(url)) {
        sitemapUrls.push(url);
      }
    }

    this.sitemapData = {
      found: false,
      urls: [],
      source: null,
      raw: null,
      errors: []
    };

    for (const sitemapUrl of sitemapUrls) {
      this.log(`Trying sitemap at ${sitemapUrl}`);

      try {
        const response = await this.fetch(sitemapUrl);

        if (response.ok) {
          const xml = await response.text();
          const parsed = this.parseSitemap(xml);

          if (parsed.urls.length > 0 || parsed.sitemaps.length > 0) {
            this.sitemapData.found = true;
            this.sitemapData.source = sitemapUrl;
            this.sitemapData.raw = xml;
            this.sitemapData.urls = parsed.urls;
            this.sitemapData.sitemapIndex = parsed.sitemaps;

            // Add sitemap URLs to crawl queue
            for (const urlEntry of parsed.urls) {
              if (this.isSameDomain(urlEntry.loc)) {
                this.queue.push(urlEntry.loc);
              }
            }

            // If it's a sitemap index, fetch child sitemaps
            if (parsed.sitemaps.length > 0) {
              await this.fetchChildSitemaps(parsed.sitemaps);
            }

            this.log(`Sitemap found with ${this.sitemapData.urls.length} URLs`);
            break;
          }
        }
      } catch (err) {
        this.sitemapData.errors.push({
          url: sitemapUrl,
          error: err.message
        });
      }
    }
  }

  async fetchChildSitemaps(sitemaps) {
    for (const sitemap of sitemaps.slice(0, 10)) { // Limit to first 10 child sitemaps
      try {
        const response = await this.fetch(sitemap.loc);

        if (response.ok) {
          const xml = await response.text();
          const parsed = this.parseSitemap(xml);

          for (const urlEntry of parsed.urls) {
            this.sitemapData.urls.push(urlEntry);
            if (this.isSameDomain(urlEntry.loc)) {
              this.queue.push(urlEntry.loc);
            }
          }
        }
      } catch (err) {
        this.sitemapData.errors.push({
          url: sitemap.loc,
          error: err.message
        });
      }
    }
  }

  parseSitemap(xml) {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_'
    });

    const result = {
      urls: [],
      sitemaps: []
    };

    try {
      const parsed = parser.parse(xml);

      // Regular sitemap
      if (parsed.urlset?.url) {
        const urls = Array.isArray(parsed.urlset.url)
          ? parsed.urlset.url
          : [parsed.urlset.url];

        for (const url of urls) {
          result.urls.push({
            loc: url.loc,
            lastmod: url.lastmod || null,
            changefreq: url.changefreq || null,
            priority: url.priority || null
          });
        }
      }

      // Sitemap index
      if (parsed.sitemapindex?.sitemap) {
        const sitemaps = Array.isArray(parsed.sitemapindex.sitemap)
          ? parsed.sitemapindex.sitemap
          : [parsed.sitemapindex.sitemap];

        for (const sitemap of sitemaps) {
          result.sitemaps.push({
            loc: sitemap.loc,
            lastmod: sitemap.lastmod || null
          });
        }
      }
    } catch (err) {
      this.log(`Error parsing sitemap XML: ${err.message}`);
    }

    return result;
  }

  async crawlPage(url) {
    const normalizedUrl = this.normalizeUrl(url);

    if (this.visited.has(normalizedUrl)) {
      return;
    }

    this.visited.add(normalizedUrl);
    this.log(`Crawling: ${url}`);

    // Check robots.txt
    const isAllowed = this.robots ? this.robots.isAllowed(url, BOT_USER_AGENT) : true;

    // Check path filters
    const passesFilter = this.passesPathFilter(url);

    const pageData = {
      url: url,
      normalizedUrl: normalizedUrl,
      robotsAllowed: isAllowed,
      passesPathFilter: passesFilter,
      desktop: null,
      mobile: null,
      redirectChain: [],
      finalUrl: null,
      statusCode: null,
      error: null
    };

    if (!isAllowed) {
      this.log(`  Blocked by robots.txt: ${url}`);
      pageData.error = 'Blocked by robots.txt';
      this.pages.push(pageData);
      return;
    }

    if (!passesFilter) {
      pageData.error = 'Excluded by path filter';
      // Don't add to pages array - just skip it entirely
      return;
    }

    try {
      // Fetch desktop version
      const desktopResult = await this.fetchPage(url, 'desktop');
      pageData.desktop = desktopResult;
      pageData.statusCode = desktopResult.statusCode;
      pageData.finalUrl = desktopResult.finalUrl;
      pageData.redirectChain = desktopResult.redirectChain;

      // Extract and queue internal links
      if (desktopResult.html) {
        const links = this.extractLinks(desktopResult.html, desktopResult.finalUrl);

        for (const link of links.internal) {
          this.internalLinks.add(link);
          const normalizedLink = this.normalizeUrl(link);
          // Only queue links that pass path filters and haven't been visited
          if (!this.visited.has(normalizedLink) && this.passesPathFilter(link)) {
            this.queue.push(link);
          }
        }

        for (const link of links.external) {
          this.externalLinks.add(link);
        }
      }

      // Fetch mobile version
      const mobileResult = await this.fetchPage(url, 'mobile');
      pageData.mobile = mobileResult;

    } catch (err) {
      pageData.error = err.message;
      this.log(`  Error crawling ${url}: ${err.message}`);
    }

    this.pages.push(pageData);
  }

  async fetchPage(url, userAgentType) {
    const userAgent = USER_AGENTS[userAgentType];
    const result = {
      userAgent: userAgentType,
      statusCode: null,
      finalUrl: url,
      redirectChain: [],
      html: null,
      title: null,
      metaDescription: null,
      metaRobots: null,
      canonical: null,
      h1: [],
      h2: [],
      openGraph: {},
      jsonLd: [],
      textLength: 0,
      error: null
    };

    try {
      // Follow redirects manually to track chain
      let currentUrl = url;
      let redirectCount = 0;
      const maxRedirects = 10;

      while (redirectCount < maxRedirects) {
        const response = await this.fetch(currentUrl, {
          redirect: 'manual',
          headers: { 'User-Agent': userAgent }
        });

        result.statusCode = response.status;

        if (response.status >= 300 && response.status < 400) {
          const location = response.headers.get('location');
          if (location) {
            const nextUrl = new URL(location, currentUrl).href;
            result.redirectChain.push({
              from: currentUrl,
              to: nextUrl,
              status: response.status
            });
            currentUrl = nextUrl;
            redirectCount++;
            continue;
          }
        }

        result.finalUrl = currentUrl;

        if (response.ok) {
          const contentType = response.headers.get('content-type') || '';

          if (contentType.includes('text/html')) {
            result.html = await response.text();
            this.parseHtml(result);
          }
        }

        break;
      }

    } catch (err) {
      result.error = err.message;
    }

    return result;
  }

  parseHtml(result) {
    const $ = cheerio.load(result.html);

    // Title
    result.title = $('title').first().text().trim() || null;

    // Meta description
    result.metaDescription = $('meta[name="description"]').attr('content')?.trim() || null;

    // Meta robots
    result.metaRobots = $('meta[name="robots"]').attr('content')?.trim() || null;

    // Canonical
    result.canonical = $('link[rel="canonical"]').attr('href')?.trim() || null;

    // Headings
    result.h1 = $('h1').map((_, el) => $(el).text().trim()).get();
    result.h2 = $('h2').map((_, el) => $(el).text().trim()).get();

    // Open Graph
    result.openGraph = {
      title: $('meta[property="og:title"]').attr('content')?.trim() || null,
      description: $('meta[property="og:description"]').attr('content')?.trim() || null,
      image: $('meta[property="og:image"]').attr('content')?.trim() || null,
      url: $('meta[property="og:url"]').attr('content')?.trim() || null,
      type: $('meta[property="og:type"]').attr('content')?.trim() || null
    };

    // JSON-LD structured data
    result.jsonLd = [];
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const json = JSON.parse($(el).html());
        result.jsonLd.push(json);
      } catch (err) {
        // Invalid JSON-LD
      }
    });

    // Text length (approximate content length)
    result.textLength = $('body').text().replace(/\s+/g, ' ').trim().length;
  }

  extractLinks(html, baseUrl) {
    const $ = cheerio.load(html);
    const internal = new Set();
    const external = new Set();

    $('a[href]').each((_, el) => {
      let href = $(el).attr('href');

      if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      try {
        const absoluteUrl = new URL(href, baseUrl).href;
        const normalizedUrl = this.normalizeUrl(absoluteUrl);

        // Remove fragment
        const urlWithoutFragment = normalizedUrl.split('#')[0];

        if (this.isSameDomain(urlWithoutFragment)) {
          internal.add(urlWithoutFragment);
        } else {
          external.add(urlWithoutFragment);
        }
      } catch (err) {
        // Invalid URL
      }
    });

    return {
      internal: Array.from(internal),
      external: Array.from(external)
    };
  }

  normalizeUrl(url) {
    try {
      const parsed = new URL(url);

      // Remove trailing slash for consistency (except for root)
      let pathname = parsed.pathname;
      if (pathname !== '/' && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
      }

      // Remove common tracking parameters
      const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid'];
      for (const param of trackingParams) {
        parsed.searchParams.delete(param);
      }

      // Sort remaining params for consistency
      parsed.searchParams.sort();

      return `${parsed.origin}${pathname}${parsed.search}`;
    } catch (err) {
      return url;
    }
  }

  isSameDomain(url) {
    try {
      const parsed = new URL(url);
      const baseParsed = new URL(this.baseUrl);
      return parsed.hostname === baseParsed.hostname;
    } catch (err) {
      return false;
    }
  }

  /**
   * Check if a URL passes the include/exclude path filters
   * @param {string} url - The URL to check
   * @returns {boolean} - True if URL should be crawled
   */
  passesPathFilter(url) {
    try {
      const pathname = new URL(url).pathname;

      // If excludePaths is set, check if URL matches any excluded path
      if (this.excludePaths.length > 0) {
        for (const excludePath of this.excludePaths) {
          if (pathname.startsWith(excludePath)) {
            this.log(`  Excluded by path filter: ${pathname} (matches ${excludePath})`);
            return false;
          }
        }
      }

      // If includePaths is set, URL must match at least one included path
      if (this.includePaths.length > 0) {
        const matches = this.includePaths.some(includePath => pathname.startsWith(includePath));
        if (!matches) {
          this.log(`  Excluded by include filter: ${pathname}`);
          return false;
        }
      }

      return true;
    } catch (err) {
      return true; // Allow if we can't parse the URL
    }
  }

  async fetch(url, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'User-Agent': BOT_USER_AGENT,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          ...options.headers
        }
      });
      return response;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
