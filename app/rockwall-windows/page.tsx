import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in Rockwall, TX | Dallas Window Butler",
  description:
    "Looking for the best window replacement in Rockwall, TX? Dallas Window Butler delivers energy-efficient windows, expert IG unit repair, and lifetime-backed workmanship. Call for a free quote!",
  keywords:
    "window replacement Rockwall TX, door replacement Rockwall, energy efficient windows Rockwall, window installation Rockwall Texas",
  openGraph: {
    title: "Best Window Replacement in Rockwall, TX | Dallas Window Butler",
    description:
      "Looking for the best window replacement in Rockwall, TX? Dallas Window Butler delivers energy-efficient windows, expert IG unit repair, and lifetime-backed workmanship. Call for a free quote!",
    url: "https://dallaswindowbutler.com/rockwall-windows",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/rockwall-windows",
  },
}

export default function RockwallWindowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/rockwall-windows#window-replacement",
            serviceType: "Window replacement",
            name: "Window Replacement in Rockwall",
            alternateName: "Best Window Replacement in Rockwall, TX",
            keywords: [
              "best window replacement Rockwall",
              "replacement windows Rockwall",
              "window company Rockwall",
              "window installers Rockwall",
            ],
            url: "https://dallaswindowbutler.com/services/window-replacement",
            description:
              "Best window replacement in Rockwall, TX. Energy-efficient window replacement with leak-free installation and lifetime-backed workmanship for Rockwall homeowners.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "Rockwall, TX" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/rockwall-windows#glass-ig-repair",
            serviceType: "Insulated glass (IG) unit replacement",
            name: "Glass / IG Unit Repair in Rockwall",
            alternateName: "Best Glass / IG Unit Repair in Rockwall, TX",
            keywords: ["glass repair Rockwall", "IG unit replacement Rockwall", "fogged window repair Rockwall"],
            url: "https://dallaswindowbutler.com/services/glass-repair",
            description:
              "Top-rated glass/IG repair in Rockwall, TX. Replace fogged or failed insulated glass units while keeping sound frames—fast, clean, and efficient service in Rockwall.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "Rockwall, TX" },
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
                name: "How much does window replacement cost in Rockwall, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On average, Rockwall homeowners spend between $400–$800 per window installed, depending on style, size, and efficiency options. We provide detailed quotes with no hidden fees.",
                },
              },
              {
                "@type": "Question",
                name: "Do you service all neighborhoods in Rockwall?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, from The Shores to Chandlers Landing and throughout downtown Rockwall, Dallas Window Butler provides full-service window replacement across all Rockwall neighborhoods.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Rockwall homes unique for window replacement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rockwall's lakeside location means homes face unique moisture and wind challenges. Our energy-efficient windows are specifically chosen to handle Texas lake weather while reducing energy costs.",
                },
              },
              {
                "@type": "Question",
                name: "Do you replace just the glass (IG unit) instead of the whole window in Rockwall?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—if your frames are solid, we replace only the insulated glass unit (IGU) to fix fogging or broken seals at a lower cost than full replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a typical window replacement take in Rockwall?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once your custom windows arrive, most projects finish in one day, including removal, install, sealing, and a spotless cleanup.",
                },
              },
              {
                "@type": "Question",
                name: "Will new Low-E windows help with heat and glare in Rockwall summers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Energy Star–rated Low-E options reduce heat gain and glare, improving comfort and lowering energy bills.",
                },
              },
              {
                "@type": "Question",
                name: "Can you match my existing window style and HOA requirements in Rockwall?",
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
          ...cityData.rockwall,
          uniqueContent: {
            localizedText: `Homeowners in Rockwall choose Dallas Window Butler because we understand the unique challenges of lakeside living. From The Shores waterfront properties to Chandlers Landing estates, Rockwall homes face constant moisture, wind, and temperature fluctuations that can compromise window performance. Our energy-efficient replacement windows are specifically selected to handle Texas lake weather while dramatically reducing energy costs. Whether you're in downtown Rockwall near the historic courthouse or in newer developments like Heath Golf & Yacht Club area, we've helped hundreds of families upgrade their homes with windows that stand up to our challenging climate. Rockwall's mix of historic charm and modern luxury demands window solutions that respect both aesthetics and performance—that's exactly what Dallas Window Butler delivers.`,
            geoTaggedImage: {
              src: "/rockwall-lakeside-homes-with-new-windows.jpg",
              alt: "Professional window replacement in Rockwall, TX lakeside homes",
            },
            internalLinking:
              "Looking for window replacement in other areas? We also serve McKinney, Allen, Plano, and North Richardson.",
          },
        }}
        customHeadings={{
          h1: "Best Window Replacement & Glass / IG Repair in Rockwall, TX",
          h2s: [
            "Energy-Efficient Window Replacement in Rockwall",
            "Fogged Glass & IG Unit Repair for Rockwall Homes",
            "Why Rockwall Homeowners Trust Dallas Window Butler",
          ],
        }}
      />
    </>
  )
}
