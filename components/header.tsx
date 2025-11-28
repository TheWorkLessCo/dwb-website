"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileServiceAreasOpen, setIsMobileServiceAreasOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout>()
  const serviceAreasTimeoutRef = useRef<NodeJS.Timeout>()

  const servicesItems = [
    { name: "Window Replacement", href: "/services/window-replacement" },
    { name: "Glass / IG Unit Repair", href: "/services/glass-ig-repair" },
    { name: "Patio Doors", href: "/services/patio-doors" },
    { name: "Solar Screens", href: "/services/solar-screens" },
    { name: "Blinds & Shades", href: "/services/blinds-shades" },
    { name: "Motorized Patio Shades", href: "/services/motorized-patio-shades" },
    { name: "Motorized Awnings", href: "/services/motorized-awnings" },
    { name: "Waterproofing & Sealing", href: "/services/waterproofing-sealing" },
  ]

  const serviceAreas = [
    { name: "Rockwall", href: "/rockwall-windows" },
    { name: "McKinney", href: "/mckinney-windows" },
    { name: "Allen", href: "/allen-windows" },
    { name: "Plano", href: "/plano-windows" },
    { name: "North Richardson", href: "/north-richardson-windows" },
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
    if (window.innerWidth < 1024) {
      setIsServicesOpen(!isServicesOpen)
    }
  }

  const handleServiceAreasClick = () => {
    if (window.innerWidth < 1024) {
      setIsServiceAreasOpen(!isServiceAreasOpen)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, setter: (value: boolean) => void) => {
    if (e.key === "Escape") {
      setter(false)
    }
  }

  const JOBBER_FORM_URL =
    "https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"

  return (
    <>
      <style jsx>{`
        /* Simplified header styles with proper mobile breakpoint */
        .primary-header {
          height: auto !important;
          min-height: 95px !important;
          padding: 14px 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
        }
        
        .primary-header .container {
          height: auto !important;
          display: flex !important;
          align-items: center !important;
          padding: 0 16px !important;
        }

        /* Desktop navigation - shown only at 1024px and above */
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          
          .mobile-hamburger {
            display: none !important;
          }
          
          .primary-header .flex.items-center.justify-between {
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
            gap: 16px !important;
          }
          
          .primary-header .nav-menu {
            margin-left: 20px !important;
            margin-right: 16px !important;
          }

          .primary-header .logo img,
          .primary-header img {
            display: block !important;
            height: 67px !important;
            width: auto !important;
            max-height: none !important;
            object-fit: contain !important;
            margin-right: 20px !important;
            min-height: unset !important;
          }

          .primary-header a[href="/"] {
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
            display: flex !important;
            align-items: center !important;
          }
        }

        /* Mobile navigation - hidden on desktop, shown below 1024px */
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-hamburger {
            display: flex !important;
            margin-left: auto !important;
          }
          
          .primary-header {
            height: auto !important;
            min-height: 70px !important;
            padding: 16px 0 !important;
          }
          
          .primary-header .container {
            height: auto !important;
            padding: 0 16px !important;
          }
          
          .primary-header img {
            max-height: 48px !important;
            height: auto !important;
          }
        }

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
                width={160}
                height={67}
                className="block"
              />
            </Link>

            <nav
              className="desktop-nav items-center gap-8 nav-menu"
              style={{ display: "none", alignItems: "center", gap: "24px" }}
            >
              <Link
                href="/"
                className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift"
              >
                Home
              </Link>

              <div
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
                    className={`w-3.5 h-3.5 transition-transform lg:hidden text-[var(--color-brand-navy)] ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id="menu-services"
                  role="menu"
                  aria-labelledby="nav-services"
                  className={`invisible opacity-0 pointer-events-none absolute left-0 top-full z-[200] w-72 max-w-[18rem] rounded-xl border border-border bg-background shadow-lg transform translate-y-1.5 transition-all duration-150 ease-out group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:translate-y-0 ${
                    isServicesOpen ? "!visible !opacity-100 !pointer-events-auto !translate-y-0" : ""
                  }`}
                >
                  <div className="absolute -top-[10px] left-0 right-0 h-[10px]"></div>

                  <div className="p-2 space-y-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="block w-full rounded-lg px-3 py-2 text-sm leading-snug text-foreground text-shadow-lift hover:bg-muted hover:underline hover:text-shadow-md focus:bg-muted focus:outline-none transition-all duration-150 min-h-[44px] flex items-center whitespace-normal break-words font-semibold"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div
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
                    className={`w-3.5 h-3.5 transition-transform lg:hidden text-[var(--color-brand-navy)] ${isServiceAreasOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id="menu-areas"
                  role="menu"
                  aria-labelledby="nav-areas"
                  className={`invisible opacity-0 pointer-events-none absolute left-0 top-full z-[200] w-72 max-w-[18rem] rounded-xl border border-border bg-background shadow-lg transform translate-y-1.5 transition-all duration-150 ease-out group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:translate-y-0 ${
                    isServiceAreasOpen ? "!visible !opacity-100 !pointer-events-auto !translate-y-0" : ""
                  }`}
                >
                  <div className="absolute -top-[10px] left-0 right-0 h-[10px]"></div>

                  <div className="p-2 space-y-1">
                    <div className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-wide text-muted-foreground">Cities</div>
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        role="menuitem"
                        className="block w-full rounded-lg px-3 py-2 text-sm leading-snug text-foreground text-shadow-lift hover:bg-muted hover:underline hover:text-shadow-md focus:bg-muted focus:outline-none transition-all duration-150 min-h-[44px] flex items-center font-semibold"
                      >
                        {area.name}
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
                className="hover:underline hover:text-shadow-md font-semibold transition-all duration-150 ease-out uppercase tracking-[0.02em] text-lg py-3 text-[var(--color-brand-navy)] text-shadow-lift"
              >
                Our Team
              </Link>
            </nav>

            <div className="desktop-nav items-center gap-4 ml-auto" style={{ display: "none" }}>
              <a 
                href="tel:+14696408551" 
                className="flex flex-col items-end"
                aria-label="Call Dallas Window Butler for a free estimate"
              >
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[var(--color-brand-navy)]" />
                  <span className="text-[var(--color-brand-navy)] font-semibold text-lg text-shadow-lift">
                    (469) 640-8551
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  Call for a free estimate!
                </span>
              </a>

              <a
                href={JOBBER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open request form to get a free quote"
              >
                <Button className="bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white px-4 py-2 transition-all duration-150 ease-out">
                  GET A FREE QUOTE
                </Button>
              </a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="mobile-hamburger transition-colors duration-150 ease-out"
              style={{ display: "none" }}
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
          <div className="mobile-menu-panel">
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
                          className="block py-3 px-4 text-base text-foreground hover:bg-muted rounded-lg transition-all duration-150"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
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
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          className="block py-3 px-4 text-base text-foreground hover:bg-muted rounded-lg transition-all duration-150"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {area.name}
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
                href={JOBBER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <Button className="w-full bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white py-3 text-base font-semibold transition-all duration-150 ease-out">
                  Get a Free Quote
                </Button>
              </a>

              <a
                href="tel:+14696408551"
                className="block text-center text-base text-[var(--color-brand-navy)] font-medium hover:underline"
              >
                Call (469) 640-8551
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
