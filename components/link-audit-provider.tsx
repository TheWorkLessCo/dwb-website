"use client"

import type React from "react"

import { useEffect } from "react"
import { auditComponentLinks } from "@/lib/link-audit"

// Global link audit component that runs on page load
export function LinkAuditProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Run comprehensive link audit on page load
    const auditPageLinks = () => {
      const allLinks = document.querySelectorAll("a[href]")
      const linkData = Array.from(allLinks).map((link) => ({
        href: (link as HTMLAnchorElement).href,
        type: (link as HTMLAnchorElement).href.startsWith("tel:") ? ("phone" as const) : ("link" as const),
      }))

      if (linkData.length > 0) {
        auditComponentLinks("Page Load Audit", linkData)
      }
    }

    // Run audit after DOM is fully loaded
    if (document.readyState === "complete") {
      auditPageLinks()
    } else {
      window.addEventListener("load", auditPageLinks)
      return () => window.removeEventListener("load", auditPageLinks)
    }
  }, [])

  return <>{children}</>
}
