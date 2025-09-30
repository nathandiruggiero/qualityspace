"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Calendar, Clock, Euro, Users, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header"
import Footer from "@/components/footer"

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/70 via-white/50 to-white/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
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
                Informations Pratiques
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                Préparez Votre Visite
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Toutes les informations essentielles pour profiter pleinement de votre expérience Laurëlia Events
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <Calendar className="w-8 h-8 text-amber-700" />,
                title: "Date",
                content: "Samedi 8 novembre 2025",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: <Clock className="w-8 h-8 text-amber-700" />,
                title: "Horaires",
                content: "10h00 - 20h00",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: <MapPin className="w-8 h-8 text-amber-700" />,
                title: "Lieu",
                content: "Les villas les trésors de Laurëlia",
                color: "from-amber-500 to-amber-600",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto mb-4`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Programme
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                  Au Programme
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-6">
              {[
                { time: "09h00", activity: "Ouverture des portes" },
                { time: "11h00", activity: "Fashion Show - Reines Beauté Noirs" },
                { time: "13h00", activity: "Fashion Show - LM Hindi" },
                { time: "15h00", activity: "Performance des SBK dancers" },
                { time: "17h00", activity: "Groupe de carnaval" },
                { time: "09h00 - 22h00", activity: "Ambiance DJ avec DJ TomTom" },
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-amber-500 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-amber-700 mb-1">{item.time}</p>
                      <p className="text-neutral-800 text-lg">{item.activity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-16 md:py-24 bg-amber-50 relative overflow-hidden">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Billetterie
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                  Tarifs & Réservations
                </span>
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Individuel",
                  price: "5€",
                  description: "1 personne",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  title: "Duo",
                  price: "7€",
                  description: "2 personnes",
                  icon: <Users className="w-6 h-6" />,
                  featured: true,
                },
                {
                  title: "Famille",
                  price: "8€",
                  description: "4 personnes",
                  icon: <Users className="w-6 h-6" />,
                },
              ].map((ticket, index) => (
                <motion.div key={index} variants={scaleUp}>
                  <Card
                    className={`h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                      ticket.featured ? "ring-2 ring-amber-500" : ""
                    }`}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white mx-auto mb-4">
                        {ticket.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-800 mb-2">{ticket.title}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Euro className="w-6 h-6 text-amber-600" />
                        <p className="text-4xl font-bold text-amber-600">{ticket.price}</p>
                      </div>
                      <p className="text-neutral-600">{ticket.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <Link
                href="https://my.bizouk.com/quality-space-edition-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Réserver mes billets
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Questions Fréquentes
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                  Vous Avez Des Questions ?
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-amber-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-amber-700">
                    Où se trouve le lieu de l'événement ?
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    L'événement se déroule aux villas les trésors de Laurëlia. L'adresse exacte vous sera communiquée
                    lors de votre réservation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-amber-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-amber-700">
                    Y a-t-il un parking disponible ?
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    Oui, un parking gratuit est disponible sur place pour tous les visiteurs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-amber-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-amber-700">
                    L'événement est-il accessible aux personnes à mobilité réduite ?
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    Oui, le lieu est entièrement accessible aux personnes à mobilité réduite.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-amber-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-amber-700">
                    Puis-je venir avec des enfants ?
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    Absolument ! Laurëlia Events est un événement familial. Nous proposons un tarif famille à 8€ pour 4 personnes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-amber-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-amber-700">
                    Y aura-t-il de la restauration sur place ?
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    Oui, plusieurs stands de restauration et de boissons seront disponibles tout au long de la journée.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

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
                Besoin d'aide ?
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                Contactez-Nous
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-neutral-700 mb-10">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </motion.p>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Téléphone",
                  content: "+590 690 XX XX XX",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  content: "contact@qualityspace.gp",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "Réseaux Sociaux",
                  content: "@qualityspacewi",
                  color: "from-amber-500 to-amber-600",
                },
              ].map((contact, index) => (
                <motion.div key={index} variants={scaleUp}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-white mx-auto mb-3`}
                      >
                        {contact.icon}
                      </div>
                      <h3 className="text-lg font-bold text-neutral-800 mb-1">{contact.title}</h3>
                      <p className="text-neutral-600 text-sm">{contact.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
