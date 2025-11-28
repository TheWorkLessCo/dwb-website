import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RockwallFinalCTABanner() {
  const JOBBER_FORM_URL =
    "https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"

  return (
    <section className="py-6 md:py-8 bg-brand-blue text-white">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Don't Wait — Lock in $100 Off Per Window in Rockwall Today
        </h2>
        <p className="text-lg mb-4 text-white/90 mt-2">Plus, special discounts for seniors & military.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-6 py-2 text-base"
            data-source="rockwall-final-cta"
            data-offer="100off-per-window"
            data-city="rockwall"
          >
            <a
              href={JOBBER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open request form to get a free quote"
            >
              Get My Free Quote
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-blue px-6 py-2 text-base bg-transparent"
            data-source="rockwall-final-cta"
            data-offer="100off-per-window"
            data-city="rockwall"
          >
            <Link href="tel:+14696408551">Call (469) 640-8551</Link>
          </Button>
        </div>

        <p className="text-sm text-white/80 mt-4">🔒 Limited time offer. Call today to secure your discount.</p>
      </div>
    </section>
  )
}
