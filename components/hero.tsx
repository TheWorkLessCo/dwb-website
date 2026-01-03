"use client"

import { Button } from "@/components/ui/button"
import { Check, Phone } from "lucide-react"
import { WarrantyCard } from "@/components/warranty-card"
import { getTrackingAttributes } from "@/lib/tracking"
import { CTA_CONFIG } from "@/lib/cta"

export function Hero() {
  const trackingAttrs = getTrackingAttributes("home-hero")
  const { phoneHref, phoneDisplay, quoteHref, primaryLabel, secondaryLabel } = CTA_CONFIG

  return (
    <>
      <div id="sticky-sentinel" className="h-0 w-full" aria-hidden="true" />

      <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover object-center"
          >
            <source
              src="/videos/hero.mp4"
              type="video/mp4"
            />
            {/* Fallback image if video fails to load */}
            <img
              src="/placeholder-hkn4k.png"
              alt="Beautiful home with modern windows"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Copy */}
              <div className="text-white space-y-6 lg:space-y-8">
                <div className="text-sm sm:text-base text-[#049BF2] font-bold uppercase tracking-wide">
                  FOR THE HOMEOWNER WHO WANTS RESPECT, NOT A SALES SCRIPT
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold">
                    Premium Replacement Windows For Your DFW Home... <span className="font-light text-[#049BF2]">Minus The Nightmare Sales Pitch.</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                    Stop overpaying for the &apos;big brand&apos; markup. Get custom-fitted, energy-efficient vinyl windows installed by our in-house &apos;White Glove&apos; pros. No pressure, no gimmicks—just a flawless install.
                  </p>
                </div>

                {/* Trust bullets - concise and result-focused */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Your Home Stays Clean (No Subcontractors)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Bills Go Down (Energy Efficient Vinyl)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Zero Sales Pressure (Guaranteed)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  {/* Primary CTA - Get a Quote For My Home */}
                  <Button
                    size="lg"
                    className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                    asChild
                  >
                    <a href={quoteHref} aria-label={secondaryLabel} {...trackingAttrs}>
                      {secondaryLabel}
                    </a>
                  </Button>
                  <p className="text-sm sm:text-base text-gray-300 font-medium">
                    Get a firm price in 30 minutes. No &apos;buy today&apos; games.
                  </p>
                </div>

                <p className="text-xs text-gray-400">We&apos;ll never share your info.</p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-80 pt-2">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                    <span className="text-gray-200 ml-2">100+ reviews</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-gray-300">
                    <span className="flex items-center gap-1">
                      <span className="text-green-400">✓</span>
                      Energy Star Partner
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-400">🛡️</span>
                      Fully Insured
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">🏆</span>
                      BBB Accredited
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Warranty Container */}
              <div className="hidden lg:flex justify-end items-center">
                <WarrantyCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
