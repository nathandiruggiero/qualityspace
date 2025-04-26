"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, Megaphone, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SponsorsPage() {
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

  // Données des sponsors
  const sponsors = [
    {
      id: 1,
      name: "ETS GOUNOUMAN",
      logo: "/images/sponsors/ets-gounouman.png",
      alt: "Logo ETS GOUNOUMAN",
    },
    {
      id: 2,
      name: "Rodolphe Scooter",
      logo: "/images/sponsors/rodolphe-scooter.png",
      alt: "Logo Rodolphe Scooter",
    },
    {
      id: 3,
      name: "CAR'IB LAURËLIA",
      logo: "/images/sponsors/carib-laurelia.png",
      alt: "Logo CAR'IB LAURËLIA GUADELOUPE",
    },
    {
      id: 4,
      name: "LM HINDI",
      logo: "/images/sponsors/lm-hindi.png",
      alt: "Logo LM HINDI",
    },
    {
      id: 5,
      name: "ORIGINAL LAVAGE",
      logo: "/images/sponsors/original-lavage.png",
      alt: "Logo ORIGINAL LAVAGE MULTI SERVICE",
    },
    {
      id: 6,
      name: "P.N. PNEUS SERVICES AUTO",
      logo: "/images/sponsors/pn-pneus.png",
      alt: "Logo P.N. PNEUS SERVICES AUTO",
    },
    {
      id: 7,
      name: "Les Trésors de LAURËLIA VILLA",
      logo: "/images/sponsors/tresors-laurelia.png",
      alt: "Logo Les Trésors de LAURËLIA VILLA",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      {/* Header */}
      <Header />

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
                Sponsors & Partenaires
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-8 max-w-2xl mx-auto">
              Quality Space, c'est aussi une plateforme de visibilité puissante pour les marques qui partagent nos
              valeurs
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* Partners Section */}
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
                Ils nous font confiance
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Nos partenaires
                </span>
              </h2>
              <p className="text-lg text-rose-800 mb-8">
                Découvrez les marques qui nous accompagnent dans cette aventure
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-rose-800 mb-6 text-center">Partenaires officiels</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                {sponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.id}
                    className="w-full h-32 flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.alt}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-rose-600 text-center mt-8 font-medium">
                Merci à tous nos partenaires pour leur soutien précieux
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
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
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                Opportunités
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Pourquoi sponsoriser ?
                </span>
              </h2>
              <p className="text-lg text-rose-800 mb-8">
                Associez votre marque à un événement local de qualité et gagnez en visibilité
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Ciblage local et engagé",
                  description:
                    "Touchez une audience locale, engagée et passionnée par les créations et initiatives guadeloupéennes.",
                  icon: <Target className="w-8 h-8 text-rose-600" />,
                  color: "from-rose-400 to-rose-600",
                },
                {
                  title: "Présence sur nos supports",
                  description:
                    "Bénéficiez d'une visibilité sur tous nos supports de communication : site web, brochures, affiches et plus encore.",
                  icon: <Megaphone className="w-8 h-8 text-rose-600" />,
                  color: "from-rose-400 to-rose-600",
                },
                {
                  title: "Visibilité média et influenceurs",
                  description:
                    "Profitez de notre couverture médiatique et de nos partenariats avec des influenceurs locaux pour amplifier votre message.",
                  icon: <div className="text-3xl">📱</div>,
                  color: "from-rose-400 to-rose-600",
                },
                {
                  title: "Engagement RSE et valorisation locale",
                  description:
                    "Démontrez votre engagement envers la communauté locale et soutenez l'entrepreneuriat guadeloupéen.",
                  icon: <Heart className="w-8 h-8 text-rose-600" />,
                  color: "from-rose-400 to-rose-600",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={scaleUp}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white">
                    <CardContent className="p-8 flex flex-col">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-rose-800 mb-3">{item.title}</h3>
                      <p className="text-rose-700">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                Rejoignez-nous
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Devenez partenaire de Quality Space
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-10 max-w-2xl mx-auto">
              Contactez-nous pour découvrir nos offres de partenariat et associer votre marque à notre événement
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/equipe"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/infos-pratiques"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-white text-rose-600 border-2 border-rose-500 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-rose-50 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  En savoir plus
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
