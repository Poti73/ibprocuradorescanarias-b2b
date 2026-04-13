import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Scale } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
          <Building2 className="w-4 h-4 text-accent" />
          <span className="text-sm text-white/70 font-medium">Área B2B | Despachos y colaboradores</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 text-balance">
          Infraestructura de procura
          <br />
          <span className="text-accent">en Canarias</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Coordinación procesal para despachos externos. Cobertura territorial y operativa unificada para sus expedientes en el archipiélago.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 h-12"
            asChild
          >
            <Link href="#contacto">
              Iniciar colaboración
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 font-medium px-8 h-12 bg-transparent"
            asChild
          >
            <a href="https://ibprocuradorescanarias.es" rel="nofollow noopener noreferrer">
              <Scale className="w-4 h-4 mr-2" />
              Web principal
            </a>
          </Button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">19</div>
            <div className="text-sm text-white/50">Partidos judiciales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">8</div>
            <div className="text-sm text-white/50">Islas con cobertura</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">2</div>
            <div className="text-sm text-white/50">Provincias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">1</div>
            <div className="text-sm text-white/50">Interlocutor único</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
