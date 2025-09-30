"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useMobile } from "@/hooks/use-mobile"
import Header from "@/components/header"
import Footer from "@/components/footer"

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

  const teamMembers = []

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
                Notre Équipe
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-600">
                Rencontrez Notre Équipe
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-8 max-w-2xl mx-auto">
              Découvrez les personnes passionnées qui font de Laurëlia Events un événement unique
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-gold-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={scaleUp} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-gold-400 to-gold-700 rounded-2xl opacity-70 blur-md transform transition-all duration-500 group-hover:opacity-100"></div>
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
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-gold-100 text-sm">{member.role}</p>
                        </div>
                      </div>
                      {member.bio && (
                        <div className="p-6">
                          <p className="text-gold-700">{member.bio}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,172,85,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

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
                <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-gold-200 to-gold-100 text-gold-900">
                  Contactez-nous
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                    Envoyez-nous un message
                  </span>
                </h2>
                <p className="text-gold-800 mb-8 text-lg">
                  Vous avez des questions sur Laurëlia Events ? Vous souhaitez devenir exposant ou partenaire ?
                  N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
                </p>

                <div className="space-y-6 mb-8">
                  <a
                    href="mailto:qualityspacewi@gmail.com"
                    className="flex items-center group hover:bg-gold-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 mr-4 group-hover:bg-gold-200 transition-colors">
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
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gold-900 text-lg">Email</h3>
                      <span className="text-gold-700 group-hover:text-gold-900 transition-colors">
                        qualityspacewi@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/qualityspace.w.i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-gold-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 mr-4 group-hover:bg-gold-200 transition-colors">
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
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gold-900 text-lg">Instagram</h3>
                      <span className="text-gold-700 group-hover:text-gold-900 transition-colors">
                        @qualityspace.w.i
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://tiktok.com/@quality.space.w.i7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-gold-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 mr-4 group-hover:bg-gold-200 transition-colors">
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
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gold-900 text-lg">TikTok</h3>
                      <span className="text-gold-700 group-hover:text-gold-900 transition-colors">
                        @quality.space.w.i7
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Les+villas+les+trésors+de+Laurëlia,+Grande-Savane+Gourbeyre,+Guadeloupe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-gold-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 mr-4 group-hover:bg-gold-200 transition-colors">
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
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gold-900 text-lg">Adresse</h3>
                      <span className="text-gold-700 group-hover:text-gold-900 transition-colors">
                        Les villas les trésors de Laurëlia, Grande-Savane Gourbeyre
                      </span>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div variants={scaleUp}>
                <Card className="border-none shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <form action="https://formspree.io/f/mqaqalyp" method="POST" className="space-y-6">
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
                            required
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
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gold-900">
                          Sujet
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Sujet de votre message"
                          className="border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gold-900">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Votre message"
                          rows={6}
                          className="border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white"
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

      <Footer />
    </div>
  )
}
