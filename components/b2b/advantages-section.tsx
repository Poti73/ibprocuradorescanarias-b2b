import { MessageCircle, Globe2, ClipboardCheck, Handshake, Building2, FileCheck, Zap, Users } from "lucide-react"

const advantages = [
  {
    icon: MessageCircle,
    title: "Interlocución clara",
    description: "Un punto de contacto directo para todos sus asuntos en el archipiélago. Comunicación fluida y acceso permanente.",
  },
  {
    icon: Globe2,
    title: "Cobertura unificada",
    description: "Los 19 partidos judiciales de Canarias bajo una misma estructura. Sin necesidad de coordinar múltiples procuradores.",
  },
  {
    icon: ClipboardCheck,
    title: "Seguimiento riguroso",
    description: "Monitorización activa de expedientes. Control de plazos y notificación inmediata de resoluciones relevantes.",
  },
  {
    icon: Handshake,
    title: "Coordinación procesal",
    description: "Trabajo conjunto con el letrado director. Entendemos que la estrategia la marca el despacho, nosotros ejecutamos.",
  },
  {
    icon: Building2,
    title: "Cercanía a sede judicial",
    description: "Presencia física en las sedes cuando el expediente lo requiere. Capacidad de desencallar trámites in situ.",
  },
  {
    icon: FileCheck,
    title: "Control documental",
    description: "Gestión ordenada de la documentación. Volcado sistemático de resoluciones y trazabilidad completa.",
  },
  {
    icon: Zap,
    title: "Agilidad operativa",
    description: "Estructura pensada para responder con rapidez. Diligenciamiento inmediato y presentación ágil de escritos.",
  },
  {
    icon: Users,
    title: "Colaboración profesional",
    description: "Modelo de trabajo orientado a despachos. Entendemos las necesidades de la dirección letrada externa.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
            Valor diferencial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight text-balance">
            Ventajas de colaborar con I&B
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Un modelo de colaboración procesal orientado a despachos. Estructura pensada para seguimiento, cobertura y coordinación eficaz.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <advantage.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{advantage.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
