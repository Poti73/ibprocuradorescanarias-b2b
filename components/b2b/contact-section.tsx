"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Linkedin, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4 block">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
              Iniciemos una conversación profesional
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Si tiene asuntos en Canarias o está valorando una colaboración estable, estamos a su disposición para estudiar las necesidades de su despacho.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ingrid Suárez Ramírez</h4>
                  <a href="tel:+34636516283" className="text-accent hover:underline">+34 636 516 283</a>
                  <div className="mt-1">
                    <a
                      href="https://www.linkedin.com/in/ingrid-su%C3%A1rez-33173b352/"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Braulio Reyes Rodríguez</h4>
                  <a href="tel:+34629377271" className="text-accent hover:underline">+34 629 377 271</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sede principal</h4>
                  <p className="text-muted-foreground">Las Palmas de Gran Canaria</p>
                </div>
              </div>
            </div>

            {/* Back to main site */}
            <a
              href="https://ibprocuradorescanarias.es"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Volver a la web principal
            </a>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-10">
            <h3 className="text-xl font-serif text-foreground mb-6">Envíenos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Su nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Despacho / Organización
                  </label>
                  <Input
                    id="organization"
                    type="text"
                    value={formState.organization}
                    onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                    placeholder="Nombre del despacho"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="email@despacho.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describa brevemente el tipo de colaboración o asunto que le interesa..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                Enviar consulta
                <Mail className="w-4 h-4 ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Sus datos serán tratados de forma confidencial y exclusivamente para gestionar su consulta.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
