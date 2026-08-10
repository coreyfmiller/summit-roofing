import { BadgeCheck, Clock, HandshakeIcon, ShieldCheck, ThumbsUp, Wallet } from "lucide-react"

const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "Full liability coverage and workers' compensation on every job." },
  { icon: BadgeCheck, title: "Quality Materials", text: "We install trusted, warranty-backed roofing products only." },
  { icon: Clock, title: "On-Time & On-Budget", text: "Clear timelines and honest quotes with no surprise fees." },
  { icon: HandshakeIcon, title: "Locally Owned", text: "A Moncton team that stands behind its work and its neighbours." },
  { icon: Wallet, title: "Fair, Upfront Pricing", text: "Transparent estimates so you know exactly what to expect." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", text: "We're not done until you're completely happy with your roof." },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            Why Summit Roofing NB
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            The Trusted Choice in Greater Moncton
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            When you hire Summit, you get a partner committed to protecting your biggest investment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <reason.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-mono text-lg font-bold uppercase tracking-wide">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
