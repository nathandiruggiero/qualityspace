"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Mail, Phone, Instagram, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useMobile } from "@/hooks/use-mobile"

export default function EquipePage() {
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

  // Données de l'équipe
  const teamMembers = [
    {
      name: "Laure Meril",
      role: "Fondatrice & Directrice",
      bio: "Entrepreneuse dans l'âme, Laure a plus de 10 ans d'expérience dans l'événementiel et le marketing. Passionnée par l'entrepreneuriat féminin, elle a créé Quality Space WI pour mettre en valeur les talents guadeloupéens et créer un espace d'innovation et de partage.",
      image: "/images/team/laure_meril.jpeg",
      email: "qualityspacewi@gmail.com",
      phone: "+590 690 00 00 01",
      instagram: "@qualityspace.w.i",
    },
    {
      name: "Leïla Meril",
      role: "Directrice Artistique",
      bio: "Designer et artiste, Leïla apporte sa vision créative à Quality Space WI. Avec son expertise dans les arts visuels et son œil pour l'esthétique, elle crée une expérience immersive et inspirante pour tous les participants et visiteurs de l'événement.",
      image: "/images/team/leila_meril.jpeg",
      email: "qualityspacewi@gmail.com",
      phone: "+590 690 00 00 02",
      instagram: "@qualityspace.w.i",
    },
    {
      name: "Caren PAMPHILE",
      role: "Responsable Communication",
      bio: "Experte en communication digitale, Caren gère la présence en ligne de Quality Space WI et développe des stratégies pour accroître la visibilité de l'événement. Sa créativité et son sens de l'innovation permettent de toucher un public toujours plus large.",
      image: "/images/team/caren_pamphile.jpeg",
      email: "qualityspacewi@gmail.com",
      phone: "+590 690 00 00 03",
      instagram: "@qualityspace.w.i",
    },
    {
      name: "Judicaella GEORGES",
      role: "Coordinatrice des Exposants",
      bio: "Judicaella est le point de contact privilégié des exposants. Elle les accompagne dans leur préparation et veille à ce que chacun puisse présenter ses créations dans les meilleures conditions. Son sens de l'écoute et sa bienveillance sont très appréciés.",
      image: "/images/team/judicaella_georges.jpeg",
      email: "qualityspacewi@gmail.com",
      phone: "+590 690 00 00 05",
      instagram: "@qualityspace.w.i",
    },
  ]

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
                          ? "/a-propos"
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
                Notre Équipe
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600">
                Rencontrez Notre Équipe
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-8 max-w-2xl mx-auto">
              Découvrez les personnes passionnées qui font de Quality Space WI un événement unique
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-rose-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-rose-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={scaleUp} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md transform transition-all duration-500 group-hover:opacity-100"></div>
                  <Card className="relative border-none overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl h-full">
                    <CardContent className="p-0">
                      <div className="relative h-64">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-2xl font-bold">{member.name}</h3>
                          <p className="text-rose-100">{member.role}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-rose-700 mb-6">{member.bio}</p>
                        <div className="space-y-3">
                          <div className="flex items-center text-rose-600">
                            <Mail className="w-5 h-5 mr-2" />
                            <a href={`mailto:${member.email}`} className="hover:text-rose-800 transition-colors">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center text-rose-600">
                            <Phone className="w-5 h-5 mr-2" />
                            <a
                              href={`tel:${member.phone.replace(/\s/g, "")}`}
                              className="hover:text-rose-800 transition-colors"
                            >
                              {member.phone}
                            </a>
                          </div>
                          <div className="flex items-center text-rose-600">
                            <Instagram className="w-5 h-5 mr-2" />
                            <a
                              href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-rose-800 transition-colors"
                            >
                              {member.instagram}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,205,211,0.5)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn}>
                <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                  Contactez-nous
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                    Envoyez-nous un message
                  </span>
                </h2>
                <p className="text-rose-800 mb-8 text-lg">
                  Vous avez des questions sur Quality Space WI ? Vous souhaitez devenir exposant ou partenaire ?
                  N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800 text-lg">Email</h3>
                      <a
                        href="mailto:qualityspacewi@gmail.com"
                        className="text-rose-600 hover:text-rose-800 transition-colors"
                      >
                        qualityspacewi@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800 text-lg">Téléphone</h3>
                      <a href="tel:+590690000000" className="text-rose-600 hover:text-rose-800 transition-colors">
                        +590 690 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800 text-lg">Instagram</h3>
                      <a
                        href="https://instagram.com/qualityspace.w.i"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-600 hover:text-rose-800 transition-colors"
                      >
                        @qualityspace.w.i
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-brand-tiktok"
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800 text-lg">TikTok</h3>
                      <a
                        href="https://tiktok.com/@quality.space.w.i7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-600 hover:text-rose-800 transition-colors"
                      >
                        @quality.space.w.i7
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800 text-lg">Adresse</h3>
                      <p className="text-rose-600">Hôtel Arawak, 41 Pointe de la Verdure, Gosier, Guadeloupe</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={scaleUp}>
                <Card className="border-none shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-rose-800">
                            Nom
                          </label>
                          <Input
                            id="name"
                            placeholder="Votre nom"
                            className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-rose-800">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Votre email"
                            className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-rose-800">
                          Sujet
                        </label>
                        <Input
                          id="subject"
                          placeholder="Sujet de votre message"
                          className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-rose-800">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Votre message"
                          rows={6}
                          className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
                      >
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-rose-100">
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
              <Link href="/a-propos" className="text-rose-800 hover:text-rose-600 transition-colors">
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
      </footer>
    </div>
  )
}
