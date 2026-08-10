import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "/images/service-shingle.png",
    title: "Asphalt Shingle Roofing",
    text: "Durable, cost-effective architectural shingles installed to withstand New Brunswick winters and coastal weather.",
    points: ["Full roof replacement", "New construction", "Tear-off & re-roof"],
  },
  {
    image: "/images/service-metal.png",
    title: "Metal Roofing",
    text: "Sleek standing seam and metal roofing systems that offer decades of protection with a modern finish.",
    points: ["Standing seam", "Long-life warranties", "Energy efficient"],
  },
  {
    image: "/images/service-repair.png",
    title: "Roof Repair & Maintenance",
    text: "Fast, reliable repairs for leaks, storm damage, and worn flashing to keep your home protected year-round.",
    points: ["Leak & storm repair", "Flashing & vents", "Inspections"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold uppercase tracking-tight text-primary md:text-4xl">
            Roofing Solutions for Every Home
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Whether you need a brand-new roof or a quick repair, our crew handles every project with
            the same care and craftsmanship.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-mono text-xl font-bold uppercase tracking-wide text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
