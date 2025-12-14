import { Button } from "@/components/ui/button"
import { CTA_CONFIG } from "@/lib/cta"

export default function FinalCTABanner() {
  const { quoteHref, secondaryLabel } = CTA_CONFIG

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
            href={quoteHref}
            aria-label="Open request form to get a free quote"
          >
            {secondaryLabel}
          </a>
        </Button>
      </div>
    </section>
  )
}
