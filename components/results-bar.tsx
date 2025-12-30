import { Check } from "lucide-react"

interface ResultsBarProps {
  cityName?: string
  variant?: "primary" | "secondary"
}

export function ResultsBar({ cityName, variant }: ResultsBarProps) {
  const outcomes = [
    { text: "Lower Energy Bills" },
    { text: "A Cooler, Quieter Home" },
    { text: "Zero Sales Pressure" },
  ]

  return (
    <section className="bg-[#049BF2] py-6 sm:py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center md:justify-center gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-[#049BF2] stroke-[3px]" />
              </div>
              <span className="text-lg md:text-xl font-bold text-white leading-tight whitespace-nowrap">
                {outcome.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

