import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in McKinney, TX | 5-Star Local Service",
  description:
    "Looking for McKinney window replacement? Dallas Window Butler offers energy-efficient vinyl windows, expert glass repair, and a lifetime warranty. 100+ local reviews. Serving Stonebridge Ranch, Adriatica Village & Downtown. Get a free quote!",
  keywords:
    "window replacement McKinney TX, energy efficient windows McKinney, window company McKinney, glass repair McKinney Texas, McKinney window installers, Stonebridge Ranch windows",
  openGraph: {
    title: "Best Window Replacement in McKinney, TX | Dallas Window Butler",
    description:
      "Expert window installation and glass repair in McKinney. Energy-efficient Low-E glass packages and lifetime-backed workmanship. Call for a no-pressure quote!",
    url: "https://dallaswindowbutler.com/mckinney-windows",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/mckinney-windows",
  },
}

export default function McKinneyWindowsPage() {
  return (
    <>
      <CitySeoPage
        cityData={{
          ...cityData.mckinney,
          uniqueContent: {
            localizedText: `In McKinney, families appreciate Dallas Window Butler's respect for both historic charm and modern efficiency needs. From the tree-lined streets of historic downtown to the luxury developments of Stonebridge Ranch and Adriatica Village, McKinney homes represent a unique blend of architectural styles that demand thoughtful window solutions. Our team understands McKinney's historic district requirements and HOA guidelines, ensuring your window replacement enhances your home's character while delivering superior energy performance. Whether you're restoring a century-old Victorian near the courthouse square or upgrading a contemporary home in Craig Ranch, we provide window solutions that honor McKinney's distinctive neighborhoods while reducing energy costs and improving comfort year-round.`,
            geoTaggedImage: {
              src: "/mckinney-historic-downtown-homes-with-energy-effic.jpg",
              alt: "Professional window replacement in McKinney, TX historic and modern homes",
            },
          },
        }}
        customHeadings={{
          h1: "Best Window Replacement in McKinney, TX",
          h2s: [
            "Energy-Efficient Windows for McKinney Homes",
            "Expert Glass & IG Unit Repair in McKinney",
            "Why McKinney Homeowners Trust Us",
          ],
        }}
      />
    </>
  )
}
