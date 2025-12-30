import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in Allen, TX | 5-Star Local Service",
  description:
    "Looking for Allen window replacement? Dallas Window Butler provides energy-efficient vinyl windows, expert glass repair, and a lifetime warranty. 100+ local reviews. Serving Twin Creeks, Watters Creek & Celebration Park. Get a free quote!",
  keywords:
    "window replacement Allen TX, energy efficient windows Allen, window company Allen, glass repair Allen Texas, Allen window installers, Twin Creeks windows",
  openGraph: {
    title: "Best Window Replacement in Allen, TX | Dallas Window Butler",
    description:
      "Expert window installation and glass repair in Allen. Energy-efficient Low-E glass packages and lifetime-backed workmanship. Call for a no-pressure quote!",
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
          h1: "Best Window Replacement in Allen, TX",
          h2s: [
            "Energy-Efficient Windows for Allen Homes",
            "Expert Glass & IG Unit Repair in Allen",
            "Why Allen Homeowners Trust Us",
          ],
        }}
      />
    </>
  )
}
