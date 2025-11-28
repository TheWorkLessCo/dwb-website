import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Shield, CheckCircle, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Customer Testimonials | Dallas Window Butler",
  description:
    "Read real reviews from satisfied Dallas-area homeowners who trusted Dallas Window Butler for expert window, glass, and door services.",
  keywords:
    "Dallas Window Butler reviews, customer testimonials, window replacement reviews, Rockwall reviews, McKinney reviews, Allen reviews",
  openGraph: {
    title: "Customer Testimonials | Dallas Window Butler",
    description:
      "Real feedback from satisfied clients who trusted Dallas Window Butler for expert window, glass, and door services.",
    url: "https://dallaswindowbutler.com/testimonials",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/testimonials",
  },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      city: "Rockwall, TX",
      rating: 5,
      text: "Professional, clean install and top-notch workmanship. Our new windows look amazing!",
    },
    {
      name: "James T.",
      city: "McKinney, TX",
      rating: 5,
      text: "Dallas Window Butler made the process easy from quote to completion. Highly recommend!",
    },
    {
      name: "Emily R.",
      city: "Allen, TX",
      rating: 5,
      text: "They replaced all our fogged glass units—great communication and fair pricing.",
    },
    {
      name: "Robert K.",
      city: "Plano, TX",
      rating: 5,
      text: "Fast, courteous, and family-owned. Couldn't ask for better service.",
    },
    {
      name: "Jennifer L.",
      city: "Wylie, TX",
      rating: 5,
      text: "The team was professional and respectful of our home. Windows are beautiful and energy-efficient!",
    },
    {
      name: "Michael D.",
      city: "Garland, TX",
      rating: 5,
      text: "Excellent work on our patio door replacement. No pressure sales, just honest service.",
    },
  ]

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
    datePublished: new Date(Date.now() - index * 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/testimonials-hero-bg.jpeg)" }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              What Dallas-Area Homeowners Are Saying
            </h1>
            <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
              Real feedback from satisfied clients who trusted Dallas Window Butler for expert window, glass, and door
              services.
            </p>
            <div className="pt-4">
              <a
                href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get free quote from Dallas Window Butler"
              >
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="testimonials-hero"
                >
                  Get My Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Reviews</h2>
            <p className="text-xl text-gray-600">Hear from our satisfied customers across the Dallas area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-brand-blue opacity-50" />
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold text-lg">112+ Google Reviews</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2 py-2 px-4">
                <CheckCircle className="h-5 w-5 text-brand-blue" />
                <span className="font-medium">Energy Star Partner</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 py-2 px-4">
                <Shield className="h-5 w-5 text-brand-blue" />
                <span className="font-medium">Fully Insured</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 py-2 px-4">
                <Award className="h-5 w-5 text-brand-blue" />
                <span className="font-medium">BBB Accredited</span>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Review Invitation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 lg:p-12 text-center border border-gray-200">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-brand-blue" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Have we served your home?</h2>
              <p className="text-xl text-gray-600">
                We'd love your feedback! Share your experience and help other Dallas-area homeowners make informed
                decisions.
              </p>
              <div className="pt-4">
                <a
                  href="https://maps.app.goo.gl/ZmVJUtp4y1rEJQcp6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Leave a review for Dallas Window Butler on Google"
                >
                  <Button
                    size="lg"
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                    data-source="testimonials-review-cta"
                  >
                    Leave a Review
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Satisfied Customers?</h2>
          <p className="text-xl text-white/90 mb-6">
            Get your free consultation and discover why Dallas-area homeowners trust us with their windows and doors.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free consultation with Dallas Window Butler"
          >
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 px-8"
              data-source="testimonials-final"
            >
              Schedule Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
