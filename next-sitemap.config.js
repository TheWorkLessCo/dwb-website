/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dallaswindowbutler.com",
  generateRobotsText: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/offer/*"], // Exclude offer pages from sitemap as they're landing pages
  additionalPaths: async (config) => [
    // Main pages
    await config.transform(config, "/", {
      priority: 1.0,
      changefreq: "weekly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/services", {
      priority: 0.9,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/reviews", {
      priority: 0.8,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/about", {
      priority: 0.8,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/contact", {
      priority: 0.8,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/book", {
      priority: 0.9,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),

    // Service area pages - high priority for local SEO
    await config.transform(config, "/rockwall-windows", {
      priority: 0.9,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/mckinney-windows", {
      priority: 0.9,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/allen-windows", {
      priority: 0.9,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/plano-windows", {
      priority: 0.9,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
    await config.transform(config, "/north-richardson-windows", {
      priority: 0.9,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),

    // Service pages
    await config.transform(config, "/services/rockwall", {
      priority: 0.8,
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    }),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/offer/", "/api/"],
      },
    ],
    additionalSitemaps: ["https://dallaswindowbutler.com/sitemap.xml"],
  },
}
