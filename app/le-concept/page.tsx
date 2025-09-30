"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Star, Palette, Gift } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ConceptPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/70 via-white/50 to-white/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-300/20 to-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-amber-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 bg-gradient-to-r from-amber-400 to-amber-300 text-amber-900 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 px-4 py-1.5 text-sm font-medium rounded-full border-0">
                Le Concept
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                Notre Vision
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Un espace d'expression et de découverte pour valoriser les talents locaux
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-amber-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-amber-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Notre Philosophie
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                  Une Célébration des Talents Locaux
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeIn} className="prose prose-lg max-w-none text-neutral-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Né de la volonté de valoriser les talents locaux et de créer un pont entre bien-être, art et
                entrepreneuriat, Quality Space est un espace d'expression et de découverte.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Fondé par une équipe d'entrepreneuses passionnées, l'événement met en lumière les artisans, créateurs,
                artistes et professionnels du territoire guadeloupéen.
              </p>
            </motion.div>

            <motion.div variants={scaleUp} className="relative mb-16">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl opacity-70 blur-md"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/edition_excellence.png"
                  alt="Quality Space Event"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Un Espace de Rencontre et d'Échange</h3>
                  <p className="text-lg">
                    Quality Space WI rassemble les talents guadeloupéens dans un cadre inspirant et bienveillant.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Ce qui nous anime
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                Nos Valeurs
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-neutral-700">
              Les principes qui guident chacune de nos actions et décisions
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Créativité & Authenticité",
                description:
                  "Nous valorisons l'expression créative unique et authentique de chaque entrepreneur, artisan et artiste, célébrant la richesse culturelle de la Guadeloupe.",
                icon: <Palette className="w-8 h-8 text-amber-700" />,
                color: "from-amber-500 to-amber-600",
              },
              {
                title: "Féminin & Empowerment",
                description:
                  "Nous célébrons la force féminine et œuvrons pour l'autonomisation des femmes entrepreneures, en créant un espace où elles peuvent s'épanouir et inspirer.",
                icon: <Heart className="w-8 h-8 text-amber-700" />,
                color: "from-amber-500 to-amber-600",
              },
              {
                title: "Qualité & Transmission",
                description:
                  "Nous nous engageons à offrir une expérience de qualité supérieure et à favoriser le partage de connaissances et de savoir-faire entre générations.",
                icon: <Star className="w-8 h-8 text-amber-700" />,
                color: "from-amber-500 to-amber-600",
              },
              {
                title: "Accessibilité & Bienveillance",
                description:
                  "Nous créons un environnement accueillant et bienveillant, où chacun peut se sentir valorisé et où l'entraide et le soutien mutuel sont encouragés.",
                icon: <Gift className="w-8 h-8 text-amber-700" />,
                color: "from-amber-500 to-amber-600",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={scaleUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white">
                  <CardContent className="p-8 flex flex-col">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-3">{value.title}</h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-amber-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-40 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl md:text-8xl text-amber-300 mb-6">"</div>
            <p className="text-2xl md:text-3xl text-neutral-800 mb-8 italic font-light">
              Quality Space WI est plus qu'un événement, c'est un mouvement qui célèbre l'excellence caribéenne et
              inspire la nouvelle génération d'entrepreneurs guadeloupéens à rêver grand et à créer avec passion.
            </p>
            <p className="text-xl font-bold text-neutral-900">Leïla Meril</p>
            <p className="text-neutral-700">Fondatrice de Quality Space WI</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-50 to-transparent"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Rejoignez-nous
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                Faites Partie de l'Aventure
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl mx-auto">
              Que vous soyez entrepreneur, créateur ou visiteur, Quality Space WI vous ouvre ses portes pour une
              expérience unique en Guadeloupe.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://my.bizouk.com/quality-space-edition-2"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Réservez vos billets
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/exposants"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-white text-amber-700 border-2 border-amber-500 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-amber-50 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Devenez exposant
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <Footer />
    </div>
  )
}
