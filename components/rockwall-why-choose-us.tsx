import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function RockwallWhyChooseUs() {
  const benefits = [
    {
      image: "/professional-window-consultant-meeting-with-homeow.jpg",
      alt: "Professional window consultant meeting with Rockwall homeowner",
      title: "Expert Consultation",
      description:
        "Rockwall homeowners get personalized window solutions from certified consultants who understand lakeside climate challenges.",
      trustCue: "100+ Rockwall consultations completed",
    },
    {
      image: "/professional-window-installation-crew-working-clea.jpg",
      alt: "Professional window installation crew working in Rockwall, TX",
      title: "Professional Installation",
      description:
        "Our certified installation team delivers flawless results for Rockwall homes, from The Shores to Chandlers Landing.",
      trustCue: "Licensed & insured in Texas",
    },
    {
      image: "/perfect-window-seal-installation-detail.jpg",
      alt: "Perfect window seal installation detail in Rockwall home",
      title: "Perfect Seal Every Time",
      description:
        "Lifetime-backed workmanship ensures your Rockwall home stays comfortable and energy-efficient year-round.",
      trustCue: "Transferable lifetime warranty",
    },
    {
      image: "/energy-efficient-window-with-low-e-coating-in-texa.jpg",
      alt: "Energy-efficient window with Low-E coating in Rockwall, Texas home",
      title: "Energy Efficiency",
      description:
        "Cut cooling costs up to 30% with Energy Star windows designed for Texas heat and Rockwall's lakeside humidity.",
      trustCue: "Energy Star certified products",
    },
    {
      image: "/clear-transparent-pricing-quote-document.jpg",
      alt: "Clear transparent pricing quote for Rockwall window replacement",
      title: "Transparent Pricing",
      description:
        "No surprises, no hidden fees. Rockwall homeowners get detailed quotes with clear pricing for every aspect of their project.",
      trustCue: "Written estimates with no hidden costs",
    },
    {
      image: "/five-star-customer-reviews-and-testimonials.jpg",
      alt: "Five-star customer reviews from satisfied Rockwall homeowners",
      title: "5-Star Reviews",
      description:
        "Join dozens of satisfied Rockwall neighbors who trust Dallas Window Butler for their window replacement needs.",
      trustCue: "100+ verified Google reviews",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Rockwall Homeowners Choose Dallas Window Butler</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Local expertise meets premium quality for Rockwall's unique lakeside climate challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src={benefit.image || "/placeholder.svg"} alt={benefit.alt} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <p className="text-sm text-blue-600 font-medium">{benefit.trustCue}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
