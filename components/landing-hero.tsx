"use client"

import { Button } from "@/components/ui/button"
import { Check, Phone } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2" // Updated import to use OfferCardV2 instead of missing LandingOfferCard
import { CTA_CONFIG } from "@/lib/cta"

export function LandingHero() {
  const { phoneHref, phoneDisplay, quoteHref, primaryLabel, secondaryLabel } = CTA_CONFIG

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
              <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">
                For Rockwall & Nearby Homeowners
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Window Replacement in Rockwall, TX
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                  Energy-efficient window replacement with expert glass/IG unit repair and door replacement you can
                  trust.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    No-pressure in-home consultation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    Top brands, expert installation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    Lifetime-backed workmanship
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                  asChild
                >
                  <a href={phoneHref} aria-label={`Call Dallas Window Butler now at ${phoneDisplay}`}>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {primaryLabel}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#049BF2] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <a href={quoteHref} aria-label="Open request form to get a free quote">
                    {secondaryLabel}
                  </a>
                </Button>
              </div>

              <p className="text-xs text-gray-400">We'll never share your info.</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-80 pt-2">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                  <span className="text-gray-200 ml-2">112 Google reviews in Rockwall</span>
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

            {/* Right Column - OfferCardV2 */}
            <div className="w-full max-w-full mx-auto lg:mx-0 lg:justify-self-end overflow-x-hidden">
              <OfferCardV2 primaryCtaHref={quoteHref} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
