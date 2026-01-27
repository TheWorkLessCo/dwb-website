import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Heart, Clock, CheckCircle, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { CTA_CONFIG } from "@/lib/cta"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "About Us | Dallas Window Butler",
  description:
    "Meet the Dallas Window Butler team. Family-owned window replacement and glass repair experts serving North Texas with lifetime workmanship warranties.",
  keywords:
    "Dallas Window Butler, about us, window company Dallas, family owned, window replacement team, North Texas",
  openGraph: {
    title: "About Us | Dallas Window Butler",
    description:
      "Family-owned window replacement and glass repair experts serving North Texas since day one.",
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
      description: "We use only premium materials and stand behind every installation with our lifetime workmanship warranty.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your home is your sanctuary. We treat it with the respect it deserves—clean, careful, professional.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "We show up on time, communicate clearly, and complete projects when promised. No surprises.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Years of hands-on experience means we solve problems others can't. We've seen it all.",
    },
  ]

  const stats = [
    { value: "500+", label: "Windows Installed" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "Lifetime", label: "Workmanship Warranty" },
    { value: "5", label: "Cities Served" },
  ]

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://dallaswindowbutler.com/#business",
      name: "Dallas Window Butler",
      description: "Professional window replacement and glass repair services in North Texas",
      telephone: "(469) 640-8551",
      email: "info@dallaswindowbutler.com",
      url: "https://dallaswindowbutler.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1422 Sebastian Dr",
        addressLocality: "Forney",
        addressRegion: "TX",
        postalCode: "75126",
        addressCountry: "US",
      },
      foundingLocation: {
        "@type": "Place",
        name: "Forney, Texas",
      },
      slogan: "Your Windows, Our Expertise",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

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
              Family-owned and operated, we&apos;re committed to delivering exceptional window
              replacement and glass repair services across North Texas. Every project is
              personal to us.
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-6">
                  Built on Trust, Driven by Excellence
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Dallas Window Butler was founded with a simple mission: provide North Texas
                    homeowners with honest, high-quality window services they can trust. No
                    high-pressure sales tactics. No hidden fees. Just expert craftsmanship
                    and genuine care for your home.
                  </p>
                  <p>
                    As a family-owned business, we understand that your home is your biggest
                    investment. That&apos;s why we treat every project—whether it&apos;s a single
                    glass repair or a whole-house window replacement—with the same attention
                    to detail and commitment to excellence.
                  </p>
                  <p>
                    We&apos;re proud to serve communities across Rockwall, McKinney, Allen, Plano,
                    and North Richardson, building lasting relationships one window at a time.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#049bf2]/20 to-[#00152e]/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-20 h-20 text-[#049bf2] mx-auto mb-4" />
                    <p className="text-lg font-semibold text-[#00152e]">Family-Owned & Operated</p>
                    <p className="text-slate-600 mt-2">Serving North Texas</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e]">
                What Sets Us Apart
              </h2>
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

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#049bf2] bg-[#049bf2]/10 rounded-full uppercase tracking-wider">
                Service Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-4">
                Proudly Serving North Texas
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From our home base in Forney, we serve homeowners throughout the Dallas-Fort Worth metroplex.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-wrap justify-center gap-4">
            {["Rockwall", "McKinney", "Allen", "Plano", "North Richardson"].map((city, index) => (
              <AnimateOnScroll key={city} animation="fade-up" delay={index * 50}>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                  <MapPin className="w-4 h-4 text-[#049bf2]" />
                  <span className="text-slate-700 font-medium">{city}, TX</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#00152e]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your free consultation and see why North Texas homeowners trust Dallas Window Butler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="brand" className="text-lg px-8">
                <Link href={quoteHref}>{secondaryLabel}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#00152e]">
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
