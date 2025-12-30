import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in Plano, TX | 5-Star Local Service",
  description:
    "Looking for Plano window replacement? Dallas Window Butler provides energy-efficient vinyl windows, expert glass repair, and a lifetime warranty. 100+ local reviews. Serving West Plano, Willow Bend & Legacy West. Get a free quote!",
  keywords:
    "window replacement Plano TX, energy efficient windows Plano, window company Plano, glass repair Plano Texas, Plano window installers, Willow Bend windows",
  openGraph: {
    title: "Best Window Replacement in Plano, TX | Dallas Window Butler",
    description:
      "Expert window installation and glass repair in Plano. Energy-efficient Low-E glass packages and lifetime-backed workmanship. Call for a no-pressure quote!",
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
          h1: "Best Window Replacement in Plano, TX",
          h2s: [
            "Energy-Efficient Windows for Plano Homes",
            "Expert Glass & IG Unit Repair in Plano",
            "Why Plano Homeowners Trust Us",
          ],
        }}
      />
    </>
  )
}
