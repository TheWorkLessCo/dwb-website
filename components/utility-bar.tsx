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
        <div className="flex items-center justify-center gap-4 md:gap-10 h-full text-[10px] sm:text-xs md:text-sm">
          {/* Social icons - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex items-center gap-4 border-r border-white/20 pr-10">
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
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )
            })}
          </div>

          {/* Value Props - Centered and evenly spaced */}
          <div className="flex items-center gap-4 md:gap-10">
            <div className="flex items-center gap-1.5 md:gap-2 text-white font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/90" />
              <span className="uppercase whitespace-nowrap">Senior & Military Discounts</span>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2 text-white font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/90" />
              <span className="whitespace-nowrap uppercase">Virtual Quotes & Mock Ups</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 md:gap-2 text-white font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/90" />
              <span className="whitespace-nowrap uppercase">Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilityBar
