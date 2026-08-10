import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { ServiceAreas } from "@/components/service-areas"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { ChatWidget } from './components/chat-widget'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <About />
        <Process />
        <ServiceAreas />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <ChatWidget />
    </div>
  )
}
