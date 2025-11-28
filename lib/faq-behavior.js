document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll("[data-faq-item]")
  faqItems.forEach((item, i) => {
    const questionBtn = item.querySelector("button")
    const answer = item.querySelector("[data-faq-answer]")

    if (!questionBtn || !answer) return

    // Generate unique IDs
    const qId = `faq-question-${i}`
    const aId = `faq-answer-${i}`

    // Assign IDs
    questionBtn.id = qId
    answer.id = aId

    // Accessibility attributes
    questionBtn.setAttribute("aria-controls", aId)
    questionBtn.setAttribute("aria-expanded", "false")
    answer.setAttribute("role", "region")
    answer.setAttribute("aria-labelledby", qId)
    answer.hidden = true

    // Toggle behavior
    questionBtn.addEventListener("click", () => {
      const isOpen = questionBtn.getAttribute("aria-expanded") === "true"
      // Close all other items
      faqItems.forEach((other) => {
        const otherBtn = other.querySelector("button")
        const otherAns = other.querySelector("[data-faq-answer]")
        if (otherBtn && otherAns) {
          otherBtn.setAttribute("aria-expanded", "false")
          otherAns.hidden = true
        }
      })
      // Open this one if it was closed
      if (!isOpen) {
        questionBtn.setAttribute("aria-expanded", "true")
        answer.hidden = false
      }
    })
  })
})
