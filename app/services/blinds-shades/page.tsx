import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Award, CheckCircle, Phone, Home, Wrench, Clock, Sun } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import ServiceFAQ from "@/components/ServiceFAQ"

export const metadata: Metadata = {
  title: "Blinds & Shades | Dallas Window Butler",
  description:
    "Custom blinds & shades with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
  keywords:
    "blinds, shades, window treatments, custom blinds, motorized blinds, Dallas blinds, Rockwall blinds, McKinney blinds",
  openGraph: {
    title: "Blinds & Shades | Dallas Window Butler",
    description:
      "Custom blinds & shades with expert install, transparent pricing, and lifetime-backed workmanship for Dallas–area homes.",
    url: "https://dallaswindowbutler.com/services/blinds-shades",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/blinds-shades",
  },
}

export default function BlindsAndShadesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Blinds & Shades",
    description: "Custom blinds & shades tailored to Texas light and privacy—measured, installed, guaranteed.",
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
    serviceType: "Blinds & Shades",
    areaServed: ["Rockwall", "McKinney", "Allen", "Plano", "North Richardson"],
    url: "https://dallaswindowbutler.com/services/blinds-shades",
    sameAs: ["https://www.facebook.com/dallaswindowbutler", "https://www.instagram.com/dallaswindowbutler"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-12 lg:py-20 min-h-[600px] flex items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blinds-shades-hero-bg.jpg')",
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
                  Custom Window Treatments
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Blinds & Shades for Dallas-Area Homes
                </h1>
                <p className="text-xl text-gray-100 text-pretty">
                  Custom blinds & shades tailored to Texas light and privacy—measured, installed, guaranteed.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Light control and energy savings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Child-safe options available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                  <span className="text-gray-100">Blackout bedrooms and motorization-ready</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="blinds-shades-hero"
                  data-offer="design-consult"
                >
                  Get My Design Consult
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

              <div className="pt-6 space-y-2">
                <p className="text-xs text-gray-300">We'll never share your info.</p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-90">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Styles & Options</h2>
            <p className="text-xl text-gray-600">Perfect window treatments for every room</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Horizontal Blinds</h3>
                <p className="text-gray-600">Classic aluminum and wood blinds for precise light control</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vertical Blinds</h3>
                <p className="text-gray-600">Perfect for sliding doors and large windows</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Sun className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Roller Shades</h3>
                <p className="text-gray-600">Clean, modern look with blackout and light-filtering options</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cellular Shades</h3>
                <p className="text-gray-600">Energy-efficient honeycomb design for insulation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Blinds & Shades</h2>
            <p className="text-xl text-gray-600">Transform your home with custom window treatments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Light Control</h3>
              <p className="text-gray-600">
                Precise control over natural light and privacy with adjustable slats and opacity options.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Savings</h3>
              <p className="text-gray-600">
                Reduce heating and cooling costs with insulating cellular shades and UV-blocking materials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Fit</h3>
              <p className="text-gray-600">
                Professional measurement and installation ensures perfect fit and smooth operation.
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
            <p className="text-xl text-gray-600">Professional service from consultation to completion</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">In-home design consultation and measurement</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Order</h3>
              <p className="text-gray-600">Precision manufacturing to your exact specifications</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Install</h3>
              <p className="text-gray-600">Expert installation with attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">Final inspection and operation demonstration</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ serviceName="Blinds & Shades" />

      {/* Final CTA */}
      <section className="py-6 md:py-8 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for Custom Blinds & Shades?</h2>
          <p className="text-lg text-white/90 mb-4 mt-2">
            Get your free design consultation and discover the perfect window treatments for your home.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free blinds and shades design consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-6 py-2 text-base font-semibold"
              data-source="blinds-shades-final"
              data-offer="design-consult"
            >
              Schedule Free Design Consult
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
