"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, MapPin, Calendar, Clock, ArrowRight, Star, Heart, Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const isMobile = useMobile()
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-rose-100/70 via-white/50 to-white/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,228,230,0.8)_0%,rgba(255,255,255,0)_60%)]"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-rose-300/20 to-rose-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-rose-200/20 to-rose-400/20 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 bg-gradient-to-r from-rose-300 to-rose-200 text-rose-800 hover:from-rose-400 hover:to-rose-300 transition-all duration-300 px-4 py-1.5 text-sm font-medium rounded-full">
                24 Mai 2025 • Hôtel Arawak • Guadeloupe
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600">
                Quality Space WI
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-2xl md:text-3xl mt-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
            >
              L'événement lifestyle, bien-être et entrepreneuriat local en Guadeloupe
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-8 max-w-2xl mx-auto">
              Édition Spéciale Fête des Mères 2025
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://example.com/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Réservez vos billets
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="https://example.com/exposants"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-white text-rose-600 border-2 border-rose-500 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-rose-50 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Devenez exposant
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <Link href="#a-propos">
              <div className="flex flex-col items-center">
                <p className="text-rose-600 mb-2 text-sm">Découvrir</p>
                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-rose-600 animate-bounce" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Previous Events Slider */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-rose-50 to-transparent"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full blur-3xl"></div>

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
                Rétrospective
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Nos Précédentes Éditions
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Revivez les moments forts de nos événements passés
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-6xl mx-auto"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    image:
                      "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=1200&auto=format&fit=crop",
                    title: "Édition 2024",
                    description: "Plus de 300 visiteurs et 30 exposants pour notre première édition",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1200&auto=format&fit=crop",
                    title: "Défilé de Mode",
                    description: "Nos créateurs locaux ont présenté leurs collections exclusives",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=1200&auto=format&fit=crop",
                    title: "Espace Bien-être",
                    description: "Des moments de détente et de relaxation pour tous les visiteurs",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
                    title: "Ateliers Créatifs",
                    description: "Des ateliers pour petits et grands tout au long de la journée",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=1200&auto=format&fit=crop",
                    title: "Showcase Artistes",
                    description: "Des performances live qui ont animé notre événement",
                  },
                ].map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="relative overflow-hidden rounded-xl shadow-xl">
                        <div className="aspect-[16/9] relative">
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-white/90">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static bg-white/80 backdrop-blur-sm text-rose-800 hover:bg-rose-100 hover:text-rose-900 border-none shadow-md mx-2" />
                <CarouselNext className="static bg-white/80 backdrop-blur-sm text-rose-800 hover:bg-rose-100 hover:text-rose-900 border-none shadow-md mx-2" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Next Edition Highlight */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
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
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md"></div>
              <Card className="relative border-none overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                  <CardTitle className="text-2xl md:text-3xl">Édition Spéciale Fête des Mères – 24 mai 2025</CardTitle>
                  <CardDescription className="text-rose-100 text-lg">
                    Une journée inoubliable autour du bien-être, de la beauté et de la créativité
                  </CardDescription>
                </CardHeader>
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-rose-700 mb-6">
                      Rejoignez-nous le 24 mai 2025 à l'Hôtel Arawak pour une journée inoubliable autour du bien-être,
                      de la beauté et de la créativité.
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-bold text-rose-800 text-lg mb-2">Ateliers participatifs :</h3>
                        <p className="text-rose-700">
                          Couronnes de fleurs, bougies parfumées, arbre d'amour, bar à parfums.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-rose-800 text-lg mb-2">Animations :</h3>
                        <p className="text-rose-700">
                          Photobooth spécial Fête des Mères, jeux concours, DJ sets, ambiance festive.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-rose-800 text-lg mb-2">Performances artistiques :</h3>
                        <p className="text-rose-700">Jessie Belvalle, Dascha, Quan Dan, DJ Luschy</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-rose-800 text-lg mb-2">Animatrice :</h3>
                        <p className="text-rose-700">Bénédicte Baker</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <MapPin className="w-5 h-5 text-rose-600 mr-2" />
                      <span className="text-rose-800 font-medium">Hôtel Arawak, Gosier</span>
                    </div>

                    <div className="flex items-center mb-6">
                      <Clock className="w-5 h-5 text-rose-600 mr-2" />
                      <span className="text-rose-800 font-medium">09h00 - 22h00</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/infos-pratiques"
                        className="relative inline-flex items-center justify-center h-12 px-6 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                        <span className="relative flex items-center">
                          Infos pratiques
                          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Quality+Space+WI+-+Édition+Spéciale+Fête+des+Mères&dates=20250524T080000Z/20250524T200000Z&details=Une+célébration+de+l%27entrepreneuriat+féminin,+de+la+culture+et+de+l%27innovation+en+Guadeloupe&location=Hôtel+Arawak,+Gosier,+Guadeloupe",
                            "_blank",
                          )
                        }
                        variant="outline"
                        className="border-rose-300 text-rose-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-400"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Ajouter au calendrier
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[300px] md:min-h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=800&auto=format&fit=crop"
                      alt="Édition Spéciale Fête des Mères"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end md:hidden">
                      <div className="p-6">
                        <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">24 Mai 2025</Badge>
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
      <section id="a-propos" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-rose-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-rose-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn} className="order-2 md:order-1">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                Notre Mission
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Célébrer l'Excellence Caribéenne
                </span>
              </h2>
              <p className="text-rose-800 mb-6 text-lg">
                Quality Space WI est un événement culturel et entrepreneurial majeur en Guadeloupe. Nous réunissons plus
                de 30 entrepreneurs locaux dans les domaines de la mode, du bien-être, de la gastronomie et du design.
              </p>
              <p className="text-rose-800 mb-8 text-lg">
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
                    className="bg-gradient-to-br from-white to-rose-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">
                      {stat.number}
                    </p>
                    <p className="text-rose-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-500 rounded-2xl transform rotate-3 scale-95 opacity-20 blur-md"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=600&auto=format&fit=crop"
                  alt="Quality Space WI Event"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Édition 2024</Badge>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-  bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,205,211,0.5)_0%,rgba(255,255,255,0)_70%)]"></div>

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
                Expérience Unique
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Pourquoi Participer?
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
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
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Inspiration",
                description: "Assistez à des défilés de mode, des ateliers et des showcases d'artistes",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <Star className="w-6 h-6" />
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Célébration",
                description: "Profitez d'une journée spéciale pour célébrer les mères et l'entrepreneuriat féminin",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <Heart className="w-6 h-6" />
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Bien-être",
                description: "Détendez-vous dans notre espace VIP avec des soins express et des surprises",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <div className="text-xl">💆‍♀️</div>
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Beauté",
                description: "Découvrez des produits de beauté locaux et des soins naturels adaptés à votre peau",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <div className="text-xl">💄</div>
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Cadeaux",
                description: "Repartez avec des goodies exclusifs et des surprises tout au long de l'événement",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
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
                  <h3 className="text-xl font-bold text-rose-800 mb-3">{item.title}</h3>
                  <p className="text-rose-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programme Section */}
      <section className="py-24 bg-rose-50 relative overflow-hidden">
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
                24 Mai 2025
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Programme de l'Événement
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Une journée complète d'activités, d'ateliers et de découvertes
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
              <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300"></div>

              {[
                {
                  time: "09:00",
                  title: "Ouverture des Portes",
                  description: "Accueil des visiteurs et présentation de l'événement",
                },
                {
                  time: "10:00",
                  title: "Atelier Création de Bijoux",
                  description: "Apprenez à créer vos propres bijoux avec des matériaux locaux",
                },
                {
                  time: "11:30",
                  title: "Conférence sur l'Entrepreneuriat Féminin",
                  description: "Témoignages inspirants de femmes entrepreneures guadeloupéennes",
                },
                {
                  time: "13:00",
                  title: "Pause Déjeuner & Networking",
                  description: "Profitez des stands de restauration et rencontrez d'autres participants",
                },
                {
                  time: "14:30",
                  title: "Défilé de Mode",
                  description: "Découvrez les créations des designers locaux",
                },
                {
                  time: "16:00",
                  title: "Atelier Bien-être",
                  description: "Initiation aux techniques de relaxation et soins naturels",
                },
                {
                  time: "18:00",
                  title: "Showcase Musical",
                  description: "Performance live d'artistes locaux",
                },
                {
                  time: "20:00",
                  title: "Cocktail de Clôture",
                  description: "Célébration et remise de prix aux exposants",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="relative mb-12 last:mb-0 flex">
                  <div className="absolute -left-8 mt-1">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white shadow-lg">
                      <span className="text-sm font-bold">{item.time}</span>
                    </div>
                  </div>
                  <div className="ml-12 bg-gradient-to-r from-white to-rose-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full">
                    <h3 className="font-bold text-rose-800 text-xl">{item.title}</h3>
                    <p className="text-rose-700 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
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
