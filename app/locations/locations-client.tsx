"use client"

import Link from "next/link"
import { MapPin, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const cities = [
  {
    name: "Rockwall, TX",
    href: "/rockwall-windows",
    bullets: ["Best window replacement in Rockwall", "Energy-efficient Low-E + lifetime workmanship"],
    buttonText: "View Rockwall Services",
  },
  {
    name: "McKinney, TX",
    href: "/mckinney-windows",
    bullets: ["HOA/historic-friendly options", "Fast installs, leak-free guarantee"],
    buttonText: "View McKinney Services",
  },
  {
    name: "Allen, TX",
    href: "/allen-windows",
    bullets: ["Master-planned community expertise", "Energy-efficient upgrades for modern homes"],
    buttonText: "View Allen Services",
  },
  {
    name: "Plano, TX",
    href: "/plano-windows",
    bullets: ["Established neighborhood upgrades", "HOA compliance in master-planned communities"],
    buttonText: "View Plano Services",
  },
  {
    name: "North Richardson, TX",
    href: "/north-richardson-windows",
    bullets: ["Urban noise reduction windows", "Modern efficiency for mixed housing"],
    buttonText: "View North Richardson Services",
  },
]

const faqs = [
  {
    question: "Do you charge extra travel fees between cities?",
    answer: "No. If you're inside our listed service areas, there are no additional travel fees.",
  },
  {
    question: "How quickly can you install after measuring?",
    answer:
      "Most custom orders arrive in 2–4 weeks. Installations are typically completed in 1–2 days once materials arrive.",
  },
  {
    question: "Are your warranties valid across all cities?",
    answer: "Yes. Our lifetime workmanship warranty applies in every listed service area.",
  },
]

export default function LocationsClient() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 pt-6 md:pt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Service Areas — Dallas Window Butler
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                We provide the best window replacement, expert glass/IG unit repair, and professional door replacement
                across Rockwall and nearby cities. Find your city below and get a no-pressure quote.
              </p>

              {/* Internal linking sentence with city links */}
              <p className="text-lg text-gray-600 mb-8 text-pretty">
                We specialize in{" "}
                <Link href="/rockwall-windows" className="text-[#049BF2] hover:underline">
                  window replacement in Rockwall
                </Link>
                ,{" "}
                <Link href="/mckinney-windows" className="text-[#049BF2] hover:underline">
                  window replacement in McKinney
                </Link>
                ,{" "}
                <Link href="/allen-windows" className="text-[#049BF2] hover:underline">
                  window replacement in Allen
                </Link>
                ,{" "}
                <Link href="/plano-windows" className="text-[#049BF2] hover:underline">
                  window replacement in Plano
                </Link>
                , and{" "}
                <Link href="/north-richardson-windows" className="text-[#049BF2] hover:underline">
                  window replacement in North Richardson
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Card
                    key={city.name}
                    className="rounded-xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-t-[#049BF2]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-6 h-6 text-[#049BF2] mr-3" />
                        <h2 className="text-xl font-semibold text-gray-900">{city.name}</h2>
                      </div>

                      <div className="space-y-2 mb-6">
                        {city.bullets.map((bullet, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#049BF2] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        size="sm"
                        className="w-full bg-[#049BF2] hover:bg-[#0380d1] text-white shadow-sm hover:shadow-md transition-all"
                      >
                        <Link href={city.href}>{city.buttonText}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Copy */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dallas Window Butler serves homeowners across Rockwall, McKinney, Allen, Plano, and North Richardson
                with best-in-class window replacement. We also offer insulated glass (IG) unit repair to fix fogging and
                broken seals, plus professional door replacement. Our clean, no-pressure consultations, lifetime
                workmanship warranty, and 5-star reviews make upgrading your home simple and stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#049BF2] focus:ring-inset"
                      onClick={(e) => {
                        const content = e.currentTarget.nextElementSibling as HTMLElement
                        const isOpen = content.style.display !== "none"
                        content.style.display = isOpen ? "none" : "block"
                        e.currentTarget.setAttribute("aria-expanded", (!isOpen).toString())
                      }}
                      aria-expanded="false"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                        <span className="text-[#049BF2] text-xl font-bold">+</span>
                      </div>
                    </button>
                    <div className="px-6 pb-4 bg-gray-50" style={{ display: "none" }}>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="py-16 bg-[#049BF2]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Lock in $100 off per window today. Special discounts for seniors & military.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#049BF2] hover:bg-gray-100 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="#quote">GET A FREE QUOTE</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#049BF2] px-8 py-3 bg-transparent"
                >
                  <Link href="tel:+14696408551">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (469) 640-8551
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
