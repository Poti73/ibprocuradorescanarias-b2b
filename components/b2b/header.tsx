"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#contexto", label: "Por qué Canarias" },
  { href: "#metodologia", label: "Cómo trabajamos" },
  { href: "#areas", label: "Áreas" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/98 backdrop-blur-md shadow-lg border-b border-accent/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl md:text-2xl font-serif tracking-tight text-white">
                I&B <span className="text-accent">Procuradores</span>
              </span>
            </Link>
            <span className="hidden md:inline-flex items-center px-2.5 py-1 text-[10px] uppercase tracking-widest font-medium bg-accent/20 text-accent rounded">
              Área B2B
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="https://ibprocuradorescanarias.es"
              rel="nofollow noopener noreferrer"
              className="hidden sm:inline-flex text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Web principal
            </a>
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              asChild
            >
              <Link href="#contacto">Iniciar colaboración</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://ibprocuradorescanarias.es"
                  rel="nofollow noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white/80 transition-colors"
                >
                  Ir a web principal
                </a>
                <Button
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                  asChild
                >
                  <Link href="#contacto">Iniciar colaboración</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
