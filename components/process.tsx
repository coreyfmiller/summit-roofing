const steps = [
  { number: "01", title: "Free Estimate", text: "We inspect your roof and provide a clear, no-pressure written quote." },
  { number: "02", title: "Plan & Schedule", text: "We help you choose materials and lock in a timeline that works for you." },
  { number: "03", title: "Professional Install", text: "Our crew completes the job safely, cleanly, and on schedule." },
  { number: "04", title: "Final Walkthrough", text: "We review the work together and back it with our warranty." },
]

export function Process() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            Our Process
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold uppercase tracking-tight text-primary md:text-4xl">
            Roofing Made Simple
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-xl border border-border bg-card p-6">
              <span className="font-mono text-4xl font-extrabold text-accent">{step.number}</span>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-wide text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
