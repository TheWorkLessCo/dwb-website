import type { Metadata } from "next"
import LocationsClient from "./locations-client"

export const metadata: Metadata = {
  title: "Service Areas | Dallas Window Butler — Best Window Replacement Near You",
  description:
    "See all Dallas Window Butler service areas. Best window replacement, glass/IG unit repair, and door replacement in Rockwall, McKinney, Allen, Plano, and North Richardson.",
}

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://dallaswindowbutler.com/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Service Areas",
                item: "https://dallaswindowbutler.com/locations",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Dallas Window Butler Service Areas",
            itemListElement: [
              { "@type": "ListItem", position: 1, url: "https://dallaswindowbutler.com/rockwall-windows" },
              { "@type": "ListItem", position: 2, url: "https://dallaswindowbutler.com/mckinney-windows" },
              { "@type": "ListItem", position: 3, url: "https://dallaswindowbutler.com/allen-windows" },
              { "@type": "ListItem", position: 4, url: "https://dallaswindowbutler.com/plano-windows" },
              { "@type": "ListItem", position: 5, url: "https://dallaswindowbutler.com/north-richardson-windows" },
            ],
          }),
        }}
      />

      <LocationsClient />
    </>
  )
}
