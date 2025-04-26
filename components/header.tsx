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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "À propos", path: "/a-propos" },
    { name: "Le concept", path: "/le-concept" },
    { name: "Infos pratiques", path: "/infos-pratiques" },
    { name: "Exposants", path: "/exposants" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "L'équipe", path: "/equipe" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {isMobile ? (
          <>
            {/* Menu burger à gauche */}
            <button
              onClick={toggleMenu}
              className="p-2 text-rose-900 hover:text-rose-600 transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Texte du logo au centre */}
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Quality Space WI
              </span>
            </Link>
          </>
        ) : (
          <>
            {/* Version desktop: logo image + texte à gauche */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3">
                <Image src="/images/logo.jpg" alt="Quality Space WI" fill className="rounded-full object-cover" />
              </div>
              <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Quality Space WI
              </span>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="relative text-rose-900 hover:text-rose-600 transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </>
        )}

        {/* Bouton Réserver à droite */}
        <Link
          href="https://example.com/tickets"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center h-10 px-6 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="relative flex items-center">
            Réserver
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </span>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            top: "60px",
            backgroundColor: "white", // Force white background
          }}
        >
          <div className="bg-white h-full w-full">
            <nav className="flex flex-col p-6 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-xl font-medium text-rose-900 hover:text-rose-600 transition-colors border-b border-gray-100 pb-2"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
