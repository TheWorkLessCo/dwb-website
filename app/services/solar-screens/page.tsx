import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, Phone, Sun, Thermometer, Eye, Zap } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"
import ProofPoints from "@/components/ProofPoints"

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
        streetAddress: "1422 Sebastian Dr",
        addressLocality: "Forney",
        addressRegion: "TX",
        postalCode: "75126",
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
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-white font-medium text-sm uppercase tracking-wide">
                  Professional Solar Screen Installation
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Solar Screen Installation Services
                </h1>
                <p className="text-xl text-white/90 text-pretty">
                  Reduce heat, glare, and UV rays while maintaining your view. Custom screens with expert installation
                  and lifetime warranty.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white">Custom-fit frames that won’t rattle or sag in Texas wind</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white">Heat-cutting mesh chosen to reduce glare without killing your view</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white">Stainless and UV-safe hardware so screens don’t rust or warp</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-white/90 px-8"
                  data-source="solar-screens-hero"
                  data-offer="100off-per-window"
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (469) 640-8551
                </Button>
              </div>

              {/* Trust Badges Section */}
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

      {/* ProofPoints Section */}
      <ProofPoints />

      {/* Services Grid */}
      <section className="py-16">
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
              Schedule Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
