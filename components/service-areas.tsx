import { MapPin } from "lucide-react"

const areas = [
  "Moncton",
  "Dieppe",
  "Riverview",
  "Shediac",
  "Salisbury",
  "Sackville",
  "Bouctouche",
  "Memramcook",
]

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            Service Areas
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold uppercase tracking-tight text-primary md:text-4xl">
            Proudly Serving Greater Moncton
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Based in Moncton, New Brunswick, we bring quality roofing to homeowners throughout the
            region.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-primary"
            >
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
