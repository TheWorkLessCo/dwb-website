"use client"

import { Hero } from "@/components/hero"
import WhyChooseUsV2 from "@/components/why-choose-us-v2"
import ComparisonTable from "@/components/comparison-table"
import FinalCTABanner from "@/components/final-cta-banner"
import { getTrackingAttributes } from "@/lib/tracking"
import { ModernFAQ } from "@/components/modern-faq"
import ImageBridge from "@/components/ImageBridge"
import Link from "next/link"

export default function HomePage() {
  const howItWorksTrackingAttrs = getTrackingAttributes("home-how-it-works")
  const faqTrackingAttrs = getTrackingAttributes("home-faq")

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dallaswindowbutler.com/#business",
    name: "Dallas Window Butler",
    alternateName: "Dallas Window Butler LLC",
    description: "Professional window replacement and glass repair services in North Texas",
    telephone: "(469) 640-8551",
    email: "info@dallaswindowbutler.com",
    logo: "https://dallaswindowbutler.com/logo.png",
    image: "https://dallaswindowbutler.com/images/dallas-window-butler-team.jpg",
    url: "https://dallaswindowbutler.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1422 Sebastian Dr",
      addressLocality: "Forney",
      addressRegion: "TX",
      postalCode: "75126",
      addressCountry: "US",
    },
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Replacement",
            description: "Energy-efficient vinyl replacement windows",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Glass/IG Unit Replacement",
            description: "Insulated glass unit repair and replacement",
          },
        },
      ],
    },
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
    priceRange: "$$",
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dallaswindowbutler.com/#organization",
    name: "Dallas Window Butler",
    url: "https://dallaswindowbutler.com",
    logo: "https://dallaswindowbutler.com/logo.png",
    sameAs: [
      "https://www.google.com/search?q=Dallas+Window+Butler",
      "https://www.instagram.com/dallaswindowbutler",
      "https://www.facebook.com/dallaswindowbutler",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <div className="min-h-screen bg-white">
        {/* <Header /> Removed since root layout now provides it globally */}
        <main>
          {/* 1. Hero section */}
          <Hero />

          <section className="py-12 bg-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg mx-auto text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dallas Window Butler has been the trusted choice for window replacement in Rockwall, McKinney, Allen,
                  Plano, and North Richardson for over a decade. As North Texas's leading local window company, we
                  specialize in energy-efficient windows that dramatically reduce your utility bills while enhancing
                  your home's comfort and curb appeal.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our expert team understands the unique challenges of Texas weather – from scorching summers to
                  unpredictable storms. That's why we exclusively install premium vinyl replacement windows designed to
                  withstand extreme temperatures while providing superior insulation. Whether you need complete window
                  replacement or specialized glass/IG unit replacement for fogged windows, we deliver professional
                  installation backed by lifetime guarantees.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From initial consultation to final cleanup, we make the window replacement process simple and
                  stress-free. Our no-pressure approach, transparent pricing, and commitment to customer satisfaction
                  have earned us hundreds of five-star reviews from homeowners throughout the Dallas area. Experience
                  the difference that quality windows and expert craftsmanship can make for your home.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8 bg-blue-50">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Proudly Serving North Texas Homeowners</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Proudly serving Rockwall, McKinney, Allen, Plano, and North Richardson homeowners with expert window
                  replacement, professional installation, and lifetime guarantees. Your local window replacement
                  specialists are ready to transform your home's comfort and energy efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Why Choose Us */}
          <div id="why-choose-us">
            <WhyChooseUsV2 />
          </div>

          {/* 3. How It Works */}
          <section id="how-it-works" className="py-16 bg-gray-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                <p className="text-lg text-gray-600">Simple, professional window replacement in 3 easy steps</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#049BF2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Book my free consult</h3>
                  <p className="text-gray-600">Tell us your goals and window count.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#049BF2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Measure & custom order</h3>
                  <p className="text-gray-600">Exact sizing, brand options, clear quote.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#049BF2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1-day install & cleanup</h3>
                  <p className="text-gray-600">Leak-free finish, spotless job site.</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/book#form"
                  className="inline-flex items-center px-8 py-3 bg-[#049BF2] text-white font-semibold rounded-lg hover:bg-[#049BF2]/90 transition-colors"
                  {...howItWorksTrackingAttrs}
                >
                  Get My Free Quote
                </a>
              </div>
            </div>
          </section>

          <section className="w-full py-16 bg-white" aria-label="Certifications and Partnerships">
            <div className="w-full">
              <img
                src="/images/certifications-banner.png"
                alt="Where Integrity Meets Expertise: Certified, Accredited, and Backed by the Best in the Business - featuring ProVia, Pella, Cardinal Glass, SunPro, EPA Lead-Safe, Energy Star, and USA Today recognition"
                className="w-full h-auto object-contain max-w-7xl mx-auto px-0 sm:px-4"
              />
            </div>
          </section>

          {/* 4. Comparison Table */}
          <div id="comparison">
            <ComparisonTable />
          </div>

          <section className="w-full bg-[#049BF2] py-0" aria-label="Customer Testimonial Highlights">
            <img
              src="/images/customer-quotes-banner.png"
              alt="Customer testimonials highlighting Dallas Window Butler's punctual, professional service with 5-star Google reviews"
              className="w-full h-auto object-cover block"
            />
          </section>

          {/* 5. Testimonials / Reviews */}
          <section id="testimonials" className="w-full" aria-label="Customer Reviews">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">What Dallas-Area Homeowners Are Saying</h2>
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

          <ImageBridge />

          {/* 6. FAQ */}
          <div id="faq">
            <ModernFAQ />
          </div>

          <section className="py-12 bg-blue-50">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Looking for window replacement near you? Explore our service areas for localized information and
                  customer reviews:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/rockwall-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore Rockwall window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Rockwall
                  </Link>
                  <Link
                    href="/mckinney-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore McKinney window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    McKinney
                  </Link>
                  <Link
                    href="/allen-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore Allen window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Allen
                  </Link>
                  <Link
                    href="/plano-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore Plano window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Plano
                  </Link>
                  <Link
                    href="/north-richardson-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore North Richardson window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    North Richardson
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Final CTA banner */}
          <div id="final-cta">
            <FinalCTABanner />
          </div>
        </main>
      </div>
    </>
  )
}
