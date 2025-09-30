"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Lightbulb, Sparkles, Star, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gold-100/70 via-white/50 to-white/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,172,85,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold-300/20 to-gold-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-gold-200/20 to-gold-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 bg-gradient-to-r from-gold-300 to-gold-200 text-gold-900 hover:from-gold-400 hover:to-gold-300 transition-all duration-300 px-4 py-1.5 text-sm font-medium rounded-full">
                À Propos
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-600">
                À Propos
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-8 max-w-2xl mx-auto">
              Découvrez l'histoire, la vision et les valeurs qui animent Laurëlia Events, un événement unique en
              Guadeloupe.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin & Vision Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-gold-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                Notre Histoire
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                  Origine & Vision
                </span>
              </h2>
              <p className="text-gold-800 mb-6 text-lg">
                Laurëlia Events est né en 2024 d'une vision passionnée pour créer un espace d'échange et de promotion
                pour les talents locaux en Guadeloupe.
              </p>
              <p className="text-gold-800 mb-6 text-lg">
                Face au constat d'un manque de visibilité pour les entrepreneurs locaux, particulièrement les femmes,
                l'événement a été imaginé pour rassembler sous un même toit le meilleur de la Guadeloupe en matière de
                mode, bien-être, gastronomie et culture.
              </p>
              <p className="text-gold-800 mb-8 text-lg">
                Notre vision est de promouvoir l'entrepreneuriat local en créant un écosystème dynamique où les
                créateurs peuvent présenter leurs produits, partager leur savoir-faire et inspirer la nouvelle
                génération d'entrepreneurs guadeloupéens.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Découverte", "Création", "Expérience", "Guadeloupe"].map((keyword, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900 hover:from-gold-300 hover:to-gold-200 px-4 py-2 text-sm font-medium"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-600 rounded-2xl transform rotate-3 scale-95 opacity-20 blur-md"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/edition_excellence.png"
                  alt="Laurëlia Events"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Laurëlia Events</h3>
                  <p>Événement entrepreneurial en Guadeloupe</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project History Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,172,85,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                Notre Parcours
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gold-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                L'Histoire du Projet
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gold-800">
              Un projet porté par des entrepreneuses locales passionnées et engagées
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <div className="relative pl-8 py-8 pr-4">
              <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-gradient-to-b from-gold-400 via-gold-600 to-gold-400"></div>

              {[
                {
                  year: "Début 2024",
                  title: "La Naissance d'une Idée",
                  description: "Création d'un concept d'événement qui mettrait en valeur les talents guadeloupéens.",
                  icon: "💡",
                },
                {
                  year: "2024",
                  title: "Première Édition",
                  description:
                    "Lancement de la première édition de Laurëlia Events qui a rassemblé plus de 30 exposants et 300 visiteurs.",
                  icon: "🎉",
                },
                {
                  year: "2025",
                  title: "Expansion",
                  description:
                    "Préparation de l'édition spéciale Anniversaire et développement du concept avec de nouvelles éditions prévues.",
                  icon: "📈",
                },
                {
                  year: "Futur",
                  title: "Vision à Long Terme",
                  description:
                    "Ambition de faire de Laurëlia Events un événement incontournable en Guadeloupe et dans toute la Caraïbe.",
                  icon: "🌍",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="relative mb-12 last:mb-0 flex">
                  <div className="absolute -left-8 mt-1">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white shadow-lg">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  </div>
                  <div className="ml-12 bg-gradient-to-r from-white to-gold-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gold-900 text-xl">{item.title}</h3>
                      <Badge className="bg-gold-100 text-gold-900 hover:bg-gold-200">{item.year}</Badge>
                    </div>
                    <p className="text-gold-700 mt-3">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gold-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-bl from-gold-300/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-tr from-gold-300/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                Ce qui nous anime
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gold-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                Nos Valeurs
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gold-800">
              Les principes qui guident chacune de nos actions et décisions
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Créativité",
                description:
                  "Nous encourageons l'innovation et l'expression créative sous toutes ses formes, en célébrant l'unicité de chaque entrepreneur.",
                icon: <Sparkles className="w-8 h-8 text-gold-700" />,
                color: "from-gold-500 to-gold-700",
              },
              {
                title: "Authenticité",
                description:
                  "Nous valorisons le savoir-faire local et les produits authentiques qui reflètent la richesse culturelle de la Guadeloupe.",
                icon: <Star className="w-8 h-8 text-gold-700" />,
                color: "from-gold-500 to-gold-700",
              },
              {
                title: "Entraide",
                description:
                  "Nous croyons en la force de la communauté et encourageons la collaboration et le soutien mutuel entre entrepreneurs.",
                icon: <Users className="w-8 h-8 text-gold-700" />,
                color: "from-gold-500 to-gold-700",
              },
              {
                title: "Féminité",
                description:
                  "Nous célébrons la féminité dans toute sa diversité et sa force, en mettant en lumière les talents des femmes entrepreneures.",
                icon: <Heart className="w-8 h-8 text-gold-700" />,
                color: "from-gold-500 to-gold-700",
              },
              {
                title: "Empowerment",
                description:
                  "Nous œuvrons pour l'autonomisation et le renforcement des capacités des entrepreneurs, particulièrement des femmes.",
                icon: <Lightbulb className="w-8 h-8 text-gold-700" />,
                color: "from-gold-500 to-gold-700",
              },
              {
                title: "Qualité",
                description:
                  "Nous nous engageons à offrir une expérience de qualité supérieure, tant pour les exposants que pour les visiteurs.",
                icon: <div className="text-3xl">✨</div>,
                color: "from-gold-500 to-gold-700",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={scaleUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gold-900 mb-3">{value.title}</h3>
                    <p className="text-gold-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,172,85,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                Rejoignez l'Aventure
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                Participez à la Prochaine Édition
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-10 max-w-2xl mx-auto">
              Que vous soyez entrepreneur, créateur ou visiteur, Laurëlia Events vous ouvre ses portes pour une
              expérience unique en Guadeloupe.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://my.bizouk.com/quality-space-edition-2"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-700 to-gold-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Réservez vos billets
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/exposants"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-white text-gold-700 border-2 border-gold-600 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gold-50 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Devenez exposant
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-gold-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-40 left-0 w-96 h-96 bg-gradient-to-br from-gold-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tl from-gold-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl md:text-8xl text-gold-300 mb-6">"</div>
            <p className="text-2xl md:text-3xl text-gold-800 mb-8 italic font-light">
              Laurëlia Events est plus qu'un événement, c'est un mouvement qui célèbre l'excellence caribéenne et
              inspire la nouvelle génération d'entrepreneurs guadeloupéens à rêver grand et à créer avec passion.
            </p>
            <p className="text-xl font-bold text-gold-900">L'équipe Laurëlia Events</p>
            <p className="text-gold-700">Organisateurs de l'événement</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
