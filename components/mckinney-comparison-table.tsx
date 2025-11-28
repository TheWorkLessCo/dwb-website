import { Check, X } from "lucide-react"

export function McKinneyComparisonTable() {
  const features = [
    {
      feature: "Lifetime Workmanship Warranty",
      us: true,
      others: false,
    },
    {
      feature: "Energy Star Certified Windows",
      us: true,
      others: "Sometimes",
    },
    {
      feature: "1-2 Day Installation",
      us: true,
      others: "1-2 Weeks",
    },
    {
      feature: "Free Cleanup & Haul Away",
      us: true,
      others: "Extra Cost",
    },
    {
      feature: "Local McKinney References",
      us: true,
      others: "Limited",
    },
    {
      feature: "Transferable Warranty",
      us: true,
      others: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Dallas Window Butler vs Other Companies</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 font-semibold text-center py-4">
              <div className="px-4">Feature</div>
              <div className="px-4 text-blue-600">Dallas Window Butler</div>
              <div className="px-4">Other Companies</div>
            </div>
            {features.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-200 py-4 text-center">
                <div className="px-4 font-medium text-left">{item.feature}</div>
                <div className="px-4">
                  {item.us === true ? (
                    <Check className="h-6 w-6 text-green-600 mx-auto" />
                  ) : (
                    <span className="text-blue-600 font-semibold">{item.us}</span>
                  )}
                </div>
                <div className="px-4">
                  {item.others === true ? (
                    <Check className="h-6 w-6 text-green-600 mx-auto" />
                  ) : item.others === false ? (
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  ) : (
                    <span className="text-gray-600">{item.others}</span>
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
