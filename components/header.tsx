"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-3">
              <Image src="/images/logo.jpg" alt="Quality Space WI" fill className="rounded-full object-cover" />
            </div>
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
              Quality Space WI
            </span>
          </Link>
        </div>

        {!isMobile && (
          <nav className="hidden md:flex space-x-8">
            {["À propos", "Le concept", "Infos pratiques", "Exposants", "Sponsors", "Galerie", "L'équipe"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={
                    item === "À propos"
                      ? "/a-propos"
                      : item === "Le concept"
                        ? "/le-concept"
                        : item === "Infos pratiques"
                          ? "/infos-pratiques"
                          : item === "Exposants"
                            ? "/exposants"
                            : item === "Sponsors"
                              ? "/sponsors"
                              : item === "Galerie"
                                ? "/galerie"
                                : item === "L'équipe"
                                  ? "/equipe"
                                  : "/"
                  }
                  className="relative text-rose-900 hover:text-rose-600 transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ),
            )}
          </nav>
        )}

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
    </header>
  )
}
