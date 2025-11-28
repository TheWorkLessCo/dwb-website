import { CheckCircle } from "lucide-react"

export default function OutcomeSection() {
  const items = [
    { label: "Outcome", text: "A home transformed – beautiful, efficient, and secure." },
    { label: "Likelihood", text: "Proven results, backed by hundreds of happy homeowners." },
    { label: "Time Delay", text: "Start-to-finish installation in just 1–2 days, not weeks." },
    { label: "Effort", text: "We handle everything – from measurement to immaculate cleanup." },
    {
      label: "Benefit",
      text: "Enjoy stunning curb appeal, a cooler home and lower energy bills instantly.",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="text-brand w-5 h-5" />
            </div>
            <p className="text-base leading-relaxed text-gray-900">
              <span className="font-semibold text-brand">{item.label}:</span> {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
