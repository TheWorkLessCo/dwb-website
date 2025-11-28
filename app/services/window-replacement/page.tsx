import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Award, CheckCircle, Phone, Home, Wrench, Clock } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"
import { ProofPoints } from "@/components/ProofPoints"

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
        streetAddress: "1422 Sebastian Dr",
        addressLocality: "Forney",
        addressRegion: "TX",
        postalCode: "75126",
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
          backgroundImage: "url('/images/window-replacement-hero-bg.jpg')",
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
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wide">
                  Professional Window Replacement
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Energy-Efficient Window Replacement Services
                </h1>
                <p className="text-xl text-gray-100 text-pretty">
                  Transform your home with premium windows. Expert installation, lifetime warranty, and distributor
                  pricing.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">All major window brands available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Energy Star certified options</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Lifetime workmanship warranty</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="window-replacement-hero"
                  data-offer="100off-per-window"
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-brand-blue bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (469) 640-8551
                </Button>
              </div>

              <p className="text-xs text-gray-300">We'll never share your info.</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-90 pt-2">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                  <span className="text-gray-200 ml-2">112 Google reviews in Rockwall</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-gray-200">
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

            {/* Right Column - Offer Card */}
            <div className="lg:justify-self-end">
              <OfferCardV2 />
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <ProofPoints />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Window Replacement Services</h2>
            <p className="text-xl text-gray-600">Professional installation for every window type</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Single & Double Hung</h3>
                <p className="text-gray-600">Classic window styles with modern energy efficiency</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Casement Windows</h3>
                <p className="text-gray-600">Side-hinged windows for maximum ventilation</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bay & Bow Windows</h3>
                <p className="text-gray-600">Specialty windows that add space and light</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sliding Windows</h3>
                <p className="text-gray-600">Easy operation with contemporary styling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Window Replacement?</h2>
            <p className="text-xl text-gray-600">Quality installation that lasts a lifetime</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Brands</h3>
              <p className="text-gray-600">
                We work with all major window manufacturers to offer you the best selection and pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">
                AAMA certified master installers ensure perfect fit and professional finish every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">
                Our leak-free guarantee and lifetime workmanship warranty protect your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
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
              Schedule Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Footer Component */}
    </div>
  )
}
