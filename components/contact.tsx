"use client"

import { useState } from "react"
import { Clock, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

const contactInfo = [
  { icon: Phone, label: "Call or text", value: "(506) 555-0142", href: "tel:+15065550142" },
  { icon: Mail, label: "Email us", value: "info@summitroofingnb.ca", href: "mailto:info@summitroofingnb.ca" },
  { icon: MapPin, label: "Based in", value: "Moncton, New Brunswick", href: null },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 7am–6pm", href: null },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
            Free Estimate
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Let&apos;s Protect Your Home
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Tell us about your roofing project and we&apos;ll get back to you with a free,
            no-obligation estimate — usually within one business day.
          </p>

          <ul className="mt-8 space-y-5">
            {contactInfo.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-primary-foreground/60">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="text-lg font-semibold hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-lg font-semibold">{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-card p-6 text-foreground shadow-lg md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-mono text-2xl font-bold uppercase tracking-wide text-primary">
                Thank You!
              </h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Your request has been received. A member of the Summit Roofing NB team will reach out
                shortly to schedule your free estimate.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
                    Full name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(506) 555-0142" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@example.com" />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Service needed
                </label>
                <select id="service" name="service" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Roof replacement</option>
                  <option>Metal roofing</option>
                  <option>Roof repair</option>
                  <option>Inspection / other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Project details
                </label>
                <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us a bit about your roof and what you need..." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Request My Free Estimate
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your roofing project.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
