import { Wallet, Sparkles, VolumeX } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Wallet className="w-12 h-12 text-green-600" />,
      headline: "Stop Overpaying Your Electric Bill.",
      body: "Stop cooling the neighborhood. Our multi-chamber vinyl frames and Low-E glass trap the cool air inside, often lowering summer energy bills by up to 30%.",
      accentColor: "bg-green-50",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      headline: "Forget The Construction Mess.",
      body: "We didn't name ourselves 'Butler' for nothing. We cover your furniture, protect your floors, and vacuum every speck of dust. Your home will be cleaner than we found it.",
      accentColor: "bg-blue-50",
    },
    {
      icon: <VolumeX className="w-12 h-12 text-slate-600" />,
      headline: "Finally, Peace & Quiet.",
      body: "Mute the traffic, the barking dogs, and the lawnmowers. Our double-strength insulated glass creates a sound barrier so you can finally enjoy a tranquil home.",
      accentColor: "bg-slate-50",
    },
  ]

  return (
    <section className="py-20 bg-mesh-subtle">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience The &quot;White Glove&quot; Difference.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
              <div
                className="group flex flex-col items-center text-center p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-gray-100 h-full"
              >
                <div className={`w-20 h-20 ${benefit.accentColor} rounded-2xl flex items-center justify-center mb-8`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

