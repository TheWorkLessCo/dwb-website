import { CheckCircle, X } from "lucide-react"

export default function RockwallComparisonTable() {
  const features = [
    {
      feature: "Lifetime Transferable Warranty",
      us: true,
      them: false,
    },
    {
      feature: "In-house Installers (no subs)",
      us: true,
      them: false,
    },
    {
      feature: "Energy Star, Low-E Glass",
      us: true,
      them: false,
    },
    {
      feature: "Senior & Military Discounts",
      us: true,
      them: false,
    },
    {
      feature: "0% Financing Options",
      us: true,
      them: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dallas Window Butler vs Other Companies</h2>
          <p className="text-gray-600 text-lg">See why Rockwall homeowners choose us over the competition</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Dallas Window Butler</th>
                <th className="p-4 text-center font-semibold">Other Companies</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-medium text-gray-900">{item.feature}</td>
                  <td className="p-4 text-center">
                    {item.us ? (
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-6 w-6 text-red-600 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.them ? (
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-6 w-6 text-red-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
