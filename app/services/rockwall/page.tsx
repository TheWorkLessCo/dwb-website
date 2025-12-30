import type { Metadata } from "next"
import { CityServicePage } from "@/components/city-service-page"
import { cityData } from "@/lib/city-data"

export const metadata: Metadata = {
  title: "Window Replacement in Rockwall, TX | #1 Local Window Company",
  description:
    "Trusted for professional window replacement, glass/IG unit repair, and door replacement in Rockwall, TX. Energy-efficient Low-E windows and lifetime-backed installs. Get a free quote today!",
  keywords: "window replacement Rockwall TX, Rockwall window installers, glass repair Rockwall, vinyl windows Rockwall Texas",
  alternates: {
    canonical: "https://dallaswindowbutler.com/services/rockwall",
  },
}

export default function RockwallServicePage() {
  const rockwallData = cityData.rockwall

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dallaswindowbutler.com/services/rockwall",
    name: "Dallas Window Butler - Rockwall",
    telephone: "(469) 640-8551",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1422 Sebastian Dr",
      addressLocality: "Forney",
      addressRegion: "TX",
      postalCode: "75126",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Rockwall",
      addressRegion: "TX",
    },
    url: "https://dallaswindowbutler.com/services/rockwall",
    sameAs: ["https://www.google.com/search?q=Dallas+Window+Butler+Rockwall"],
    serviceType: "Window Installation",
    description:
      "Professional window and door replacement serving Rockwall, TX homeowners with energy-efficient solutions and lifetime warranty.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "112",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you service homes in Rockwall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We proudly serve Rockwall and surrounding areas with professional window and door replacement services.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical install take here?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Rockwall home installations are completed in a single day, depending on the number of windows being replaced.",
        },
      },
      {
        "@type": "Question",
        name: "Can you replace just the glass instead of the whole window?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we can replace just the insulated glass (IG) unit in many cases, which is often more cost-effective than full window replacement.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work on brick cut-outs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We have extensive experience with brick cut-outs and masonry work, ensuring a perfect fit and professional finish.",
        },
      },
      {
        "@type": "Question",
        name: "Is the warranty transferable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our lifetime workmanship warranty transfers to new homeowners, adding value to your Rockwall property.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CityServicePage cityData={rockwallData} />
    </>
  )
}
