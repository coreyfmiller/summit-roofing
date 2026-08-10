"use client"

import { useState } from "react"
import { Menu, Phone, X, MountainSnow } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20">
        <a href="#top" className="flex items-center gap-2 text-primary">
          <MountainSnow className="h-7 w-7" aria-hidden="true" />
          <span className="font-mono text-xl font-extrabold uppercase leading-none tracking-tight md:text-2xl">
            Summit Roofing
            <span className="ml-1 text-accent">NB</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+15065550142"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            (506) 555-0142
          </a>
          <Button asChild>
            <a href="#contact">Free Estimate</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-semibold text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-4">
              <a href="#contact" onClick={() => setOpen(false)}>
                Get a Free Estimate
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
