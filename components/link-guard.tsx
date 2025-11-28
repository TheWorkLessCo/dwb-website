"use client"

import type React from "react"

import { type ReactElement, cloneElement } from "react"
import { auditAndFixUrl, auditPhoneLink } from "@/lib/link-audit"

interface LinkGuardProps {
  children: ReactElement
  context?: string
}

// Component wrapper that automatically audits and fixes link hrefs
export function LinkGuard({ children, context = "LinkGuard" }: LinkGuardProps) {
  if (!children || children.type !== "a") {
    return children
  }

  const originalHref = children.props.href || ""
  const isPhone = originalHref.startsWith("tel:") || originalHref.includes("tel:")

  const auditedHref = isPhone ? auditPhoneLink(originalHref, context) : auditAndFixUrl(originalHref, context)

  // Only clone if href changed
  if (originalHref === auditedHref) {
    return children
  }

  return cloneElement(children, {
    ...children.props,
    href: auditedHref,
  })
}

// Higher-order component for automatic link auditing
export function withLinkAudit<P extends object>(Component: React.ComponentType<P>, componentName: string) {
  return function LinkAuditedComponent(props: P) {
    return (
      <div data-component={componentName}>
        <Component {...props} />
      </div>
    )
  }
}
