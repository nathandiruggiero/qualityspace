"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, MapPin, Calendar, Clock, ArrowRight, Star, Heart, Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

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

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-25"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/50 to-cream/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,151,58,0.2)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,90,61,0.12)_0%,transparent_55%)]"></div>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold-300/15 to-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-forest-200/15 to-forest-400/10 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
                <Badge className="bg-gradient-to-r from-gold-300 to-gold-200 text-gold-900 hover:from-gold-400 hover:to-gold-300 transition-all duration-300 px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap">
                  29 Novembre 2025
                </Badge>
                <Badge className="bg-gradient-to-r from-gold-200 to-gold-100 text-gold-800 px-4 py-1.5 text-xs font-medium rounded-full text-center">
                  Les villas les trésors de Laurëlia • Gourbeyre, Guadeloupe
                </Badge>
              </div>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-700 via-gold-600 to-gold-500">
                Laurëlia Events
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-2xl md:text-3xl mt-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600"
            >
              L'événement lifestyle, bien-être et entrepreneuriat local en Guadeloupe
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-8 max-w-2xl mx-auto">
              Édition Spéciale Anniversaire 2025
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://billeterie.laureliaevents.com"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center z-10 cursor-pointer"
        >
          <Link href="#a-propos">
            <div className="flex flex-col items-center">
              <p className="text-gold-700 mb-2 text-sm">Découvrir</p>
              <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center">
                <ChevronDown className="w-6 h-6 text-gold-700 animate-bounce" />
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Next Edition Highlight */}
      <section className="py-24 bg-cream-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,151,58,0.15)_0%,transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold-400 to-gold-700 rounded-2xl opacity-70 blur-md"></div>
              <Card className="relative border-none overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-700 text-white">
                  <CardTitle className="text-2xl md:text-3xl">
                    Édition Spéciale Anniversaire – 29 Novembre 2025
                  </CardTitle>
                  <CardDescription className="text-gold-100 text-lg">
                    Une journée inoubliable autour du bien-être, de la beauté et de la créativité
                  </CardDescription>
                </CardHeader>
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-gold-800 mb-6">
                      Rejoignez-nous le 29 novembre 2025 aux villas les trésors de Laurëlia, Grande-Savane Gourbeyre pour
                      une journée inoubliable autour du bien-être, de la beauté et de la créativité.
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-bold text-gold-900 text-lg mb-2">Fashion Shows :</h3>
                        <p className="text-gold-700">
                          Défilés avec les candidates Reines Beauté Noirs et la collection LM Hindi avec Miss Bollywood
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gold-900 text-lg mb-2">Animations :</h3>
                        <p className="text-gold-700">SBK dancers, Troupe Brasukera, DJ sets, ambiance festive</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gold-900 text-lg mb-2">DJ Confirmé :</h3>
                        <p className="text-gold-700">DJ TomTom et d'autres DJs à confirmer</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <MapPin className="w-5 h-5 text-gold-700 mr-2" />
                      <span className="text-gold-900 font-medium">
                        Les villas les trésors de Laurëlia, Grande-Savane Gourbeyre
                      </span>
                    </div>

                    <div className="flex items-center mb-6">
                      <Clock className="w-5 h-5 text-gold-700 mr-2" />
                      <span className="text-gold-900 font-medium">09h00 - 22h00</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/infos-pratiques"
                        className="relative inline-flex items-center justify-center h-12 px-6 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-700 to-gold-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                        <span className="relative flex items-center">
                          Infos pratiques
                          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Laurëlia+Events+-+Édition+Spéciale+Anniversaire&dates=20251108T100000Z/20251108T180000Z&details=Une+célébration+de+l%27entrepreneuriat+féminin,+de+la+culture+et+de+l%27innovation+en+Guadeloupe&location=Les+villas+les+trésors+de+Laurëlia,+Grande-Savane+Gourbeyre,+Guadeloupe",
                            "_blank",
                          )
                        }
                        variant="outline"
                        className="border-gold-400 text-gold-700 hover:bg-gold-50 hover:text-gold-800 hover:border-gold-500"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Ajouter au calendrier
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[300px] md:min-h-full">
                    <Image
                      src="/images/1years.jpeg"
                      alt="Édition Spéciale Anniversaire"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end md:hidden">
                      <div className="p-6">
                        <Badge className="bg-white/80 text-gold-900 backdrop-blur-sm">29 Novembre 2025</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-24 bg-cream relative overflow-hidden">
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
            <motion.div variants={fadeIn} className="order-2 md:order-1">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                Notre Mission
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
                  Célébrer l'Excellence Caribéenne
                </span>
              </h2>
              <p className="text-gold-800 mb-6 text-lg">
                Laurëlia Events est un événement culturel et entrepreneurial majeur en Guadeloupe. Nous réunissons plus
                de 30 entrepreneurs locaux dans les domaines de la mode, du bien-être, de la gastronomie et du design.
              </p>
              <p className="text-gold-800 mb-8 text-lg">
                Notre objectif est de mettre en valeur les talents locaux, de soutenir les femmes entrepreneures et de
                créer un espace vibrant de célébration, d'innovation et de bien-être.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "300+", label: "Participants en 2024" },
                  { number: "30+", label: "Exposants" },
                  { number: "35K+", label: "Interactions sociales" },
                  { number: "500+", label: "Objectif 2025" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleUp}
                    className="bg-gradient-to-br from-white to-gold-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
                      {stat.number}
                    </p>
                    <p className="text-gold-700">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-600 rounded-2xl transform rotate-3 scale-95 opacity-20 blur-md"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/edition_excellence.png"
                  alt="Laurëlia Events"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-white/80 text-gold-900 backdrop-blur-sm">Édition 2024</Badge>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programme Section */}
      <section className="py-24 bg-cream-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream to-transparent"></div>
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
                29 Novembre 2025
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gold-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
                Programme de l'Événement
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gold-800">
              Une journée complète d'activités et de découvertes
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
                  time: "11:00",
                  title: "Fashion Show - Reines Beauté Noirs",
                  description: "Défilé de mode avec les candidates Reines Beauté Noirs",
                },
                {
                  time: "13:00",
                  title: "Fashion Show - LM Hindi",
                  description: "Défilé de la boutique LM Hindi avec Miss Bollywood",
                },
                {
                  time: "15:00",
                  title: "SBK Dancers",
                  description: "Performance des SBK dancers avec Chris & Audrey",
                },
                {
                  time: "17:00",
                  title: "Troupe Brasukera",
                  description: "Performance d'un groupe de danceuses brésiliennes",
                },
                {
                  time: "09:00 - 22:00",
                  title: "Ambiance DJ",
                  description: "DJ TomTom et autres DJs à confirmer tout au long de l'événement",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="relative mb-12 last:mb-0 flex">
                  <div className="absolute -left-8 mt-1">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white shadow-lg p-1">
                      <span className="text-[10px] font-bold text-center leading-tight">{item.time}</span>
                    </div>
                  </div>
                  <div className="ml-12 bg-gradient-to-r from-white to-gold-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full">
                    <h3 className="font-bold text-gold-900 text-xl">{item.title}</h3>
                    <p className="text-gold-700 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-4"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,90,61,0.06)_0%,transparent_70%)]"></div>

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
                Expérience Unique
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gold-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-gold-600">
                Pourquoi Participer?
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gold-800">
              Une expérience unique qui célèbre l'entrepreneuriat, la culture et l'innovation en Guadeloupe
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
                title: "Découverte",
                description: "Rencontrez plus de 30 entrepreneurs locaux et découvrez leurs créations uniques",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                    <Sparkles className="w-6 h-6" />
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Inspiration",
                description: "Assistez à des défilés de mode et des performances artistiques",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                    <Star className="w-6 h-6" />
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Célébration",
                description: "Profitez d'une journée spéciale pour célébrer l'anniversaire et l'entrepreneuriat",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                    <Heart className="w-6 h-6" />
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Bien-être",
                description: "Découvrez des produits de bien-être et des soins naturels",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                    <div className="text-xl">💆‍♀️</div>
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Beauté",
                description: "Découvrez des produits de beauté locaux et des soins naturels",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                    <div className="text-xl">💄</div>
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Cadeaux",
                description: "Repartez avec des goodies exclusifs et des surprises",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                    <Gift className="w-6 h-6" />
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300&auto=format&fit=crop",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
                </div>

                <div className="relative p-8 flex flex-col items-center text-center">
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gold-900 mb-3">{item.title}</h3>
                  <p className="text-gold-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
