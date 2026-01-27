import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Shield, Award, CheckCircle, Phone, Clock, DollarSign, MapPin, Wrench, DoorClosed, Calendar, Ruler, Sparkles } from "lucide-react"
import { ModernFAQ } from "@/components/modern-faq"
import { ComparisonEngine } from "@/components/comparison-engine"
import FinalCTABanner from "@/components/final-cta-banner"
import { WarrantyCard } from "@/components/warranty-card"
import ImageBridge from "@/components/ImageBridge"
import { ResultsBar } from "@/components/results-bar"
import { TransformationFramework } from "@/components/transformation-framework"
import { CTA_CONFIG, ALT_SECONDARY_LABEL } from "@/lib/cta"

interface CityData {
  name: string
  slug: string
  state: string
  neighborhoods: string[]
  landmarks: string[]
  localIssues: string[]
  subheadline?: string
  testimonials: Array<{
    name: string
    text: string
    rating: number
  }>
  uniqueContent?: {
    localizedText: string
    geoTaggedImage?: {
      src: string
      alt?: string
    }
  }
}

interface CustomHeadings {
  h1?: string
  h2s?: string[]
}

interface CitySeoPageProps {
  cityData: CityData
  customHeadings?: CustomHeadings
}

export function CitySeoPage({ cityData, customHeadings }: CitySeoPageProps) {
  const { name: cityName, state, neighborhoods, landmarks, localIssues, testimonials } = cityData
  const { phoneDisplay, phoneHref, quoteHref, primaryLabel, secondaryLabel } = CTA_CONFIG

  const getH1 = () => {
    if (customHeadings?.h1) return customHeadings.h1
    return `Window & Glass Replacement in ${cityName}, ${state}`
  }

  const getSubheadline = () => {
    if (cityData.subheadline) return cityData.subheadline
    return "Energy-efficient window replacement with expert glass/IG unit repair and door replacement you can trust."
  }

  const getH2s = () => {
    if (customHeadings?.h2s) return customHeadings.h2s
    if (cityName === "Rockwall") {
      return [
        "Energy-Efficient Window Replacement in Rockwall",
        "Fogged Glass & IG Unit Repair for Rockwall Homes",
        "Why Rockwall Homeowners Trust Dallas Window Butler",
      ]
    }
    if (cityName === "McKinney") {
      return [
        "Professional Window & Glass Services in McKinney",
        `What ${cityName} Homeowners Say`,
        "Why Choose Dallas Window Butler?",
      ]
    }
    if (cityName === "Allen") {
      return [
        "Professional Window & Glass Services in Allen",
        `What ${cityName} Homeowners Say`,
        "Why Choose Dallas Window Butler?",
      ]
    }
    if (cityName === "Plano") {
      return [
        "Professional Window & Glass Services in Plano",
        `What ${cityName} Homeowners Say`,
        "Why Choose Dallas Window Butler?",
      ]
    }
    if (cityName === "North Richardson") {
      return [
        "Professional Window & Glass Services in North Richardson",
        `What ${cityName} Homeowners Say`,
        "Why Choose Dallas Window Butler?",
      ]
    }
    return ["How It Works", `What ${cityName} Homeowners Say`, "Why Choose Dallas Window Butler?"]
  }

  const h2Headings = getH2s()

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dallaswindowbutler.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://dallaswindowbutler.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${cityName} Windows`,
        item: `https://dallaswindowbutler.com/${cityData.slug}-windows`,
      },
    ],
  }

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "WindowInstallation",
    "@id": `https://dallaswindowbutler.com/${cityData.slug}-windows#business`,
    name: `Dallas Window Butler - ${cityName}`,
    alternateName: "Dallas Window Butler LLC",
    telephone: "(469) 640-8551",
    url: `https://dallaswindowbutler.com/${cityData.slug}-windows`,
    image: "https://dallaswindowbutler.com/images/dwb-primary-logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1422 Sebastian Dr",
      addressLocality: "Forney",
      addressRegion: "TX",
      postalCode: "75126",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7485,
      longitude: -96.4713,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "112",
    },
    areaServed: [
      { "@type": "City", name: "Rockwall" },
      { "@type": "City", name: "McKinney" },
      { "@type": "City", name: "Allen" },
      { "@type": "City", name: "Plano" },
      { "@type": "City", name: "North Richardson" },
      { "@type": "City", name: cityName },
    ],
    sameAs: [
      "https://maps.app.goo.gl/ZmVJUtp4y1rEJQcp6",
      "https://www.facebook.com/share/1BWUJHAgi2/",
      "https://www.instagram.com/dallaswindowbutler?igsh=MW9ieDY2eDE1MDhjMg==",
    ],
  }

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://dallaswindowbutler.com/${cityData.slug}-windows#service`,
    name: `Window Replacement & Expert Glass Repair in ${cityName}`,
    serviceType: "Window Installation & Glass Repair",
    provider: { "@id": `https://dallaswindowbutler.com/${cityData.slug}-windows#business` },
    areaServed: { "@type": "Place", name: `${cityName}, TX` },
    description: `Professional window replacement, energy-efficient upgrades, and expert glass/IG unit repair services for homeowners in ${cityName}, Texas.`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }

  const jsonLdReviews = testimonials.map((testimonial, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Dallas Window Butler",
      url: "https://dallaswindowbutler.com/",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewBody: testimonial.text,
    datePublished: new Date(Date.now() - index * 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // Stagger dates
  }))

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How Our Window and Glass Process Works in ${cityName}`,
    "description": `Our simple 3-step process for getting energy-efficient windows or glass repair in your ${cityName} home.`,
    "step": [
      {
        "@type": "HowToStep",
        "name": `Book Your ${cityName} Consult`,
        "text": `Tell us your goals, window count, or glass repair needs for your ${cityName} property to get started.`,
        "url": `https://dallaswindowbutler.com/${cityData.slug}-windows#step-1`
      },
      {
        "@type": "HowToStep",
        "name": "Measurement & Diagnosis",
        "text": "We take exact measurements for your windows or diagnose your glass failure, then provide a crystal-clear quote.",
        "url": `https://dallaswindowbutler.com/${cityData.slug}-windows#step-2`
      },
      {
        "@type": "HowToStep",
        "name": `White-Glove ${cityName} Install`,
        "text": "Our in-house team ensures a leak-free finish for your new windows or glass units and leaves your job site spotless.",
        "url": `https://dallaswindowbutler.com/${cityData.slug}-windows#step-3`
      }
    ],
    "totalTime": "P2D"
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className={
          cityName === "Rockwall" || cityName === "Allen"
            ? "relative py-12 lg:py-20 min-h-[600px] flex items-center"
            : "bg-gradient-to-br from-slate-50 to-white py-12 lg:py-20"
        }
        style={
          cityName === "Rockwall"
            ? {
              backgroundImage: "url('/images/rockwall-hero-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
            : cityName === "Allen"
              ? {
                backgroundImage: "url('/images/allen-hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
              : undefined
        }
      >
        {(cityName === "Rockwall" || cityName === "Allen") && <div className="absolute inset-0 bg-black/35" />}

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="text-sm sm:text-base text-[#049BF2] font-medium uppercase tracking-wide">
                  Serving Homeowners in {cityName}, {state}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold text-white">
                  {getH1()}... <span className="font-light text-[#049BF2]">Premium Quality, Zero Sales Games.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                  {getSubheadline()}
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
                    Top brands, expert installation from in-house pros
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    Lifetime-backed workmanship (Guaranteed)
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
                  <a href={quoteHref} aria-label={`Open request form to get a free quote in ${cityName}`}>
                    {secondaryLabel}
                  </a>
                </Button>
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  Get a firm price in 30 minutes. No &apos;buy today&apos; games.
                </p>
              </div>

              <p className="text-xs text-gray-400">We&apos;ll never share your info.</p>

              {/* Trust Row */}
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

      <ResultsBar cityName={cityName} />

      {/* Transformation Framework */}
      <TransformationFramework />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      {jsonLdReviews.map((review, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}


      {/* Localized Intro - Redesigned for Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#049BF2] rounded-full text-sm font-black uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4" />
              <span>Local {cityName} Experts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00152e] leading-tight mb-6">
              The Trusted Window Butler for <br className="hidden md:block" />
              <span className="text-[#049BF2]">{cityName}</span> Neighborhoods.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* The Story/Context */}
            <div className="md:col-span-7 space-y-6">
              <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                {cityData.uniqueContent?.localizedText ? (
                  <p className="text-xl font-medium text-gray-900 border-l-4 border-[#049BF2] pl-6 py-2">
                    {cityData.uniqueContent.localizedText}
                  </p>
                ) : (
                  <p className="text-xl font-medium text-gray-900 border-l-4 border-[#049BF2] pl-6 py-2">
                    From {neighborhoods.slice(0, 2).join(" to ")} and throughout {cityName}, homeowners trust Dallas Window
                    Butler for professional window replacement and expert glass repair.
                  </p>
                )}

                <p>
                  Whether you're near {landmarks[0]} or in the heart of {neighborhoods[2]}, we understand the unique
                  challenges Texas weather brings to your home. We've helped hundreds of {cityName} families
                  upgrade their comfort while lowering their energy bills.
                </p>
              </div>

              {/* Local Issues Tags */}
              <div className="pt-6">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Common Issues We Solve Daily in {cityName}</h3>
                <div className="flex flex-wrap gap-2">
                  {localIssues.map((issue, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-bold text-slate-600 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      {issue}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Services Card */}
            <div className="md:col-span-5">
              <div className="bg-[#00152e] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#049BF2] opacity-10 rounded-full -mr-16 -mt-16 blur-3xl transition-all duration-500 group-hover:scale-150" />

                <h3 className="text-xl font-black uppercase tracking-wider mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#049BF2] rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                  Featured Services
                </h3>

                <nav className="space-y-4 relative z-10">
                  <Link
                    href="/services/window-replacement"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#049BF2] hover:border-[#049BF2] transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-white/20">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-bold">Window Replacement</span>
                    </div>
                    <Check className="w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </Link>

                  <Link
                    href="/services/glass-repair"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#049BF2] hover:border-[#049BF2] transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-white/20">
                        <Star className="w-5 h-5" />
                      </div>
                      <span className="font-bold">IG Unit Replacement</span>
                    </div>
                    <Check className="w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </Link>

                  <Link
                    href="/services/patio-doors"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#049BF2] hover:border-[#049BF2] transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-white/20">
                        <DoorClosed className="w-5 h-5" />
                      </div>
                      <span className="font-bold">Door Replacement</span>
                    </div>
                    <Check className="w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </Link>
                </nav>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/60 text-sm leading-relaxed italic">
                    "Our energy-efficient windows and expert installation help {cityName} families reduce energy costs and enhance their home's value."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process - Redesigned for Impact and SEO */}
      <section id="process" className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top translate-x-1/2" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 text-[#049BF2] rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Simple 3-Step Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00152e] mb-6">
              {h2Headings[0]}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {cityName === "Rockwall" || customHeadings?.h2s?.[0]?.includes("Energy-Efficient")
                ? "Professional installation with lifetime-backed workmanship."
                : "From initial consult to a cooler, quieter home in just 3 steps."}
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
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Book Your {cityName} Consult</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Tell us your goals, window count, or glass repair needs. We provide a firm quote in 30 minutes.
              </p>
            </div>

            {/* STEP 2 */}
            <div id="step-2" className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#049BF2] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  2
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#049BF2]">
                  <Ruler className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">Precision Measurement</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We take exact laser measurements for your windows or replacement glass to ensure an airtight fit.
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
              <h3 className="text-2xl font-black text-[#00152e] mb-4 uppercase tracking-tight">White-Glove {cityName} Install</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our in-house team installs your windows or glass and leaves your home cleaner than we found it.
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <Button
              asChild
              size="lg"
              className="bg-[#049BF2] hover:bg-[#0389d5] text-white px-10 py-6 text-xl font-black rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:-translate-y-1"
              data-source={`${cityData.slug}-process`}
              data-offer="100off-per-window"
              data-city={cityData.slug}
            >
              <Link href={quoteHref}>
                {secondaryLabel}
                <Check className="ml-3 w-6 h-6" />
              </Link>
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

      {/* Certifications Section */}
      <section className="w-full py-16 bg-white" aria-label="Certifications and Partnerships">
        <div className="w-full">
          <img
            src="/images/certifications-banner.png"
            alt="Where Integrity Meets Expertise: Certified, Accredited, and Backed by the Best in the Business - featuring ProVia, Pella, Cardinal Glass, SunPro, EPA Lead-Safe, Energy Star, and USA Today recognition"
            className="w-full h-auto object-contain max-w-7xl mx-auto px-4"
          />
        </div>
      </section>

      {/* Comparison Engine */}
      <ComparisonEngine />

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{h2Headings[1]}</h2>
            {(cityName === "Rockwall" || customHeadings?.h2s?.[1]?.includes("Glass")) && (
              <p className="text-gray-600 text-lg mb-8">
                Replace failed insulated glass units while keeping your existing frames
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name} <span className="text-gray-500 font-normal">from {cityName}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ImageBridge between testimonials and FAQ */}
      <ImageBridge />

      {/* Right For You Tiles */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is This Right For Your {cityName} Home?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cityName} Neighborhood Upgrades</h3>
                <p className="text-gray-600 mb-4">
                  Original builder windows letting energy escape? We'll upgrade your home to modern efficiency standards.
                </p>
                <Button
                  asChild
                  variant="outline"
                  data-source={`${cityData.slug}-tiles`}
                  data-offer="100off-per-window"
                  data-city={cityData.slug}
                >
                  <Link href={quoteHref}>{ALT_SECONDARY_LABEL}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloudy or Fogged View?</h3>
                <p className="text-gray-600 mb-4">
                  Failed seals blocking your {landmarks[0]} view? We replace just the glass or the entire window frame.
                </p>
                <Button
                  asChild
                  variant="outline"
                  data-source={`${cityData.slug}-tiles`}
                  data-offer="100off-per-window"
                  data-city={cityData.slug}
                >
                  <Link href={quoteHref}>{ALT_SECONDARY_LABEL}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{state} Weather Protection</h3>
                <p className="text-gray-600 mb-4">
                  Old patio doors sticking or leaking? Modern replacements improve both security and {cityName} home comfort.
                </p>
                <Button
                  asChild
                  variant="outline"
                  data-source={`${cityData.slug}-tiles`}
                  data-offer="100off-per-window"
                  data-city={cityData.slug}
                >
                  <Link href={quoteHref}>{ALT_SECONDARY_LABEL}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ModernFAQ />

      {/* City-Specific Final CTA Banners */}
      <FinalCTABanner />
    </>
  )
}
