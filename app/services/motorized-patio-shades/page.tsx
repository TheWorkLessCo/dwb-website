import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Award, CheckCircle, Phone, Clock, Sun, Smartphone } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"
import { ProofPoints } from "@/components/ProofPoints"

export const metadata: Metadata = {
  title: "Motorized Patio Shades | Dallas Window Butler",
  description:
    "Custom motorized patio shades with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
  keywords:
    "motorized patio shades, outdoor shades, patio screens, motorized screens, Dallas patio shades, Rockwall patio shades",
  openGraph: {
    title: "Motorized Patio Shades | Dallas Window Butler",
    description:
      "Custom motorized patio shades with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
    url: "https://dallaswindowbutler.com/services/motorized-patio-shades",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/motorized-patio-shades",
  },
}

export default function MotorizedPatioShadesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Motorized Patio Shades",
    description: "Beat the Texas sun with motorized patio shades—cooler patios, glare control, privacy at a button.",
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
    serviceType: "Motorized Patio Shades",
    areaServed: ["Rockwall", "McKinney", "Allen", "Plano", "North Richardson"],
    url: "https://dallaswindowbutler.com/services/motorized-patio-shades",
    sameAs: ["https://www.facebook.com/dallaswindowbutler", "https://www.instagram.com/dallaswindowbutler"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component for Navigation - Removed */}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero Section */}
      <section
        className="relative py-12 lg:py-20 min-h-[600px] flex items-center"
        style={{
          backgroundImage: "url('/images/motorized-patio-shades-hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wide">
                  Outdoor Comfort Solutions
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Motorized Patio Shades for Dallas-Area Homes
                </h1>
                <p className="text-xl text-gray-100 text-pretty">
                  Beat the Texas sun with motorized patio shades—cooler patios, glare control, privacy at a button.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Sun and bug blocks for outdoor comfort</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Wind-rated tracks for durability</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Smart-home control and outdoor fabrics</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="motorized-patio-shades-hero"
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

              {/* Trust Badges */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patio Shade Solutions</h2>
            <p className="text-xl text-gray-600">Transform your outdoor living space</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Sun className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Solar Screens</h3>
                <p className="text-gray-600">Block UV rays while maintaining visibility and airflow</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Screens</h3>
                <p className="text-gray-600">Create intimate outdoor spaces with opaque screening</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Controls</h3>
                <p className="text-gray-600">Remote, app, and voice control integration</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wind Sensors</h3>
                <p className="text-gray-600">
                  Wind sensors automatically retract shades during storms, protecting your investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Motorized Patio Shades</h2>
            <p className="text-xl text-gray-600">Extend your outdoor living season</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Temperature Control</h3>
              <p className="text-gray-600">
                Reduce patio temperatures by up to 15 degrees, making outdoor spaces comfortable even in Texas heat.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenience</h3>
              <p className="text-gray-600">
                One-touch operation with remote control, smartphone app, or smart home integration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Protection</h3>
              <p className="text-gray-600">
                Wind sensors automatically retract shades during storms, protecting your investment.
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
            <p className="text-xl text-gray-600">Professional motorized shade installation</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Site Assessment</h3>
              <p className="text-gray-600">Evaluate patio structure and electrical requirements</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Design</h3>
              <p className="text-gray-600">Fabric selection and motorization system planning</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Install</h3>
              <p className="text-gray-600">Mounting, wiring, and system programming</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">System Training</h3>
              <p className="text-gray-600">Operation demonstration and smart home setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ serviceName="Motorized Patio Shades" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for Motorized Patio Shades?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Transform your outdoor space with convenient, automated shade control.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free motorized patio shade consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="motorized-patio-shades-final"
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
