export function McKinneyProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Schedule your free McKinney quote.",
    },
    {
      number: "2",
      title: "We measure & install.",
    },
    {
      number: "3",
      title: "Enjoy efficiency + quieter spaces.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
