"use client"
import { serviceFaqs } from "@/data/faqs"

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
    <section id={id} className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-5xl px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h2>
          <p className="mt-2 text-base text-slate-600">{subtitle}</p>
        </header>

        <div className="space-y-4">
          {(data?.slice(0, 4) ?? []).map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                <span className="text-left font-semibold text-slate-900">{faq.question}</span>
                <span
                  className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-slate-700">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
