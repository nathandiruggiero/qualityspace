"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Menu, X } from "lucide-react"

const navItems = [
  { name: "Le concept", path: "/le-concept" },
  { name: "Exposants", path: "/exposants" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Infos pratiques", path: "/infos-pratiques" },
  { name: "À propos", path: "/a-propos" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold-200/60 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 ring-2 ring-gold-300/50 rounded-full">
              <Image
                src="/images/laurelia-logo.jpeg"
                alt="Laurëlia Events"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span
              className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-500"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Laurëlia Events
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-sm text-gold-800 hover:text-gold-500 transition-colors group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: CTA + burger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="https://billeterie.laureliaevents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center h-9 sm:h-10 px-4 sm:px-5 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-forest-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              <span className="relative flex items-center gap-1.5">
                Réserver
                <Sparkles className="w-3.5 h-3.5 hidden sm:inline animate-pulse" />
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gold-700 hover:text-gold-500 transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/25" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute top-0 left-0 bottom-0 w-[280px] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ backgroundColor: "#FDF6EC" }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gold-200">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
              <div className="relative h-8 w-8 ring-2 ring-gold-300/40 rounded-full">
                <Image src="/images/laurelia-logo.jpeg" alt="Laurëlia Events" fill className="rounded-full object-cover" />
              </div>
              <span
                className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-500"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Laurëlia Events
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 text-gold-600 hover:text-gold-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-5 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gold-800 hover:text-gold-500 hover:bg-gold-100/60 px-3 py-3 rounded-xl transition-colors border-b border-gold-100 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="px-5">
            <Link
              href="https://billeterie.laureliaevents.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full h-12 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-forest-500 hover:to-forest-600 text-white font-medium rounded-full shadow-md transition-all duration-300"
            >
              Réserver mes billets
              <Sparkles className="w-4 h-4 animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
