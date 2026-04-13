import { Building, Scale, BookOpen, Briefcase, Users } from "lucide-react"

const audiences = [
  {
    icon: Building,
    title: "Despachos de península",
    description: "Bufetes con asuntos en Canarias que necesitan cobertura local fiable y coordinación a distancia.",
  },
  {
    icon: Scale,
    title: "Abogados directores de procedimientos",
    description: "Letrados que dirigen procedimientos en el archipiélago y requieren un procurador proactivo.",
  },
  {
    icon: BookOpen,
    title: "Asesorías jurídicas",
    description: "Departamentos legales de empresas con actividad o litigios en las Islas Canarias.",
  },
  {
    icon: Briefcase,
    title: "Departamentos legales corporativos",
    description: "Equipos internos de grandes empresas que gestionan carteras de asuntos en el territorio insular.",
  },
  {
    icon: Users,
    title: "Colaboradores externos",
    description: "Profesionales del derecho que buscan un partner de procura para asuntos puntuales o recurrentes.",
  },
]

export function AudienceSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
              Para quién
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
              Esta área está pensada para profesionales del derecho
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              El área B2B de I&B Procuradores está diseñada específicamente para facilitar la colaboración profesional con despachos y profesionales que necesitan cobertura procesal en Canarias.
            </p>
            <div className="p-6 bg-muted/50 border border-border rounded-lg">
              <p className="text-foreground italic leading-relaxed">
                &quot;No se trata de externalizar la procura, sino de integrar una estructura local que actúe como extensión operativa del despacho director.&quot;
              </p>
            </div>
          </div>

          {/* Audience Cards */}
          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-accent/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <audience.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
