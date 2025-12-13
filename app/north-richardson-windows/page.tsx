import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in North Richardson, TX | Dallas Window Butler",
  description:
    "Dallas Window Butler provides energy-efficient, expert window replacement in North Richardson, TX. Fast installs, lifetime warranty, trusted locally. Get your free quote today!",
  keywords:
    "window replacement North Richardson TX, door replacement North Richardson, energy efficient windows North Richardson, window installation North Richardson Texas, CityLine windows",
  openGraph: {
    title: "Best Window Replacement in North Richardson, TX | Dallas Window Butler",
    description:
      "Dallas Window Butler provides energy-efficient, expert window replacement in North Richardson, TX. Fast installs, lifetime warranty, trusted locally. Get your free quote today!",
    url: "https://dallaswindowbutler.com/north-richardson-windows",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/north-richardson-windows",
  },
}

export default function NorthRichardsonWindowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/north-richardson-windows#window-replacement",
            serviceType: "Window replacement",
            name: "Window Replacement in North Richardson",
            alternateName: "Best Window Replacement in North Richardson, TX",
            keywords: [
              "best window replacement North Richardson",
              "replacement windows North Richardson",
              "window company North Richardson",
              "window installers North Richardson",
            ],
            url: "https://dallaswindowbutler.com/services/window-replacement",
            description:
              "Best window replacement in North Richardson, TX. Professional window replacement for North Richardson homes—energy savings, clean one-day installs, and lifetime-backed workmanship.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "North Richardson, TX" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://dallaswindowbutler.com/north-richardson-windows#glass-ig-repair",
            serviceType: "Insulated glass (IG) unit replacement",
            name: "Glass / IG Unit Repair in North Richardson",
            alternateName: "Best Glass / IG Unit Repair in North Richardson, TX",
            keywords: [
              "glass repair North Richardson",
              "IG unit replacement North Richardson",
              "fogged window repair North Richardson",
            ],
            url: "https://dallaswindowbutler.com/services/glass-repair",
            description:
              "Top-rated glass/IG repair in North Richardson, TX. IG-only replacements for fogged or cracked panes in North Richardson—restore clarity and efficiency without full window replacement.",
            provider: { "@id": "https://dallaswindowbutler.com/#identity" },
            areaServed: { "@type": "Place", name: "North Richardson, TX" },
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
                name: "How much does window replacement cost in North Richardson, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On average, North Richardson homeowners spend between $450–$825 per window installed, depending on style, size, and efficiency options. CityLine area condos and townhomes often see quick ROI from energy savings.",
                },
              },
              {
                "@type": "Question",
                name: "Do you service all neighborhoods in North Richardson?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, from CityLine to Canyon Creek and throughout the Richardson Heights area, Dallas Window Butler provides full-service window replacement across North Richardson.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with North Richardson's mixed housing types?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. From CityLine's modern condos to Canyon Creek's traditional homes, we have experience with North Richardson's diverse architectural styles and provide appropriate window solutions for each.",
                },
              },
              {
                "@type": "Question",
                name: "Do you replace just the glass (IG unit) instead of the whole window in North Richardson?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—if your frames are solid, we replace only the insulated glass unit (IGU) to fix fogging or broken seals at a lower cost than full replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a typical window replacement take in North Richardson?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once your custom windows arrive, most projects finish in one day, including removal, install, sealing, and a spotless cleanup.",
                },
              },
              {
                "@type": "Question",
                name: "Will new Low-E windows help with heat and glare in North Richardson summers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Energy Star–rated Low-E options reduce heat gain and glare, improving comfort and lowering energy bills.",
                },
              },
              {
                "@type": "Question",
                name: "Can you match my existing window style and HOA requirements in North Richardson?",
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
          ...cityData["north-richardson"],
          uniqueContent: {
            localizedText: `North Richardson homeowners choose Dallas Window Butler for our expertise with the area's unique blend of urban convenience and suburban comfort. From the modern high-rises and mixed-use developments of CityLine to the established neighborhoods of Canyon Creek and Richardson Heights, North Richardson offers diverse housing options that each require specialized window solutions. Our team understands the specific needs of North Richardson's transit-oriented development, where energy efficiency and noise reduction are paramount concerns. Whether you're in a contemporary CityLine condo with floor-to-ceiling windows or a traditional home near the University of Texas at Dallas campus, we provide window replacements that enhance both comfort and property value while addressing the unique challenges of this dynamic, growing community.`,
            geoTaggedImage: {
              src: "/north-richardson-cityline-modern-condos-and-tradit.jpg",
              alt: "Professional window replacement in North Richardson, TX condos and homes",
            },
          },
        }}
        customHeadings={{
          h1: "Best Window Replacement & Glass / IG Repair in North Richardson, TX",
          h2s: [
            "Professional Window Replacement in North Richardson",
            "Insulated Glass Repair & IG Unit Replacement",
            "Trusted Window Services for North Richardson Homeowners",
          ],
        }}
      />
    </>
  )
}
