import { FileText, UserCheck, Eye, Bell, Send, MessageSquare } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Recepción del encargo",
    description: "Recibimos la documentación y estudiamos el asunto. Confirmamos la sede judicial, verificamos datos y preparamos el arranque operativo.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Apoderamiento",
    description: "Gestionamos el apoderamiento Apud Acta electrónico, simplificando el inicio del procedimiento sin requerir desplazamientos notariales del cliente.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Seguimiento del expediente",
    description: "Monitorización continua del estado procesal. Descarga sistemática de resoluciones desde LexNET y revisión activa del estado de cada asunto.",
  },
  {
    number: "04",
    icon: Bell,
    title: "Control de plazos y notificaciones",
    description: "Alertas internas de vencimientos. Comunicación inmediata al letrado director de cualquier notificación relevante para el procedimiento.",
  },
  {
    number: "05",
    icon: Send,
    title: "Impulso procesal y diligenciamiento",
    description: "Presentación de escritos de impulso cuando el expediente lo requiere. Diligenciamiento de oficios, mandamientos y gestiones presenciales en sede judicial.",
  },
  {
    number: "06",
    icon: MessageSquare,
    title: "Reporting y coordinación",
    description: "Comunicación fluida con el despacho director. Informes de estado según las necesidades del asunto y disponibilidad para consultas operativas.",
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
            Modelo operativo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
            Cómo trabajamos con despachos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un flujo de trabajo claro y profesional, pensado para que la dirección letrada mantenga el control total del procedimiento mientras nosotros gestionamos la operativa procesal en Canarias.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative lg:flex lg:items-center lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 lg:p-8 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                          <span className="text-xs font-mono text-accent">{step.number}</span>
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className={`text-muted-foreground leading-relaxed ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-border rounded-lg bg-card">
            <h4 className="font-semibold text-foreground mb-2">Ingrid Suárez Ramírez</h4>
            <p className="text-muted-foreground text-sm mb-3">Coordinación y seguimiento procesal</p>
            <a href="tel:+34636516283" className="text-accent hover:underline text-sm">+34 636 516 283</a>
          </div>
          <div className="p-6 border border-border rounded-lg bg-card">
            <h4 className="font-semibold text-foreground mb-2">Braulio Reyes Rodríguez</h4>
            <p className="text-muted-foreground text-sm mb-3">Gestión operativa y diligenciamiento</p>
            <a href="tel:+34629377271" className="text-accent hover:underline text-sm">+34 629 377 271</a>
          </div>
        </div>
      </div>
    </section>
  )
}
