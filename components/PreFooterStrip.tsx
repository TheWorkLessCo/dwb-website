export default function PreFooterStrip() {
  return (
    <section
      id="prefooter-strip"
      aria-label="Dallas Window Butler prefooter information"
      className="bg-brand-blue text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        {/* Content Section */}
        <div className="flex text-center max-w-3xl mx-auto flex-col items-center justify-center space-y-px">
          {/* Headline */}
          <h2 className="text-xl md:text-2xl font-semibold">Exceptional service and top-quality workmanship.</h2>

          {/* Description */}
          <p className="text-sm md:text-base text-white/95 leading-relaxed">
            Dallas Window Butler specializes in window and door replacements across the DFW metro. Family-owned, locally
            operated, and backed by lifetime workmanship.
          </p>

          {/* Contact info */}
          <p className="text-white/90 text-sm md:text-base">
            Questions? Email{" "}
            <a
              href="mailto:info@dallaswindowbutler.com"
              className="underline underline-offset-2 decoration-white/60 hover:decoration-white"
            >
              info@dallaswindowbutler.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+14696408551"
              className="font-semibold underline underline-offset-2 decoration-white/60 hover:decoration-white"
            >
              (469) 640-8551
            </a>
            .
          </p>

          {/* Service area */}
          <p className="text-white/80 text-sm md:text-base">
            Serving Rockwall, McKinney, Allen, Plano, and North Richardson.
          </p>
        </div>
      </div>
    </section>
  )
}
