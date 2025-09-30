"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gold-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
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
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-gold-800 hover:text-gold-600 transition-colors">
              Accueil
            </Link>
            <Link href="/a-propos" className="text-gold-800 hover:text-gold-600 transition-colors">
              À Propos
            </Link>
            <Link href="/le-concept" className="text-gold-800 hover:text-gold-600 transition-colors">
              Le Concept
            </Link>
            <Link href="/infos-pratiques" className="text-gold-800 hover:text-gold-600 transition-colors">
              Infos Pratiques
            </Link>
            <Link href="/exposants" className="text-gold-800 hover:text-gold-600 transition-colors">
              Exposants
            </Link>
            <Link href="/sponsors" className="text-gold-800 hover:text-gold-600 transition-colors">
              Sponsors
            </Link>
            <Link href="/equipe" className="text-gold-800 hover:text-gold-600 transition-colors">
              Contact
            </Link>
          </div>

          <div>
            <Button
              asChild
              className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white"
            >
              <Link href="https://my.bizouk.com/quality-space-edition-2">Réserver</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-gold-200" />

        <div className="text-center text-gold-700 text-sm">
          &copy; {new Date().getFullYear()} Laurëlia Events. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
