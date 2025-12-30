import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in North Richardson, TX | 5-Star Service",
  description:
    "Looking for North Richardson window replacement? Dallas Window Butler provides energy-efficient vinyl windows, expert glass repair, and a lifetime warranty. 100+ local reviews. Serving CityLine, Canyon Creek & Richardson Heights. Get a free quote!",
  keywords:
    "window replacement North Richardson TX, energy efficient windows North Richardson, window company North Richardson, glass repair North Richardson Texas, North Richardson window installers, CityLine windows",
  openGraph: {
    title: "Best Window Replacement in North Richardson, TX | Dallas Window Butler",
    description:
      "Expert window installation and glass repair in North Richardson. Energy-efficient Low-E glass packages and lifetime-backed workmanship. Call for a no-pressure quote!",
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
          h1: "Best Window Replacement in North Richardson, TX",
          h2s: [
            "Energy-Efficient Windows for North Richardson Homes",
            "Expert Glass & IG Unit Repair in North Richardson",
            "Why North Richardson Homeowners Trust Us",
          ],
        }}
      />
    </>
  )
}
