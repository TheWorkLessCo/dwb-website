import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Shield, Award, CheckCircle, Phone, Clock, DollarSign } from "lucide-react"
import { ModernFAQ } from "@/components/modern-faq"
import ComparisonTable from "@/components/comparison-table"
import FinalCTABanner from "@/components/final-cta-banner"
import RockwallComparisonTable from "@/components/rockwall-comparison-table"
import { McKinneyComparisonTable } from "@/components/mckinney-comparison-table"
import { WarrantyCard } from "@/components/warranty-card"
import { WhyChooseSix } from "@/components/why-choose-six"
import ImageBridge from "@/components/ImageBridge"
import { ResultsBar } from "@/components/results-bar"
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
    return `Window Replacement in ${cityName}, ${state}`
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
        "Professional Window Replacement in McKinney",
        `What ${cityName} Homeowners Say`,
        "Why Choose Dallas Window Butler?",
      ]
    }
    if (cityName === "Allen") {
      return [
        "Professional Window Replacement in Allen",
        `What ${cityName} Homeowners Say`,
        "Why Choose Dallas Window Butler?",
      ]
    }
    if (cityName === "Plano") {
      return [
        "Professional Window Replacement in Plano",
        `What ${cityName} Homeowners Say`,
        "Why Choose Dallas Window Butler?",
      ]
    }
    if (cityName === "North Richardson") {
      return [
        "Professional Window Replacement in North Richardson",
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
    name: `Window Replacement & Glass Repair in ${cityName}`,
    serviceType: "Window Installation",
    provider: { "@id": `https://dallaswindowbutler.com/${cityData.slug}-windows#business` },
    areaServed: { "@type": "Place", name: `${cityName}, TX` },
    description: `Professional window replacement, energy-efficient upgrades, and expert glass repair services for homeowners in ${cityName}, Texas.`,
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {jsonLdReviews.map((review, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}


      {/* Localized Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto text-center">
            {cityData.uniqueContent?.localizedText ? (
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {cityData.uniqueContent.localizedText}
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed mb-8">
                From {neighborhoods.slice(0, 2).join(" to ")} and throughout {cityName}, homeowners trust Dallas Window
                Butler for professional window and door replacement. Whether you're near {landmarks[0]} or in the heart of{" "}
                {neighborhoods[2]}, we understand the unique challenges Texas weather brings to your home.
              </p>
            )}

            {/* Featured Services section */}
            <section aria-label={`Featured Services in ${cityName}`} className="mt-6">
              <h2 className="text-lg font-semibold">Featured Services in {cityName}</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  <a
                    href="https://dallaswindowbutler.com/services/window-replacement"
                    className="text-brand-blue hover:text-brand-blue-dark transition-colors"
                  >
                    Window Replacement in {cityName}
                  </a>
                </li>
                <li>
                  <a
                    href="https://dallaswindowbutler.com/services/glass-repair"
                    className="text-brand-blue hover:text-brand-blue-dark transition-colors"
                  >
                    Fogged Glass / IG Unit Replacement in {cityName}
                  </a>
                </li>
                <li>
                  <a
                    href="https://dallaswindowbutler.com/services/door-replacement"
                    className="text-brand-blue hover:text-brand-blue-dark transition-colors"
                  >
                    Door Replacement in {cityName}
                  </a>
                </li>
              </ul>
            </section>

            <p className="text-gray-700 leading-relaxed">
              {localIssues.join(", ")} are common issues we solve daily. Our energy-efficient windows and expert
              installation help {cityName} families reduce energy costs, eliminate drafts, and enhance their home's
              comfort and value.
            </p>
          </div>
        </div>
      </section>

      {/* City-Specific Why Choose Us Section */}
      {[`Rockwall`, `McKinney`, `Allen`, `Plano`, `North Richardson`].includes(cityName) && (
        <WhyChooseSix cityName={cityName} />
      )}

      {/* 3-Step Process */}
      <section id="process" className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{h2Headings[0]}</h2>
            <p className="text-gray-600 text-lg">
              {cityName === "Rockwall" || customHeadings?.h2s?.[0]?.includes("Energy-Efficient")
                ? "Professional installation with lifetime-backed workmanship"
                : "Simple process, professional results"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Your {cityName} Consult</h3>
              <p className="text-gray-600">Tell us your goals & window count for your {cityName} property.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Measurement & Ordering</h3>
              <p className="text-gray-600">Exact sizing for your home, brand options, and a crystal-clear quote.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">White-Glove {cityName} Install</h3>
              <p className="text-gray-600">Leak-free finish and a spotless job site in your neighborhood.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-dark"
              data-source={`${cityData.slug}-process`}
              data-offer="100off-per-window"
              data-city={cityData.slug}
            >
              <Link href={quoteHref}>{secondaryLabel}</Link>
            </Button>
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

      {/* City-Specific Comparison Tables */}
      {cityName === "Rockwall" ? (
        <RockwallComparisonTable />
      ) : cityName === "McKinney" ? (
        <McKinneyComparisonTable />
      ) : (
        <ComparisonTable />
      )}

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
