"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, TrendingUp, Camera, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ExposantsPage() {
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
                Édition 2025
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-600">
                Devenez Exposant
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté d'entrepreneurs et présentez vos créations
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Exhibit Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-gold-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                Opportunités
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                  Pourquoi exposer à Quality Space ?
                </span>
              </h2>
              <p className="text-lg text-gold-800 mb-8">
                Une opportunité unique de présenter vos créations et développer votre réseau
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
                  title: "500 visiteurs attendus",
                  description:
                    "Présentez vos produits et services à un public ciblé et engagé, passionné par les créations locales.",
                  icon: <Users className="w-8 h-8 text-gold-700" />,
                  color: "from-gold-500 to-gold-700",
                },
                {
                  title: "Emplacement premium",
                  description:
                    "Bénéficiez d'un espace d'exposition dans un cadre prestigieux aux villas les trésors de Laurëlia.",
                  icon: <div className="text-3xl">🏨</div>,
                  color: "from-gold-500 to-gold-700",
                },
                {
                  title: "Couverture professionnelle",
                  description:
                    "Profitez d'une couverture photo et vidéo professionnelle pour mettre en valeur vos produits et votre marque.",
                  icon: <Camera className="w-8 h-8 text-gold-700" />,
                  color: "from-gold-500 to-gold-700",
                },
                {
                  title: "Visibilité sur les réseaux",
                  description:
                    "Gagnez en visibilité grâce à notre présence active sur les réseaux sociaux et nos supports de communication officiels.",
                  icon: <Share2 className="w-8 h-8 text-gold-700" />,
                  color: "from-gold-500 to-gold-700",
                },
                {
                  title: "Networking",
                  description:
                    "Développez votre réseau professionnel en rencontrant d'autres entrepreneurs, créateurs et partenaires potentiels.",
                  icon: <div className="text-3xl">🤝</div>,
                  color: "from-gold-500 to-gold-700",
                },
                {
                  title: "Croissance de votre activité",
                  description:
                    "Augmentez votre notoriété, trouvez de nouveaux clients et développez votre activité grâce à cette vitrine exceptionnelle.",
                  icon: <TrendingUp className="w-8 h-8 text-gold-700" />,
                  color: "from-gold-500 to-gold-700",
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
                      <h3 className="text-xl font-bold text-gold-900 mb-3">{item.title}</h3>
                      <p className="text-gold-700">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
                Rejoignez-nous
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                Prêt à exposer vos créations ?
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-10 max-w-2xl mx-auto">
              Réservez dès maintenant votre espace d'exposition pour l'édition spéciale Anniversaire 2025
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/equipe"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-700 to-gold-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
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
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                Formulaire Exposant
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                  Demande d'Information
                </span>
              </h2>
              <p className="text-lg text-gold-800 max-w-2xl mx-auto">
                Vous souhaitez exposer lors de notre prochaine édition ? Remplissez ce formulaire et nous vous
                contacterons rapidement.
              </p>
            </motion.div>

            <motion.div variants={scaleUp}>
              <Card className="border-none shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form action="https://formspree.io/f/meogozrl" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gold-900">
                          Nom
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Votre nom"
                          className="border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gold-900">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Votre email"
                          className="border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gold-900">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Votre numéro de téléphone"
                          className="border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gold-900">
                          Entreprise / Marque
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Nom de votre entreprise ou marque"
                          className="border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="activity" className="text-sm font-medium text-gold-900">
                        Type d'activité
                      </label>
                      <select
                        id="activity"
                        name="activity"
                        className="w-full rounded-md border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                      >
                        <option value="">Sélectionnez votre domaine d'activité</option>
                        <option value="mode">Mode & Accessoires</option>
                        <option value="beaute">Beauté & Cosmétiques</option>
                        <option value="bien-etre">Bien-être & Santé</option>
                        <option value="food">Food & Boissons</option>
                        <option value="art">Art & Artisanat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gold-900">
                        Votre projet
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Décrivez brièvement votre activité et ce que vous souhaitez présenter lors de l'événement"
                        rows={6}
                        className="border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white"
                    >
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
