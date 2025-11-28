import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RockwallProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Schedule your free, no-pressure Rockwall quote",
      description: "Quick consultation to understand your needs and provide accurate pricing",
    },
    {
      number: "2",
      title: "We measure & professionally install your windows",
      description: "Expert installation with precision measurements and quality materials",
    },
    {
      number: "3",
      title: "Enjoy energy savings and quieter living",
      description: "Immediate comfort improvements and long-term energy cost reductions",
    },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Simple 3-step process for Rockwall homeowners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            data-source="rockwall-process"
            data-offer="100off-per-window"
            data-city="rockwall"
          >
            <Link href="/book#form">Get My Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
