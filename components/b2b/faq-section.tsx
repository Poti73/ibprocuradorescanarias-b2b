"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo iniciamos una colaboración?",
    answer: "El primer paso es contactar con nosotros para presentar el asunto o tipo de asuntos que desea encomendar. Estudiamos las necesidades específicas, confirmamos la cobertura territorial y establecemos el canal de comunicación más adecuado. A partir de ahí, gestionamos el apoderamiento y comenzamos la colaboración.",
  },
  {
    question: "¿Pueden actuar en todos los partidos judiciales de Canarias?",
    answer: "Sí. Ofrecemos cobertura en los 19 partidos judiciales del archipiélago, distribuidos entre las dos provincias canarias. Esto incluye las islas de Gran Canaria, Tenerife, Lanzarote, Fuerteventura, La Palma, La Gomera y El Hierro.",
  },
  {
    question: "¿Trabajan con despachos de fuera de las islas?",
    answer: "Precisamente. El área B2B está pensada principalmente para despachos de península que necesitan representación procesal fiable en Canarias. Nuestra estructura está diseñada para facilitar la colaboración a distancia con dirección letrada externa.",
  },
  {
    question: "¿Cómo gestionan el seguimiento de resoluciones y plazos?",
    answer: "Realizamos una monitorización sistemática de los expedientes a través de LexNET. Las resoluciones relevantes se comunican de forma inmediata al letrado director, con control interno de plazos para evitar cualquier vencimiento inadvertido.",
  },
  {
    question: "¿Qué tipo de asuntos pueden coordinar?",
    answer: "Nuestra experiencia se centra especialmente en litigación bancaria y de consumo, tarjetas revolving, ejecuciones, procedimientos monitorios, asuntos mercantiles y concursales, así como procedimientos de volumen o carteras amplias. Estamos preparados para asuntos puntuales o colaboraciones recurrentes.",
  },
  {
    question: "¿Cómo centralizan la operativa si hay procedimientos en distintas islas?",
    answer: "Actuamos como punto único de contacto para todos los procedimientos, independientemente de la isla o partido judicial. Esto elimina la necesidad de que el despacho director coordine múltiples procuradores locales, simplificando la gestión administrativa y documental.",
  },
  {
    question: "¿Cómo se gestiona el apoderamiento?",
    answer: "Facilitamos el apoderamiento Apud Acta electrónico, lo que simplifica el inicio del procedimiento sin necesidad de desplazamientos notariales por parte del cliente. Este proceso es rápido y permite comenzar la representación de forma ágil.",
  },
  {
    question: "¿Qué modelo de comunicación utilizan?",
    answer: "Nos adaptamos a las preferencias del despacho director. Podemos utilizar email, teléfono, o integrarnos en los canales que el despacho ya tenga establecidos. La comunicación es directa, sin intermediarios, con Ingrid y Braulio como interlocutores principales.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
            Dudas habituales de despachos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestra forma de trabajar y el modelo de colaboración B2B.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent/30 data-[state=open]:shadow-md transition-all duration-200"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="font-medium pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
