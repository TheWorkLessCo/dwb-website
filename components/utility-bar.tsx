"use client"

import Link from "next/link"
import { Share2, Facebook, Instagram, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
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
          {/* Left side - Social icons, locations, language */}
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

            {/* Divider dot */}
            <span className="hidden md:inline text-white/70">•</span>

            <Link href="/locations" className="text-white hover:opacity-85 transition-opacity font-medium">
              LOCATIONS
            </Link>

            {/* Divider dot */}
            <span className="hidden md:inline text-white/70">•</span>

            <div className="hidden md:flex items-center">
              <span className="text-white hover:opacity-85 transition-opacity font-medium cursor-pointer">{""}</span>
            </div>
          </div>

          {/* Right side - Quote button and phone */}
          <div className="flex items-center gap-3">
            {/* Phone */}
            <a
              href="tel:+14696408551"
              className="flex items-center gap-1 text-white hover:opacity-85 transition-opacity font-medium order-2 md:order-1"
            >
              <span className="hidden sm:inline">DISCOUNTS AVAILABLE</span>
            </a>

            <Link href="#quote" className="order-1 md:order-2">
              <Button
                size="sm"
                className="bg-white text-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-md transition-all duration-200 text-xs px-3 py-1 h-8 font-medium border-0"
              >
                Sale
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilityBar
