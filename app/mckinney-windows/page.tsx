import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in McKinney, TX | Dallas Window Butler",
  description:
    "Choose Dallas Window Butler for the best window replacement in McKinney, TX. Energy-efficient installs, IG unit repair, and trusted 5-star service. Get your free consultation today!",
  canonical: "https://dallaswindowbutler.com/mckinney-windows",
}

export default function McKinneyWindowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/mckinney-windows#window-replacement",
            serviceType: "Window replacement",
            name: "Window Replacement in McKinney",
            alternateName: "Best Window Replacement in McKinney, TX",
            keywords: [
              "best window replacement McKinney",
              "replacement windows McKinney",
              "window company McKinney",
              "window installers McKinney",
            ],
            url: "https://dallaswindowbutler.com/services/window-replacement",
            description:
              "Best window replacement in McKinney, TX. McKinney window replacement for historic homes and HOAs—efficient upgrades that match local aesthetics.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "McKinney, TX" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/mckinney-windows#glass-ig-repair",
            serviceType: "Insulated glass (IG) unit replacement",
            name: "Glass / IG Unit Repair in McKinney",
            alternateName: "Best Glass / IG Unit Repair in McKinney, TX",
            keywords: ["glass repair McKinney", "IG unit replacement McKinney", "fogged window repair McKinney"],
            url: "https://dallaswindowbutler.com/services/glass-repair",
            description:
              "Top-rated glass/IG repair in McKinney, TX. IG-unit replacements for McKinney homes—restore clarity and comfort while preserving sound frames.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "McKinney, TX" },
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
                name: "How much does window replacement cost in McKinney, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On average, McKinney homeowners spend between $450–$850 per window installed, depending on style, size, and efficiency options. Historic district homes may require special considerations we're experienced with.",
                },
              },
              {
                "@type": "Question",
                name: "Do you service all neighborhoods in McKinney?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, from Stonebridge Ranch to Adriatica Village and throughout historic downtown McKinney, Dallas Window Butler provides full-service window replacement across all McKinney neighborhoods.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with McKinney's historic district requirements?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We're experienced with McKinney's historic preservation guidelines and can recommend period-appropriate window styles that meet both aesthetic and efficiency standards.",
                },
              },
              {
                "@type": "Question",
                name: "Do you replace just the glass (IG unit) instead of the whole window in McKinney?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—if your frames are solid, we replace only the insulated glass unit (IGU) to fix fogging or broken seals at a lower cost than full replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a typical window replacement take in McKinney?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once your custom windows arrive, most projects finish in one day, including removal, install, sealing, and a spotless cleanup.",
                },
              },
              {
                "@type": "Question",
                name: "Will new Low-E windows help with heat and glare in McKinney summers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Energy Star–rated Low-E options reduce heat gain and glare, improving comfort and lowering energy bills.",
                },
              },
              {
                "@type": "Question",
                name: "Can you match my existing window style and HOA requirements in McKinney?",
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
          ...cityData.mckinney,
          uniqueContent: {
            localizedText: `In McKinney, families appreciate Dallas Window Butler's respect for both historic charm and modern efficiency needs. From the tree-lined streets of historic downtown to the luxury developments of Stonebridge Ranch and Adriatica Village, McKinney homes represent a unique blend of architectural styles that demand thoughtful window solutions. Our team understands McKinney's historic district requirements and HOA guidelines, ensuring your window replacement enhances your home's character while delivering superior energy performance. Whether you're restoring a century-old Victorian near the courthouse square or upgrading a contemporary home in Craig Ranch, we provide window solutions that honor McKinney's distinctive neighborhoods while reducing energy costs and improving comfort year-round.`,
            geoTaggedImage: {
              src: "/mckinney-historic-downtown-homes-with-energy-effic.jpg",
              alt: "Professional window replacement in McKinney, TX historic and modern homes",
            },
            internalLinking:
              "Looking for window replacement in other areas? We also serve Rockwall, Allen, Plano, and North Richardson.",
          },
        }}
        customHeadings={{
          h1: "Best Window Replacement & Glass / IG Repair in McKinney, TX",
          h2s: [
            "Expert Window Replacement in McKinney",
            "IG Glass & Fogged Unit Repair Solutions",
            "Why McKinney Homeowners Trust Dallas Window Butler",
          ],
        }}
      />
    </>
  )
}
