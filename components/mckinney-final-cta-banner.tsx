import { Button } from "@/components/ui/button"
import { auditPhoneLink } from "@/lib/link-audit"

export function McKinneyFinalCtaBanner() {
  const phoneLink = auditPhoneLink("tel:214-399-9592", "McKinney CTA Banner")
  const JOBBER_FORM_URL =
    "https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"

  return (
    <section className="py-6 md:py-8 bg-brand-blue text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">$100 Off Per Window in McKinney</h2>
        <p className="text-lg mb-4 text-white/90 mt-2">With extra discounts for seniors & military.</p>
        <Button
          size="lg"
          className="bg-white text-brand-blue hover:bg-white/90 text-base px-6 py-2 font-semibold"
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
