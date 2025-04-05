"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Clock,
  ArrowRight,
  Star,
  Heart,
  Gift,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
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
          </div>

          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              {["À propos", "Programme", "Espace VIP", "Billets", "Équipe", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/é/g, "e")}`}
                  className="relative text-rose-900 hover:text-rose-600 transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
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
              <span className="block text-2xl md:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">
                Édition Spéciale Fête des Mères 2025
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-8 max-w-2xl mx-auto">
              Une célébration de l'entrepreneuriat féminin, de la culture et de l'innovation en Guadeloupe
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
                  Réserver votre place
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-16 flex items-center justify-center">
              <div className="relative">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=64&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=64&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=64&auto=format&fit=crop",
                  ].map((src, i) => (
                    <Avatar key={i} className="border-2 border-white w-12 h-12 transition-transform hover:scale-110">
                      <AvatarImage src={src} />
                      <AvatarFallback>QS</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="absolute -right-2 -top-2">
                  <Badge className="bg-rose-500 text-white hover:bg-rose-600">+300</Badge>
                </div>
              </div>
              <p className="text-rose-800 ml-4">Participants à la première édition</p>
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
                title: "Réseautage",
                description: "Connectez-vous avec d'autres entrepreneurs, créatifs et sponsors",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <div className="text-xl">🤝</div>
                  </div>
                ),
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Cadeaux",
                description: "Repartez avec des goodies exclusifs et participez à nos tirages au sort",
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

      {/* Highlights Section */}
      <section id="programme" className="py-24 bg-rose-50 relative overflow-hidden">
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
                Programme
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Les Temps Forts
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Une journée riche en découvertes, en émotions et en surprises
            </motion.p>
          </motion.div>

          <Tabs defaultValue="fashion" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
              {[
                { value: "fashion", label: "Mode" },
                { value: "wellness", label: "Bien-être" },
                { value: "gastronomy", label: "Gastronomie" },
                { value: "art", label: "Art & Design" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-rose-600 data-[state=active]:text-white"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="fashion" className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-none bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                      <CardTitle>Défilés de Mode</CardTitle>
                      <CardDescription className="text-rose-100">
                        Découvrez les créations de nos talentueux designers locaux
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="p-8">
                          <p className="text-rose-700 mb-6">
                            Découvrez les créations de nos talentueux designers locaux lors de défilés spectaculaires
                            tout au long de la journée.
                          </p>
                          <ul className="space-y-4">
                            {[
                              { time: "11h00", title: 'Défilé "Créateurs Émergents"' },
                              { time: "14h30", title: 'Défilé "Mode Caribéenne"' },
                              { time: "17h00", title: 'Grand Défilé "Spécial Fête des Mères"' },
                            ].map((event, i) => (
                              <li key={i} className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4 shrink-0">
                                  <Clock className="w-6 h-6" />
                                  <span className="sr-only">Heure</span>
                                </div>
                                <div>
                                  <p className="font-medium text-rose-900">{event.title}</p>
                                  <p className="text-rose-600">{event.time}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="relative h-full min-h-[300px] md:min-h-full">
                          <Image
                            src="https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=800&auto=format&fit=crop"
                            alt="Fashion Show"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                            <div className="p-6">
                              <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Mode</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="wellness" className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-none bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                      <CardTitle>Espace Bien-être</CardTitle>
                      <CardDescription className="text-rose-100">
                        Offrez-vous un moment de détente et de relaxation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="p-8">
                          <p className="text-rose-700 mb-6">
                            Offrez-vous un moment de détente dans notre espace bien-être avec des soins express, des
                            massages et des conseils personnalisés.
                          </p>
                          <ul className="space-y-4">
                            {[
                              { time: "10h00-18h00", title: "Soins express (15min)" },
                              { time: "12h00", title: 'Atelier "Bien-être au naturel"' },
                              { time: "15h30", title: "Séance de yoga collective" },
                            ].map((event, i) => (
                              <li key={i} className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4 shrink-0">
                                  <Clock className="w-6 h-6" />
                                  <span className="sr-only">Heure</span>
                                </div>
                                <div>
                                  <p className="font-medium text-rose-900">{event.title}</p>
                                  <p className="text-rose-600">{event.time}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="relative h-full min-h-[300px] md:min-h-full">
                          <Image
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
                            alt="Wellness Space"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                            <div className="p-6">
                              <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Bien-être</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="gastronomy" className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-none bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                      <CardTitle>Délices Culinaires</CardTitle>
                      <CardDescription className="text-rose-100">
                        Savourez les spécialités locales et les produits du terroir
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="p-8">
                          <p className="text-rose-700 mb-6">
                            Savourez les spécialités locales préparées par nos chefs talentueux et découvrez les
                            produits du terroir guadeloupéen.
                          </p>
                          <ul className="space-y-4">
                            {[
                              { time: "11h30", title: "Dégustation de rhums arrangés" },
                              { time: "13h00", title: "Démonstration culinaire" },
                              { time: "16h00", title: 'Atelier "Pâtisseries créoles"' },
                            ].map((event, i) => (
                              <li key={i} className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4 shrink-0">
                                  <Clock className="w-6 h-6" />
                                  <span className="sr-only">Heure</span>
                                </div>
                                <div>
                                  <p className="font-medium text-rose-900">{event.title}</p>
                                  <p className="text-rose-600">{event.time}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="relative h-full min-h-[300px] md:min-h-full">
                          <Image
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                            alt="Gastronomy"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                            <div className="p-6">
                              <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Gastronomie</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="art" className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-none bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                      <CardTitle>Art & Design</CardTitle>
                      <CardDescription className="text-rose-100">
                        Admirez les œuvres de nos artistes locaux
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="p-8">
                          <p className="text-rose-700 mb-6">
                            Admirez les œuvres de nos artistes locaux et participez à des ateliers créatifs tout au long
                            de la journée.
                          </p>
                          <ul className="space-y-4">
                            {[
                              { time: "10h00-18h00", title: "Exposition d'art contemporain" },
                              { time: "14h00", title: 'Atelier créatif "Art & Recyclage"' },
                              { time: "16h30", title: "Performance artistique live" },
                            ].map((event, i) => (
                              <li key={i} className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-4 shrink-0">
                                  <Clock className="w-6 h-6" />
                                  <span className="sr-only">Heure</span>
                                </div>
                                <div>
                                  <p className="font-medium text-rose-900">{event.title}</p>
                                  <p className="text-rose-600">{event.time}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="relative h-full min-h-[300px] md:min-h-full">
                          <Image
                            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop"
                            alt="Art & Design"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                            <div className="p-6">
                              <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Art & Design</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="py-24 bg-white relative overflow-hidden">
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
                Programme
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Planning de l'Événement
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Découvrez le programme complet de notre journée spéciale
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={scaleUp} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md"></div>
              <Card className="relative border-none bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl">Programme du 24 Mai 2025</CardTitle>
                      <CardDescription className="text-rose-100">Tous les temps forts de la journée</CardDescription>
                    </div>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Quality+Space+WI+-+Édition+Spéciale+Fête+des+Mères&dates=20250524T080000Z/20250524T200000Z&details=Une+célébration+de+l%27entrepreneuriat+féminin,+de+la+culture+et+de+l%27innovation+en+Guadeloupe&location=Hôtel+Arawak,+Pointe-à-Pitre,+Guadeloupe",
                          "_blank",
                        )
                      }
                      className="bg-white text-rose-600 hover:bg-rose-100 hover:text-rose-700"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Ajouter à Google Agenda
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative pl-8 py-8 pr-4">
                    <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300"></div>

                    {[
                      {
                        time: "09:00",
                        event: "Ouverture de l'événement",
                        description: "Accueil des visiteurs et mot de bienvenue",
                        icon: "🎉",
                      },
                      {
                        time: "10:00-12:00",
                        event: "Ateliers Mères",
                        description: "Ateliers créatifs et bien-être dédiés aux mamans",
                        icon: "👩‍👧",
                      },
                      {
                        time: "14:00",
                        event: "Jessie Bellevale",
                        description: "Showcase exclusif et rencontre avec l'artiste",
                        icon: "🎤",
                      },
                      {
                        time: "15:00",
                        event: "Défilé de Mode",
                        description: "Présentation des créations des designers locaux",
                        icon: "👗",
                      },
                      {
                        time: "16:00",
                        event: "Rachel Alisson",
                        description: "Performance artistique et échange avec le public",
                        icon: "🎨",
                      },
                      { time: "17:00", event: "Quan", description: "Concert live et ambiance musicale", icon: "🎵" },
                      {
                        time: "18:00",
                        event: "Jixel et Dcamp",
                        description: "Showcase et animation interactive",
                        icon: "🎧",
                      },
                      {
                        time: "20:00",
                        event: "DJ Lucschy",
                        description: "Clôture festive avec set musical",
                        icon: "💃",
                      },
                    ].map((item, index) => (
                      <motion.div key={index} variants={fadeIn} className="relative mb-8 last:mb-0 flex">
                        <div className="absolute -left-8 mt-1">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white shadow-lg">
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                        </div>
                        <div className="ml-12 bg-gradient-to-r from-white to-rose-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-rose-800 text-lg">{item.event}</h3>
                            <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">{item.time}</Badge>
                          </div>
                          <p className="text-rose-700 mt-2">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animation Activities Section */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
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
                Animations
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Activités & Animations
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Des activités créatives et ludiques pour toute la famille
            </motion.p>
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
                title: "Atelier Couronnes de Fleurs",
                description: "Création de couronnes de fleurs naturelles ou en papier pour offrir aux mamans.",
                image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=600&auto=format&fit=crop",
                icon: "🌸",
              },
              {
                title: "Scrapbooking Souvenirs",
                description: "Fabrication d'une carte souvenir avec photos et messages personnalisés.",
                image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=600&auto=format&fit=crop",
                icon: "📝",
              },
              {
                title: "Photobooth Fête des Mères",
                description: "Espace photo avec accessoires thématiques pour immortaliser ce moment spécial.",
                image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop",
                icon: "📸",
              },
              {
                title: "Arbre Fête des Mères",
                description: "Arbre à souhaits où chacun peut accrocher un message d'amour pour sa maman.",
                image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop",
                icon: "🌳",
              },
            ].map((activity, index) => (
              <motion.div key={index} variants={scaleUp} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md transform transition-all duration-500 group-hover:opacity-100"></div>
                <Card className="relative border-none overflow-hidden h-full">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
                  </div>

                  <CardContent className="relative p-8 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <span className="text-2xl">{activity.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-rose-800 mb-3">{activity.title}</h3>
                    <p className="text-rose-700 flex-grow">{activity.description}</p>
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="border-rose-300 text-rose-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-400"
                      >
                        En savoir plus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIP Mother's Day Section */}
      <section id="espace-vip" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-rose-50 to-transparent"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={scaleUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-500 rounded-2xl transform -rotate-3 scale-95 opacity-20 blur-md"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=600&auto=format&fit=crop"
                  alt="VIP Mother's Day Zone"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Exclusif</Badge>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                Fête des Mères
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Espace VIP Fête des Mères
                </span>
              </h2>
              <p className="text-rose-800 mb-8 text-lg">
                Offrez à votre mère (ou à vous-même!) une expérience inoubliable dans notre espace VIP spécialement
                conçu pour célébrer les mamans.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: "💆‍♀️",
                    title: "Lounge Bien-être",
                    description: "Massages, soins du visage et manucures express",
                  },
                  {
                    icon: "🎁",
                    title: "Cadeaux Exclusifs",
                    description: "Un sac de goodies spécial et des surprises personnalisées",
                  },
                  {
                    icon: "🥂",
                    title: "Champagne & Délices",
                    description: "Dégustation de champagne et de mignardises",
                  },
                  {
                    icon: "📸",
                    title: "Séance Photo",
                    description: "Une séance photo professionnelle pour immortaliser ce moment",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex items-start bg-gradient-to-r from-white to-rose-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white mr-4 shrink-0">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800 text-lg">{item.title}</h3>
                      <p className="text-rose-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://example.com/tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center h-12 px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  <span className="relative flex items-center">
                    Réserver un pack VIP
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expanding Event Section */}
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
                Évolution
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Un Événement en Expansion
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Après le succès de la première édition et une deuxième édition prometteuse en mai 2025, Quality Space
              poursuit son développement
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md"></div>
                  <Card className="relative border-none bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                      <CardTitle>Juillet 2025</CardTitle>
                      <CardDescription className="text-rose-100">Édition Estivale</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                          <span className="text-2xl">☀️</span>
                        </div>
                        <div>
                          <p className="text-rose-800 mb-4">
                            Une édition estivale mettant en avant les tendances mode, beauté et bien-être, avec un
                            programme dynamique et festif.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-rose-100 text-rose-800">Mode</Badge>
                            <Badge className="bg-rose-100 text-rose-800">Beauté</Badge>
                            <Badge className="bg-rose-100 text-rose-800">Bien-être</Badge>
                            <Badge className="bg-rose-100 text-rose-800">Été</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md"></div>
                  <Card className="relative border-none bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
                      <CardTitle>Décembre 2025</CardTitle>
                      <CardDescription className="text-rose-100">Édition Spéciale Fêtes</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                          <span className="text-2xl">🎄</span>
                        </div>
                        <div>
                          <p className="text-rose-800 mb-4">
                            Une édition spéciale fêtes de fin d'année, idéale pour les achats de Noël et des expériences
                            exclusives axées sur la convivialité et le partage.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-rose-100 text-rose-800">Fêtes</Badge>
                            <Badge className="bg-rose-100 text-rose-800">Cadeaux</Badge>
                            <Badge className="bg-rose-100 text-rose-800">Convivialité</Badge>
                            <Badge className="bg-rose-100 text-rose-800">Partage</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-500 rounded-2xl transform rotate-3 scale-95 opacity-20 blur-md"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop"
                  alt="Quality Space Evolution"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Notre Vision</h3>
                  <p className="mb-4">
                    Avec ces nouvelles éditions, notre objectif est de faire de Quality Space un événement récurrent et
                    incontournable en Guadeloupe, offrant toujours plus de visibilité aux prestataires, d'expériences
                    enrichissantes pour les visiteurs et d'opportunités pour les sponsors.
                  </p>
                  <p className="font-bold">
                    Participer à Quality Space, c'est rejoindre un événement récurrent qui évolue et grandit à chaque
                    édition !
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ticket Portal Section */}
      <section id="billets" className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,205,211,0.5)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">Billets</Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Réservez Vos Places
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-10 max-w-2xl mx-auto">
              Rejoignez-nous pour cette édition spéciale Fête des Mères et vivez une expérience inoubliable
            </motion.p>

            <motion.div variants={scaleUp} className="relative mb-20 max-w-xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full opacity-70 blur-md"></div>
              <Link
                href="https://example.com/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full h-16 px-10 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center">
                  Accéder au Portail de Billetterie
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎟️",
                  title: "Entrée Standard",
                  description: "Accès à tous les espaces d'exposition et aux défilés de mode",
                  image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=300&auto=format&fit=crop",
                },
                {
                  icon: "✨",
                  title: "Entrée VIP",
                  description: "Accès prioritaire, espace lounge et cadeaux exclusifs",
                  image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=300&auto=format&fit=crop",
                },
                {
                  icon: "👩‍👧",
                  title: "Pack Mère-Fille",
                  description: "Une expérience spéciale à partager pour la Fête des Mères",
                  image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=300&auto=format&fit=crop",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-rose-800 mb-3">{item.title}</h3>
                    <p className="text-rose-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-rose-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-40 left-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>

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
                Souvenirs
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Galerie - Édition 2024
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Revivez les moments forts de notre première édition
            </motion.p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop",
              ].map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`Gallery image ${index + 1}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                          <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Édition 2024</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 backdrop-blur-sm text-rose-800 hover:bg-rose-100 hover:text-rose-900 border-none shadow-md" />
            <CarouselNext className="bg-white/80 backdrop-blur-sm text-rose-800 hover:bg-rose-100 hover:text-rose-900 border-none shadow-md" />
          </Carousel>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 bg-white relative overflow-hidden">
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
                Notre Équipe
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Les Visionnaires
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Des entrepreneures guadeloupéennes passionnées et engagées
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            {[
              {
                name: "Laure Meril",
                role: "Fondatrice & Directrice",
                bio: "Passionnée par l'entrepreneuriat féminin, Laure a créé Quality Space WI pour mettre en valeur les talents guadeloupéens et créer un espace d'innovation et de partage.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: "Leïla Meril",
                role: "Directrice Artistique",
                bio: "Avec son œil créatif et son expertise dans les arts visuels, Leïla apporte une vision unique à Quality Space WI, créant une expérience immersive et inspirante.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <motion.div key={index} variants={scaleUp} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md transform transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-rose-200 transform transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-rose-700 mb-4 font-medium">{member.role}</p>
                    <p className="text-rose-600 text-center">{member.bio}</p>
                    <div className="flex space-x-4 mt-6">
                      <Link href="#" className="text-rose-500 hover:text-rose-700 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-rose-500 hover:text-rose-700 transition-colors">
                        <Mail className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
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
                Témoignages
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Ce Qu'ils En Disent
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Ce que nos visiteurs et exposants ont dit de notre première édition
            </motion.p>
          </motion.div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  quote:
                    "Un événement exceptionnel qui met en valeur les talents de notre île. J'ai découvert des créateurs incroyables et j'ai hâte de revenir pour la prochaine édition!",
                  author: "Isabelle, visiteuse",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&auto=format&fit=crop",
                },
                {
                  quote:
                    "En tant qu'exposante, j'ai été impressionnée par l'organisation et l'ambiance chaleureuse. Une belle vitrine pour mon entreprise et une opportunité de rencontrer de nouveaux clients.",
                  author: "Nathalie, exposante",
                  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=64&auto=format&fit=crop",
                },
                {
                  quote:
                    "Quality Space WI est exactement ce dont la Guadeloupe avait besoin: un espace qui célèbre l'entrepreneuriat local et qui inspire la nouvelle génération.",
                  author: "Marc, sponsor",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=64&auto=format&fit=crop",
                },
                {
                  quote:
                    "J'ai adoré l'espace bien-être et les ateliers créatifs. Une journée riche en découvertes et en émotions!",
                  author: "Caroline, visiteuse",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=64&auto=format&fit=crop",
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-rose-200">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-5xl text-rose-300 mb-4">"</div>
                        <p className="text-rose-800 mb-6 italic text-lg">{testimonial.quote}</p>
                        <p className="font-bold text-rose-900">{testimonial.author}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 backdrop-blur-sm text-rose-800 hover:bg-rose-100 hover:text-rose-900 border-none shadow-md" />
            <CarouselNext className="bg-white/80 backdrop-blur-sm text-rose-800 hover:bg-rose-100 hover:text-rose-900 border-none shadow-md" />
          </Carousel>
        </div>
      </section>

      {/* Entreprendre en Guadeloupe Section */}
      <section className="py-24 bg-rose-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-40 left-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">
                Innovation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Entreprendre en Guadeloupe
                </span>
              </h2>
              <p className="text-rose-800 mb-8 text-lg">
                La Guadeloupe regorge de talents et d'opportunités pour l'entrepreneuriat féminin et l'innovation.
                Découvrez le potentiel unique de notre territoire.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "65%", label: "des entreprises créées par des femmes" },
                  { number: "+12%", label: "de croissance dans le secteur créatif" },
                  { number: "200+", label: "startups innovantes" },
                  { number: "30M€", label: "d'investissements en 2024" },
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

              <ScrollArea className="h-40 w-full rounded-md border border-rose-100 p-4 bg-white/80 backdrop-blur-sm">
                <div className="space-y-4">
                  {[
                    "La Guadeloupe est un terreau fertile pour l'entrepreneuriat féminin, avec un écosystème en pleine expansion.",
                    "Notre territoire offre des opportunités uniques pour innover et créer des entreprises à impact positif.",
                    "L'entrepreneuriat est un levier puissant pour le développement économique et social de notre île.",
                    "Les femmes entrepreneures guadeloupéennes sont de plus en plus nombreuses et contribuent activement à l'économie locale.",
                    "Le secteur créatif et culturel est en pleine croissance et offre de nombreuses opportunités d'innovation.",
                  ].map((quote, index) => (
                    <div key={index} className="p-4 bg-rose-50 rounded-lg">
                      <p className="text-rose-800 italic">"{quote}"</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </motion.div>

            <motion.div variants={scaleUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-500 rounded-2xl transform rotate-3 scale-95 opacity-20 blur-md"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1596001926787-7dfb0abfa5d8?q=80&w=600&auto=format&fit=crop"
                  alt="Entrepreneurship in Guadeloupe"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-white/80 text-rose-800 backdrop-blur-sm">Guadeloupe</Badge>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Media Partners Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-rose-50 to-transparent"></div>

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
                Partenaires
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Nos Partenaires Médias
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-rose-800">
              Ils nous soutiennent et nous accompagnent
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
          >
            {["Canal 10", "FranceAntilles", "RCI", "Guadeloupe 1ère", "Trace FM"].map((partner, index) => (
              <motion.div key={index} variants={scaleUp} className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-white to-rose-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full h-24 flex items-center justify-center">
                  <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600 text-center">
                    {partner}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,205,211,0.5)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-rose-200 to-rose-100 text-rose-800">Contact</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                  Contactez-nous
                </span>
              </h2>
              <p className="text-rose-800 mb-8 text-lg">
                Vous avez des questions? Vous souhaitez participer ou devenir sponsor? N'hésitez pas à nous contacter!
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-rose-600" />,
                    title: "Lieu de l'événement",
                    content: "Hôtel Arawak, Pointe-à-Pitre, Guadeloupe",
                  },
                  {
                    icon: <Calendar className="w-5 h-5 text-rose-600" />,
                    title: "Date",
                    content: "24 Mai 2025, 10h00 - 19h00",
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-rose-600" />,
                    title: "Email",
                    content: "contact@qualityspacewi.com",
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-rose-600" />,
                    title: "Téléphone",
                    content: "+590 123 456 789",
                  },
                  {
                    icon: <Instagram className="w-5 h-5 text-rose-600" />,
                    title: "Instagram",
                    content: "@qualityspacewi",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex items-start bg-gradient-to-r from-white to-rose-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-4 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800">{item.title}</h3>
                      <p className="text-rose-700">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-rose-600 rounded-2xl opacity-70 blur-md"></div>
              <Card className="relative border-none bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                    Envoyez-nous un message
                  </CardTitle>
                  <CardDescription>Nous vous répondrons dans les plus brefs délais</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-rose-800">
                          Nom
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-3 py-2 bg-white border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-rose-800">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 bg-white border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="Votre email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-rose-800">
                        Sujet
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-3 py-2 bg-white border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-rose-800">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 bg-white border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="Votre message"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white"
                    >
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-rose-900 to-rose-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-rose-50 to-transparent opacity-10"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-bl from-rose-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-rose-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="relative h-12 w-12 mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full opacity-80 blur-[2px]"></div>
                  <div className="absolute inset-0.5 bg-rose-950 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-rose-200">
                      QS
                    </span>
                  </div>
                </div>
                <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-100">
                  Quality Space WI
                </span>
              </div>
              <p className="text-rose-200 mb-6">
                Célébrons ensemble l'entrepreneuriat féminin, la culture et l'innovation en Guadeloupe.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-rose-800/50 flex items-center justify-center text-white hover:bg-rose-700/50 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-rose-800/50 flex items-center justify-center text-white hover:bg-rose-700/50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-rose-800/50 flex items-center justify-center text-white hover:bg-rose-700/50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-rose-100">Liens Rapides</h3>
              <ul className="space-y-3">
                {["À propos", "Programme", "Espace VIP", "Billets", "Équipe", "Contact"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/é/g, "e")}`}
                      className="text-rose-200 hover:text-white transition-colors flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-rose-100">Informations</h3>
              <ul className="space-y-3">
                {["FAQ", "Conditions Générales", "Politique de Confidentialité", "Mentions Légales"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-rose-200 hover:text-white transition-colors flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-rose-100">Newsletter</h3>
              <p className="text-rose-200 mb-6">
                Inscrivez-vous à notre newsletter pour rester informé(e) de nos actualités.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-rose-800/50 border border-rose-700/50 rounded-full text-white placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Votre email"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 rounded-full"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-rose-300">
                  En vous inscrivant, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>

          <Separator className="my-8 bg-rose-800/50" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-rose-300 text-sm">
              &copy; {new Date().getFullYear()} Quality Space WI. Tous droits réservés.
            </p>
            <p className="text-rose-400 text-sm mt-2 md:mt-0">Conçu avec ❤️ en Guadeloupe</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

