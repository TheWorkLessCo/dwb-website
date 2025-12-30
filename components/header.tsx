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

  const servicesTimeoutRef = useRef<NodeJS.Timeout>(undefined)
  const serviceAreasTimeoutRef = useRef<NodeJS.Timeout>(undefined)

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
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  const handleServiceAreasMouseEnter = () => {
    if (serviceAreasTimeoutRef.current) clearTimeout(serviceAreasTimeoutRef.current)
    setIsServiceAreasOpen(true)
  }

  const handleServiceAreasMouseLeave = () => {
    serviceAreasTimeoutRef.current = setTimeout(() => setIsServiceAreasOpen(false), 150)
  }

  const { phoneDisplay, phoneHref, quoteHref } = CTA_CONFIG

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-28 lg:h-36 flex items-center justify-between">
        {/* LOGO (Left) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/dwb-primary-logo.png"
              alt="Dallas Window Butler"
              width={200}
              height={85}
              className="h-16 lg:h-24 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* VERTICAL STACKED NAVIGATION (Center) */}
        <nav className="hidden lg:flex flex-col items-start justify-center gap-1 px-6 flex-grow">
          <Link 
            href="/" 
            className="text-[12px] lg:text-[14px] font-black uppercase text-[#00152e] hover:text-[#049bf2] leading-none py-0.5 tracking-wider"
          >
            HOME
          </Link>
          
          <div 
            className="relative" 
            onMouseEnter={handleServicesMouseEnter} 
            onMouseLeave={handleServicesMouseLeave}
          >
            <button 
              className="text-[12px] lg:text-[14px] font-black uppercase text-[#00152e] hover:text-[#049bf2] flex items-center gap-1 leading-none py-0.5 tracking-wider"
            >
              SERVICES <ChevronDown className="w-3 h-3" />
            </button>
            <div 
              className={`absolute left-0 top-full pt-2 z-50 transition-all duration-200 ${
                isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"
              }`}
            >
              <div className="w-64 bg-white border border-gray-100 rounded-xl shadow-xl p-2">
                {servicesItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="block px-4 py-2 text-sm text-[#00152e] hover:bg-blue-50 hover:text-[#049bf2] rounded-lg font-bold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div 
            className="relative" 
            onMouseEnter={handleServiceAreasMouseEnter} 
            onMouseLeave={handleServiceAreasMouseLeave}
          >
            <button 
              className="text-[12px] lg:text-[14px] font-black uppercase text-[#00152e] hover:text-[#049bf2] flex items-center gap-1 leading-none py-0.5 tracking-wider"
            >
              LOCATIONS <ChevronDown className="w-3 h-3" />
            </button>
            <div 
              className={`absolute left-0 top-full pt-2 z-50 transition-all duration-200 ${
                isServiceAreasOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"
              }`}
            >
              <div className="w-64 bg-white border border-gray-100 rounded-xl shadow-xl p-2 max-h-[400px] overflow-y-auto">
                <div className="px-4 py-1 text-[10px] font-black text-gray-400 uppercase tracking-widest">Cities</div>
                {cityLinks.map((area) => (
                  <Link 
                    key={area.href} 
                    href={area.href} 
                    className="block px-4 py-2 text-sm text-[#00152e] hover:bg-blue-50 hover:text-[#049bf2] rounded-lg font-bold"
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom horizontal row of links */}
          <div className="flex items-center gap-4 lg:gap-6 mt-1">
            <Link 
              href="/testimonials" 
              className="text-[12px] lg:text-[14px] font-black uppercase text-[#00152e] hover:text-[#049bf2] tracking-wider"
            >
              TESTIMONIALS
            </Link>
            <Link 
              href="/blog" 
              className="text-[12px] lg:text-[14px] font-black uppercase text-[#00152e] hover:text-[#049bf2] tracking-wider"
            >
              BLOG
            </Link>
            <Link 
              href="/about" 
              className="text-[12px] lg:text-[14px] font-black uppercase text-[#00152e] hover:text-[#049bf2] tracking-wider"
            >
              OUR TEAM
            </Link>
          </div>
        </nav>

        {/* CTA BUTTONS (Right) */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <Button
            variant="outline"
            className="border-2 border-[#049bf2] text-[#00152e] hover:bg-[#049bf2] hover:text-white px-5 py-2.5 h-auto rounded-xl shadow-none font-bold"
            asChild
          >
            <a href={phoneHref} className="flex items-center gap-3">
              <div className="bg-[#049bf2] text-white p-2 rounded-lg">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase font-black opacity-80 leading-none mb-0.5">Free Estimate</span>
                <span className="text-base font-black tracking-tighter leading-none whitespace-nowrap">{phoneDisplay}</span>
              </div>
            </a>
          </Button>

          <a href={quoteHref} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#049bf2] hover:bg-[#0389d5] text-white px-6 py-5 h-auto text-base font-black rounded-xl whitespace-nowrap shadow-none border-none">
              Check Pricing
            </Button>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="lg:hidden ml-auto hover:bg-transparent" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-7 w-7 text-[#00152e]" />
          ) : (
            <Menu className="h-7 w-7 text-[#00152e]" />
          )}
        </Button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col overflow-y-auto">
          <div className="flex justify-end p-6 border-b">
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
              <X className="h-8 w-8 text-[#00152e]" />
            </Button>
          </div>
          <nav className="p-8 flex flex-col gap-8 items-center text-center">
            <Link href="/" className="text-xl font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link href="/services/window-replacement" className="text-xl font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
            <Link href="/testimonials" className="text-xl font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>TESTIMONIALS</Link>
            <Link href="/blog" className="text-xl font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>BLOG</Link>
            <Link href="/about" className="text-xl font-black uppercase text-[#00152e]" onClick={() => setIsMenuOpen(false)}>OUR TEAM</Link>
            
            <div className="mt-4 flex flex-col gap-4 w-full max-w-sm">
              <a 
                href={phoneHref} 
                className="w-full bg-[#049bf2] text-white py-4 rounded-xl font-black text-lg text-center"
              >
                {phoneDisplay}
              </a>
              <a 
                href={quoteHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full border-2 border-[#049bf2] text-[#049bf2] py-4 rounded-xl font-black text-lg text-center"
              >
                CHECK PRICING
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
