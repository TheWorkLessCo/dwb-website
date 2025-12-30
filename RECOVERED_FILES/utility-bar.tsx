"use client"

import { Facebook, Instagram, MapPin, ShieldCheck, Share2 } from "lucide-react"
import { useState } from "react"

export function UtilityBar() {
  const [isSocialOpen, setIsSocialOpen] = useState(false)

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1BWUJHAgi2/",
      icon: Facebook,
      ariaLabel: "Follow us on Facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dallaswindowbutler?igsh=MW9ieDY2eDE1MDhjMg==",
      icon: Instagram,
      ariaLabel: "Follow us on Instagram",
    },
    {
      name: "Google Business Profile",
      href: "https://maps.app.goo.gl/ZmVJUtp4y1rEJQcp6",
      icon: MapPin,
      ariaLabel: "Visit our Google Business Profile",
    },
  ]

  return (
    <div className="bg-[#049BF2] text-white sticky top-0 z-50 h-11 md:h-10">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full text-sm">
          {/* Left side - Social icons and Discounts */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop social icons */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="text-white hover:opacity-85 transition-opacity"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Mobile social toggle */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsSocialOpen(!isSocialOpen)}
                className="text-white hover:opacity-85 transition-opacity"
                aria-label="Social media links"
              >
                <Share2 className="w-5 h-5" />
              </button>

              {isSocialOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[#049BF2] border border-brand-blue-dark rounded-lg shadow-lg p-2 min-w-[200px]">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-white hover:opacity-85 rounded transition-opacity"
                        onClick={() => setIsSocialOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {social.name}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>

            <span className="hidden md:inline text-white/70">•</span>
            
            <div className="flex items-center gap-1 text-white font-bold tracking-wide">
              <span className="uppercase whitespace-nowrap">Senior & Military Discounts</span>
            </div>
          </div>

          {/* Right side - Value props */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-1.5 text-white font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span className="whitespace-nowrap">VIRTUAL QUOTES & MOCK UPS AVAILABLE</span>
            </div>

            <span className="hidden lg:inline text-white/70">•</span>

            <div className="hidden lg:flex items-center gap-1.5 text-white font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span className="whitespace-nowrap">LIFETIME WARRANTY ON LABOR & MATERIALS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilityBar
