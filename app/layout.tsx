import type React from "react"
import { Suspense } from "react"
import Script from "next/script"
import { LinkAuditProvider } from "@/components/link-audit-provider"
import { UtilityBar } from "@/components/utility-bar"
import { Header } from "@/components/header"
import { ScrollToTopOnRoute } from "@/components/scroll-to-top-on-route"
import PreFooterStrip from "@/components/PreFooterStrip"
import { LandingFooter } from "@/components/landing-footer"
import "./globals.css"

export const metadata = {
  title: "Best Window Replacement Company | Dallas Window Butler",
  description:
    "Dallas Window Butler offers the best window replacement and glass/IG unit repair in Rockwall & nearby cities. Energy-efficient windows, expert installation, and a lifetime workmanship warranty. Get a free quote today!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dallas Window Butler",
              image: "https://dallaswindowbutler.com/images/dwb-primary-logo.png",
              "@id": "https://dallaswindowbutler.com/#identity",
              url: "https://dallaswindowbutler.com",
              telephone: "+14696408551",
              priceRange: "$$",
              slogan: "Best Window Replacement Company in Rockwall & Nearby Cities",
              knowsAbout: [
                "Window replacement",
                "Replacement windows",
                "Insulated glass (IG) unit repair",
                "Fogged glass repair",
                "Door replacement",
                "Low-E windows",
                "Energy Star windows",
              ],
              areaServed: [
                { "@type": "Place", name: "Rockwall, TX" },
                { "@type": "Place", name: "McKinney, TX" },
                { "@type": "Place", name: "Allen, TX" },
                { "@type": "Place", name: "Plano, TX" },
                { "@type": "Place", name: "North Richardson, TX" },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "112",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "1422 Sebastian Dr.",
                addressLocality: "Forney",
                addressRegion: "TX",
                postalCode: "75126",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.7485,
                longitude: -96.4713,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://maps.app.goo.gl/ZmVJUtp4y1rEJQcp6",
                "https://www.facebook.com/share/1BWUJHAgi2/",
                "https://www.instagram.com/dallaswindowbutler?igsh=MW9ieDY2eDE1MDhjMg==",
              ],
              serviceType: "Window Replacement",
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Window Replacement",
                    description:
                      "Professional window replacement services with energy-efficient, lifetime-backed installs in Rockwall and surrounding areas.",
                    "@id": "https://dallaswindowbutler.com/#window-replacement",
                    alternateName: "Best Window Replacement in Rockwall, TX",
                    keywords: [
                      "best window replacement rockwall",
                      "replacement windows rockwall",
                      "window company rockwall",
                      "window installers rockwall",
                    ],
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Glass / IG Unit Repair",
                    description:
                      "Expert repair and replacement of fogged or failed insulated glass (IG) units for improved clarity and efficiency.",
                    "@id": "https://dallaswindowbutler.com/#glass-ig-repair",
                    alternateName: "Best Glass / IG Unit Repair in Rockwall, TX",
                    keywords: [
                      "glass repair rockwall",
                      "IG unit replacement rockwall",
                      "fogged window repair rockwall",
                    ],
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Door Replacement",
                    description:
                      "Professional door replacement services to improve curb appeal, energy efficiency, and home security.",
                  },
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
              "@type": "SiteNavigationElement",
              name: [
                "Home",
                "Services",
                "Window Replacement",
                "Glass / IG Unit Repair",
                "Patio Doors",
                "Solar Screens",
                "Reviews",
                "About Us",
                "Contact",
                "Service Areas",
                "Rockwall",
                "McKinney",
                "Allen",
                "Plano",
                "North Richardson",
              ],
              url: [
                "https://dallaswindowbutler.com/",
                "https://dallaswindowbutler.com/services",
                "https://dallaswindowbutler.com/services/window-replacement",
                "https://dallaswindowbutler.com/services/glass-repair",
                "https://dallaswindowbutler.com/services/patio-doors",
                "https://dallaswindowbutler.com/services/solar-screens",
                "https://dallaswindowbutler.com/reviews",
                "https://dallaswindowbutler.com/about",
                "https://dallaswindowbutler.com/contact",
                "https://dallaswindowbutler.com/service-areas",
                "https://dallaswindowbutler.com/rockwall-windows",
                "https://dallaswindowbutler.com/mckinney-windows",
                "https://dallaswindowbutler.com/allen-windows",
                "https://dallaswindowbutler.com/plano-windows",
                "https://dallaswindowbutler.com/north-richardson-windows",
              ],
            }),
          }}
        />

        <style
          id="lcw-safe-override"
          dangerouslySetInnerHTML={{
            __html: `
            /* Keep the widget visible and above UI */
            .hl-cw, .hlcw, .hl-widget, .lc_chat, .lc-launcher, .lc-widget {
              z-index: 2147483000 !important;
            }
            /* Ensure any greeting/teaser cannot be hidden by stray CSS */
            .hlcw-greeting, .hl-cw-greeting, .lc-greeting {
              display: block !important;
              opacity: 1 !important;
              visibility: visible !important;
            }
          `,
          }}
        />
      </head>
      <body className="font-sans">
        {/* LeadConnector chat widget - single global injection */}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="693f4309f258cfff44fa89dd"
          strategy="afterInteractive"
        />
        <Script
          src="https://go.dallaswindowbutler.com/reputation/assets/review-widget.js"
          strategy="afterInteractive"
        />
        <Script
          id="lc-debug"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              console.log('[LeadConnector] script tag injected (debug)');
            `,
          }}
        />
        <LinkAuditProvider>
          <ScrollToTopOnRoute />
          <div id="site-chrome">
            <UtilityBar />
            <Header />
          </div>
          <Suspense fallback={null}>{children}</Suspense>
          <PreFooterStrip />
          <LandingFooter />
        </LinkAuditProvider>

      </body>
    </html>
  )
}
