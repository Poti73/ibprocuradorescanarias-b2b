import Link from "next/link"
import { Scale } from "lucide-react"

const navLinks = [
  { href: "#contexto", label: "Por qué Canarias" },
  { href: "#metodologia", label: "Cómo trabajamos" },
  { href: "#areas", label: "Áreas" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-primary border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-serif text-white">
                I&B <span className="text-accent">Procuradores</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-accent/20 text-accent rounded">
                B2B
              </span>
            </div>
            <p className="text-white/50 max-w-md mb-6 leading-relaxed">
              Portal de colaboración profesional para despachos de abogados. Infraestructura de procura especializada en las Islas Canarias.
            </p>
            <a
              href="https://ibprocuradorescanarias.es"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors"
            >
              <Scale className="w-4 h-4" />
              Visitar web principal
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-3 text-white/50">
              <li>
                <span className="block text-white/70 text-sm">Ingrid Suárez</span>
                <a href="tel:+34636516283" className="hover:text-accent transition-colors">
                  +34 636 516 283
                </a>
              </li>
              <li>
                <span className="block text-white/70 text-sm">Braulio Reyes</span>
                <a href="tel:+34629377271" className="hover:text-accent transition-colors">
                  +34 629 377 271
                </a>
              </li>
              <li className="pt-2">
                <span className="text-sm">Las Palmas de Gran Canaria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} I&B Procuradores Canarias. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/40">
            Área B2B · Colaboración profesional entre despachos
          </p>
        </div>
      </div>
    </footer>
  )
}
