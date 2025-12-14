import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Award, CheckCircle, Phone, Droplets, Wrench, TestTube } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"

export const metadata: Metadata = {
  title: "Waterproofing & Sealing | Dallas Window Butler",
  description:
    "Custom waterproofing & sealing with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
  keywords:
    "waterproofing, window sealing, door sealing, leak repair, flashing repair, Dallas waterproofing, Rockwall sealing",
  openGraph: {
    title: "Waterproofing & Sealing | Dallas Window Butler",
    description:
      "Custom waterproofing & sealing with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
    url: "https://dallaswindowbutler.com/services/waterproofing-sealing",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/waterproofing-sealing",
  },
}

export default function WaterproofingSealingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Waterproofing & Sealing",
    description:
      "Stop leaks before they start—professional window/door waterproofing & sealing with lifetime-backed workmanship.",
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
    serviceType: "Waterproofing & Sealing",
    areaServed: ["Rockwall", "McKinney", "Allen", "Plano", "North Richardson"],
    url: "https://dallaswindowbutler.com/services/waterproofing-sealing",
    sameAs: ["https://www.facebook.com/dallaswindowbutler", "https://www.instagram.com/dallaswindowbutler"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-12 lg:py-20 min-h-[600px] flex items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/waterproofing-sealing-hero-bg.jpg')",
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
                  Leak Prevention Services
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Waterproofing & Sealing for Dallas-Area Homes
                </h1>
                <p className="text-xl text-gray-100 text-pretty">
                  Stop leaks before they start—professional window/door waterproofing & sealing with lifetime-backed
                  workmanship.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Full perimeter sealing with backer rod to stop air and water intrusion</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Sill pans, flashing, and weeps rebuilt so water exits instead of pooling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Pressure-tested openings until they stay dry through storms</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="waterproofing-sealing-hero"
                  data-offer="leak-inspection"
                >
                  Get Free Inspection
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

              <div className="pt-6 space-y-3">
                <p className="text-xs text-gray-300">We'll never share your info.</p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-90">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                    <span className="text-white ml-2">112 Google reviews in Rockwall</span>
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
            </div>

            {/* Right Column - Offer Card */}
            <div className="lg:justify-self-end">
              <OfferCardV2 />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Waterproofing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive leak prevention solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Droplets className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Window Sealing</h3>
                <p className="text-gray-600">Complete perimeter sealing and weatherstripping</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flashing Repair</h3>
                <p className="text-gray-600">Professional flashing installation and repair</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sill Pan Install</h3>
                <p className="text-gray-600">Proper drainage systems for window sills</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <TestTube className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Testing</h3>
                <p className="text-gray-600">Comprehensive leak detection and verification</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Waterproofing & Sealing</h2>
            <p className="text-xl text-gray-600">Protect your home from water damage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prevent Damage</h3>
              <p className="text-gray-600">
                Stop water intrusion before it causes costly structural damage, mold, or interior issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficiency</h3>
              <p className="text-gray-600">
                Proper sealing reduces air leaks, improving HVAC efficiency and lowering energy bills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Peace of Mind</h3>
              <p className="text-gray-600">
                Professional waterproofing with lifetime warranty protects your investment long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600">Thorough waterproofing and sealing service</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Leak Inspection</h3>
              <p className="text-gray-600">Comprehensive assessment of potential problem areas</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Repair Plan</h3>
              <p className="text-gray-600">Detailed scope of waterproofing work needed</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Sealing</h3>
              <p className="text-gray-600">Expert application of sealants and flashing</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Testing</h3>
              <p className="text-gray-600">Final verification of leak-free performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ serviceName="Waterproofing & Sealing" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for Waterproofing & Sealing?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Protect your home from water damage with professional sealing services.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free waterproofing and sealing inspection with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="waterproofing-sealing-final"
              data-offer="leak-inspection"
            >
              Schedule Free Inspection
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
