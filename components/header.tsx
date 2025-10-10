"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Le concept", path: "/le-concept" },
    { name: "Exposants", path: "/exposants" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Infos pratiques", path: "/infos-pratiques" },
    { name: "À propos", path: "/a-propos" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {isMobile ? (
            <>
              <button
                onClick={toggleMenu}
                className="p-2 text-gold-800 hover:text-gold-600 transition-colors focus:outline-none"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <Link href="/" className="flex items-center">
                <span className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
                  Laurëlia Events
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="flex items-center">
                <div className="relative h-12 w-12 mr-3">
                  <Image
                    src="/images/laurelia-logo.jpeg"
                    alt="Laurëlia Events"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
                  Laurëlia Events
                </span>
              </Link>

              <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="relative text-gold-900 hover:text-gold-600 transition-colors group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
            </>
          )}

          <Link
            href="https://billeterie.laureliaevents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center h-10 px-6 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-700 to-gold-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            <span className="relative flex items-center">
              {isMobile ? (
                <>Réserver</>
              ) : (
                <>
                  Réserver
                  <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                </>
              )}
            </span>
          </Link>
        </div>
      </header>

      {isMobile && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/20" onClick={closeMenu}></div>

          <div
            className={`absolute top-[60px] right-0 bottom-0 left-0 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col p-6 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-xl font-medium text-gold-900 hover:text-gold-600 transition-colors border-b border-gray-100 pb-2"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
