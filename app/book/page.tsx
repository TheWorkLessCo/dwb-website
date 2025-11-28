import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Your Free Quote - Dallas Window Butler",
  description: "Schedule your free in-home consultation for window and door replacement in Rockwall, TX.",
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-gray-600">Schedule your no-pressure in-home consultation today</p>
        </div>

        <div id="form" className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="w-full h-[600px] rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Booking Form Loading...</h3>
                <p className="text-gray-500">Please wait while we load your booking form.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            Questions? Call us at{" "}
            <a href="tel:+14696408551" className="text-[#049BF2] hover:underline">
              (469) 640-8551
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
