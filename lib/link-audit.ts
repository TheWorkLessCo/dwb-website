// Link Audit System - Automatically fixes non-production domains and enforces tel links
// Logs replaced URLs for verification during development

interface LinkAuditConfig {
  productionDomain: string
  phoneNumber: string
  enableLogging: boolean
}

const config: LinkAuditConfig = {
  productionDomain: "https://dallaswindowbutler.com",
  phoneNumber: "+14696408551",
  enableLogging: false, // Disabled for production
}

// Patterns to detect and replace
const NON_PRODUCTION_PATTERNS = [
  /https?:\/\/[^/]*hostinger[^/]*/gi,
  /https?:\/\/[^/]*preview[^/]*/gi,
  /https?:\/\/[^/]*staging[^/]*/gi,
  /https?:\/\/[^/]*dev[^/]*/gi,
  /https?:\/\/[^/]*test[^/]*/gi,
]

const PHONE_PATTERNS = [
  /tel:214-399-9592/g, // Incorrect phone number
  /214-399-9592/g, // Plain text incorrect number
]

export function auditAndFixUrl(url: string, context?: string): string {
  const originalUrl = url
  let fixedUrl = url

  // Fix non-production domains
  for (const pattern of NON_PRODUCTION_PATTERNS) {
    if (pattern.test(fixedUrl)) {
      fixedUrl = fixedUrl.replace(pattern, config.productionDomain)
      if (config.enableLogging) {
        console.log(`[Link Audit] ${context || "Unknown"}: Replaced non-production domain`)
        console.log(`  Original: ${originalUrl}`)
        console.log(`  Fixed: ${fixedUrl}`)
      }
    }
  }

  // Fix phone numbers
  for (const pattern of PHONE_PATTERNS) {
    if (pattern.test(fixedUrl)) {
      if (fixedUrl.includes("tel:")) {
        fixedUrl = fixedUrl.replace(pattern, `tel:${config.phoneNumber}`)
      } else {
        fixedUrl = fixedUrl.replace(pattern, config.phoneNumber.replace("+1", ""))
      }
      if (config.enableLogging) {
        console.log(`[Link Audit] ${context || "Unknown"}: Fixed phone number`)
        console.log(`  Original: ${originalUrl}`)
        console.log(`  Fixed: ${fixedUrl}`)
      }
    }
  }

  return fixedUrl
}

export function auditPhoneLink(phoneNumber: string, context?: string): string {
  const originalPhone = phoneNumber
  let fixedPhone = phoneNumber

  // Ensure proper tel: format
  if (!fixedPhone.startsWith("tel:")) {
    fixedPhone = `tel:${fixedPhone}`
  }

  // Fix incorrect phone numbers
  if (fixedPhone.includes("214-399-9592")) {
    fixedPhone = `tel:${config.phoneNumber}`
    if (config.enableLogging) {
      console.log(`[Link Audit] ${context || "Unknown"}: Fixed phone number format`)
      console.log(`  Original: ${originalPhone}`)
      console.log(`  Fixed: ${fixedPhone}`)
    }
  }

  // Ensure proper format with +1
  if (fixedPhone === "tel:469-640-8551") {
    fixedPhone = `tel:${config.phoneNumber}`
  }

  return fixedPhone
}

export function validateDomain(url: string): boolean {
  try {
    const urlObj = new URL(url)
    const hostname = urlObj.hostname.toLowerCase()

    // Allow production domain and common third-party services
    const allowedDomains = [
      "dallaswindowbutler.com",
      "go.dallaswindowbutler.com",
      "maps.app.goo.gl",
      "www.facebook.com",
      "www.instagram.com",
      "maps.google.com",
    ]

    return allowedDomains.some((domain) => hostname.includes(domain))
  } catch {
    return false
  }
}

// Utility to scan and audit all links in a component
export function auditComponentLinks(componentName: string, links: Array<{ href: string; type: "link" | "phone" }>) {
  const auditResults = links.map((link) => {
    if (link.type === "phone") {
      return {
        original: link.href,
        fixed: auditPhoneLink(link.href, `${componentName} phone link`),
        changed: link.href !== auditPhoneLink(link.href, `${componentName} phone link`),
      }
    } else {
      return {
        original: link.href,
        fixed: auditAndFixUrl(link.href, `${componentName} link`),
        changed: link.href !== auditAndFixUrl(link.href, `${componentName} link`),
      }
    }
  })

  if (config.enableLogging) {
    const changedLinks = auditResults.filter((result) => result.changed)
    if (changedLinks.length > 0) {
      console.log(`[Link Audit] Component: ${componentName} - ${changedLinks.length} links fixed`)
    }
  }

  return auditResults
}
