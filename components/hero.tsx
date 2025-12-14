"use client"

import { Button } from "@/components/ui/button"
import { Check, Phone } from 'lucide-react'
import { OfferCardV2 } from "@/components/offer-card-v2"
import { getTrackingAttributes } from "@/lib/tracking"

export function Hero() {
  const trackingAttrs = getTrackingAttributes("home-hero")
  const JOBBER_FORM_URL =
    "https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"

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
                <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">
                  Serving Dallas-Fort Worth Metroplex
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-semibold">
                    Best Replacement Windows in DFW — Installed Right the First Time
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                    Serving Rockwall, Plano, McKinney, and surrounding DFW communities with energy-efficient window replacement, glass repair, and patio door installations — backed by lifetime warranties and 5-star local reviews.
                  </p>
                </div>

                {/* Trust bullets - concise and result-focused */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Trusted by 112+ DFW families with perfect 5-star reviews
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Lifetime workmanship guarantee—if we install it, we fix it free, forever
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Fast, clean installs trusted in Rockwall, Plano, and McKinney
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  {/* Primary CTA - Call Now */}
                  <Button
                    size="lg"
                    className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                    asChild
                  >
                    <a href="tel:4696408551" aria-label="Call Dallas Window Butler now">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  {/* Secondary CTA - Get Free Quote */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#049BF2] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href={JOBBER_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get free quote from Dallas Window Butler"
                      {...trackingAttrs}
                    >
                      Get My Free Quote
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

              {/* Right Column - OfferCard */}
              <div className="w-full max-w-full mx-auto lg:mx-0 lg:justify-self-end overflow-x-hidden">
                <OfferCardV2 primaryCtaHref={JOBBER_FORM_URL} />

                <div className="flex justify-center items-center gap-4 mt-6">
                  <img
                    src="/images/leak-free-guarantee-badge.png"
                    alt="Lifetime Leak-Free Guarantee"
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
