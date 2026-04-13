"use client"

import { useState } from "react"
import { MapPin, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const provinces = {
  "las-palmas": {
    name: "Provincia de Las Palmas",
    islands: [
      {
        name: "Gran Canaria",
        partidos: ["Las Palmas de Gran Canaria", "Telde", "San Bartolomé de Tirajana", "Arucas", "Guía"],
      },
      {
        name: "Lanzarote",
        partidos: ["Arrecife"],
      },
      {
        name: "Fuerteventura",
        partidos: ["Puerto del Rosario"],
      },
    ],
  },
  "tenerife": {
    name: "Provincia de Santa Cruz de Tenerife",
    islands: [
      {
        name: "Tenerife",
        partidos: ["Santa Cruz de Tenerife", "San Cristóbal de La Laguna", "Arona", "Puerto de la Cruz", "Granadilla de Abona", "Icod de los Vinos", "La Orotava", "Güímar"],
      },
      {
        name: "La Palma",
        partidos: ["Santa Cruz de La Palma", "Los Llanos de Aridane"],
      },
      {
        name: "La Gomera",
        partidos: ["San Sebastián de La Gomera"],
      },
      {
        name: "El Hierro",
        partidos: ["Valverde"],
      },
    ],
  },
}

export function CoverageSection() {
  const [activeProvince, setActiveProvince] = useState<"las-palmas" | "tenerife">("las-palmas")

  const currentProvince = provinces[activeProvince]

  return (
    <section id="cobertura" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
            Despliegue territorial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
            Cobertura en todo el archipiélago
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Representación procesal en los 19 partidos judiciales de Canarias. Un único interlocutor para todas las islas, eliminando la complejidad de coordinar múltiples procuradores locales.
          </p>
        </div>

        {/* Province Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveProvince("las-palmas")}
            className={cn(
              "px-6 py-3 rounded-lg font-medium transition-all duration-200",
              activeProvince === "las-palmas"
                ? "bg-primary text-white shadow-lg"
                : "bg-card border border-border text-foreground hover:border-accent/30"
            )}
          >
            Las Palmas
          </button>
          <button
            onClick={() => setActiveProvince("tenerife")}
            className={cn(
              "px-6 py-3 rounded-lg font-medium transition-all duration-200",
              activeProvince === "tenerife"
                ? "bg-primary text-white shadow-lg"
                : "bg-card border border-border text-foreground hover:border-accent/30"
            )}
          >
            Santa Cruz de Tenerife
          </button>
        </div>

        {/* Province Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProvince.islands.map((island) => (
            <div
              key={island.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">{island.name}</h3>
              </div>
              <ul className="space-y-2">
                {island.partidos.map((partido) => (
                  <li key={partido} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{partido}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-12 p-6 md:p-8 bg-primary rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-xl font-serif text-white mb-2">Apoderamiento Apud Acta Electrónico</h4>
              <p className="text-white/70">
                Simplificamos el inicio del procedimiento sin requerir desplazamientos notariales del cliente.
              </p>
            </div>
            <div className="flex-shrink-0 text-center md:text-right">
              <div className="text-4xl font-serif text-accent">19</div>
              <div className="text-sm text-white/50">partidos judiciales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
