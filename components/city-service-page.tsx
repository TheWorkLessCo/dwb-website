import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Award, CheckCircle, Phone, Check } from "lucide-react"
import { ModernFAQ } from "@/components/modern-faq"
import { ResultsBar } from "@/components/results-bar"
import { CTA_CONFIG, ALT_SECONDARY_LABEL } from "@/lib/cta"
import { getTrackingAttributes } from "@/lib/tracking"

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
  const trackingAttrs = getTrackingAttributes(`${name.toLowerCase()}-hero`)

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
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/placeholder-hkn4k.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Copy */}
              <div className="text-white space-y-6 lg:space-y-8">
                <div className="text-xs sm:text-sm text-[#049BF2] font-bold uppercase tracking-[0.15em] opacity-90">
                  Premium replacement windows for {name} homeowners
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance font-bold">
                    Premium Window Services in {name}... <span className="font-light text-[#049BF2]">Minus The Markup.</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed text-pretty">
                    Stop overpaying for the 'big brand' markup in {name}. Get custom-fitted, energy-efficient vinyl windows installed by our in-house 'White Glove' pros. No pressure, no gimmicks—just a flawless install.
                  </p>
                </div>

                {/* Trust bullets */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Your {name} Home Stays Clean (No Subcontractors)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Bills Go Down (Energy Efficient Vinyl)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#049BF2] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                      Zero Sales Pressure (Guaranteed)
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    size="lg"
                    className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold w-full sm:w-auto shadow-xl transform transition-transform hover:scale-[1.02]"
                    asChild
                  >
                    <a href={quoteHref} aria-label={secondaryLabel} {...trackingAttrs}>
                      {secondaryLabel}
                    </a>
                  </Button>
                  <p className="text-sm sm:text-base text-gray-300 font-medium">
                    Get a firm price in 30 minutes. No "buy today" games.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm opacity-90 pt-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-yellow-400 tracking-tighter">⭐⭐⭐⭐⭐</div>
                    <span className="text-gray-200 font-medium">100+ reviews</span>
                  </div>
                  <span className="hidden sm:block text-gray-600">|</span>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Energy Star Partner</span>
                  </div>
                  <span className="hidden sm:block text-gray-600">|</span>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <span>🛡️</span>
                    <span>Fully Insured</span>
                  </div>
                  <span className="hidden sm:block text-gray-600">|</span>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <span>🏆</span>
                    <span>BBB Accredited</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Leak-Free Badge */}
              <div className="w-full max-w-full mx-auto lg:mx-0 lg:justify-self-end flex justify-center lg:justify-end items-center">
                <img
                  src="/images/leak-free-guarantee-badge.png"
                  alt="Lifetime Leak-Free Guarantee"
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Bar (Outcomes) */}
      <ResultsBar cityName={name} variant="primary" />

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
              <span className="text-gray-700 font-medium">100+ reviews in North Texas</span>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Window Solutions For {name} Homeowners</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">{description}</p>
            <p className="mb-6">
              Homeowners in {name} frequently deal with {commonIssues.join(", ")}. Our team provides specialized solutions for {name}'s unique architectural styles and climate challenges, ensuring a perfect fit and maximum energy savings every time.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Your {name} Consult</h3>
              <p className="text-gray-600">Tell us your specific goals and window count for your {name} home.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision {name} Measurement</h3>
              <p className="text-gray-600">Custom sizing for your property, premium brand options, and a clear quote.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert {name} Installation</h3>
              <p className="text-gray-600">Lifetime leak-free finish and a spotless cleanup in your {name} neighborhood.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-8 py-4 h-auto text-lg font-bold rounded-md shadow-lg transform transition-transform hover:scale-[1.02]"
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
              className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-8 py-4 h-auto text-lg font-bold rounded-md shadow-lg transform transition-transform hover:scale-[1.02]"
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
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your {name} Window Project Today</h2>
          <p className="text-xl text-gray-600 mb-6">
            Join the satisfied homeowners in {name} who have upgraded their energy efficiency and curb appeal with our white-glove service.
          </p>
          <Button
            size="lg"
            className="bg-[#049BF2] hover:bg-[#049BF2]/90 text-white px-8 py-4 h-auto text-lg font-bold rounded-md shadow-lg transform transition-transform hover:scale-[1.02]"
            data-source={`${name.toLowerCase()}-final`}
            data-offer="100off-per-window"
            data-city={name.toLowerCase()}
            asChild
          >
            <Link href={quoteHref}>{ALT_SECONDARY_LABEL}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
