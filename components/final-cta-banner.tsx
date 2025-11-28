import { Button } from "@/components/ui/button"

export default function FinalCTABanner() {
  const JOBBER_FORM_URL =
    "https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"

  return (
    <section className="py-6 md:py-8 bg-brand-blue">
      <div className="container flex items-center justify-center mx-auto px-4 flex-col gap-0 leading-5">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Don't Wait — Lock in $100 Off Per Window Today
        </h2>

        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto mt-2">
          Plus, special discounts for seniors & military.
        </p>

        <Button
          size="lg"
          className="bg-white text-brand-blue hover:bg-white/90 text-base px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all"
          asChild
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
      </div>
    </section>
  )
}
