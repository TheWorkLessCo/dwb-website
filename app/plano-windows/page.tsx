import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in Plano, TX | Dallas Window Butler",
  description:
    "Dallas Window Butler provides energy-efficient, expert window replacement in Plano, TX. Fast installs, lifetime warranty, trusted locally. Get your free quote today!",
  keywords:
    "window replacement Plano TX, door replacement Plano, energy efficient windows Plano, window installation Plano Texas, Legacy West windows",
  openGraph: {
    title: "Best Window Replacement in Plano, TX | Dallas Window Butler",
    description:
      "Dallas Window Butler provides energy-efficient, expert window replacement in Plano, TX. Fast installs, lifetime warranty, trusted locally. Get your free quote today!",
    url: "https://dallaswindowbutler.com/plano-windows",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/plano-windows",
  },
}

export default function PlanoWindowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/plano-windows#window-replacement",
            serviceType: "Window replacement",
            name: "Window Replacement in Plano",
            alternateName: "Best Window Replacement in Plano, TX",
            keywords: [
              "best window replacement Plano",
              "replacement windows Plano",
              "window company Plano",
              "window installers Plano",
            ],
            url: "https://dallaswindowbutler.com/services/window-replacement",
            description:
              "Best window replacement in Plano, TX. Professional window replacement for Plano homes—energy savings, clean one-day installs, and lifetime-backed workmanship.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "Plano, TX" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/plano-windows#glass-ig-repair",
            serviceType: "Insulated glass (IG) unit replacement",
            name: "Glass / IG Unit Repair in Plano",
            alternateName: "Best Glass / IG Unit Repair in Plano, TX",
            keywords: ["glass repair Plano", "IG unit replacement Plano", "fogged window repair Plano"],
            url: "https://dallaswindowbutler.com/services/glass-repair",
            description:
              "Top-rated glass/IG repair in Plano, TX. IG-only replacements for fogged or cracked panes in Plano—restore clarity and efficiency without full window replacement.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "Plano, TX" },
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
                name: "How much does window replacement cost in Plano, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On average, Plano homeowners spend between $475–$900 per window installed, depending on style, size, and efficiency options. Legacy West and West Plano luxury homes often choose premium efficiency packages.",
                },
              },
              {
                "@type": "Question",
                name: "Do you service all neighborhoods in Plano?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, from Legacy West to Willow Bend and throughout West Plano, Dallas Window Butler provides full-service window replacement across all Plano neighborhoods and subdivisions.",
                },
              },
              {
                "@type": "Question",
                name: "What's special about window replacement in Plano's luxury developments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Plano's upscale neighborhoods like Legacy West and Willow Bend demand premium window solutions. We specialize in high-end replacements that maintain luxury aesthetics while delivering superior energy performance.",
                },
              },
              {
                "@type": "Question",
                name: "Do you replace just the glass (IG unit) instead of the whole window in Plano?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—if your frames are solid, we replace only the insulated glass unit (IGU) to fix fogging or broken seals at a lower cost than full replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a typical window replacement take in Plano?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once your custom windows arrive, most projects finish in one day, including removal, install, sealing, and a spotless cleanup.",
                },
              },
              {
                "@type": "Question",
                name: "Will new Low-E windows help with heat and glare in Plano summers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Energy Star–rated Low-E options reduce heat gain and glare, improving comfort and lowering energy bills.",
                },
              },
              {
                "@type": "Question",
                name: "Can you match my existing window style and HOA requirements in Plano?",
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
          ...cityData.plano,
          uniqueContent: {
            localizedText: `Plano homeowners trust Dallas Window Butler because we understand the sophisticated standards of one of Texas's most prestigious communities. From the luxury high-rises and townhomes of Legacy West to the established neighborhoods of West Plano and Willow Bend, Plano represents the pinnacle of North Texas living. Our window replacement services cater to Plano's discerning homeowners who demand both aesthetic excellence and superior performance. Whether you're in a contemporary home near the Shops at Legacy or a traditional residence in one of Plano's tree-lined subdivisions, we provide premium window solutions that enhance your home's value while delivering measurable energy savings. Plano's combination of luxury living and environmental consciousness makes energy-efficient windows not just a smart choice, but an essential upgrade.`,
            geoTaggedImage: {
              src: "/plano-texas-luxury-homes-legacy-west-with-premium-.jpg",
              alt: "Professional window replacement in Plano, TX luxury homes and developments",
            },
          },
        }}
        customHeadings={{
          h1: "Best Window Replacement & Glass / IG Repair in Plano, TX",
          h2s: [
            "Professional Window Replacement in Plano",
            "Insulated Glass Repair & IG Unit Replacement",
            "Trusted Window Services for Plano Homeowners",
          ],
        }}
      />
    </>
  )
}
