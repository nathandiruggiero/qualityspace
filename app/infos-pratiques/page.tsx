"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Sparkles, Ticket, Car, Bus, Coffee, MouseOffIcon as DogOff, Baby } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"

export default function InfosPratiquesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full opacity-80 blur-[2px]"></div>
                <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-rose-700">
                    QS
                  </span>
                </div>
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
                                    : `/#${item.toLowerCase().replace(/\s+/g, "-").replace(/é/g, "e")}`
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-rose-100/70 via-white/50 to-white/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,228,230,0.8)_0%,rgba(255,255,255,0)_60%)]"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-rose-300/20 to-rose-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-rose-200/20 to-rose-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 bg-gradient-to-r from-rose-300 to-rose-200 text-rose-800 hover:from-rose-400 hover:to-rose-300 transition-all duration-300 px-4 py-1.5 text-sm font-medium rounded-full">
                Édition 2025
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600">
                Infos Pratiques
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-8 max-w-2xl mx-auto">
              Tout ce que vous devez savoir pour profiter pleinement de l'événement
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-rose-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-rose-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">Accès</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Comment nous rejoindre
                </span>
              </h2>
            </motion.div>

            <motion.div variants={scaleUp} className="relative mb-16">
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md"></div>
              <Card className="relative border-none bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-6 h-6 text-rose-600 mr-3" />
                        <h3 className="text-xl font-bold text-rose-800">Adresse</h3>
                      </div>
                      <p className="text-rose-700 mb-6 text-lg">Hôtel Arawak, 41 Pointe de la Verdure, Gosier</p>

                      <div className="flex items-center mb-4">
                        <Car className="w-6 h-6 text-rose-600 mr-3" />
                        <h3 className="text-xl font-bold text-rose-800">Parking</h3>
                      </div>
                      <p className="text-rose-700 mb-6">Parking disponible sur place</p>

                      <div className="flex items-center mb-4">
                        <Bus className="w-6 h-6 text-rose-600 mr-3" />
                        <h3 className="text-xl font-bold text-rose-800">Transport en commun</h3>
                      </div>
                      <p className="text-rose-700">Bus à proximité</p>
                    </div>
                    <div className="w-full md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop"
                        alt="Hôtel Arawak"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,205,211,0.5)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                Billetterie
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Réservez vos places
                </span>
              </h2>
              <p className="text-lg text-rose-800 mb-8">
                Assurez votre place pour cette édition spéciale Fête des Mères
              </p>
            </motion.div>

            <motion.div variants={scaleUp} className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full opacity-70 blur-md"></div>
              <Link
                href="https://example.com/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full h-16 px-10 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center">
                  Accéder à la billetterie
                  <Ticket className="w-5 h-5 ml-2" />
                </span>
              </Link>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={scaleUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white">
                  <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                    <CardTitle>Entrées Standard</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center border-b border-rose-100 pb-2">
                        <span className="text-rose-800">Entrée adulte</span>
                        <span className="font-bold text-rose-900">12 €</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-rose-100 pb-2">
                        <span className="text-rose-800">Entrée enfant</span>
                        <span className="font-bold text-rose-900">7 €</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-rose-100 pb-2">
                        <span className="text-rose-800">Entrée famille (2 adultes + 2 enfants)</span>
                        <span className="font-bold text-rose-900">35 €</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-rose-800">Enfant supplémentaire</span>
                        <span className="font-bold text-rose-900">5 € par enfant</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white">
                  <CardHeader className="bg-gradient-to-r from-rose-600 to-rose-700 text-white">
                    <CardTitle>Entrées VIP</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center border-b border-rose-100 pb-2">
                        <span className="text-rose-800">Entrée VIP</span>
                        <span className="font-bold text-rose-900">60 € par personne</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-rose-800">Pack VIP pour 2 personnes</span>
                        <span className="font-bold text-rose-900">100 €</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-rose-50 rounded-lg">
                      <h4 className="font-bold text-rose-800 mb-2">Inclus dans le pack VIP :</h4>
                      <ul className="space-y-2 text-rose-700">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">✓</span>
                          Accès prioritaire à l'événement
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">✓</span>
                          Espace lounge dédié
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">✓</span>
                          Boissons et collations offertes
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">✓</span>
                          Goodie bag exclusif
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-rose-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-bl from-rose-300/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-tr from-rose-300/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                Questions fréquentes
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">FAQ</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Tout ce que vous devez savoir avant de venir
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-none shadow-xl">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-rose-800 hover:text-rose-600">
                      <div className="flex items-center">
                        <Baby className="w-5 h-5 mr-2 text-rose-600" />
                        Les enfants sont-ils bienvenus ?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-rose-700">
                      Oui, l'événement est ouvert à toute la famille. Des activités spéciales sont prévues pour les
                      enfants.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-rose-800 hover:text-rose-600">
                      <div className="flex items-center">
                        <DogOff className="w-5 h-5 mr-2 text-rose-600" />
                        Les animaux sont-ils autorisés ?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-rose-700">
                      Non, les animaux ne sont pas autorisés dans l'enceinte de l'événement, à l'exception des chiens
                      guides pour les personnes malvoyantes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-rose-800 hover:text-rose-600">
                      <div className="flex items-center">
                        <Coffee className="w-5 h-5 mr-2 text-rose-600" />Y a-t-il de la restauration sur place ?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-rose-700">
                      Oui, plusieurs stands de restauration seront présents sur place, proposant une variété de plats
                      locaux et internationaux.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-rose-800 hover:text-rose-600">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-rose-600" />
                        Quels sont les horaires de l'événement ?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-rose-700">
                      L'événement se déroule de 09h00 à 22h00. Les portes ouvrent à 08h30.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-rose-800 hover:text-rose-600">
                      <div className="flex items-center">
                        <Ticket className="w-5 h-5 mr-2 text-rose-600" />
                        Puis-je acheter mon billet sur place ?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-rose-700">
                      Oui, des billets seront disponibles à l'entrée, mais nous recommandons l'achat en ligne pour
                      éviter les files d'attente et bénéficier de tarifs préférentiels.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-white border-t border-rose-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="relative h-12 w-12 mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full opacity-80 blur-[2px]"></div>
                  <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-rose-700">
                      QS
                    </span>
                  </div>
                </div>
                <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Quality Space WI
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="text-rose-800 hover:text-rose-600 transition-colors">
                Accueil
              </Link>
              <Link href="/a-propos" className="text-rose-800 hover:text-rose-600 transition-colors">
                À Propos
              </Link>
              <Link href="/le-concept" className="text-rose-800 hover:text-rose-600 transition-colors">
                Le Concept
              </Link>
              <Link href="/infos-pratiques" className="text-rose-800 hover:text-rose-600 transition-colors">
                Infos Pratiques
              </Link>
              <Link href="/exposants" className="text-rose-800 hover:text-rose-600 transition-colors">
                Exposants
              </Link>
              <Link href="/sponsors" className="text-rose-800 hover:text-rose-600 transition-colors">
                Sponsors
              </Link>
              <Link href="/equipe" className="text-rose-800 hover:text-rose-600 transition-colors">
                Contact
              </Link>
            </div>

            <div>
              <Button
                asChild
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
              >
                <Link href="https://example.com/tickets">Réserver</Link>
              </Button>
            </div>
          </div>

          <Separator className="my-8 bg-rose-100" />

          <div className="text-center text-rose-700 text-sm">
            &copy; {new Date().getFullYear()} Quality Space WI. Tous droits réservés.
          </div>
        </div>
      </section>
    </div>
  )
}
