import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in Allen, TX | Dallas Window Butler",
  description:
    "Dallas Window Butler provides energy-efficient, expert window replacement in Allen, TX. Fast installs, lifetime warranty, trusted locally. Get your free quote today!",
  keywords:
    "window replacement Allen TX, door replacement Allen, energy efficient windows Allen, window installation Allen Texas, Watters Creek windows",
  openGraph: {
    title: "Best Window Replacement in Allen, TX | Dallas Window Butler",
    description:
      "Dallas Window Butler provides energy-efficient, expert window replacement in Allen, TX. Fast installs, lifetime warranty, trusted locally. Get your free quote today!",
    url: "https://dallaswindowbutler.com/allen-windows",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/allen-windows",
  },
}

export default function AllenWindowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/allen-windows#window-replacement",
            serviceType: "Window replacement",
            name: "Window Replacement in Allen",
            alternateName: "Best Window Replacement in Allen, TX",
            keywords: [
              "best window replacement Allen",
              "replacement windows Allen",
              "window company Allen",
              "window installers Allen",
            ],
            url: "https://dallaswindowbutler.com/services/window-replacement",
            description:
              "Best window replacement in Allen, TX. Professional window replacement for Allen homes—energy savings, clean one-day installs, and lifetime-backed workmanship.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "Allen, TX" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/allen-windows#glass-ig-repair",
            serviceType: "Insulated glass (IG) unit replacement",
            name: "Glass / IG Unit Repair in Allen",
            alternateName: "Best Glass / IG Unit Repair in Allen, TX",
            keywords: ["glass repair Allen", "IG unit replacement Allen", "fogged window repair Allen"],
            url: "https://dallaswindowbutler.com/services/glass-repair",
            description:
              "Top-rated glass/IG repair in Allen, TX. IG-only replacements for fogged or cracked panes in Allen—restore clarity and efficiency without full window replacement.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "Allen, TX" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does window replacement cost in Allen, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On average, Allen homeowners spend between $425–$775 per window installed, depending on style, size, and efficiency options. Twin Creeks and Watters Creek area homes often see excellent ROI.",
                },
              },
              {
                "@type": "Question",
                name: "Do you service all neighborhoods in Allen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, from Watters Crossing to Twin Creeks and throughout the Bethany Lakes area, Dallas Window Butler provides full-service window replacement across Allen.",
                },
              },
              {
                "@type": "Question",
                name: "What window styles work best for Allen's newer subdivisions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Allen's contemporary subdivisions benefit from clean-lined windows with superior energy efficiency. We recommend Low-E double-pane options that complement modern architecture while maximizing comfort.",
                },
              },
              {
                "@type": "Question",
                name: "Do you replace just the glass (IG unit) instead of the whole window in Allen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—if your frames are solid, we replace only the insulated glass unit (IGU) to fix fogging or broken seals at a lower cost than full replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a typical window replacement take in Allen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once your custom windows arrive, most projects finish in one day, including removal, install, sealing, and a spotless cleanup.",
                },
              },
              {
                "@type": "Question",
                name: "Will new Low-E windows help with heat and glare in Allen summers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Energy Star–rated Low-E options reduce heat gain and glare, improving comfort and lowering energy bills.",
                },
              },
              {
                "@type": "Question",
                name: "Can you match my existing window style and HOA requirements in Allen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—we offer multiple styles and finishes and work within HOA guidelines to match your home's look.",
                },
              },
              {
                "@type": "Question",
                name: "Do you haul away old windows and clean up after installation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—haul-away and full site cleanup are included. We leave your home as tidy as we found it.",
                },
              },
              {
                "@type": "Question",
                name: "Is your workmanship warranty transferable if I sell my home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—our workmanship warranty is transferable. Ask us for the simple transfer steps.",
                },
              },
            ],
          }),
        }}
      />
      <CitySeoPage
        cityData={{
          ...cityData.allen,
          uniqueContent: {
            localizedText: `Allen homeowners choose Dallas Window Butler for our expertise with the city's distinctive suburban architecture and family-focused neighborhoods. From the upscale developments around Watters Creek at Montgomery Farm to the established communities of Twin Creeks and Bethany Lakes, Allen represents some of North Texas's most desirable family neighborhoods. Our window replacement services are tailored to Allen's predominantly newer construction, focusing on enhancing already-efficient homes with premium upgrades that deliver measurable energy savings. Whether you're near the Allen Event Center or in the quiet residential streets around Celebration Park, we understand that Allen families value quality, efficiency, and long-term performance—exactly what our lifetime-backed window installations provide.`,
            geoTaggedImage: {
              src: "/allen-texas-suburban-neighborhoods-with-modern-ene.jpg",
              alt: "Professional window replacement in Allen, TX suburban homes",
            },
          },
        }}
        customHeadings={{
          h1: "Best Window Replacement & Glass / IG Repair in Allen, TX",
          h2s: [
            "Professional Window Replacement in Allen",
            "Insulated Glass Repair & IG Unit Replacement",
            "Trusted Window Services for Allen Homeowners",
          ],
        }}
      />
    </>
  )
}
