#!/usr/bin/env node

/**
 * SEO Snapshot - Technical SEO Audit CLI Tool
 * Audits websites for technical + local SEO basics
 */

import { parseArgs } from 'node:util';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Crawler } from './lib/crawler.mjs';
import { SEOAnalyzer } from './lib/analyzers.mjs';
import { SchemaGenerator } from './lib/schema-generator.mjs';
import { ReportGenerator } from './lib/reporter.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// CLI argument parsing
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    maxPages: {
      type: 'string',
      short: 'm',
      default: '100'
    },
    timeout: {
      type: 'string',
      short: 't',
      default: '10000'
    },
    output: {
      type: 'string',
      short: 'o',
      default: '.'
    },
    businessName: {
      type: 'string',
      short: 'b',
      default: 'Dallas Window Butler'
    },
    businessType: {
      type: 'string',
      default: 'HomeAndConstructionBusiness'
    },
    location: {
      type: 'string',
      short: 'l',
      default: 'Dallas–Fort Worth, TX'
    },
    help: {
      type: 'boolean',
      short: 'h',
      default: false
    },
    verbose: {
      type: 'boolean',
      short: 'v',
      default: false
    },
    includePaths: {
      type: 'string',
      short: 'i',
      default: ''
    },
    excludePaths: {
      type: 'string',
      short: 'e',
      default: ''
    }
  }
});

function printHelp() {
  console.log(`
SEO Snapshot - Technical SEO Audit CLI Tool

Usage:
  node seo-snapshot.mjs <url> [options]

Arguments:
  url                    Base URL to audit (required)

Options:
  -m, --maxPages <n>     Maximum pages to crawl (default: 100)
  -t, --timeout <ms>     Request timeout in milliseconds (default: 10000)
  -o, --output <dir>     Output directory for reports (default: current directory)
  -b, --businessName <n> Business name for schema generation (default: Dallas Window Butler)
  --businessType <type>  Schema.org business type (default: HomeAndConstructionBusiness)
  -l, --location <loc>   Primary business location (default: Dallas–Fort Worth, TX)
  -i, --includePaths <p> Comma-separated path prefixes to include (e.g., /services,/blog)
  -e, --excludePaths <p> Comma-separated path prefixes to exclude (e.g., /api,/admin)
  -v, --verbose          Enable verbose logging
  -h, --help             Show this help message

Examples:
  node seo-snapshot.mjs https://example.com
  node seo-snapshot.mjs https://example.com --maxPages 50 --output ./reports
  node seo-snapshot.mjs https://example.com -m 200 -v
`);
}

async function main() {
  if (values.help) {
    printHelp();
    process.exit(0);
  }

  const baseUrl = positionals[0];

  if (!baseUrl) {
    console.error('Error: Base URL is required\n');
    printHelp();
    process.exit(1);
  }

  // Validate URL
  let parsedUrl;
  try {
    parsedUrl = new URL(baseUrl);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error('URL must use http or https protocol');
    }
  } catch (err) {
    console.error(`Error: Invalid URL "${baseUrl}" - ${err.message}`);
    process.exit(1);
  }

  const config = {
    baseUrl: parsedUrl.origin,
    startUrl: baseUrl,
    maxPages: parseInt(values.maxPages, 10),
    timeout: parseInt(values.timeout, 10),
    outputDir: values.output,
    businessName: values.businessName,
    businessType: values.businessType,
    location: values.location,
    verbose: values.verbose,
    includePaths: values.includePaths ? values.includePaths.split(',').map(p => p.trim()) : [],
    excludePaths: values.excludePaths ? values.excludePaths.split(',').map(p => p.trim()) : []
  };

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    SEO SNAPSHOT AUDIT                        ║
╚══════════════════════════════════════════════════════════════╝

Target:     ${config.baseUrl}
Max Pages:  ${config.maxPages}
Output:     ${config.outputDir}
Business:   ${config.businessName}
Location:   ${config.location}
`);

  try {
    // Phase 1: Crawl the website
    console.log('\n[1/5] Crawling website...');
    const crawler = new Crawler(config);
    const crawlData = await crawler.crawl();

    if (config.verbose) {
      console.log(`  - Crawled ${crawlData.pages.length} pages`);
      console.log(`  - Found ${crawlData.internalLinks.size} unique internal URLs`);
    }

    // Phase 2: Analyze SEO factors
    console.log('\n[2/5] Analyzing SEO factors...');
    const analyzer = new SEOAnalyzer(config);
    const analysis = analyzer.analyze(crawlData);

    if (config.verbose) {
      console.log(`  - Found ${analysis.issues.length} issues`);
    }

    // Phase 3: Generate missing schemas
    console.log('\n[3/5] Generating structured data recommendations...');
    const schemaGenerator = new SchemaGenerator(config);
    const schemas = schemaGenerator.generate(crawlData, analysis);

    if (config.verbose) {
      console.log(`  - Generated ${schemas.files.length} schema files`);
    }

    // Phase 4: Generate reports
    console.log('\n[4/5] Generating reports...');
    const reporter = new ReportGenerator(config);
    const reports = reporter.generate(crawlData, analysis, schemas);

    // Phase 5: Write output files
    console.log('\n[5/5] Writing output files...');
    await writeOutputFiles(config, reports, schemas);

    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    AUDIT COMPLETE                            ║
╚══════════════════════════════════════════════════════════════╝

Files generated:
  - ${join(config.outputDir, 'report.json')}
  - ${join(config.outputDir, 'report.md')}
  - ${join(config.outputDir, 'schema/')} (${schemas.files.length} files)

Summary:
  - Pages crawled: ${crawlData.pages.length}
  - Critical issues: ${analysis.issues.filter(i => i.severity === 'critical').length}
  - High issues: ${analysis.issues.filter(i => i.severity === 'high').length}
  - Medium issues: ${analysis.issues.filter(i => i.severity === 'medium').length}
  - Low issues: ${analysis.issues.filter(i => i.severity === 'low').length}
`);

  } catch (err) {
    console.error(`\nError during audit: ${err.message}`);
    if (config.verbose) {
      console.error(err.stack);
    }
    process.exit(1);
  }
}

async function writeOutputFiles(config, reports, schemas) {
  const outputDir = config.outputDir;
  const schemaDir = join(outputDir, 'schema');

  // Ensure output directories exist
  await mkdir(outputDir, { recursive: true });
  await mkdir(schemaDir, { recursive: true });

  // Write report.json
  await writeFile(
    join(outputDir, 'report.json'),
    JSON.stringify(reports.json, null, 2),
    'utf-8'
  );

  // Write report.md
  await writeFile(
    join(outputDir, 'report.md'),
    reports.markdown,
    'utf-8'
  );

  // Write schema files
  for (const schema of schemas.files) {
    await writeFile(
      join(schemaDir, schema.filename),
      JSON.stringify(schema.content, null, 2),
      'utf-8'
    );
  }

  // Write sitemap if generated
  if (reports.generatedSitemap) {
    await writeFile(
      join(outputDir, 'sitemap.xml'),
      reports.generatedSitemap,
      'utf-8'
    );
    console.log(`  - Generated sitemap.xml (${reports.sitemapUrlCount} URLs)`);
  }

  // Write redirect-map.csv for migration helper
  if (reports.redirectMap && reports.redirectMap.count > 0) {
    await writeFile(
      join(outputDir, 'redirect-map.csv'),
      reports.redirectMap.content,
      'utf-8'
    );
    console.log(`  - Generated redirect-map.csv (${reports.redirectMap.count} redirects)`);
  }
}

main();
