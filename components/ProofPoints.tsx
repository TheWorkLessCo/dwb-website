import { CheckCircleIcon } from "@heroicons/react/24/solid"
import type React from "react"

export function ProofPoints({
  items = [
    { label: "Outcome", text: "A home transformed — beautiful, efficient, and secure." },
    { label: "Likelihood", text: "Proven results, backed by hundreds of happy homeowners." },
    { label: "Time Delay", text: "Start-to-finish installation in just 1–2 days, not weeks." },
    { label: "Effort", text: "We handle everything — from measurement to immaculate cleanup." },
    { label: "Benefit", text: "Enjoy stunning curb appeal, a cooler home and lower energy bills instantly." },
  ],
  sideContent = null,
}: {
  items?: { label: string; text: string }[]
  sideContent?: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-4">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircleIcon className="h-5 w-5 text-[#049BF2] shrink-0" aria-hidden="true" />
              <p className="text-[17px] leading-7 text-slate-800">
                <span className="font-semibold text-[#00152E]">{it.label}:</span> <span>{it.text}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="min-h-[1rem]">{sideContent}</div>
      </div>
    </section>
  )
}

export default ProofPoints
