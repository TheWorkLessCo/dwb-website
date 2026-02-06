# SEO Audit Report: Dallas Window Butler

**Target:** http://localhost:3000
**Generated:** January 27, 2026
**Location:** Dallas–Fort Worth, TX

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Pages Crawled | 20 |
| Successful Pages (200) | 18 |
| Error Pages (4xx/5xx) | 2 |
| Blocked by Robots.txt | 0 |
| Robots.txt | Found |
| XML Sitemap | Found (23 URLs) |

### Issue Summary

- **Critical:** 0
- **High:** 2
- **Medium:** 5
- **Low:** 1

---

## Top 10 Priority Issues

### 1. Missing H1 headings 🟠

**Category:** on-page

1 page(s) are missing H1 headings.

**Affected URLs:**
- http://localhost:3000/services/glass-ig-repair

**Recommendation:** Add a single, descriptive H1 heading to each page.

### 2. Pages returning error status codes 🟠

**Category:** crawlability

2 page(s) returned 4xx or 5xx status codes.

**Affected URLs:**
- http://localhost:3000/about (404)
- http://localhost:3000/privacy (404)

**Recommendation:** Fix or remove broken pages. Update internal links pointing to these URLs.

### 3. Title tags too long 🟡

**Category:** on-page

3 page(s) have title tags exceeding 60 characters.

**Affected URLs:**
- http://localhost:3000/mckinney-windows
- http://localhost:3000/north-richardson-windows
- http://localhost:3000/blog

**Recommendation:** Shorten title tags to 60 characters or less to prevent truncation in search results.

### 4. Meta descriptions too long 🟡

**Category:** on-page

11 page(s) have meta descriptions exceeding 160 characters.

**Affected URLs:**
- http://localhost:3000
- http://localhost:3000/services/window-replacement
- http://localhost:3000/services/glass-ig-repair
- http://localhost:3000/services/patio-doors
- http://localhost:3000/services/solar-screens
- ... and 6 more

**Recommendation:** Shorten meta descriptions to 160 characters or less to prevent truncation.

### 5. Missing canonical tags 🟡

**Category:** on-page

3 page(s) are missing canonical tags.

**Affected URLs:**
- http://localhost:3000
- http://localhost:3000/services/glass-ig-repair
- http://localhost:3000/book

**Recommendation:** Add self-referencing canonical tags to prevent duplicate content issues.

### 6. Indexable pages missing from sitemap 🟢

**Category:** crawlability

18 indexable page(s) found during crawl are not in the sitemap.

**Affected URLs:**
- http://localhost:3000
- http://localhost:3000/services/window-replacement
- http://localhost:3000/services/glass-ig-repair
- http://localhost:3000/services/patio-doors
- http://localhost:3000/services/solar-screens
- ... and 13 more

**Recommendation:** Add these pages to your sitemap to ensure they are discovered by search engines.

### 7. Duplicate title tags 🟡

**Category:** on-page

1 title tags are used on multiple pages.

**Affected URLs:**
- http://localhost:3000
- http://localhost:3000/services/glass-ig-repair

**Recommendation:** Create unique title tags for each page to improve click-through rates.

### 8. Duplicate meta descriptions 🟡

**Category:** on-page

1 meta descriptions are used on multiple pages.

**Affected URLs:**
- http://localhost:3000
- http://localhost:3000/services/glass-ig-repair

**Recommendation:** Create unique meta descriptions for each page to improve click-through rates.

---

## Prioritization: Fix Now vs. Fix After UI Freeze

### Fix Now (Pre-Launch / Critical)

These issues should be addressed immediately as they directly impact crawlability and indexing:

- [ ] **Missing H1 headings** (1 affected)
- [ ] **Pages returning error status codes** (2 affected)

### Fix After UI Freeze (Post-Launch Optimization)

These issues can be addressed after launch without significantly impacting SEO:

- [ ] **Title tags too long** (3 affected)
- [ ] **Meta descriptions too long** (11 affected)
- [ ] **Missing canonical tags** (3 affected)
- [ ] **Indexable pages missing from sitemap** (18 affected)
- [ ] **Duplicate title tags** (2 affected)
- [ ] **Duplicate meta descriptions** (2 affected)

---

## Suggested Title & Meta Description Patterns

### Service Pages

**Title Pattern (50-60 chars):**
```
{Service Name} in Dallas–Fort Worth | Dallas Window Butler
```

**Examples:**
- "Window Cleaning in Dallas | Dallas Window Butler"
- "Commercial Window Washing in Fort Worth | Dallas Window Butler"
- "Residential Door Installation in Dallas | Dallas Window Butler"

**Meta Description Pattern (120-155 chars):**
```
Professional {service} services in {city}. {Unique value prop}. Free estimates. Call today!
```

**Examples:**
- "Professional window cleaning services in Dallas-Fort Worth. Crystal-clear results guaranteed. Licensed & insured. Get your free estimate today!"

### Location Pages

**Title Pattern:**
```
Window Cleaning & Door Services in {City}, TX | Dallas Window Butler
```

**Meta Description Pattern:**
```
Dallas Window Butler serves {City} with professional window cleaning, installation, and door services. Trusted by {X}+ local customers. Call for free quote!
```

---

## Structured Data Recommendations

### Currently Implemented

- LocalBusiness: 19 page(s)
- SiteNavigationElement: 18 page(s)
- Organization: 1 page(s)
- FAQPage: 6 page(s)
- Service: 6 page(s)
- WindowInstallation: 5 page(s)
- BreadcrumbList: 5 page(s)
- HowTo: 5 page(s)
- Review: 15 page(s)

### Recommended Additions

The following schema files have been generated in the `schema/` folder:

1. **service-home.json** - Service schema for: Best Window Replacement Company | Dallas Window Butler
1. **service-window-replacement.json** - Service schema for: Window Replacement Services | Dallas Window Butler
1. **service-glass-ig-repair.json** - Service schema for: Best Window Replacement Company | Dallas Window Butler
1. **service-patio-doors.json** - Service schema for: Patio Door Replacement Services | Dallas Window Butler
1. **service-solar-screens.json** - Service schema for: Solar Screen Installation Services | Dallas Window Butler
1. **service-blinds-shades.json** - Service schema for: Blinds & Shades | Dallas Window Butler
1. **service-motorized-awnings.json** - Service schema for: Motorized Awnings | Dallas Window Butler
1. **service-waterproofing-sealing.json** - Service schema for: Waterproofing & Sealing | Dallas Window Butler
1. **service-testimonials.json** - Service schema for: Customer Testimonials | Dallas Window Butler
1. **service-book.json** - Service schema for: Book Your Free Quote - Dallas Window Butler
1. **service-glass-repair.json** - Service schema for: Glass & IG Unit Repair Services | Dallas Window Butler
1. **breadcrumb-template.json** - BreadcrumbList schema template - customize for each page
1. **faq-template.json** - FAQPage schema template - customize with actual FAQs
1. **website.json** - WebSite schema for sitelinks search box eligibility

**Implementation Priority:**

1. `local-business.json` - Add to homepage (highest impact for local SEO)
2. Service schemas - Add to respective service pages
3. `faq-template.json` - Add to FAQ sections on service pages
4. `breadcrumb-template.json` - Add to all pages with breadcrumb navigation

---

## Next Actions Checklist

### Immediate (This Week)

- [ ] Address 2 high-priority issue(s)

### Short-term (This Month)

- [ ] Review and update all page titles to follow recommended pattern
- [ ] Write unique meta descriptions for all service pages
- [ ] Implement Service schema on all service pages
- [ ] Add FAQ schema to pages with Q&A content
- [ ] Set up Google Search Console and Bing Webmaster Tools
- [ ] Submit sitemap to search engines

### Ongoing

- [ ] Monitor crawl errors in Search Console weekly
- [ ] Track keyword rankings for target service + location terms
- [ ] Build local citations (Yelp, Google Business Profile, etc.)
- [ ] Collect and respond to customer reviews
- [ ] Re-run this audit monthly to track progress

---

## Technical Details

### Crawl Statistics

- Internal URLs discovered: 27
- External links found: 4
- Pages analyzed: 20

### Robots.txt

```
# Robots.txt for Dallas Window Butler
# https://dallaswindowbutler.com

User-agent: *
Allow: /

# Disallow offer pages (landing pages)
Disallow: /offer/

# Disallow API routes
Disallow: /api/

# Allow all service area pages for local SEO
Allow: /rockwall-windows
Allow: /mckinney-windows
Allow: /allen-windows
Allow: /plano-windows
Allow: /north-richardson-windows

# Sitemap location
Sitemap: https://dallaswindowbutler.com/sitemap.xml

```

### Sitemap

- Location: https://dallaswindowbutler.com/sitemap.xml
- URLs in sitemap: 23

---

*Report generated by SEO Snapshot CLI Tool*