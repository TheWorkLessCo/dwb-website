import { Header } from "@/components/header"

export const metadata = {
  title: "Window Replacement Special Offer - Rockwall, TX | Dallas Window Butler",
  description:
    "$100 OFF per window replacement in Rockwall, TX. Energy-efficient windows with professional installation. Get your free quote today!",
  canonical: "https://YOURDOMAIN.com/offer/windows-rockwall",
}

export default function WindowsRockwallOfferPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WindowInstallation",
    name: "Dallas Window Butler",
    telephone: "(469) 640-8551",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1422 Sebastian Dr",
      addressLocality: "Forney",
      addressRegion: "TX",
      postalCode: "75126",
      addressCountry: "US",
    },
    areaServed: ["Rockwall", "Forney", "Fate", "Royse City", "Heath", "Rowlett", "Garland", "McKinney"],
    url: "https://YOURDOMAIN.com/offer/windows-rockwall",
    sameAs: ["https://www.google.com/search?q=Dallas+Window+Butler"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* How It Works Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                <p className="text-lg text-gray-600">Simple, professional window replacement in 3 easy steps</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#049BF2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Book my free consult</h3>
                  <p className="text-gray-600">Tell us your goals and window count.</p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#049BF2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Measure & custom order</h3>
                  <p className="text-gray-600">Exact sizing, brand options, clear quote.</p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#049BF2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1-day install & cleanup</h3>
                  <p className="text-gray-600">Leak-free finish, spotless job site.</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="#form"
                  className="inline-flex items-center px-8 py-3 bg-[#049BF2] text-white font-semibold rounded-lg hover:bg-[#049BF2]/90 transition-colors"
                >
                  Get My Free Quote
                </a>
              </div>
            </div>
          </section>

          {/* Embedded Form Section */}
          <section id="form" className="py-16 bg-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Window Quote</h2>
                <p className="text-lg text-gray-600">Fill out the form below to schedule your free consultation</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <iframe
                  src="https://example.com/ghl-form"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Window Replacement Quote Form"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
