"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import { cityLinks } from "@/lib/cities"
import { CTA_CONFIG } from "@/lib/cta"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false)

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

  const { phoneDisplay, phoneHref, quoteHref } = CTA_CONFIG

  return (
    <>
      <header className="bg-white relative z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/dwb-primary-logo.png"
                alt="Dallas Window Butler"
                width={180}
                height={70}
                priority
                className="h-14 lg:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Horizontal */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 ml-8">
              <Link
                href="/"
                className="font-bold uppercase tracking-wider text-sm text-[#00152e] hover:text-[#049bf2] transition-colors"
              >
                Home
              </Link>

              <div
                className="relative group"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="font-bold uppercase tracking-wider text-sm text-[#00152e] hover:text-[#049bf2] transition-colors flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="w-3 h-3" />
                </button>

                <div
                  className={`absolute left-0 top-full z-[200] w-64 rounded-xl border bg-white shadow-lg transform transition-all duration-150 ${
                    isServicesOpen 
                      ? "visible opacity-100 translate-y-0" 
                      : "invisible opacity-0 translate-y-1"
                  }`}
                >
                  <div className="p-2 space-y-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block w-full rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="relative group"
                onMouseEnter={handleServiceAreasMouseEnter}
                onMouseLeave={handleServiceAreasMouseLeave}
              >
                <button
                  className="font-bold uppercase tracking-wider text-sm text-[#00152e] hover:text-[#049bf2] transition-colors flex items-center gap-1"
                >
                  Locations
                  <ChevronDown className="w-3 h-3" />
                </button>

                <div
                  className={`absolute left-0 top-full z-[200] w-56 rounded-xl border bg-white shadow-lg transform transition-all duration-150 ${
                    isServiceAreasOpen 
                      ? "visible opacity-100 translate-y-0" 
                      : "invisible opacity-0 translate-y-1"
                  }`}
                >
                  <div className="p-2 space-y-1">
                    {cityLinks.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block w-full rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/testimonials"
                className="font-bold uppercase tracking-wider text-sm text-[#00152e] hover:text-[#049bf2] transition-colors whitespace-nowrap"
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className="font-bold uppercase tracking-wider text-sm text-[#00152e] hover:text-[#049bf2] transition-colors whitespace-nowrap"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="font-bold uppercase tracking-wider text-sm text-[#00152e] hover:text-[#049bf2] transition-colors whitespace-nowrap"
              >
                Our Team
              </Link>
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3 ml-6">
              <Button
                variant="outline"
                className="border-2 border-[#049bf2] text-[#00152e] hover:bg-[#049bf2] hover:text-white px-4 py-2 h-auto transition-all duration-300 group rounded-xl"
                asChild
              >
                <a href={phoneHref} className="flex items-center gap-2">
                  <div className="bg-[#049bf2] text-white p-1.5 rounded-lg group-hover:bg-white group-hover:text-[#049bf2] transition-colors">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] uppercase tracking-wider font-bold opacity-80 leading-none mb-0.5">
                      Free Estimate
                    </span>
                    <span className="text-sm font-black tracking-tight leading-none whitespace-nowrap">
                      {phoneDisplay}
                    </span>
                  </div>
                </a>
              </Button>

              <a href={quoteHref} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#049bf2] hover:bg-[#0389d5] text-white px-5 py-4 h-auto text-sm font-bold transition-all duration-150 ease-out rounded-xl whitespace-nowrap">
                  Check Pricing
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[9998]" 
            onClick={() => setIsMenuOpen(false)} 
          />
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[9999] overflow-y-auto shadow-xl">
            <div className="flex justify-end p-4 border-b">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="p-6 flex flex-col gap-4">
              <Link href="/" className="text-lg font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/services/window-replacement" className="text-lg font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/testimonials" className="text-lg font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <Link href="/blog" className="text-lg font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="/about" className="text-lg font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
              
              <div className="mt-6 pt-6 border-t space-y-4">
                <a href={phoneHref} className="flex items-center gap-3 text-[#00152e]">
                  <Phone className="w-5 h-5 text-[#049bf2]" />
                  <span className="font-bold">{phoneDisplay}</span>
                </a>
                <a href={quoteHref} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#049bf2] hover:bg-[#0389d5] text-white py-3 font-bold rounded-xl">
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export default Header
