import { Calendar, Ruler, Home } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Schedule your free, no-pressure quote.",
  },
  {
    number: 2,
    icon: Ruler,
    title: "We custom-measure & professionally install your new windows.",
  },
  {
    number: 3,
    icon: Home,
    title: "Enjoy energy savings and a quieter, more comfortable home.",
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How It Works</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center relative">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-blue-600" />
                  </div>

                  {/* Step Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">{step.title}</p>

                  {/* Connector Line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-8" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
