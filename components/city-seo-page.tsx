import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, Shield, Award, Clock, DollarSign } from "lucide-react"
import { ModernFAQ } from "@/components/modern-faq"
import ComparisonTable from "@/components/comparison-table"
import FinalCTABanner from "@/components/final-cta-banner"
import RockwallComparisonTable from "@/components/rockwall-comparison-table"
import { McKinneyComparisonTable } from "@/components/mckinney-comparison-table"
import { OfferCardV2 } from "@/components/offer-card-v2"
import { WhyChooseSix } from "@/components/why-choose-six"
import ImageBridge from "@/components/ImageBridge"

interface CityData {
  name: string
  slug: string
  state: string
  neighborhoods: string[]
  landmarks: string[]
  localIssues: string[]
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

  const getH1 = () => {
    if (customHeadings?.h1) return customHeadings.h1
    return `Window Replacement in ${cityName}, ${state}`
  }

  const getSubheadline = () => {
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
    name: "Dallas Window Butler",
    telephone: "(469) 640-8551",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1422 Sebastian Dr",
      addressLocality: "Forney",
      addressRegion: "TX",
      postalCode: "75126",
      addressCountry: "US",
    },
    areaServed: [cityName, "Rockwall", "McKinney", "Allen", "Plano", "North Richardson"],
    url: `https://dallaswindowbutler.com/${cityData.slug}-windows`,
    sameAs: ["https://www.google.com/search?q=Dallas+Window+Butler"],
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
            <div className="space-y-6">
              <div className="space-y-4">
                <p
                  className={`font-medium text-sm uppercase tracking-wide ${
                    cityName === "Rockwall" || cityName === "Allen" ? "text-brand-blue-light" : "text-brand-blue"
                  }`}
                >
                  Serving Homeowners in {cityName}, {state}
                </p>
                <h1
                  className={`text-4xl lg:text-5xl font-bold text-balance ${
                    cityName === "Rockwall" || cityName === "Allen" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {getH1()}
                </h1>
                <p
                  className={`text-xl text-pretty ${cityName === "Rockwall" || cityName === "Allen" ? "text-gray-100" : "text-gray-600"}`}
                >
                  {getSubheadline()}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Primary CTA */}
                <a
                  href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#049BF2] px-6 py-3 text-white font-semibold shadow-md hover:bg-[#038ad8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#049BF2] transition"
                  aria-label="Open request form to get a free quote"
                >
                  Get My Free Quote
                </a>

                {/* Phone CTA */}
                <a
                  href="tel:+14696408551"
                  className="inline-flex items-center justify-center rounded-md border border-[#049BF2] px-6 py-3 text-[#049BF2] font-semibold hover:bg-[#049BF2] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#049BF2] transition"
                  aria-label="Call Dallas Window Butler at (469) 640-8551"
                >
                  Call (469) 640-8551
                </a>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className={`h-5 w-5 flex-shrink-0 ${cityName === "Rockwall" || cityName === "Allen" ? "text-brand-blue-light" : "text-brand-blue"}`}
                  />
                  <span className={cityName === "Rockwall" || cityName === "Allen" ? "text-gray-100" : "text-gray-700"}>
                    No-pressure in-home consultation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className={`h-5 w-5 flex-shrink-0 ${cityName === "Rockwall" || cityName === "Allen" ? "text-brand-blue-light" : "text-brand-blue"}`}
                  />
                  <span className={cityName === "Rockwall" || cityName === "Allen" ? "text-gray-100" : "text-gray-700"}>
                    Top brands, expert installation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className={`h-5 w-5 flex-shrink-0 ${cityName === "Rockwall" || cityName === "Allen" ? "text-brand-blue-light" : "text-brand-blue"}`}
                  />
                  <span className={cityName === "Rockwall" || cityName === "Allen" ? "text-gray-100" : "text-gray-700"}>
                    Lifetime-backed workmanship
                  </span>
                </div>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span
                    className={`text-sm ml-1 ${cityName === "Rockwall" || cityName === "Allen" ? "text-gray-200" : "text-gray-600"}`}
                  >
                    100+ Local Reviews
                  </span>
                </div>
                <Badge
                  variant={cityName === "Rockwall" || cityName === "Allen" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  Google Reviews
                </Badge>
                <Badge
                  variant={cityName === "Rockwall" || cityName === "Allen" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  Fully Licensed
                </Badge>
                <Badge
                  variant={cityName === "Rockwall" || cityName === "Allen" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  BBB Accredited
                </Badge>
              </div>
            </div>

            {/* Right Column - Offer Card */}
            <div className="lg:justify-self-end w-full max-w-md">
              <OfferCardV2
                primaryCtaHref="/book#form"
                primaryCtaLabel="CLAIM MY DISCOUNT"
                tel="+14696408551"
                telDisplay="(469) 640-8551"
                showPhoneCta={true}
              />
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {jsonLdReviews.map((review, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}

      {/* Mini Social Proof Row */}
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-medium">100+ Local Reviews</span>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              Energy Star Partner
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Fully Insured
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              BBB Accredited
            </Badge>
          </div>
        </div>
      </section>

      {/* Localized Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              From {neighborhoods.slice(0, 2).join(" to ")} and throughout {cityName}, homeowners trust Dallas Window
              Butler for professional window and door replacement. Whether you're near {landmarks[0]} or in the heart of{" "}
              {neighborhoods[2]}, we understand the unique challenges Texas weather brings to your home.
            </p>

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
              <h3 className="text-xl font-semibold mb-2">Book my free consult</h3>
              <p className="text-gray-600">Tell us goals & window count.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Measure & custom order</h3>
              <p className="text-gray-600">Exact sizing, brand options, clear quote.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">1-day install & cleanup</h3>
              <p className="text-gray-600">Leak-free finish, spotless job site.</p>
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
              <Link href="/book#form">Get My Free Quote</Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is This Right For You?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Drafty 90s Home</h3>
                <p className="text-gray-600 mb-4">
                  Single-pane windows letting energy escape? We'll upgrade you to modern efficiency.
                </p>
                <Button
                  asChild
                  variant="outline"
                  data-source={`${cityData.slug}-tiles`}
                  data-offer="100off-per-window"
                  data-city={cityData.slug}
                >
                  <Link href="/book#form">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fogged IG Units</h3>
                <p className="text-gray-600 mb-4">
                  Cloudy windows blocking your view? We replace just the glass or the entire window.
                </p>
                <Button
                  asChild
                  variant="outline"
                  data-source={`${cityData.slug}-tiles`}
                  data-offer="100off-per-window"
                  data-city={cityData.slug}
                >
                  <Link href="/book#form">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patio Door Upgrade</h3>
                <p className="text-gray-600 mb-4">
                  Sliding door sticking or leaking? Modern replacements improve security and efficiency.
                </p>
                <Button
                  asChild
                  variant="outline"
                  data-source={`${cityData.slug}-tiles`}
                  data-offer="100off-per-window"
                  data-city={cityData.slug}
                >
                  <Link href="/book#form">Schedule Visit</Link>
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
