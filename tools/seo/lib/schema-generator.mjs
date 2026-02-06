/**
 * Schema Generator Module
 * Generates JSON-LD structured data recommendations
 */

export class SchemaGenerator {
  constructor(config) {
    this.config = config;
    this.businessName = config.businessName;
    this.businessType = config.businessType;
    this.location = config.location;
    this.baseUrl = config.baseUrl;
  }

  generate(crawlData, analysis) {
    const files = [];
    const recommendations = [];

    // Check if LocalBusiness schema is needed
    const hasLocalBusiness = this.hasLocalBusinessSchema(crawlData);

    if (!hasLocalBusiness) {
      const localBusinessSchema = this.generateLocalBusinessSchema();
      files.push({
        filename: 'local-business.json',
        content: localBusinessSchema,
        description: 'LocalBusiness schema for homepage and site-wide use'
      });
      recommendations.push({
        type: 'LocalBusiness',
        priority: 'high',
        description: 'Add this schema to your homepage to improve local search visibility.',
        placement: 'Homepage (<head> section or before </body>)'
      });
    }

    // Generate Service schemas for service pages
    const servicePages = this.identifyServicePages(crawlData);

    for (const servicePage of servicePages) {
      if (!this.pageHasServiceSchema(servicePage, crawlData)) {
        const serviceSchema = this.generateServiceSchema(servicePage);
        const filename = this.sanitizeFilename(`service-${servicePage.slug}.json`);
        files.push({
          filename,
          content: serviceSchema,
          description: `Service schema for: ${servicePage.title || servicePage.url}`
        });
        recommendations.push({
          type: 'Service',
          priority: 'medium',
          description: `Add Service schema to: ${servicePage.url}`,
          placement: servicePage.url
        });
      }
    }

    // Generate BreadcrumbList schema template
    const breadcrumbSchema = this.generateBreadcrumbSchema();
    files.push({
      filename: 'breadcrumb-template.json',
      content: breadcrumbSchema,
      description: 'BreadcrumbList schema template - customize for each page'
    });
    recommendations.push({
      type: 'BreadcrumbList',
      priority: 'low',
      description: 'Add breadcrumb schema to improve search result appearance.',
      placement: 'All pages with breadcrumb navigation'
    });

    // Generate FAQPage schema template
    const faqSchema = this.generateFAQSchema();
    files.push({
      filename: 'faq-template.json',
      content: faqSchema,
      description: 'FAQPage schema template - customize with actual FAQs'
    });
    recommendations.push({
      type: 'FAQPage',
      priority: 'medium',
      description: 'Add FAQ schema to pages with frequently asked questions.',
      placement: 'FAQ pages, service pages with Q&A sections'
    });

    // Generate WebSite schema for sitelinks search box
    const websiteSchema = this.generateWebSiteSchema();
    files.push({
      filename: 'website.json',
      content: websiteSchema,
      description: 'WebSite schema for sitelinks search box eligibility'
    });

    return {
      files,
      recommendations,
      summary: {
        totalGenerated: files.length,
        types: files.map(f => f.filename.replace('.json', ''))
      }
    };
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
                lowerType.includes('homeandconstructionbusiness') ||
                lowerType.includes('professionalservice') ||
                lowerType === 'organization') {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  pageHasServiceSchema(servicePage, crawlData) {
    const page = crawlData.pages.find(p => p.finalUrl === servicePage.url || p.url === servicePage.url);
    if (!page?.desktop?.jsonLd) return false;

    for (const schema of page.desktop.jsonLd) {
      const type = schema['@type'];
      if (type) {
        const types = Array.isArray(type) ? type : [type];
        if (types.some(t => t.toLowerCase() === 'service')) {
          return true;
        }
      }
    }
    return false;
  }

  identifyServicePages(crawlData) {
    const servicePages = [];
    const serviceKeywords = [
      'service', 'window', 'cleaning', 'washing', 'pressure',
      'gutter', 'door', 'screen', 'installation', 'repair',
      'residential', 'commercial'
    ];

    for (const page of crawlData.pages) {
      if (!page.desktop || page.desktop.statusCode !== 200) continue;

      const url = page.finalUrl.toLowerCase();
      const title = page.desktop.title?.toLowerCase() || '';
      const h1 = page.desktop.h1?.[0]?.toLowerCase() || '';
      const path = new URL(page.finalUrl).pathname.toLowerCase();

      // Check if this looks like a service page
      const isServicePage = serviceKeywords.some(keyword =>
        path.includes(keyword) || title.includes(keyword) || h1.includes(keyword)
      ) && !path.includes('blog') && !path.includes('news') && !path.includes('contact');

      if (isServicePage) {
        servicePages.push({
          url: page.finalUrl,
          title: page.desktop.title,
          h1: page.desktop.h1?.[0],
          slug: this.extractSlug(page.finalUrl)
        });
      }
    }

    return servicePages;
  }

  extractSlug(url) {
    try {
      const pathname = new URL(url).pathname;
      const segments = pathname.split('/').filter(Boolean);
      return segments[segments.length - 1] || 'home';
    } catch {
      return 'page';
    }
  }

  sanitizeFilename(filename) {
    return filename
      .toLowerCase()
      .replace(/[^a-z0-9.-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  generateLocalBusinessSchema() {
    return {
      "@context": "https://schema.org",
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": `${this.baseUrl}/#organization`,
      "name": this.businessName,
      "url": this.baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${this.baseUrl}/logo.png`,
        "@id": `${this.baseUrl}/#logo`,
        "caption": this.businessName
      },
      "image": [
        `${this.baseUrl}/images/hero.jpg`,
        `${this.baseUrl}/images/team.jpg`
      ],
      "description": `${this.businessName} provides professional window cleaning, window installation, and door services in the ${this.location} area.`,
      "telephone": "+1-XXX-XXX-XXXX",
      "email": "info@example.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "postalCode": "75201",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.7767",
        "longitude": "-96.7970"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dallas",
          "@id": "https://en.wikipedia.org/wiki/Dallas"
        },
        {
          "@type": "City",
          "name": "Fort Worth",
          "@id": "https://en.wikipedia.org/wiki/Fort_Worth,_Texas"
        },
        {
          "@type": "State",
          "name": "Texas",
          "sameAs": "https://en.wikipedia.org/wiki/Texas"
        }
      ],
      "serviceType": [
        "Window Cleaning",
        "Window Installation",
        "Window Repair",
        "Door Installation",
        "Pressure Washing",
        "Gutter Cleaning"
      ],
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Check",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/PLACEHOLDER",
        "https://www.instagram.com/PLACEHOLDER",
        "https://www.linkedin.com/company/PLACEHOLDER",
        "https://www.yelp.com/biz/PLACEHOLDER",
        "https://g.page/PLACEHOLDER"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Window and Door Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Window Cleaning Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Window Cleaning"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Window Cleaning"
                }
              }
            ]
          }
        ]
      }
    };
  }

  generateServiceSchema(servicePage) {
    const serviceName = servicePage.h1 || servicePage.title || 'Professional Service';

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${servicePage.url}/#service`,
      "name": serviceName,
      "url": servicePage.url,
      "description": `Professional ${serviceName.toLowerCase()} services provided by ${this.businessName} in the ${this.location} area.`,
      "provider": {
        "@type": "LocalBusiness",
        "@id": `${this.baseUrl}/#organization`,
        "name": this.businessName,
        "url": this.baseUrl
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "32.7767",
          "longitude": "-96.7970"
        },
        "geoRadius": "50 mi"
      },
      "serviceType": serviceName,
      "category": "Home Services",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "Contact for quote"
        }
      },
      "termsOfService": `${this.baseUrl}/terms`,
      "serviceOutput": {
        "@type": "Thing",
        "name": "Clean, professional results"
      }
    };
  }

  generateBreadcrumbSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": this.baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${this.baseUrl}/services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "{{PAGE_NAME}}",
          "item": "{{PAGE_URL}}"
        }
      ]
    };
  }

  generateFAQSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should I have my windows professionally cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For residential properties, we recommend professional window cleaning 2-4 times per year. Commercial properties may require more frequent cleaning depending on location and foot traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free estimates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide free, no-obligation estimates for all our window cleaning and door services. Contact us to schedule your estimate."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `We proudly serve the entire ${this.location} metropolitan area, including Dallas, Fort Worth, Arlington, Plano, Irving, and surrounding communities.`
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed and insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage for your peace of mind."
          }
        }
      ]
    };
  }

  generateWebSiteSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${this.baseUrl}/#website`,
      "url": this.baseUrl,
      "name": this.businessName,
      "description": `${this.businessName} - Professional window cleaning and door services in ${this.location}`,
      "publisher": {
        "@type": "Organization",
        "@id": `${this.baseUrl}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${this.baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    };
  }
}
