"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { cityLinks } from "@/lib/cities"
import { CTA_CONFIG } from "@/lib/cta"
import { useFocusTrap } from "@/hooks/use-focus-trap"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileServiceAreasOpen, setIsMobileServiceAreasOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout>()
  const serviceAreasTimeoutRef = useRef<NodeJS.Timeout>()
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const locationsDropdownRef = useRef<HTMLDivElement>(null)

  // Focus trap for mobile menu accessibility
  const mobileMenuRef = useFocusTrap({
    isActive: isMenuOpen,
    onEscape: () => setIsMenuOpen(false),
    restoreFocus: true,
  })

  // Close all dropdowns when route changes
  useEffect(() => {
    setIsServicesOpen(false)
    setIsServiceAreasOpen(false)
    setIsMenuOpen(false)
    setIsMobileServicesOpen(false)
    setIsMobileServiceAreasOpen(false)
  }, [pathname])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
        setIsServiceAreasOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
      if (serviceAreasTimeoutRef.current) clearTimeout(serviceAreasTimeoutRef.current)
    }
  }, [])

  const servicesItems = [
    { name: "Window Replacement", href: "/services/window-replacement" },
    { name: "Glass / IG Unit Repair", href: "/services/glass-ig-repair" },
    { name: "Patio Doors", href: "/services/patio-doors" },
    { name: "Solar Screens", href: "/services/solar-screens" },
    { name: "Blinds & Shades", href: "/services/blinds-shades" },
    { name: "Motorized Patio Shades", href: "/services/motorized-patio-shades", isNew: true },
    { name: "Motorized Awnings", href: "/services/motorized-awnings", isNew: true },
    { name: "Waterproofing & Sealing", href: "/services/waterproofing-sealing" },
  ]

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  const handleServiceAreasMouseEnter = () => {
    if (serviceAreasTimeoutRef.current) {
      clearTimeout(serviceAreasTimeoutRef.current)
    }
    setIsServiceAreasOpen(true)
  }

  const handleServiceAreasMouseLeave = () => {
    serviceAreasTimeoutRef.current = setTimeout(() => {
      setIsServiceAreasOpen(false)
    }, 150)
  }

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen)
    setIsServiceAreasOpen(false)
  }

  const handleServiceAreasClick = () => {
    setIsServiceAreasOpen(!isServiceAreasOpen)
    setIsServicesOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent, setter: (value: boolean) => void) => {
    if (e.key === "Escape") {
      setter(false)
    }
  }

  const { phoneDisplay, phoneHref, quoteHref, secondaryLabel } = CTA_CONFIG

  return (
    <>
      <style jsx>{`
        /* Full-screen mobile menu overlay styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          animation: fadeIn 0.2s ease-out;
        }
        
        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 85%;
          max-width: 400px;
          background: white;
          z-index: 9999;
          overflow-y: auto;
          animation: slideIn 0.3s ease-out;
          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .mobile-menu-header {
          display: flex;
          justify-content: flex-end;
          padding: 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .mobile-menu-content {
          padding: 24px 20px;
        }
        
        .mobile-menu-footer {
          padding: 20px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }
      `}</style>
      <header
        className="primary-header bg-background shadow-sm border-b border-border relative z-40"
        role="navigation"
        aria-label="Site navigation"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo - always visible */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/dwb-primary-logo.png"
                alt="Dallas Window Butler"
                width={200}
                height={85}
                className="block"
              />
            </Link>

            <nav
              className="header-desktop-nav items-center gap-8 nav-menu"
              style={{ alignItems: "center", gap: "12px" }}
            >
              <Link
                href="/"
                className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift"
              >
                Home
              </Link>

              <div
                ref={servicesDropdownRef}
                className="relative group/nav"
                data-dropdown
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  id="nav-services"
                  className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                  aria-controls="menu-services"
                  onClick={handleServicesClick}
                  onKeyDown={(e) => handleKeyDown(e, setIsServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform hidden text-[var(--color-brand-navy)] ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id="menu-services"
                  role="menu"
                  aria-labelledby="nav-services"
                  className={`absolute left-0 top-full z-[200] w-72 max-w-[18rem] rounded-xl border border-border bg-background shadow-lg transform transition-all duration-150 ease-out ${isServicesOpen ? "visible opacity-100 pointer-events-auto translate-y-0" : "invisible opacity-0 pointer-events-none translate-y-1.5"}`}
                >
                  <div className="absolute -top-[10px] left-0 right-0 h-[10px]"></div>

                  <div className="p-2 space-y-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="block w-full rounded-lg px-3 py-3 text-sm leading-snug text-foreground hover:bg-[#049bf2] hover:text-white focus:bg-[#049bf2] focus:text-white focus:outline-none transition-all duration-150 min-h-[44px] flex items-center justify-between whitespace-nowrap font-semibold"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                        {item.isNew && (
                          <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded uppercase tracking-wide">
                            NEW
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div
                ref={locationsDropdownRef}
                className="relative group/nav"
                data-dropdown
                onMouseEnter={handleServiceAreasMouseEnter}
                onMouseLeave={handleServiceAreasMouseLeave}
              >
                <button
                  id="nav-areas"
                  className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift"
                  aria-haspopup="true"
                  aria-expanded={isServiceAreasOpen}
                  aria-controls="menu-areas"
                  onClick={handleServiceAreasClick}
                  onKeyDown={(e) => handleKeyDown(e, setIsServiceAreasOpen)}
                >
                  Locations
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform hidden text-[var(--color-brand-navy)] ${isServiceAreasOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id="menu-areas"
                  role="menu"
                  aria-labelledby="nav-areas"
                  className={`absolute left-0 top-full z-[200] w-72 max-w-[18rem] rounded-xl border border-border bg-background shadow-lg transform transition-all duration-150 ease-out ${isServiceAreasOpen ? "visible opacity-100 pointer-events-auto translate-y-0" : "invisible opacity-0 pointer-events-none translate-y-1.5"}`}
                >
                  <div className="absolute -top-[10px] left-0 right-0 h-[10px]"></div>

                  <div className="p-2 space-y-1">
                    <div className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-wide text-muted-foreground">Cities</div>
                    {cityLinks.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        role="menuitem"
                        className="block w-full rounded-lg px-3 py-3 text-sm leading-snug text-foreground hover:bg-[#049bf2] hover:text-white focus:bg-[#049bf2] focus:text-white focus:outline-none transition-all duration-150 min-h-[44px] flex items-center whitespace-nowrap font-semibold"
                        onClick={() => setIsServiceAreasOpen(false)}
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/testimonials"
                className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift"
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift whitespace-nowrap"
              >
                Our Team
              </Link>
            </nav>

            <div className="header-desktop-nav header-cta-container items-center gap-4 ml-auto">
              {/* Phone Button with Icon */}
              <a
                href={phoneHref}
                className="flex items-center gap-3 border-2 border-[#049bf2] rounded-2xl px-5 py-2.5 hover:bg-[#049bf2] hover:text-white transition-all duration-300 group"
                aria-label="Call Dallas Window Butler for a free estimate"
              >
                <div className="bg-[#049bf2] p-3 rounded-xl group-hover:bg-white transition-colors flex items-center justify-center" style={{ minWidth: '44px', minHeight: '44px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" style={{ fill: '#ffffff' }} className="group-hover:[&>path]:fill-[#049bf2]">
                    <path fill="#ffffff" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase font-bold opacity-80 leading-none mb-1 text-[#00152e] group-hover:text-white">
                    Free Estimate
                  </span>
                  <span className="text-base font-black tracking-tight leading-none whitespace-nowrap text-[#00152e] group-hover:text-white">
                    {phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Check Pricing Button */}
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check pricing for window replacement"
              >
                <Button className="bg-[#049bf2] hover:bg-[#0389d5] text-white px-6 py-5 h-auto text-base font-bold rounded-2xl whitespace-nowrap shadow-none transition-all duration-300">
                  Check Pricing
                </Button>
              </a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="header-hamburger transition-colors duration-150 ease-out"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[var(--color-brand-navy)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--color-brand-navy)]" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div ref={mobileMenuRef} className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="mobile-menu-header">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-[var(--color-brand-navy)]" />
              </Button>
            </div>

            <nav className="mobile-menu-content">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="block py-3 px-4 text-lg font-semibold text-[var(--color-brand-navy)] hover:bg-muted rounded-lg transition-all duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Services accordion */}
                <div>
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 text-lg font-semibold text-[var(--color-brand-navy)] hover:bg-muted rounded-lg transition-all duration-150"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    aria-expanded={isMobileServicesOpen}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between py-3 px-4 text-base text-foreground hover:bg-muted rounded-lg transition-all duration-150"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                          {item.isNew && (
                            <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded uppercase tracking-wide">
                              NEW
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Locations accordion */}
                <div>
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 text-lg font-semibold text-[var(--color-brand-navy)] hover:bg-muted rounded-lg transition-all duration-150"
                    onClick={() => setIsMobileServiceAreasOpen(!isMobileServiceAreasOpen)}
                    aria-expanded={isMobileServiceAreasOpen}
                  >
                    Locations
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isMobileServiceAreasOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isMobileServiceAreasOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {cityLinks.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          className="block py-3 px-4 text-base text-foreground hover:bg-muted rounded-lg transition-all duration-150"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/testimonials"
                  className="block py-3 px-4 text-lg font-semibold text-[var(--color-brand-navy)] hover:bg-muted rounded-lg transition-all duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>

                <Link
                  href="/blog"
                  className="block py-3 px-4 text-lg font-semibold text-[var(--color-brand-navy)] hover:bg-muted rounded-lg transition-all duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/about"
                  className="block py-3 px-4 text-lg font-semibold text-[var(--color-brand-navy)] hover:bg-muted rounded-lg transition-all duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
              </div>
            </nav>

            {/* Mobile menu footer with CTA and phone */}
            <div className="mobile-menu-footer">
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <Button className="w-full bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white py-3 text-base font-semibold transition-all duration-150 ease-out">
                  {secondaryLabel}
                </Button>
              </a>

              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 text-base text-[var(--color-brand-navy)] font-medium hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4">
                  <path fill="#00152e" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
