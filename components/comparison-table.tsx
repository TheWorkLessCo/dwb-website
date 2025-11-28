import { Check, X } from "lucide-react"

const comparisons = [
  {
    feature: "Lifetime Transferable Warranty",
    us: true,
    them: false,
  },
  {
    feature: "Professional In-House Installers",
    us: true,
    them: false,
    note: "no subcontractors",
  },
  {
    feature: "Energy Star + Low-E Glass",
    us: true,
    them: false,
  },
  {
    feature: "Senior & Military Discounts",
    us: true,
    them: false,
  },
  {
    feature: "Financing with 0% Options",
    us: true,
    them: false,
  },
]

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How We Compare</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-blue-600 text-white">
              <div className="p-4 font-semibold">Feature</div>
              <div className="p-4 font-semibold text-center">Dallas Window Butler</div>
              <div className="p-4 font-semibold text-center">Other Companies</div>
            </div>

            {/* Table Rows */}
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <div className="p-4">
                  <span className="font-medium text-gray-900">{comparison.feature}</span>
                  {comparison.note && <span className="block text-sm text-gray-600 mt-1">({comparison.note})</span>}
                </div>
                <div className="p-4 text-center">
                  {comparison.us ? (
                    <Check className="w-6 h-6 text-blue-600 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="p-4 text-center">
                  {comparison.them ? (
                    <Check className="w-6 h-6 text-blue-600 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
