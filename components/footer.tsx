"use client"

import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Le Concept", href: "/le-concept" },
  { label: "Exposants", href: "/exposants" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Infos Pratiques", href: "/infos-pratiques" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Équipe", href: "/equipe" },
]

export default function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-gold-200">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="relative h-11 w-11 ring-2 ring-gold-300/50 rounded-full">
                <Image
                  src="/images/laurelia-logo.jpeg"
                  alt="Laurëlia Events"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span
                className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-500"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Laurëlia Events
              </span>
            </Link>
            <p className="text-gold-700 text-sm leading-relaxed max-w-xs">
              L'événement lifestyle, bien-être et entrepreneuriat local en Guadeloupe.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/laureliaevents"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold-300 hover:border-gold-500 hover:bg-gold-100 flex items-center justify-center text-gold-600 hover:text-gold-700 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold-800 font-semibold text-xs uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gold-700 hover:text-gold-500 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Event info + CTA */}
          <div>
            <h4 className="text-gold-800 font-semibold text-xs uppercase tracking-widest mb-5">
              Prochaine édition
            </h4>
            <div className="flex items-start gap-2 mb-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
              <p className="text-gold-700 text-sm">29 Novembre 2025</p>
            </div>
            <div className="flex items-start gap-2 mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-forest-400 mt-1.5 shrink-0" />
              <p className="text-gold-600 text-sm leading-relaxed">
                Les villas les trésors de Laurëlia<br />Grande-Savane Gourbeyre, Guadeloupe
              </p>
            </div>
            <Link
              href="https://billeterie.laureliaevents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-forest-500 hover:to-forest-600 text-white text-sm font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Réserver mes billets
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gold-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gold-400">
          <span>&copy; {new Date().getFullYear()} Laurëlia Events. Tous droits réservés.</span>
          <span
            className="italic text-gold-400"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L'excellence caribéenne à l'honneur
          </span>
        </div>
      </div>
    </footer>
  )
}
