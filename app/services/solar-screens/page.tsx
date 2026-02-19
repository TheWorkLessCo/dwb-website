import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Check, Shield, Sun, Thermometer, Eye, Zap, Quote, DollarSign, Palette, Wrench, Calendar, Ruler, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { WarrantyCard } from "@/components/warranty-card"
import ServiceFAQ from "@/components/ServiceFAQ"
import ImageBridge from "@/components/ImageBridge"
import { ResultsBar } from "@/components/results-bar"
import { CTA_CONFIG } from "@/lib/cta"

export const metadata: Metadata = {
  title: "Solar Screen Installation Services | Dallas Window Butler",
  description:
    "Professional solar screen installation services in Dallas-Fort Worth. Reduce heat, glare, and UV rays while maintaining your view. Expert installation, lifetime warranty. Serving Rockwall, McKinney, Allen & more.",
  keywords:
    "solar screens, sun screens, window screens, heat reduction, UV protection, Dallas solar screens, Rockwall screens, McKinney screens",
  openGraph: {
    title: "Solar Screen Installation Services | Dallas Window Butler",
    description:
      "Professional solar screen installation services in Dallas-Fort Worth. Reduce heat, glare, and UV rays while maintaining your view.",
    url: "https://dallaswindowbutler.com/services/solar-screens",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/solar-screens",
  },
}

export default function SolarScreensPage() {
  const { phoneDisplay, phoneHref, quoteHref, secondaryLabel } = CTA_CONFIG

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar Screen Installation Services",
    description:
      "Professional solar screen installation services including custom screens, heat reduction, UV protection, and lifetime warranty coverage.",
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
    serviceType: "Solar Screen Installation",
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
      name: "Solar Screen Installation Service",
      description: "Professional solar screen installation with lifetime warranty",
      priceRange: "$",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Screen Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Solar Screens",
            description: "Custom solar screens for windows",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Patio Door Screens",
            description: "Solar screens for patio doors",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Screen Repair",
            description: "Repair and replacement of existing screens",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Screens",
            description: "Custom-sized screens for unique applications",
          },
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-white to-white py-12 lg:py-20 min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/solar-screens-hero-bg.jpeg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">
                  Professional Solar Screen Installation
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold text-white">
                  Custom Solar Screen Installation For Your DFW Home... <span className="font-light text-[#049BF2]">Beat The Texas Heat, Save On Bills.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                  Reduce heat, glare, and UV rays while maintaining your view. Custom screens with expert installation
                  and lifetime warranty.
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
                    Stainless and UV-safe hardware so screens don’t rust or warp
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
                  <a href={quoteHref} aria-label={secondaryLabel} data-source="solar-screens-hero" data-offer="100off-per-window">
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
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Is the Sun Winning the Battle in Your Home?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              West-facing windows and open floor plans make Texas summers brutal indoors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Bills Through the Roof</h3>
              <p className="text-gray-600">
                Your AC runs constantly from April to October. Those south and west windows let in so much heat that your HVAC can&apos;t keep up.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Glare Ruins Every Room</h3>
              <p className="text-gray-600">
                You can&apos;t watch TV, work on your computer, or even relax without squinting. Closing the blinds makes the room feel like a cave.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Furniture Is Fading Fast</h3>
              <p className="text-gray-600">
                That new sofa is already showing sun damage. Hardwood floors are discoloring. UV rays are destroying your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solar Screen Installation Services</h2>
            <p className="text-xl text-gray-600">Professional solutions for heat and glare reduction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Sun className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Window Solar Screens</h3>
                <p className="text-gray-600">Custom screens for all window types and sizes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Thermometer className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Patio Door Screens</h3>
                <p className="text-gray-600">Large format screens for sliding and French doors</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Screen Repair</h3>
                <p className="text-gray-600">Repair and replacement of existing damaged screens</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Applications</h3>
                <p className="text-gray-600">Specialty screens for unique window configurations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Solar Screens?</h2>
            <p className="text-xl text-gray-600">Comfort, savings, and protection for your home</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Thermometer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Savings</h3>
              <p className="text-gray-600">
                Reduce cooling costs by up to 30% with professional solar screen installation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UV Protection</h3>
              <p className="text-gray-600">Protect furniture, flooring, and artwork from harmful UV rays and fading.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintain Your View</h3>
              <p className="text-gray-600">Enjoy clear visibility while reducing glare and heat from the Texas sun.</p>
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Simple process, lasting results
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
                We evaluate your home&apos;s sun exposure and recommend the right screen density (70%, 80%, or 90% shade factor) for each window.
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
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Custom Fabrication</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Every screen is built to your exact window dimensions with your choice of frame color to match your home&apos;s exterior.
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
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Professional Install</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We mount each screen with stainless steel hardware and verify proper fit. You&apos;ll feel the temperature difference immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-brand-blue/20" />
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                &ldquo;Our west-facing living room was unusable from 3pm on during summer. After solar screens, it&apos;s comfortable all day and our electric bill dropped $60/month. I can still see out clearly—it just looks slightly tinted. Should have done this years ago.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-blue font-semibold text-lg">TL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teresa L.</p>
                  <p className="text-gray-600">Allen, TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Screen Materials</h2>
            <p className="text-xl text-gray-600">Commercial-grade materials built to last in Texas weather</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Thermometer className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">90% Heat Reduction</h3>
              <p className="text-sm text-gray-600">High-density mesh blocks solar heat before it enters your home</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Shield className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">UV Protection</h3>
              <p className="text-sm text-gray-600">Blocks 99% of harmful UV rays that fade furniture and flooring</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Palette className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Color Options</h3>
              <p className="text-sm text-gray-600">Frame colors to match your trim—bronze, white, tan, and more</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Wrench className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Stainless Hardware</h3>
              <p className="text-sm text-gray-600">Rust-proof mounting hardware that won&apos;t streak your siding</p>
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
      <ServiceFAQ serviceName="Solar Screens" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Beat the Texas Heat?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Get your free consultation and discover how solar screens can transform your comfort.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free solar screen consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="solar-screens-final"
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
