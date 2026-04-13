import { MapPin, TrendingUp, Clock, Users } from "lucide-react"

const insights = [
  {
    icon: TrendingUp,
    metric: "181",
    unit: "por 1.000 hab.",
    title: "Tasa de litigiosidad",
    description: "Canarias lidera los índices de litigiosidad en España. La saturación judicial exige un procurador que actúe como impulsor procesal constante.",
  },
  {
    icon: MapPin,
    metric: "19",
    unit: "partidos",
    title: "Fragmentación territorial",
    description: "El archipiélago se divide en 19 partidos judiciales distribuidos en 8 islas. Coordinar procedimientos desde península multiplica la complejidad.",
  },
  {
    icon: Clock,
    metric: "2027",
    unit: "señalamientos",
    title: "Saturación de agendas",
    description: "En algunas sedes de Las Palmas, los señalamientos civiles ya se proyectan para finales de 2027. El seguimiento activo es imprescindible.",
  },
  {
    icon: Users,
    metric: "1",
    unit: "interlocutor",
    title: "Simplificación operativa",
    description: "Un único punto de contacto para todos los partidos judiciales del archipiélago. Eliminamos la necesidad de coordinar múltiples procuradores locales.",
  },
]

export function ContextSection() {
  return (
    <section id="contexto" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
            Contexto del mercado
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
            Por qué Canarias exige estructura local
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La gestión procesal en el archipiélago presenta desafíos específicos que hacen necesaria una infraestructura local sólida. Entender este contexto es clave para valorar el beneficio de una colaboración estructurada.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                  <insight.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-serif text-foreground">{insight.metric}</span>
                    <span className="text-sm text-muted-foreground">{insight.unit}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{insight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 md:mt-20 p-8 bg-primary rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              La insularidad no debe ser un obstáculo para la gestión eficaz de sus expedientes. Con la estructura adecuada, se convierte en una operativa controlada y predecible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
