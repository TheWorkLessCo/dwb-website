"use client"

import { useEffect } from "react"
import { auditAndFixUrl, auditPhoneLink } from "@/lib/link-audit"

// Custom hook for components to audit their links
export function useLinkAudit(componentName: string) {
  const auditLink = (url: string) => auditAndFixUrl(url, componentName)
  const auditPhone = (phone: string) => auditPhoneLink(phone, componentName)

  // Auto-audit all links in component on mount
  useEffect(() => {
    const auditComponentLinks = () => {
      const component = document.querySelector(`[data-component="${componentName}"]`)
      if (!component) return

      const links = component.querySelectorAll("a[href]")
      links.forEach((link) => {
        const href = (link as HTMLAnchorElement).href
        const isPhone = href.startsWith("tel:")
        const auditedHref = isPhone ? auditPhone(href) : auditLink(href)

        if (href !== auditedHref) {
          ;(link as HTMLAnchorElement).href = auditedHref
        }
      })
    }

    // Run after component mounts
    const timer = setTimeout(auditComponentLinks, 100)
    return () => clearTimeout(timer)
  }, [componentName]) // Removed auditLink and auditPhone from dependencies

  return { auditLink, auditPhone }
}
