interface WhyChooseUsV2Props {
  cityName?: string
}

const benefits = [
  {
    headline: "No-Pressure Consultations",
    text: "Compare brands side-by-side with zero sales pressure. Written quotes, no surprises.",
    altTag: "In-home consultation",
    imagePlaceholder: "/professional-window-consultant-meeting-with-homeow.jpg",
  },
  {
    headline: "Fast, Clean Installs",
    text: "Most installs finished in 1–2 days with spotless clean-up.",
    altTag: "Clean installation crew",
    imagePlaceholder: "/professional-window-installation-crew-working-clea.jpg",
  },
  {
    headline: "Leak-Free for Life",
    text: "Lifetime workmanship warranty—if our install leaks, we fix it.",
    altTag: "Leak-free window seal detail",
    imagePlaceholder: "/perfect-window-seal-installation-detail.jpg",
  },
  {
    headline: "Built for Texas Heat",
    text: "Low-E, Argon-filled glass built to cut AC costs in brutal summers.",
    altTag: "Energy-efficient windows",
    imagePlaceholder: "/energy-efficient-window-with-low-e-coating-in-texa.jpg",
  },
  {
    headline: "Fair, Transparent Pricing",
    text: "Distributor-level pricing with clear line-items—no gimmicks.",
    altTag: "Transparent window quote",
    imagePlaceholder: "/clear-transparent-pricing-quote-document.jpg",
  },
  {
    headline: "Local Pros. 5-Star Rated.",
    text: "Family-owned and trusted by neighbors for honest installs.",
    altTag: "Local reviews",
    imagePlaceholder: "/five-star-customer-reviews-and-testimonials.jpg",
  },
]

export default function WhyChooseUsV2({ cityName }: WhyChooseUsV2Props) {
  const sectionTitle = cityName
    ? `Why ${cityName} Homeowners Choose Dallas Window Butler`
    : "Why Dallas Homeowners Choose Dallas Window Butler"

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{sectionTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const cityAwareAltTag = cityName ? `${benefit.altTag} in ${cityName}` : `${benefit.altTag} in Dallas area`

            const cityAwareText =
              benefit.headline === "Local Pros. 5-Star Rated." && cityName
                ? benefit.text.replace("neighbors", `${cityName} neighbors`)
                : benefit.text

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="aspect-video w-full">
                  <img
                    src={benefit.imagePlaceholder || "/placeholder.svg"}
                    alt={cityAwareAltTag}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.headline}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{cityAwareText}</p>
                  {/* Trust cue - could be customized per benefit */}
                  <div className="text-sm text-blue-600 font-medium">
                    {benefit.headline === "No-Pressure Consultations" && "✓ Always free, no obligation"}
                    {benefit.headline === "Fast, Clean Installs" && "✓ Fully insured crews"}
                    {benefit.headline === "Leak-Free for Life" && "✓ Written guarantee included"}
                    {benefit.headline === "Built for Texas Heat" && "✓ Energy Star certified"}
                    {benefit.headline === "Fair, Transparent Pricing" && "✓ No hidden fees ever"}
                    {benefit.headline === "Local Pros. 5-Star Rated." && "✓ Family-owned since 2010"}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
