import type { Metadata } from "next"
import { CitySeoPage } from "@/components/city-seo-page"
import { cityData } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "Best Window Replacement in Rockwall, TX | 5-Star Service",
  description:
    "Looking for Rockwall window replacement? Dallas Window Butler offers energy-efficient vinyl windows, expert glass repair, and a lifetime warranty. 100+ local reviews. Get a firm price today!",
  keywords:
    "window replacement Rockwall TX, energy efficient windows Rockwall, window company Rockwall, glass repair Rockwall Texas, Rockwall window installers",
  openGraph: {
    title: "Best Window Replacement in Rockwall, TX | Dallas Window Butler",
    description:
      "Expert window installation and glass repair in Rockwall. Energy-efficient Low-E glass packages and lifetime-backed workmanship. Call for a no-pressure quote!",
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
      <CitySeoPage
        cityData={{
          ...cityData.rockwall,
          uniqueContent: {
            localizedText: `Homeowners in Rockwall choose Dallas Window Butler because we understand the unique challenges of lakeside living. From The Shores waterfront properties to Chandlers Landing estates, Rockwall homes face constant moisture, wind, and temperature fluctuations that can compromise window performance. Our energy-efficient replacement windows are specifically selected to handle Texas lake weather while dramatically reducing energy costs. Whether you're in downtown Rockwall near the historic courthouse or in newer developments like Heath Golf & Yacht Club area, we've helped hundreds of families upgrade their homes with windows that stand up to our challenging climate. Rockwall's mix of historic charm and modern luxury demands window solutions that respect both aesthetics and performance—that's exactly what Dallas Window Butler delivers.`,
            geoTaggedImage: {
              src: "/rockwall-lakeside-homes-with-new-windows.jpg",
              alt: "Professional window replacement in Rockwall, TX lakeside homes",
            },
          },
        }}
        customHeadings={{
          h1: "Best Window Replacement in Rockwall, TX",
          h2s: [
            "Energy-Efficient Windows for Rockwall Homes",
            "Expert Glass & IG Unit Repair in Rockwall",
            "Why Rockwall Homeowners Trust Us",
          ],
        }}
      />
    </>
  )
}
