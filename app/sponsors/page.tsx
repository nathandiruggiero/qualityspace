"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, TrendingUp, Users, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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

  const sponsors = [
    {
      name: "Carib Laurëlia",
      logo: "/images/sponsors/carib-laurelia.png",
      category: "Partenaire Premium",
    },
    {
      name: "Trésors de Laurëlia",
      logo: "/images/sponsors/tresors-laurelia.png",
      category: "Partenaire Premium",
    },
    {
      name: "LM Hindi",
      logo: "/images/sponsors/lm-hindi.png",
      category: "Partenaire Gold",
    },
    {
      name: "PN Pneus",
      logo: "/images/sponsors/pn-pneus.png",
      category: "Partenaire Silver",
    },
    {
      name: "Rodolphe Scooter",
      logo: "/images/sponsors/rodolphe-scooter.png",
      category: "Partenaire Silver",
    },
    {
      name: "Ets Gounouman",
      logo: "/images/sponsors/ets-gounouman.png",
      category: "Partenaire Bronze",
    },
  ]

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
                Nos Partenaires
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                Ils Nous Soutiennent
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Merci à nos partenaires qui rendent possible cette célébration de l'excellence guadeloupéenne
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Nos Sponsors
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                  Partenaires 2025
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center"
            >
              {sponsors.map((sponsor, index) => (
                <motion.div key={index} variants={scaleUp} className="w-full">
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                    <CardContent className="p-8 flex flex-col items-center justify-center">
                      <div className="relative w-full h-32 mb-4">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <Badge className="bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                        {sponsor.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
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
            <motion.div variants={fadeIn} className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-amber-300 to-amber-200 text-amber-900 border-0">
                Pourquoi nous soutenir
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                  Les Avantages
                </span>
              </h2>
              <p className="text-lg text-neutral-700">
                En devenant partenaire de Quality Space WI, vous bénéficiez d'une visibilité exceptionnelle auprès d'une
                audience qualifiée et engagée
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8 text-amber-700" />,
                  title: "Visibilité Premium",
                  description:
                    "Logo affiché sur tous nos supports de communication (site web, réseaux sociaux, affiches, flyers)",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-amber-700" />,
                  title: "Opportunités Business",
                  description:
                    "Accès privilégié à un réseau d'entrepreneurs, créateurs et professionnels guadeloupéens",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  icon: <Users className="w-8 h-8 text-amber-700" />,
                  title: "Audience Ciblée",
                  description:
                    "Exposition auprès de plus de 2000 visiteurs passionnés par l'entrepreneuriat et la création locale",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  icon: <Sparkles className="w-8 h-8 text-amber-700" />,
                  title: "Impact Local",
                  description: "Participation active au développement de l'écosystème entrepreneurial guadeloupéen",
                  color: "from-amber-500 to-amber-600",
                },
              ].map((benefit, index) => (
                <motion.div key={index} variants={scaleUp}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6`}
                      >
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3">{benefit.title}</h3>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-50 relative overflow-hidden">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>

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
                Devenez Partenaire
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl mx-auto">
              Associez votre marque à l'excellence et soutenez le développement de l'entrepreneuriat local
            </motion.p>

            <motion.div variants={fadeIn}>
              <Link
                href="mailto:contact@qualityspace.gp"
                className="inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  Contactez-nous
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
