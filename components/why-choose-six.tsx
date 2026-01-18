"use client"

import { useEffect } from "react"
import Image from "next/image"

interface WhyChooseSixProps {
  cityName: string
}

export function WhyChooseSix({ cityName }: WhyChooseSixProps) {
  useEffect(() => {
    if (typeof window === "undefined") return
    const nodes = Array.from(document.querySelectorAll('section#why-choose[data-whychoose="v2-6card"]'))
    if (nodes.length > 1) {
      const keep = nodes.find((n) => n.getAttribute("data-owner") === "locations-city") || nodes[0]
      nodes.forEach((n) => {
        if (n !== keep) n.remove()
      })
    }
  }, [])

  return (
    <section id="why-choose" data-whychoose="v2-6card" data-owner="locations-city" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why {cityName} Homeowners Choose Dallas Window Butler
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've built our reputation on trust, quality, and exceptional service. Here's what sets us apart from other
            window replacement companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Personal Consultation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/smiling-rep-at-a-kitchen-table-with-homeowners--sa.jpg"
                alt={`Personal consultation with ${cityName} homeowners`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Consultation</h3>
              <p className="text-gray-600">
                We take time to understand your specific needs, budget, and style preferences with an in-home
                consultation that puts you first.
              </p>
            </div>
          </div>

          {/* Card 2: Expert Installation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/close-up-of-pro-applying-flashing-sill-pan.jpg"
                alt={`Expert window installation in ${cityName}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Installation</h3>
              <p className="text-gray-600">
                Our certified installers follow strict quality standards and use proper techniques to ensure your
                windows perform perfectly for decades.
              </p>
            </div>
          </div>

          {/* Card 3: Clean & Respectful */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/two-techs-finishing-install--tidy-jobsite.jpg"
                alt={`Clean and respectful installation team in ${cityName}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clean & Respectful</h3>
              <p className="text-gray-600">
                We treat your home with respect, protect your belongings, and leave your space cleaner than we found it.
              </p>
            </div>
          </div>

          {/* Card 4: Transparent Pricing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/quote-on-tablet-across-a-table--homeowner-reviewin.jpg"
                alt={`Transparent pricing discussion with ${cityName} homeowner`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprise costs. You'll know exactly what you're paying for before we start, with
                detailed written estimates.
              </p>
            </div>
          </div>

          {/* Card 5: Beautiful Results */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/sunlit-living-room--clear-view-through-new-windows.jpg"
                alt={`Beautiful window results in ${cityName} home`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beautiful Results</h3>
              <p className="text-gray-600">
                Your new windows will transform your home's appearance, improve energy efficiency, and increase your
                property value.
              </p>
            </div>
          </div>

          {/* Card 6: Proven Track Record */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/review-collage-or-homeowner-in-front-of-home-with-.jpg"
                alt={`Happy ${cityName} customers with their new windows`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Hundreds of satisfied customers and countless 5-star reviews prove our commitment to excellence in every
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
