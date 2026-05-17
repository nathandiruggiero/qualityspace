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
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10">
              <Image
                src="/images/laurelia-logo.jpeg"
                alt="Laurëlia Events"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
              Laurëlia Events
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-sm text-gold-900 hover:text-gold-600 transition-colors group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: CTA + burger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="https://billeterie.laureliaevents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center h-9 sm:h-10 px-4 sm:px-6 bg-gradient-to-r from-gold-600 to-gold-700 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-700 to-gold-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              <span className="relative flex items-center gap-1.5">
                Réserver
                <Sparkles className="w-3.5 h-3.5 hidden sm:inline animate-pulse" />
              </span>
            </Link>

            {/* Burger — mobile only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gold-800 hover:text-gold-600 transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gold-100">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
              <div className="relative h-8 w-8">
                <Image src="/images/laurelia-logo.jpeg" alt="Laurëlia Events" fill className="rounded-full object-cover" />
              </div>
              <span className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
                Laurëlia Events
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 text-gold-700 hover:text-gold-500 transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col p-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gold-900 hover:text-gold-600 hover:bg-gold-50 px-3 py-3 rounded-lg transition-colors border-b border-gold-50 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6">
            <Link
              href="https://billeterie.laureliaevents.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full h-12 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-full shadow-md"
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
