import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, Phone, Wrench, Zap, DollarSign } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"
import { ProofPoints } from "@/components/ProofPoints"

export const metadata: Metadata = {
  title: "Glass & IG Unit Repair Services | Dallas Window Butler",
  description:
    "Professional glass and insulated glass (IG) unit repair services in Dallas-Fort Worth. Cost-effective alternative to full window replacement. Expert installation.",
  keywords:
    "glass repair, IG unit repair, insulated glass repair, window glass replacement, Dallas glass repair, broken window glass",
  openGraph: {
    title: "Glass & IG Unit Repair Services | Dallas Window Butler",
    description: "Professional glass repair and IG unit replacement with warranty",
    url: "https://dallaswindowbutler.com/services/glass-repair",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/glass-repair",
  },
}

export default function GlassRepairPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass & IG Unit Repair Services",
    description: "Professional glass repair and IG unit replacement with warranty",
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
    serviceType: "Glass Repair",
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
      name: "Glass & IG Unit Repair Service",
      description: "Professional glass repair and IG unit replacement with warranty",
      priceRange: "$",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Glass Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Broken Glass Replacement",
            description: "Replace broken or cracked window glass",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IG Unit Replacement",
            description: "Replace foggy or failed insulated glass units",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seal Repair",
            description: "Repair failed window seals and weatherstripping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Glass Repair",
            description: "Same-day emergency glass replacement services",
          },
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat py-12 lg:py-20"
        style={{ backgroundImage: "url('/images/glass-repair-hero-bg.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-white font-medium text-sm uppercase tracking-wide">Glass & IG Unit Repair</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Professional Glass & IG Unit Repair Services
                </h1>
                <p className="text-xl text-white/90 text-pretty">
                  Cost-effective alternative to full window replacement. Fix foggy windows and broken glass quickly.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white">Fogged or cracked IG units replaced without disturbing your frames</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white">Factory-sealed glass to keep moisture out so fogging doesn’t return</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white">Clean installs that protect surrounding trim, paint, and flooring</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="glass-repair-hero"
                  data-offer="glass-repair-quote"
                >
                  Get Free Assessment
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Glass Repair Services</h2>
            <p className="text-xl text-gray-600">Professional solutions for all your glass repair needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Broken Glass Replacement</h3>
                <p className="text-gray-600">Quick replacement of cracked or shattered window glass</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">IG Unit Replacement</h3>
                <p className="text-gray-600">Fix foggy windows by replacing the insulated glass unit</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seal Repair</h3>
                <p className="text-gray-600">Restore window seals and weatherstripping</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Service</h3>
                <p className="text-gray-600">Same-day emergency glass repair when you need it most</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Glass Repair Over Replacement?</h2>
            <p className="text-xl text-gray-600">Smart, cost-effective solutions that save you money</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Save 40-60% compared to full window replacement when the frame is in good condition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                Most glass repairs can be completed in a few hours, not days like full replacement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Results</h3>
              <p className="text-gray-600">
                Professional installation with warranty coverage ensures lasting performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ serviceName="Glass / IG Unit Repair" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Glass or IG Unit Repair?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Get a free assessment and discover how much you can save with professional glass repair.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free glass repair assessment with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="glass-repair-final"
              data-offer="glass-repair-quote"
            >
              Schedule Free Assessment
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
