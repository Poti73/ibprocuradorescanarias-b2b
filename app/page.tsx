import { Header } from "@/components/b2b/header"
import { Hero } from "@/components/b2b/hero"
import { ContextSection } from "@/components/b2b/context-section"
import { MethodologySection } from "@/components/b2b/methodology-section"
import { AreasSection } from "@/components/b2b/areas-section"
import { CoverageSection } from "@/components/b2b/coverage-section"
import { AudienceSection } from "@/components/b2b/audience-section"
import { AdvantagesSection } from "@/components/b2b/advantages-section"
import { FaqSection } from "@/components/b2b/faq-section"
import { ContactSection } from "@/components/b2b/contact-section"
import { Footer } from "@/components/b2b/footer"

export default function B2BPortal() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ContextSection />
        <MethodologySection />
        <AreasSection />
        <CoverageSection />
        <AudienceSection />
        <AdvantagesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
