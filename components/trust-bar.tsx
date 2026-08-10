import { Award, Home, ShieldCheck } from "lucide-react"

const items = [
  { icon: ShieldCheck, title: "Quality Workmanship", text: "Meticulous installs done right the first time." },
  { icon: Home, title: "Solutions For Every Home", text: "Residential roofing tailored to your property." },
  { icon: Award, title: "Local. Reliable. Trusted.", text: "Proudly serving Moncton and the surrounding area." },
]

export function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-mono text-base font-bold uppercase tracking-wide text-primary">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
