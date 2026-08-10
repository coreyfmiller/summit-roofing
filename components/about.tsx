import { Button } from "@/components/ui/button"

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "1,200+", label: "Roofs completed" },
  { value: "100%", label: "Satisfaction focused" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-2xl border border-border shadow-sm lg:order-1">
          <img
            src="/images/about-crew.png"
            alt="The Summit Roofing NB crew in front of a completed home with a new roof"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            About Us
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold uppercase tracking-tight text-primary md:text-4xl">
            A Local Team You Can Count On
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Summit Roofing NB was founded in Moncton with one goal: to give homeowners across New
            Brunswick roofing they can trust. We combine skilled craftsmanship with premium materials
            to deliver roofs that stand up to everything the Maritimes throw at them.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From your first estimate to the final cleanup, we treat your home like it&apos;s our own ,
            honest communication, tidy job sites, and results that last.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-secondary p-4 text-center">
                <dt className="font-mono text-2xl font-extrabold text-primary md:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <Button asChild size="lg" className="mt-8">
            <a href="#contact">Request a Free Estimate</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
