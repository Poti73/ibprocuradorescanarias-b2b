"use client"

import { useState } from "react"
import { Landmark, CreditCard, FileText, ShieldCheck, Briefcase, FolderSync } from "lucide-react"
import { cn } from "@/lib/utils"

const areas = [
  {
    id: "bancaria",
    icon: Landmark,
    title: "Litigación bancaria y de consumo",
    shortTitle: "Bancaria",
    description: "Gestión procesal de reclamaciones por cláusulas abusivas, gastos hipotecarios, IRPH y cláusulas suelo. Conocimiento específico de los criterios de cada juzgado canario.",
    value: "Control de plazos críticos, anticipación a defectos formales y seguimiento activo de la doctrina aplicable.",
  },
  {
    id: "revolving",
    icon: CreditCard,
    title: "Tarjetas revolving",
    shortTitle: "Revolving",
    description: "Tramitación de procedimientos de nulidad por usura y falta de transparencia. Volumen significativo de este tipo de asuntos en el archipiélago.",
    value: "Experiencia en la casuística específica y agilización de liquidaciones de intereses tras sentencias estimatorias.",
  },
  {
    id: "ejecuciones",
    icon: FileText,
    title: "Ejecuciones y títulos",
    shortTitle: "Ejecuciones",
    description: "Dinamización de ejecuciones hipotecarias y de títulos no judiciales. Investigación patrimonial, anotaciones de embargo y asistencia en subastas electrónicas.",
    value: "Presencia física en sede para desencallar trámites y acelerar diligencias de embargo.",
  },
  {
    id: "monitorios",
    icon: ShieldCheck,
    title: "Procedimientos monitorios",
    shortTitle: "Monitorios",
    description: "Estructura preparada para carteras de impagados y reclamaciones de cantidad. Conversión eficiente a ejecución dineraria cuando procede.",
    value: "Reducción de tiempos en requerimientos de pago y seguimiento sistemático hasta la resolución.",
  },
  {
    id: "mercantil",
    icon: Briefcase,
    title: "Mercantil y concursal",
    shortTitle: "Mercantil",
    description: "Colaboración con administradores concursales. Tramitación de concursos de acreedores, impugnaciones de acuerdos y procedimientos societarios.",
    value: "Coordinación especializada en jurisdicción mercantil con conocimiento del Juzgado de lo Mercantil de Las Palmas.",
  },
  {
    id: "volumen",
    icon: FolderSync,
    title: "Procedimientos de volumen",
    shortTitle: "Volumen",
    description: "Capacidad para absorber carteras procesales amplias. Coordinación documental centralizada para fondos, entidades financieras y plataformas de afectados.",
    value: "Modelo operativo pensado para escalar sin perder trazabilidad ni control individualizado.",
  },
]

export function AreasSection() {
  const [activeArea, setActiveArea] = useState(areas[0].id)
  const selectedArea = areas.find((a) => a.id === activeArea) || areas[0]

  return (
    <section id="areas" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
            Especialización
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
            Áreas de colaboración
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No todos los asuntos tienen las mismas exigencias operativas. Estas son las áreas donde nuestra estructura puede aportar mayor valor a la dirección letrada.
          </p>
        </div>

        {/* Areas Interactive */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Area Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg border transition-all duration-200",
                  activeArea === area.id
                    ? "bg-primary border-primary text-white"
                    : "bg-card border-border hover:border-accent/30 text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <area.icon className={cn(
                    "w-5 h-5",
                    activeArea === area.id ? "text-accent" : "text-muted-foreground"
                  )} />
                  <span className="font-medium">{area.shortTitle}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Area Detail */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-lg p-8 lg:p-10 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <selectedArea.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">{selectedArea.title}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Descripción</h4>
                  <p className="text-foreground leading-relaxed">{selectedArea.description}</p>
                </div>
                <div className="pt-6 border-t border-border">
                  <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Valor operativo</h4>
                  <p className="text-foreground leading-relaxed">{selectedArea.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
