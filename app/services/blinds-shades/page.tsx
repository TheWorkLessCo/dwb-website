import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Check, Shield, Home, Wrench, Clock, Sun, Eye, Thermometer, Quote, Layers, Calendar, Ruler, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { WarrantyCard } from "@/components/warranty-card"
import ServiceFAQ from "@/components/ServiceFAQ"
import ImageBridge from "@/components/ImageBridge"
import { ResultsBar } from "@/components/results-bar"
import { CTA_CONFIG } from "@/lib/cta"

export const metadata: Metadata = {
  title: "Blinds & Shades | Dallas Window Butler",
  description:
    "Custom blinds & shades with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
  keywords:
    "blinds, shades, window treatments, custom blinds, motorized blinds, Dallas blinds, Rockwall blinds, McKinney blinds",
  openGraph: {
    title: "Blinds & Shades | Dallas Window Butler",
    description:
      "Custom blinds & shades with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
    url: "https://dallaswindowbutler.com/services/blinds-shades",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/blinds-shades",
  },
}

export default function BlindsAndShadesPage() {
  const { quoteHref, secondaryLabel } = CTA_CONFIG
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Blinds & Shades",
    description: "Custom blinds & shades tailored to Texas light and privacy—measured, installed, guaranteed.",
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
    serviceType: "Blinds & Shades",
    areaServed: ["Rockwall", "McKinney", "Allen", "Plano", "North Richardson"],
    url: "https://dallaswindowbutler.com/services/blinds-shades",
    sameAs: ["https://www.facebook.com/dallaswindowbutler", "https://www.instagram.com/dallaswindowbutler"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-12 lg:py-20 min-h-[600px] flex items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blinds-shades-hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">
                  Custom Window Treatments
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold text-white">
                  Custom Blinds & Shades For Your DFW Home... <span className="font-light text-[#049BF2]">Luxury Control For Every Window.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                  Custom blinds & shades tailored to Texas light and privacy—measured, installed, guaranteed.
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
                      In-house measure & install so every shade sits level and tight
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
                  <a href={quoteHref} aria-label={secondaryLabel} data-source="blinds-shades-hero" data-offer="design-consult">
                    {secondaryLabel}
                  </a>
                </Button>
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  Get a firm price in 30 minutes. No &apos;buy today&apos; games.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <p className="text-xs text-gray-400">We&apos;ll never share your info.</p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-80 pt-2">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                    <span className="text-gray-200 ml-2">100+ reviews</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-gray-100">
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
              Tired of Fighting With Your Windows?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many homeowners struggle with window treatments that just don&apos;t work right
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Privacy When You Need It</h3>
              <p className="text-gray-600">
                Neighbors can see in, but your current blinds either block all light or none at all. You shouldn&apos;t have to choose between privacy and natural light.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hot Spots & Glare</h3>
              <p className="text-gray-600">
                The Texas sun turns certain rooms into ovens. Your AC runs constantly, and you still can&apos;t watch TV without squinting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tangled Cords & Broken Slats</h3>
              <p className="text-gray-600">
                Cheap builder-grade blinds that came with your home are falling apart. Cords tangle, slats break, and they look dated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Styles & Options</h2>
            <p className="text-xl text-gray-600">Perfect window treatments for every room</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Horizontal Blinds</h3>
                <p className="text-gray-600">Classic aluminum and wood blinds for precise light control</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vertical Blinds</h3>
                <p className="text-gray-600">Perfect for sliding doors and large windows</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Sun className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Roller Shades</h3>
                <p className="text-gray-600">Clean, modern look with blackout and light-filtering options</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cellular Shades</h3>
                <p className="text-gray-600">Energy-efficient honeycomb design for insulation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Difference Custom Makes</h2>
            <p className="text-xl text-gray-600">Transform your home with window treatments that actually work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Light Control</h3>
              <p className="text-gray-600">
                Dial in exactly the light you want—from full sun to complete blackout—with precision-engineered slats and opacity options.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Thermometer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lower Energy Bills</h3>
              <p className="text-gray-600">
                Cellular shades create insulating air pockets that reduce heat gain in summer and heat loss in winter—cutting cooling costs up to 25%.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Measured to Fit</h3>
              <p className="text-gray-600">
                Every window is measured by our installers—not you guessing with a tape measure. The result: blinds that sit level and operate smoothly for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section id="process" className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top translate-x-1/2" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 text-[#049BF2] rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Simple 4-Step Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#00152e] mb-6">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional service from consultation to completion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/4 left-[12%] right-[12%] h-0.5 bg-blue-100 -z-10" />

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
              <h3 className="text-xl font-black text-[#00152e] mb-3 uppercase tracking-tight">Free Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                In-home design consultation and measurement
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
              <h3 className="text-xl font-black text-[#00152e] mb-3 uppercase tracking-tight">Custom Order</h3>
              <p className="text-gray-600 leading-relaxed">
                Precision manufacturing to your exact specifications
              </p>
            </div>

            {/* STEP 3 */}
            <div id="step-3" className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  3
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#00152e] mb-3 uppercase tracking-tight">Professional Install</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert installation with attention to detail
              </p>
            </div>

            {/* STEP 4 */}
            <div id="step-4" className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  4
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#00152e] mb-3 uppercase tracking-tight">Quality Check</h3>
              <p className="text-gray-600 leading-relaxed">
                Final inspection and operation demonstration
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
                &ldquo;We had cellular shades installed in every room of our house. The difference in temperature control is amazing—our upstairs used to be unbearable in summer. Now it stays comfortable all day. The installers were meticulous about getting every shade perfectly level.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-blue font-semibold text-lg">KM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Karen M.</p>
                  <p className="text-gray-600">McKinney, TX</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality That Lasts</h2>
            <p className="text-xl text-gray-600">Premium materials and construction for lasting performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Layers className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Honeycomb Cells</h3>
              <p className="text-sm text-gray-600">Air-trapping cellular design provides superior insulation and energy efficiency</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Shield className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">UV Protection</h3>
              <p className="text-sm text-gray-600">Block up to 99% of harmful UV rays that fade furniture and flooring</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Sun className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Light Filtering Options</h3>
              <p className="text-sm text-gray-600">From sheer to blackout—choose the opacity that suits each room</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Clock className="h-10 w-10 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Cordless Safety</h3>
              <p className="text-sm text-gray-600">Child-safe cordless designs with smooth lift mechanisms</p>
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
      <ServiceFAQ serviceName="Blinds & Shades" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for Custom Blinds & Shades?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Get your free design consultation and discover the perfect window treatments for your home.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free blinds and shades design consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="blinds-shades-final"
              data-offer="design-consult"
            >
              {secondaryLabel}
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

