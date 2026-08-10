import Image from "next/image"
import { CheckCircle2, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const points = ["Free, no-obligation estimates", "Licensed & fully insured", "Locally owned in Moncton, NB"]

export function Hero() {
  return (
    <section id="top" className="bg-background">
      {/* Banner image, already contains the logo, tagline and value props */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-6">
        <Image
          src="/images/summit-hero.png"
          alt="Summit Roofing NB, Built to Protect. Built to Last. A modern home with a new dark metal roof overlooking the New Brunswick coastline"
          width={1728}
          height={912}
          priority
          className="w-full rounded-xl border border-border shadow-sm"
        />
      </div>

      {/* Action band below the banner */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              From full roof replacements to storm repairs, Summit Roofing NB delivers quality
              workmanship and roofing solutions for every home across Greater Moncton.
            </p>

            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
              Backed by workmanship &amp; manufacturer warranties
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#contact">Get Your Free Estimate</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+15065550142" className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                (506) 555-0142
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
