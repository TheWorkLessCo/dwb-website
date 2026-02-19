import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Check, Shield, Sun, Droplets, XCircle, Quote, Calendar, Ruler, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { WarrantyCard } from "@/components/warranty-card"
import ServiceFAQ from "@/components/ServiceFAQ"
import ImageBridge from "@/components/ImageBridge"
import { ResultsBar } from "@/components/results-bar"
import { CTA_CONFIG } from "@/lib/cta"

export const metadata: Metadata = {
  title: "Window Replacement Services | Dallas Window Butler",
  description:
    "Professional window replacement services in Dallas-Fort Worth. Energy-efficient windows, expert installation, lifetime warranty. Serving Rockwall, McKinney, Allen & more.",
  keywords:
    "window replacement, energy efficient windows, window installation, Dallas window replacement, Rockwall windows, McKinney windows",
  openGraph: {
    title: "Window Replacement Services | Dallas Window Butler",
    description:
      "Professional window replacement services in Dallas-Fort Worth. Energy-efficient windows, expert installation, lifetime warranty.",
    url: "https://dallaswindowbutler.com/services/window-replacement",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/window-replacement",
  },
}

export default function WindowReplacementPage() {
  const { phoneDisplay, phoneHref, quoteHref, secondaryLabel } = CTA_CONFIG

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window Replacement Services",
    description:
      "Professional window replacement services including energy-efficient windows, custom installations, and lifetime warranty coverage.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://dallaswindowbutler.com/#identity",
      name: "Dallas Window Butler",
      telephone: "(469) 640-8551",
      url: "https://dallaswindowbutler.com/",
      address: {
        "@type": "PostalAddress",
        streetAddress: "112 Nathan Dr.",
        addressLocality: "Princeton",
        addressRegion: "TX",
        postalCode: "75407",
        addressCountry: "US",
      },
    },
    serviceType: "Window Replacement",
    areaServed: [
      {
        "@type": "City",
        name: "Rockwall",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "McKinney",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "Allen",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "Plano",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "North Richardson",
        addressRegion: "TX",
      },
    ],
    offers: {
      "@type": "Offer",
      name: "Window Replacement Service",
      description: "Professional window replacement with lifetime warranty",
      priceRange: "$$",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Replacement Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Single Hung Windows",
            description: "Energy-efficient single hung window replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Double Hung Windows",
            description: "Premium double hung window installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Casement Windows",
            description: "Custom casement window replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bay Windows",
            description: "Specialty bay window installation",
          },
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-12 lg:py-20 min-h-[600px] flex items-center"
        style={{
          backgroundImage: "url('https://dallaswindowbutler.b-cdn.net/Endure-DH-in-White-with-Cottage-Grids_DSC3678.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">
                  Professional Window Replacement
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold text-white">
                  Premium Window Replacement For Your DFW Home... <span className="font-light text-[#049BF2]">Built For Performance, Not Pressure.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                  Transform your home with premium windows. Expert installation, lifetime warranty, and distributor
                  pricing.
                </p>
              </div>

              {/* Trust bullets - concise and result-focused */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    Virtual Quotes & Mock Ups Available
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    Lifetime Warranty On Labor & Materials
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    Factory-certified installation from in-house master installers
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                {/* Primary CTA */}
                <Button
                  size="lg"
                  className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto h-auto"
                  asChild
                >
                  <a href={quoteHref} aria-label={secondaryLabel} data-source="window-replacement-hero" data-offer="100off-per-window">
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

            {/* Right Column - Warranty Card */}
            <div className="lg:justify-self-end w-full max-w-md">
              <WarrantyCard />
            </div>
          </div>
        </div>
      </section>

      <ResultsBar />

      {/* Problem/Agitation Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Old Windows Are Working Against You.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If any of these sound familiar, it&apos;s time to stop fighting your windows and start enjoying your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pain Point 1: The Heat - Pulses orange, turns blue on hover */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm animate-pulse-orange hover:animate-pulse-blue transition-all duration-500">
              <div className="w-12 h-12 bg-orange-50 group-hover:bg-blue-50 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                <Sun className="w-7 h-7 text-orange-500 group-hover:text-blue-500 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-blue-700">The &quot;Hot Rooms&quot;</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                Your AC runs constantly but certain rooms are still unbearable. Old single-pane or aluminum windows leak conditioned air like a sieve—and you&apos;re paying for it every month.
              </p>
            </div>

            {/* Pain Point 2: The Fog - Blurred content clears on hover */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Foggy View</h3>
              <div className="transition-all duration-300 filter blur-[3px] group-hover:blur-none">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Droplets className="w-7 h-7 text-blue-500" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  That cloudy haze between the glass isn&apos;t going away—it&apos;s a failed seal. And those outdated frames? They&apos;re dragging down your home&apos;s curb appeal and resale value.
                </p>
              </div>
            </div>

            {/* Pain Point 3: The Dread - X turns to checkmark on hover */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 group-hover:bg-green-50 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <div className="relative w-7 h-7">
                  <XCircle className="absolute inset-0 w-7 h-7 text-gray-400 group-hover:opacity-0 transition-opacity duration-300" />
                  <CheckCircle className="absolute inset-0 w-7 h-7 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-green-700">The Sales Nightmare</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                You&apos;ve put this off because you don&apos;t want a pushy salesperson camping out at your kitchen table for hours. We get it—and that&apos;s exactly why we do things differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Animated background glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#049bf2]/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#049bf2]/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#049bf2]/5 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-[#049bf2]/20 text-[#049bf2] rounded-full text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Premium Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-4">Window Styles We Install</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional installation for every window type in your home</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Single Hung Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#049bf2]/0 via-[#049bf2]/0 to-[#049bf2]/0 group-hover:from-[#049bf2]/20 group-hover:via-[#049bf2]/30 group-hover:to-[#049bf2]/20 rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#049bf2]/10 transition-all duration-500 hover:-translate-y-1 group-hover:border-[#049bf2]/30 group-hover:bg-white/90">
                <div className="h-48 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="https://dallaswindowbutler.b-cdn.net/endure-double-hung-cutaway-AVL1azGy8Zfr5vaM.avif"
                    alt="Single Hung Window"
                    width={200}
                    height={180}
                    className="object-contain h-full w-auto drop-shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#00152e] mb-2 text-center">Single Hung</h3>
                <p className="text-gray-600 text-center text-sm">Classic window styles with modern energy efficiency</p>
              </div>
            </div>

            {/* Casement Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#049bf2]/0 via-[#049bf2]/0 to-[#049bf2]/0 group-hover:from-[#049bf2]/20 group-hover:via-[#049bf2]/30 group-hover:to-[#049bf2]/20 rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#049bf2]/10 transition-all duration-500 hover:-translate-y-1 group-hover:border-[#049bf2]/30 group-hover:bg-white/90">
                <div className="h-48 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="https://dallaswindowbutler.b-cdn.net/aeris-casement-cutaway-mk3vyqj284h5zlW3.avif"
                    alt="Casement Window"
                    width={200}
                    height={180}
                    className="object-contain h-full w-auto drop-shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#00152e] mb-2 text-center">Casement Window</h3>
                <p className="text-gray-600 text-center text-sm">Side-hinged windows for maximum ventilation</p>
              </div>
            </div>

            {/* Picture Window Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#049bf2]/0 via-[#049bf2]/0 to-[#049bf2]/0 group-hover:from-[#049bf2]/20 group-hover:via-[#049bf2]/30 group-hover:to-[#049bf2]/20 rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#049bf2]/10 transition-all duration-500 hover:-translate-y-1 group-hover:border-[#049bf2]/30 group-hover:bg-white/90">
                <div className="h-48 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="https://dallaswindowbutler.b-cdn.net/aeris-picture-window-cutaway-YBg78rEqDbIvzDaV.avif"
                    alt="Picture Window"
                    width={200}
                    height={180}
                    className="object-contain h-full w-auto drop-shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#00152e] mb-2 text-center">Picture Window</h3>
                <p className="text-gray-600 text-center text-sm">Fixed windows that maximize light and views</p>
              </div>
            </div>

            {/* Sliding Window Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#049bf2]/0 via-[#049bf2]/0 to-[#049bf2]/0 group-hover:from-[#049bf2]/20 group-hover:via-[#049bf2]/30 group-hover:to-[#049bf2]/20 rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#049bf2]/10 transition-all duration-500 hover:-translate-y-1 group-hover:border-[#049bf2]/30 group-hover:bg-white/90">
                <div className="h-48 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="https://dallaswindowbutler.b-cdn.net/endure-slider-window-cutaway-AVL73Kpj4LCEJ44N.avif"
                    alt="Sliding Window"
                    width={200}
                    height={180}
                    className="object-contain h-full w-auto drop-shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#00152e] mb-2 text-center">Sliding Window</h3>
                <p className="text-gray-600 text-center text-sm">Easy operation with contemporary styling</p>
              </div>
            </div>
          </div>

          {/* Custom Shapes Callout */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-[#049bf2]/20 rounded-full shadow-sm hover:shadow-md hover:border-[#049bf2]/40 transition-all duration-300">
              <div className="flex items-center justify-center w-8 h-8 bg-[#049bf2]/10 rounded-full">
                <svg className="w-4 h-4 text-[#049bf2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-[#00152e] font-medium">
                Need a <span className="text-[#049bf2] font-semibold">custom shape</span>? We accommodate arches, circles, octagons & specialty designs.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You&apos;ll Get With New Windows</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real results you&apos;ll notice from day one</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lower Energy Bills</h3>
              <p className="text-gray-600">
                Stop cooling the neighborhood. Homeowners typically see 20-30% reduction in summer energy costs with proper Low-E glass and insulated frames.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Curb Appeal</h3>
              <p className="text-gray-600">
                New windows transform how your home looks from the street. Clean lines, consistent style, and no more foggy eyesores dragging down your home&apos;s value.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peace of Mind</h3>
              <p className="text-gray-600">
                Our lifetime workmanship warranty and leak-free guarantee mean you&apos;ll never worry about your windows again. If something goes wrong, we fix it—free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top translate-x-1/2" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 text-[#049BF2] rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Simple 3-Step Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00152e] mb-6">
              Window Replacement in 3 Easy Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hassle, no pressure, no surprises. Just a straightforward path to beautiful new windows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-blue-100 -z-10" />

            {/* Step 1 */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  1
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Free Consultation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We measure your windows and discuss your goals—in person or virtually. You&apos;ll get a firm quote in 30 minutes, not a 3-hour sales marathon.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  2
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <Ruler className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Choose Your Windows</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Select from premium vinyl windows in 40+ colors and multiple styles. We&apos;ll help you pick the perfect fit for your home&apos;s architecture and your budget.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  3
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Professional Installation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our in-house master installers complete most jobs in 1-2 days. We protect your home, clean up completely, and walk you through everything before we leave.
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <Button
              asChild
              size="lg"
              className="bg-[#049BF2] hover:bg-[#0389d5] text-white px-10 py-6 text-xl font-black rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:-translate-y-1"
            >
              <a href={quoteHref}>
                {secondaryLabel}
                <Check className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
              <span>Fast Quotes</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>In-House Crews</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-[#049BF2]/20" />
            </div>
            <blockquote className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8">
              &ldquo;I went through THREE window companies before landing on Dallas Window Butler. First one ghosted me. Second one tried to upsell me on stuff I didn&apos;t need. Third one gave me a &apos;discount&apos; that still wasn&apos;t competitive. These guys? Gave me a real price, did solid work, and left my house cleaner than when they got here.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Leah D.</p>
                <p className="text-sm text-gray-500">Rockwall, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section - Engineered For Texas Heat */}
      <section className="py-20 bg-[#049bf2]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Headlines */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Engineered Specifically For The Texas Heat.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              We don&apos;t just install windows. We install high-performance thermal barriers.
            </p>
          </div>

          {/* Horizontal Layout: SHGC Image + 2x2 Feature Grid */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* SHGC Diagram - Left Side */}
            <div className="lg:w-2/5 relative rounded-xl overflow-hidden shadow-lg min-h-[300px] lg:min-h-0">
              <Image
                src="https://dallaswindowbutler.b-cdn.net/Solar%20Heat%20Gain%20Coefficient%20(SHGC).jpg"
                alt="Solar Heat Gain Coefficient (SHGC) diagram showing how energy-efficient windows reduce heat transfer"
                fill
                className="object-cover"
              />
            </div>

            {/* 2x2 Feature Grid - Right Side */}
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CARD 1 - Low-E Glass */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">Low-E 366 Glass Coating</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Think of this as transparent sunscreen for your house. It reflects 95% of the sun&apos;s damaging UV rays, keeping your rooms cool and preventing your furniture from fading.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 - Argon Gas */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">Argon Gas Fill</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We fill the space between the glass panes with Argon gas. Denser than air, it acts as an invisible thermal blanket that traps your expensive AC air inside.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 - Virgin Vinyl */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">100% Virgin Vinyl</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Unlike &ldquo;recycled&rdquo; vinyl that yellows and cracks over time, our frames are made from pure, virgin vinyl. They never need painting and won&apos;t warp in the Dallas summer.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4 - Double-Strength Glass */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">Double-Strength Glass</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Standard windows use single-strength glass. We upgrade you to double-strength, providing a significantly stronger barrier against hail, wind, and neighborhood noise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-16 relative overflow-hidden">
        {/* Background matching About hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00152e] via-[#001a3a] to-[#00152e]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#049bf2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#049bf2]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
              Where Integrity Meets Expertise: Certified, Accredited, and Backed by the Best in the Business
            </p>
          </div>

          {/* Partner badges grid with DWB logo in center */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 items-center justify-items-center">
            {/* Left partners */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <span className="text-xs text-white/80 font-medium">ProVia</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <span className="text-xs text-white/80 font-medium">Pella</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <span className="text-xs text-white/80 font-medium">Vistamark</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <span className="text-xs text-white/80 font-medium">Cardinal</span>
            </div>

            {/* Center DWB Logo */}
            <div className="flex flex-col items-center text-center col-span-3 md:col-span-4 lg:col-span-1">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
                <Image
                  src="/images/dwb-primary-logo.png"
                  alt="Dallas Window Butler"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Right partners */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <span className="text-xs text-white/80 font-medium">SunPro</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-xs text-white/80 font-medium">EPA Lead-Safe</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-xs text-white/80 font-medium">Energy Star</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 border border-white/20">
                <span className="text-lg font-bold text-white">USA</span>
              </div>
              <span className="text-xs text-white/80 font-medium">USA Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* ImageBridge - above FAQ */}
      <ImageBridge />

      {/* FAQ Section */}
      <ServiceFAQ serviceName="Window Replacement" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Replace Your Windows?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Get your free consultation and discover how new windows can transform your home.
          </p>
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free window replacement consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="window-replacement-final"
              data-offer="100off-per-window"
            >
              {secondaryLabel}
            </Button>
          </a>
        </div>
      </section>

      {/* Footer Component */}
    </div>
  )
}
