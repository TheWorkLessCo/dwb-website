"use client"

import { useEffect } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface ModernFAQProps {
  title?: string
  subtitle?: string
  className?: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Is the warranty transferable?",
    answer:
      "Yes, our lifetime workmanship warranty transfers to new homeowners, adding value to your property and peace of mind for future buyers.",
  },
  {
    question: "Do you replace just the glass/IG unit?",
    answer:
      "Yes—if your frames are solid, we replace only the insulated glass (IG) unit to fix fogging or broken seals at a lower cost than full window replacement.",
  },
  {
    question: "How long do custom orders take?",
    answer:
      "After we measure and place your order, manufacturing typically takes 2–4 weeks. We'll schedule your install as soon as your units arrive.",
  },
  {
    question: "Do you repair brick cut-outs?",
    answer:
      "Absolutely. We handle all masonry work needed for proper window installation, including brick repairs, stucco matching, and siding adjustments.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We offer flexible financing with approved credit, including 0% options. Get pre-qualified during your consultation with no impact to your credit score.",
  },
  {
    question: "What happens if it leaks?",
    answer:
      "Our lifetime workmanship warranty covers any installation-related leaks. We return promptly to fix the issue at no cost to you.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: defaultFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export function ModernFAQ({
  title = "Got Questions? We've Got Answers.",
  subtitle = "Everything you need to know about window replacement, glass/IG repair, and door services.",
  className = "",
}: ModernFAQProps) {
  useEffect(() => {
    const handleFAQClick = (event: Event) => {
      const button = (event.target as Element).closest("button[data-faq-button]")
      if (!button) return

      const item = button.closest("[data-faq-item]")
      const answer = item?.querySelector("[data-faq-answer]")

      if (!item || !answer) return

      const isOpen = button.getAttribute("aria-expanded") === "true"

      // Close all other items
      document.querySelectorAll("[data-faq-item]").forEach((otherItem) => {
        if (otherItem !== item) {
          const otherButton = otherItem.querySelector("button[data-faq-button]")
          const otherAnswer = otherItem.querySelector("[data-faq-answer]")
          if (otherButton && otherAnswer) {
            otherButton.setAttribute("aria-expanded", "false")
          }
        }
      })

      // Toggle current item
      button.setAttribute("aria-expanded", isOpen ? "false" : "true")
    }

    document.addEventListener("click", handleFAQClick)
    return () => document.removeEventListener("click", handleFAQClick)
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section data-faq className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 ${className}`}>
        <header className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{title}</h2>
          <p className="mt-2 text-slate-600">{subtitle}</p>
        </header>

        <div className="space-y-3" data-faq-list>
          {defaultFAQs.map((faq, index) => (
            <div
              key={index}
              data-faq-item
              className="group rounded-2xl border border-slate-200 bg-white/95 shadow-sm overflow-hidden transition"
            >
              <button
                data-faq-button
                className="w-full flex items-center gap-3 px-4 sm:px-5 py-4 sm:py-5 text-left"
                aria-expanded="false"
              >
                <span className="faq-icon inline-grid place-items-center h-7 w-7 rounded-full border border-slate-300 transition-transform duration-300">
                  +
                </span>
                <span className="flex-1 text-base sm:text-lg font-semibold text-slate-900 leading-tight">
                  {faq.question}
                </span>
              </button>
              <div
                data-faq-answer
                className="px-4 sm:px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed faq-answer"
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
