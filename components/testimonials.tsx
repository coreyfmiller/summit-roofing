import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "Summit replaced our entire roof in two days. The crew was professional, the site was spotless, and the new metal roof looks incredible.",
    name: "Sarah M.",
    location: "Moncton, NB",
  },
  {
    quote:
      "After a bad storm we had a leak. They came out fast, fixed it right, and the price was exactly what they quoted. Highly recommend.",
    name: "Dave R.",
    location: "Riverview, NB",
  },
  {
    quote:
      "Honest, reliable, and great to deal with from start to finish. It's clear they take pride in their work. Built to last is right!",
    name: "Lynn T.",
    location: "Dieppe, NB",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            Reviews
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold uppercase tracking-tight text-primary md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <span className="font-mono text-base font-bold uppercase tracking-wide text-primary">
                  {review.name}
                </span>
                <span className="block text-sm text-muted-foreground">{review.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
