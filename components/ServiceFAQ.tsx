"use client"
import { serviceFaqs } from "@/data/faqs"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

type FAQItem = { question: string; answer: string }

export default function ServiceFAQ({
  serviceName,
  items,
  id = "faqs",
  title = "Got Questions? We've Got Answers.",
  subtitle = "Everything you need to know about Dallas Window Butler services.",
}: {
  serviceName?: keyof typeof serviceFaqs | string
  items?: FAQItem[]
  id?: string
  title?: string
  subtitle?: string
}) {
  const data: FAQItem[] =
    items ?? (serviceName && serviceFaqs[String(serviceName)] ? serviceFaqs[String(serviceName)] : [])

  return (
    <section id={id} className="relative overflow-hidden py-16 sm:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#049bf2]/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#049bf2]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00152e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <header className="mb-10 sm:mb-12 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#049bf2] bg-[#049bf2]/10 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#00152e]">{title}</h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
          </header>
        </AnimateOnScroll>

        <div className="space-y-4">
          {(data?.slice(0, 6) ?? []).map((faq, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
              <details
                className="group rounded-2xl border border-white/50 bg-white/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,21,46,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,155,242,0.12)] hover:border-[#049bf2]/20 hover:-translate-y-0.5 open:border-[#049bf2]/30 open:shadow-[0_8px_30px_rgba(4,155,242,0.12)]"
              >
                <summary className="flex w-full cursor-pointer list-none items-center gap-4 px-5 sm:px-6 py-5 sm:py-6 transition-colors duration-200 hover:bg-white/50">
                  <span className="flex-shrink-0 inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-[#049bf2]/10 to-[#049bf2]/5 border border-[#049bf2]/20 text-[#049bf2] font-medium text-lg transition-all duration-300 group-hover:from-[#049bf2] group-hover:to-[#0389d5] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_12px_rgba(4,155,242,0.3)] group-open:from-[#049bf2] group-open:to-[#0389d5] group-open:text-white group-open:border-transparent group-open:shadow-[0_4px_12px_rgba(4,155,242,0.3)]">
                    <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                  <span className="flex-1 text-left text-base sm:text-lg font-semibold text-[#00152e] leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-6 pl-[4.25rem] sm:pl-[4.75rem] text-slate-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
