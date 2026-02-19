import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Check, Shield, Wrench, Zap, DollarSign, Droplets, Eye, Clock, Quote, Calendar, Ruler, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { WarrantyCard } from "@/components/warranty-card"
import ServiceFAQ from "@/components/ServiceFAQ"
import ImageBridge from "@/components/ImageBridge"
import { ResultsBar } from "@/components/results-bar"
import { CTA_CONFIG } from "@/lib/cta"

export const metadata: Metadata = {
  title: "Glass & IG Unit Repair Services | Dallas Window Butler",
  description:
    "Professional glass and insulated glass (IG) unit repair services in Dallas-Fort Worth. Cost-effective alternative to full window replacement. Expert installation.",
  keywords:
    "glass repair, IG unit repair, insulated glass repair, window glass replacement, Dallas glass repair, broken window glass",
  openGraph: {
    title: "Glass & IG Unit Repair Services | Dallas Window Butler",
    description: "Professional glass repair and IG unit replacement with warranty",
    url: "https://dallaswindowbutler.com/services/glass-repair",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/glass-repair",
  },
}

export default function GlassRepairPage() {
  const { phoneDisplay, phoneHref, quoteHref, secondaryLabel } = CTA_CONFIG

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass & IG Unit Repair Services",
    description: "Professional glass repair and IG unit replacement with warranty",
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
    serviceType: "Glass Repair",
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
      name: "Glass & IG Unit Repair Service",
      description: "Professional glass repair and IG unit replacement with warranty",
      priceRange: "$",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Glass Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Broken Glass Replacement",
            description: "Replace broken or cracked window glass",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IG Unit Replacement",
            description: "Replace foggy or failed insulated glass units",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seal Repair",
            description: "Repair failed window seals and weatherstripping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Glass Repair",
            description: "Next-day emergency glass replacement services",
          },
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat py-12 lg:py-20"
        style={{ backgroundImage: "url('https://dallaswindowbutler.b-cdn.net/aeris-double-hung-picture-white-cottage-grid-1-Yan1My6PXrHX0jzJ.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">Glass & IG Unit Repair</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold text-white">
                  Expert Glass & IG Unit Repair For Your DFW Home... <span className="font-light text-[#049BF2]">Restore Clarity Without The Full Cost.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                  Cost-effective alternative to full window replacement. Fix foggy windows and broken glass quickly.
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
                    Fogged or cracked IG units replaced without disturbing your frames
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
                  <a href={quoteHref} aria-label={secondaryLabel} data-source="glass-repair-hero" data-offer="glass-repair-quote">
                    {secondaryLabel}
                  </a>
                </Button>
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  Get a firm price in 30 minutes. No &apos;buy today&apos; games.
                </p>
              </div>

              {/* Trust Badges Section */}
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
                    <span className="text-brand-blue">🛡️</span>
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
              That Foggy Window Isn&apos;t Going to Fix Itself.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You&apos;ve been staring at it for months. Here&apos;s why it&apos;s time to finally take action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pain Point 1: The Embarrassment */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#049BF2]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Droplets className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Cloudy Eyesore</h3>
              <p className="text-gray-600 leading-relaxed">
                That milky haze between the panes isn&apos;t dirt you can wipe away—it&apos;s a failed seal letting moisture in. Every guest notices it, and it makes your whole home look neglected.
              </p>
            </div>

            {/* Pain Point 2: The Misconception */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#049BF2]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <DollarSign className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thinking You Need New Windows</h3>
              <p className="text-gray-600 leading-relaxed">
                Most homeowners assume foggy glass means replacing the entire window—frame and all. But if your frames are solid, you&apos;re about to overpay by thousands of dollars.
              </p>
            </div>

            {/* Pain Point 3: Putting It Off */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#049BF2]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Clock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Longer You Wait...</h3>
              <p className="text-gray-600 leading-relaxed">
                That trapped moisture isn&apos;t just ugly—it can cause mold growth in the frame and further seal deterioration. What&apos;s a simple fix today could become a costly replacement tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Glass Repair Services We Offer</h2>
            <p className="text-xl text-gray-600">Professional solutions for all your glass repair needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Broken Glass Replacement</h3>
                <p className="text-gray-600">Quick replacement of cracked or shattered window glass</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">IG Unit Replacement</h3>
                <p className="text-gray-600">Fix foggy windows by replacing the insulated glass unit</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seal Repair</h3>
                <p className="text-gray-600">Restore window seals and weatherstripping</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Service</h3>
                <p className="text-gray-600">Next-day emergency glass repair when you need it most</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Glass Repair Instead of Full Replacement?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The smart choice when your frames are still solid</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save 40-60% vs. Replacement</h3>
              <p className="text-gray-600">
                Why pay for new frames when yours are perfectly fine? IG unit replacement gives you brand-new glass clarity at a fraction of full window replacement cost.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Done in Hours, Not Days</h3>
              <p className="text-gray-600">
                Most IG unit replacements are completed the same day. No waiting weeks for custom windows to arrive. We measure, order, and install—often within a week.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crystal Clear Results</h3>
              <p className="text-gray-600">
                Your windows will look brand new again. Same energy efficiency, same clarity, same performance—without the hassle and cost of tearing out the entire frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top translate-x-1/2" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 text-[#049BF2] rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Simple 3-Step Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#00152e] mb-6">
              How Glass Repair Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fast, straightforward, and minimally invasive. Here&apos;s what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-blue-100 -z-10" />

            {/* STEP 1 */}
            <div id="step-1" className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  1
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Free Assessment</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We inspect your windows to determine if glass-only repair is the right solution. If your frames are in good shape, we&apos;ll save you the cost of full replacement.
              </p>
            </div>

            {/* STEP 2 */}
            <div id="step-2" className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  2
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <Ruler className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Precise Measurement</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We measure your existing frames exactly. Your new IG units are custom-manufactured to fit perfectly—no gaps, no drafts, no issues.
              </p>
            </div>

            {/* STEP 3 */}
            <div id="step-3" className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  3
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Quick Installation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We carefully remove the old glass and install the new IG unit—without disturbing your frames or interior trim. Most jobs are done in a few hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-[#049BF2]/20" />
            </div>
            <blockquote className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8">
              &ldquo;They replaced all our fogged glass units—great communication and fair pricing. I was quoted $8,000 by another company for full window replacement. Dallas Window Butler fixed the same windows for under $2,000. Wish I&apos;d called them first.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Emily R.</p>
                <p className="text-sm text-gray-500">Allen, TX</p>
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
              We don&apos;t just replace glass. We install high-performance thermal barriers.
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
              {/* CARD 1 - IGU */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">Insulated Glass Units (IGU)</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Two panes of glass with an air-tight seal and spacer system. This creates a thermal barrier that keeps your home comfortable year-round.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 - Low-E */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">Low-E Coating Available</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Upgrade to Low-E glass that reflects heat while letting light through. Perfect for Texas summers—keeps your home cooler without darkening your view.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 - Argon Gas */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">Argon Gas Fill</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The space between panes is filled with Argon gas for superior insulation. Denser than air, it significantly reduces heat transfer through your windows.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4 - Warm-Edge Spacer */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[#049BF2] hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">Warm-Edge Spacer System</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Modern spacer technology reduces condensation and improves energy efficiency at the glass edge—the weakest point of traditional IG units.
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
      <ServiceFAQ serviceName="Glass / IG Unit Repair" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Glass or IG Unit Repair?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Get a free assessment and discover how much you can save with professional glass repair.
          </p>
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free glass repair assessment with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="glass-repair-final"
              data-offer="glass-repair-quote"
            >
              {secondaryLabel}
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
