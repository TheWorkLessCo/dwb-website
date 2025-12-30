import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Award, CheckCircle, Phone, Home, Wrench, Clock, DoorClosed } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"
import { ProofPoints } from "@/components/ProofPoints"
import { OutcomeSection } from "@/components/OutcomeSection"
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
        streetAddress: "1422 Sebastian Dr",
        addressLocality: "Forney",
        addressRegion: "TX",
        postalCode: "75126",
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
        style={{ backgroundImage: "url('/images/patio-doors-hero-bg.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-white font-medium text-sm uppercase tracking-wide">
                  Professional Patio Door Replacement
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Energy-Efficient Patio Door Replacement Services
                </h1>
                <p className="text-xl text-white/90 text-pretty">
                  Transform your outdoor connection with premium patio doors. Expert installation, lifetime warranty,
                  and distributor pricing.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100 uppercase font-bold text-[13px]">VIRTUAL QUOTES & MOCK UPS AVAILABLE</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100 uppercase font-bold text-[13px]">LIFETIME WARRANTY ON LABOR & MATERIALS</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Thresholds flashed and sealed to prevent leaks and swelling after storms</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={quoteHref} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 w-full sm:w-auto"
                    data-source="patio-doors-hero"
                    data-offer="100off-per-window"
                  >
                    {secondaryLabel}
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-brand-blue bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <a href={phoneHref}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {phoneDisplay}
                  </a>
                </Button>
              </div>

              {/* Trust Badges Section */}
              <p className="text-xs text-gray-300">We'll never share your info.</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-90 pt-2">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                  <span className="text-gray-200 ml-2">112 Google reviews in Forney</span>
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

      {/* Outcome Section */}
      <OutcomeSection />

      {/* ProofPoints Section */}
      <ProofPoints />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patio Door Replacement Services</h2>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Patio Door Replacement?</h2>
            <p className="text-xl text-gray-600">Quality installation that enhances your home</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Brands</h3>
              <p className="text-gray-600">
                We work with all major door manufacturers to offer you the best selection and pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">
                Certified installers ensure perfect fit and professional finish every time.
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
