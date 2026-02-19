import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Check, Shield, Home, Wrench, Clock, DoorClosed, Wind, Lock, Quote, Thermometer, Droplets, Award, Calendar, Ruler, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { WarrantyCard } from "@/components/warranty-card"
import ServiceFAQ from "@/components/ServiceFAQ"
import ImageBridge from "@/components/ImageBridge"
import { ResultsBar } from "@/components/results-bar"
import { CTA_CONFIG } from "@/lib/cta"

export const metadata: Metadata = {
  title: "Patio Door Replacement Services | Dallas Window Butler",
  description:
    "Professional patio door replacement services in Dallas-Fort Worth. Energy-efficient sliding doors, French doors, expert installation, lifetime warranty. Serving Rockwall, McKinney, Allen & more.",
  keywords:
    "patio door replacement, sliding door installation, French doors, energy efficient doors, Dallas patio doors, Rockwall doors, McKinney doors",
  openGraph: {
    title: "Patio Door Replacement Services | Dallas Window Butler",
    description:
      "Professional patio door replacement services in Dallas-Fort Worth. Energy-efficient doors, expert installation, lifetime warranty.",
    url: "https://dallaswindowbutler.com/services/patio-doors",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/patio-doors",
  },
}

export default function PatioDoorPage() {
  const { phoneDisplay, phoneHref, quoteHref, secondaryLabel } = CTA_CONFIG
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Patio Door Replacement Services",
    description:
      "Professional patio door replacement services including sliding doors, French doors, custom installations, and lifetime warranty coverage.",
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
    serviceType: "Patio Door Replacement",
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
      name: "Patio Door Replacement Service",
      description: "Professional patio door replacement with lifetime warranty",
      priceRange: "$$",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Patio Door Replacement Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sliding Patio Doors",
            description: "Energy-efficient sliding patio door replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "French Doors",
            description: "Premium French door installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bi-Fold Doors",
            description: "Custom bi-fold patio door replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Slide Doors",
            description: "Specialty multi-slide door installation",
          },
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] py-12 lg:py-20"
        style={{ backgroundImage: "url('https://dallaswindowbutler.b-cdn.net/Endure-4-Lite-Patio-Door-in-White-with-Internal-Blinds_DSC8668-HDR-Edit2.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">
                  Professional Patio Door Replacement
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold text-white">
                  Premium Patio Door Replacement For Your DFW Home... <span className="font-light text-[#049BF2]">Flawless Design, Master Installation.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                  Transform your outdoor connection with premium patio doors. Expert installation, lifetime warranty,
                  and distributor pricing.
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
                    Thresholds flashed and sealed to prevent leaks and swelling after storms
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
                  <a href={quoteHref} aria-label={secondaryLabel} data-source="patio-doors-hero" data-offer="100off-per-window">
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
              Your Patio Door Is Costing You More Than You Think.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              That door you wrestle with every day? It&apos;s not just annoying—it&apos;s a problem waiting to get worse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pain Point 1: Hard to Open */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#049BF2]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <DoorClosed className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Daily Struggle</h3>
              <p className="text-gray-600 leading-relaxed">
                You have to yank, lift, or body-check it just to get it open. That sticky, grinding slide isn&apos;t just frustrating—it&apos;s a worn-out track that&apos;s only going to get worse.
              </p>
            </div>

            {/* Pain Point 2: Drafts & Leaks */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#049BF2]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Wind className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Drafts & Water Leaks</h3>
              <p className="text-gray-600 leading-relaxed">
                Feel that draft around the frame? Old seals and warped thresholds let air and water pour in. After every storm, you&apos;re mopping up puddles and wondering if the subfloor is rotting.
              </p>
            </div>

            {/* Pain Point 3: Security Risk */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#049BF2]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Lock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">A Security Weak Spot</h3>
              <p className="text-gray-600 leading-relaxed">
                That flimsy latch and single-pane glass? It&apos;s the easiest entry point on your house. Modern patio doors have multi-point locking systems and impact-resistant glass for real peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patio Door Styles We Install</h2>
            <p className="text-xl text-gray-600">Professional installation for every door type</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <DoorClosed className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sliding Patio Doors</h3>
                <p className="text-gray-600">Smooth operation with modern energy efficiency</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">French Doors</h3>
                <p className="text-gray-600">Classic elegance with contemporary performance</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bi-Fold Doors</h3>
                <p className="text-gray-600">Space-saving design for maximum opening</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Slide Doors</h3>
                <p className="text-gray-600">Seamless indoor-outdoor living experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You&apos;ll Love About Your New Patio Door</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real improvements you&apos;ll notice every single day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DoorClosed className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Effortless Operation</h3>
              <p className="text-gray-600">
                Modern roller systems glide like butter. Open and close with one finger—no more wrestling, lifting, or kicking. Even the kids can do it.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Leaks Guaranteed</h3>
              <p className="text-gray-600">
                Properly flashed thresholds and dual weatherstripping keep water out—even during Texas downpours. We back it with our leak-free warranty.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Security</h3>
              <p className="text-gray-600">
                Multi-point locking systems, reinforced frames, and impact-resistant glass options transform your patio door from a weak point into a fortress.
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
              Patio Door Replacement in 3 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We make it easy. Here&apos;s exactly what to expect.
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
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Free Consultation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We measure your opening, assess the current condition, and discuss your style preferences. You&apos;ll get a firm quote—no games, no pressure.
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
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Choose Your Door</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sliding, French, or bi-fold? White, bronze, or custom color? We&apos;ll help you pick the perfect door for your home&apos;s style and your lifestyle.
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
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Expert Installation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our team removes the old door, properly flashes the threshold, and installs your new door—typically in one day. We clean up everything before we leave.
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
              &ldquo;Excellent work on our patio door replacement. No pressure sales, just honest service. The old door was a nightmare—we had to lift and shove it to get it open. The new one glides perfectly. Should have done this years ago.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Michael D.</p>
                <p className="text-sm text-gray-500">North Richardson, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#049BF2] bg-[#049BF2]/10 rounded-full">
              Built to Last
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Patio Doors Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium features that deliver real performance—not just pretty looks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Thermometer className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Low-E Insulated Glass</h3>
                <p className="text-gray-600">
                  Reflects heat while letting light through. Your living room stays bright without becoming a greenhouse in the Texas summer.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Point Locking</h3>
                <p className="text-gray-600">
                  Unlike single-latch doors, our systems lock at multiple points along the frame—top, bottom, and sides—for real security, not just the illusion of it.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Wind className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Flashed & Sealed Thresholds</h3>
                <p className="text-gray-600">
                  The #1 cause of patio door failure is water intrusion. We properly flash and seal every threshold to prevent leaks and protect your subfloor.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Heavy-Duty Roller System</h3>
                <p className="text-gray-600">
                  Commercial-grade tandem rollers on stainless steel tracks. Your door will glide effortlessly for decades—not just the first few months.
                </p>
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
      <ServiceFAQ serviceName="Patio Doors" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Replace Your Patio Doors?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Get your free consultation and discover how new patio doors can transform your home.
          </p>
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free patio door consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="patio-doors-final"
              data-offer="100off-per-window"
            >
              {secondaryLabel}
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
