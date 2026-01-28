import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Award,
  Users,
  Heart,
  Clock,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Quote,
  Leaf,
  BadgeCheck,
  Handshake,
  Home,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CTA_CONFIG } from "@/lib/cta"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "About Us | Dallas Window Butler - Family-Owned Window Experts",
  description:
    "Meet the Dallas Window Butler team. Family-owned and operated window replacement and glass repair experts serving Rockwall, McKinney, Allen, Plano & North Richardson with lifetime workmanship warranties.",
  keywords:
    "Dallas Window Butler, about us, window company Dallas, family owned, window replacement team, North Texas, Nathan B founder, lifetime warranty windows",
  openGraph: {
    title: "About Dallas Window Butler | Family-Owned Window Experts",
    description:
      "Family-owned window replacement and glass repair experts serving North Texas. No high-pressure sales, just honest service with a lifetime workmanship warranty.",
    url: "https://dallaswindowbutler.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/about",
  },
}

export default function AboutPage() {
  const { quoteHref, phoneHref, secondaryLabel } = CTA_CONFIG

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We use only premium materials from trusted manufacturers like ProVia, Pella, and Cardinal Glass—and stand behind every installation with our lifetime workmanship warranty.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description:
        "Your home is your sanctuary. We treat it with the respect it deserves—covering furniture, protecting floors, and leaving your home cleaner than we found it.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "We show up on time, communicate clearly, and complete projects when promised. No surprises, no excuses—just dependable service you can count on.",
    },
    {
      icon: Award,
      title: "Expertise",
      description:
        "With hands-on experience in both window replacement and glass/IG unit repair, we solve problems others can't. We've seen it all and know what works for Texas homes.",
    },
  ]

  const stats = [
    { value: "1000+", label: "Windows Installed" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "Lifetime", label: "Workmanship Warranty" },
    { value: "5", label: "Cities Served" },
  ]

  const credentials = [
    { icon: Leaf, label: "Energy Star Partner" },
    { icon: BadgeCheck, label: "BBB Accredited" },
    { icon: Shield, label: "Fully Insured" },
    { icon: CheckCircle, label: "EPA Lead-Safe Certified" },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      city: "Rockwall, TX",
      text: "Professional, clean install and top-notch workmanship. Our new windows look amazing!",
    },
    {
      name: "Robert K.",
      city: "Plano, TX",
      text: "Fast, courteous, and family-owned. Couldn't ask for better service.",
    },
    {
      name: "Emily R.",
      city: "Allen, TX",
      text: "They replaced all our fogged glass units—great communication and fair pricing.",
    },
  ]

  const promises = [
    {
      icon: Handshake,
      title: "No High-Pressure Sales",
      description: "We quote fair prices upfront. No 3-hour kitchen-table negotiations, no fake discounts that expire today.",
    },
    {
      icon: Users,
      title: "100% In-House Team",
      description: "Every technician is a Dallas Window Butler employee—never a random subcontractor you've never met.",
    },
    {
      icon: Home,
      title: "White-Glove Service",
      description: "We cover furniture, protect floors, and vacuum every speck of dust. Your home stays cleaner than we found it.",
    },
    {
      icon: Wrench,
      title: "Leak-Free Guarantee",
      description: "Our Lifetime Workmanship Warranty and Leak-Free Extended Service Agreement mean you're covered—period.",
    },
  ]

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://dallaswindowbutler.com/#business",
      name: "Dallas Window Butler",
      legalName: "Dallas Window Butler LLC",
      description:
        "Family-owned professional window replacement and glass repair services in North Texas. Serving Rockwall, McKinney, Allen, Plano, and North Richardson with lifetime workmanship warranties.",
      telephone: "(469) 640-8551",
      email: "info@dallaswindowbutler.com",
      url: "https://dallaswindowbutler.com",
      foundingDate: "2022",
      address: {
        "@type": "PostalAddress",
        streetAddress: "112 Nathan Dr.",
        addressLocality: "Princeton",
        addressRegion: "TX",
        postalCode: "75407",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Rockwall", addressRegion: "TX" },
        { "@type": "City", name: "McKinney", addressRegion: "TX" },
        { "@type": "City", name: "Allen", addressRegion: "TX" },
        { "@type": "City", name: "Plano", addressRegion: "TX" },
        { "@type": "City", name: "North Richardson", addressRegion: "TX" },
      ],
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Energy Star Partner" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "BBB Accredited Business" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "EPA Lead-Safe Certified" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "100",
        bestRating: "5",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00152e] via-[#001a3a] to-[#00152e]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#049bf2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#049bf2]/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 max-w-5xl text-center">
          <AnimateOnScroll animation="fade-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#049bf2] bg-[#049bf2]/10 rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet <span className="text-[#049bf2]">Dallas Window Butler</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Family-owned and operated, we&apos;re committed to delivering exceptional window replacement and glass
              repair services across North Texas. Every project is personal to us—because we know your home is personal
              to you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#049bf2]">{stat.value}</div>
                  <div className="text-slate-600 text-sm mt-1">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/owner-portrait.jpg"
                    alt="Dallas Window Butler team member in branded shirt"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Trust Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#049bf2]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#049bf2]" />
                  </div>
                  <span className="text-sm font-bold text-[#00152e] leading-tight">
                    Lifetime Warranty
                    <br />
                    on Every Install
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-6">
                  You Deserve Respect, Not a Sales Pitch.
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    We started Dallas Window Butler because we watched DFW homeowners get treated like transactions by
                    the big guys—just another number on a quota sheet. You shouldn&apos;t have to fight off a
                    high-pressure closer just to get a fair price on your own home.
                  </p>
                  <p>
                    That&apos;s why we operate as the <strong className="text-[#00152e]">Window Butler</strong>. We
                    bring a white-glove standard to construction. From the first step inside your home to the final
                    walkthrough, we treat your property the way a butler would—with precision, respect, and care.
                  </p>
                  <p>
                    But premium service shouldn&apos;t require a premium budget. By eliminating commissioned
                    salespeople, we deliver <strong className="text-[#00152e]">distributor-priced windows</strong> and
                    glass with craftsman-grade installation. You pay for the materials and the labor—not the bloat.
                  </p>
                  <p>
                    Our team takes pride in every project. When you work with Dallas Window Butler, you&apos;re working
                    with people who genuinely care about doing the job right—not just getting to the next sale.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                Our Promise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-4">
                The &ldquo;Window Butler&rdquo; Difference
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We&apos;re not just another window company. Here&apos;s what sets us apart from the big-box
                competitors.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <Card variant="elevated" className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#049bf2]/10 flex items-center justify-center">
                        <promise.icon className="w-6 h-6 text-[#049bf2]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#00152e] mb-2">{promise.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{promise.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-12 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-[#00152e]">Trusted & Accredited</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-600">
                  <credential.icon className="w-5 h-5 text-[#049bf2]" />
                  <span className="font-medium text-sm">{credential.label}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e]">What Drives Every Project</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <Card variant="elevated" className="p-6">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#049bf2]/10 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-[#049bf2]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#00152e] mb-2">{value.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                Customer Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-4">What Homeowners Are Saying</h2>
              <p className="text-slate-600">Real feedback from families across North Texas.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <Card className="h-full bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Quote className="h-5 w-5 text-[#049bf2] opacity-50" />
                    </div>
                    <p className="text-slate-700 mb-4 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-[#00152e]">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.city}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <Button asChild variant="outline" className="border-[#049bf2] text-[#049bf2] hover:bg-[#049bf2] hover:text-white">
                <Link href="/testimonials">Read More Reviews</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                Service Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-4">Proudly Serving North Texas</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From our home base in Princeton, we serve homeowners throughout these DFW communities with the same
                white-glove service.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-wrap justify-center gap-4">
            {["Rockwall", "McKinney", "Allen", "Plano", "North Richardson"].map((city, index) => (
              <AnimateOnScroll key={city} animation="fade-up" delay={index * 50}>
                <Link
                  href={`/${city.toLowerCase().replace(" ", "-")}-windows`}
                  className="flex items-center gap-2 px-5 py-3 bg-slate-50 rounded-full border border-slate-200 shadow-sm hover:border-[#049bf2] hover:bg-[#049bf2]/5 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#049bf2]" />
                  <span className="text-slate-700 font-medium">{city}, TX</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00152e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#049bf2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#049bf2]/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your free consultation and see why North Texas homeowners trust Dallas Window Butler with their
              biggest investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="brand" className="text-lg px-8">
                <Link href={quoteHref}>{secondaryLabel}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#00152e]"
              >
                <a href={phoneHref} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (469) 640-8551
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
