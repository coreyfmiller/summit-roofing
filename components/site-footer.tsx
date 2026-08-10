import { MountainSnow, Phone, Mail, MapPin } from "lucide-react"

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Free Estimate", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <MountainSnow className="h-7 w-7 text-accent" aria-hidden="true" />
            <span className="font-mono text-xl font-extrabold uppercase tracking-tight">
              Summit Roofing <span className="text-accent">NB</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            Built to protect. Built to last. Quality roofing solutions for homeowners across Greater
            Moncton, New Brunswick.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-background/60">
            Explore
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-background/80 transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-background/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+15065550142" className="flex items-center gap-2 text-background/80 hover:text-accent">
                <Phone className="h-4 w-4" aria-hidden="true" />
                (506) 555-0142
              </a>
            </li>
            <li>
              <a href="mailto:info@summitroofingnb.ca" className="flex items-center gap-2 text-background/80 hover:text-accent">
                <Mail className="h-4 w-4" aria-hidden="true" />
                info@summitroofingnb.ca
              </a>
            </li>
            <li className="flex items-center gap-2 text-background/80">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Moncton, New Brunswick
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-background/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Summit Roofing NB. All rights reserved.</p>
          <p>Licensed &amp; insured roofing contractor.</p>
        </div>
      </div>
    </footer>
  )
}
