import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Award, CheckCircle, Phone, Home, Palette, Wind } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"
import { ProofPoints } from "@/components/ProofPoints"

export const metadata: Metadata = {
  title: "Motorized Awnings | Dallas Window Butler",
  description:
    "Custom motorized awnings with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
  keywords: "motorized awnings, retractable awnings, outdoor awnings, patio awnings, Dallas awnings, Rockwall awnings",
  openGraph: {
    title: "Motorized Awnings | Dallas Window Butler",
    description:
      "Custom motorized awnings with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
    url: "https://dallaswindowbutler.com/services/motorized-awnings",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/motorized-awnings",
  },
}

export default function MotorizedAwningsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Motorized Awnings",
    description: "Extend outdoor living with retractable, motorized awnings built for Texas heat & wind.",
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
    serviceType: "Motorized Awnings",
    areaServed: ["Rockwall", "McKinney", "Allen", "Plano", "North Richardson"],
    url: "https://dallaswindowbutler.com/services/motorized-awnings",
    sameAs: ["https://www.facebook.com/dallaswindowbutler", "https://www.instagram.com/dallaswindowbutler"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-12 lg:py-20 min-h-[600px] flex items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/motorized-awnings-hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wide">
                  Retractable Shade Solutions
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Motorized Awnings for Dallas-Area Homes
                </h1>
                <p className="text-xl text-gray-100 text-pretty">
                  Extend outdoor living with retractable, motorized awnings built for Texas heat & wind.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">UV protection and weather resistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Wind sensors for automatic retraction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Remote/app control with color options</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="motorized-awnings-hero"
                  data-offer="design-consult"
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

              {/* Trust Badges Section */}
              <p className="text-xs text-gray-300">We'll never share your info.</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-80 pt-2">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                  <span className="text-gray-100 ml-2">112 Google reviews in Rockwall</span>
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

            {/* Right Column - Offer Card */}
            <div className="lg:justify-self-end">
              <OfferCardV2 />
            </div>
          </div>
        </div>
      </section>

      {/* ProofPoints Section */}
      <ProofPoints />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awning Solutions</h2>
            <p className="text-xl text-gray-600">Perfect shade for every outdoor space</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Patio Awnings</h3>
                <p className="text-gray-600">Large coverage areas for patios and decks</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Window Awnings</h3>
                <p className="text-gray-600">Architectural accents that reduce cooling costs</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Palette className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Colors</h3>
                <p className="text-gray-600">Wide selection of fabrics and patterns</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Wind className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wind Rated</h3>
                <p className="text-gray-600">Built to withstand Texas weather conditions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Motorized Awnings</h2>
            <p className="text-xl text-gray-600">Enhance your outdoor lifestyle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Savings</h3>
              <p className="text-gray-600">
                Reduce indoor cooling costs by blocking sun before it reaches windows and doors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatility</h3>
              <p className="text-gray-600">Retractable design provides shade when needed and full sun when desired.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Durability</h3>
              <p className="text-gray-600">High-quality fabrics and motors designed for years of reliable operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600">Professional awning installation and setup</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Site Survey</h3>
              <p className="text-gray-600">Measure space and assess mounting requirements</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Selection</h3>
              <p className="text-gray-600">Choose fabric, projection, and control options</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">Secure mounting and motor system setup</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operation Training</h3>
              <p className="text-gray-600">Remote programming and maintenance guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ serviceName="Motorized Awnings" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for Motorized Awnings?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Extend your outdoor living space with convenient, retractable shade.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free motorized awning consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="motorized-awnings-final"
              data-offer="design-consult"
            >
              Schedule Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
