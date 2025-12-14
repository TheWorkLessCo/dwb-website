import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Award, CheckCircle, Phone } from "lucide-react"
import { OfferCardV2 } from "@/components/offer-card-v2"
import { ModernFAQ } from "@/components/modern-faq"
import { CTA_CONFIG, ALT_SECONDARY_LABEL } from "@/lib/cta"

interface CityData {
  name: string
  state: string
  description: string
  commonIssues: string[]
  testimonials: Array<{
    name: string
    location: string
    text: string
    rating: number
    image?: string
  }>
}

interface CityServicePageProps {
  cityData: CityData
}

export function CityServicePage({ cityData }: CityServicePageProps) {
  const { name, state, description, commonIssues, testimonials } = cityData
  const { phoneDisplay, phoneHref, quoteHref, primaryLabel, secondaryLabel } = CTA_CONFIG

  const reviewsJsonLd = testimonials.map((testimonial, index) => ({
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
    datePublished: new Date(Date.now() - index * 45 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // Stagger dates
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-brand-blue font-medium text-sm uppercase tracking-wide">
                  Serving Homeowners in {name}, {state}
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
                  Window Replacement in {name}, {state}
                </h1>
                <p className="text-xl text-gray-600 text-pretty">
                  Energy-efficient window replacement with expert glass/IG unit repair and door replacement you can
                  trust.
                </p>
              </div>

              {/* Hero Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span className="text-gray-700">No-pressure in-home consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span className="text-gray-700">Top brands, expert installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span className="text-gray-700">Lifetime-backed workmanship</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source={`${name.toLowerCase()}-hero`}
                  data-offer="100off-per-window"
                  data-city={name.toLowerCase()}
                  asChild
                >
                  <Link href={quoteHref}>{secondaryLabel}</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-blue text-brand-blue hover:bg-slate-50 bg-transparent"
                  asChild
                >
                  <a href={phoneHref} aria-label={`Call Dallas Window Butler at ${phoneDisplay}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {phoneDisplay}
                  </a>
                </Button>
              </div>

              {/* Micro-trust */}
              <p className="text-sm text-gray-500">We'll never share your info.</p>
            </div>

            {/* Right Column - Offer Card */}
            <div className="lg:justify-self-end">
              <OfferCardV2 />
            </div>
          </div>
        </div>
      </section>

      {/* Mini Social Proof Row */}
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">112+ Google Reviews in Rockwall & nearby</span>
            </div>
            <div className="flex items-center gap-6">
              <Badge variant="outline" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Energy Star Partner
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Fully Insured
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                BBB Accredited
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" aria-label="Customer Reviews">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">What {name} Homeowners Are Saying</h2>
            <a
              href="https://maps.app.goo.gl/ZmVJUtp4y1rEJQcp6"
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a review
            </a>
          </div>

          <div className="rounded-2xl border shadow-sm bg-white/95 dark:bg-slate-900/70 p-2 sm:p-3">
            <link rel="preconnect" href="https://go.dallaswindowbutler.com" />
            <script
              type="text/javascript"
              src="https://go.dallaswindowbutler.com/reputation/assets/review-widget.js"
              defer
            ></script>
            <iframe
              className="lc_reviews_widget block w-full"
              src="https://go.dallaswindowbutler.com/reputation/widgets/review_widget/9Kg5geu4xzsAgIVkpkA8"
              title="Customer Reviews Carousel"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
              scrolling="no"
              style={{
                width: "100%",
                minHeight: "560px",
                border: "0",
                display: "block",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </section>

      {/* Localized Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving {name} Homeowners Since 2020</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">{description}</p>
            <p className="mb-6">
              Common window issues we see in {name} include {commonIssues.join(", ")}. As a local business, Dallas
              Window Butler understands the unique needs of {name} families and provides personalized service you can
              trust.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Serve {name} Homeowners</h2>
            <p className="text-xl text-gray-600">Simple process, professional results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book my free consult</h3>
              <p className="text-gray-600">Tell us your goals and window count for your {name} home.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Measure & custom order</h3>
              <p className="text-gray-600">Exact sizing, brand options, clear quote for your {name} project.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1-day install & cleanup</h3>
              <p className="text-gray-600">Leak-free finish, spotless job site in your {name} neighborhood.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
              data-source={`${name.toLowerCase()}-process`}
              data-offer="100off-per-window"
              data-city={name.toLowerCase()}
              asChild
            >
              <Link href={quoteHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What {name} Homeowners Say</h2>
            <p className="text-xl text-gray-600">Real reviews from your neighbors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    {testimonial.image && (
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ModernFAQ title="Frequently Asked Questions" subtitle={`Common questions from ${name} homeowners`} />
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-slate-50 rounded-2xl p-8">
            <Shield className="h-16 w-16 text-brand-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leak-Free or We Fix It Free</h2>
            <p className="text-xl text-gray-600 mb-6">
              We stand behind every installation in {name} with our lifetime workmanship guarantee.
            </p>
            <Button
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
              data-source={`${name.toLowerCase()}-guarantee`}
              data-offer="100off-per-window"
              data-city={name.toLowerCase()}
              asChild
            >
              <Link href={quoteHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Upgrade Your {name} Home?</h2>
              <p className="text-xl text-gray-600 mb-6">
                Join hundreds of satisfied homeowners in {name} who trust Dallas Window Butler.
              </p>
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                data-source={`${name.toLowerCase()}-final`}
                data-offer="100off-per-window"
                data-city={name.toLowerCase()}
                asChild
              >
                <Link href={quoteHref}>{ALT_SECONDARY_LABEL}</Link>
              </Button>
            </div>
            <div>
              <OfferCardV2 />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
