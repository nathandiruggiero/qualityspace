"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, X, Instagram, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useMobile } from "@/hooks/use-mobile"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GaleriePage() {
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
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

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

  const galleryImages = {
    all: [
      {
        src: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=600&auto=format&fit=crop",
        alt: "Défilé de mode",
        category: "mode",
        year: "2024",
        description: "Défilé de mode lors de l'édition 2024",
      },
      {
        src: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=600&auto=format&fit=crop",
        alt: "Espace exposants",
        category: "exposants",
        year: "2024",
        description: "Vue de l'espace exposants",
      },
      {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop",
        alt: "Espace bien-être",
        category: "bien-etre",
        year: "2024",
        description: "Espace bien-être et relaxation",
      },
      {
        src: "https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=600&auto=format&fit=crop",
        alt: "Performance musicale",
        category: "performances",
        year: "2024",
        description: "Performance musicale pendant l'événement",
      },
      {
        src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600&auto=format&fit=crop",
        alt: "Visiteurs",
        category: "ambiance",
        year: "2024",
        description: "Visiteurs découvrant les stands",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop",
        alt: "Networking",
        category: "networking",
        year: "2024",
        description: "Séance de networking entre entrepreneurs",
      },
      {
        src: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=600&auto=format&fit=crop",
        alt: "Conférence",
        category: "conferences",
        year: "2024",
        description: "Conférence sur l'entrepreneuriat féminin",
      },
      {
        src: "https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=600&auto=format&fit=crop",
        alt: "Espace VIP",
        category: "vip",
        year: "2024",
        description: "Espace VIP avec cocktails exclusifs",
      },
      {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
        alt: "Équipe organisatrice",
        category: "equipe",
        year: "2024",
        description: "L'équipe organisatrice",
      },
    ],
    mode: [],
    bien_etre: [],
    performances: [],
    ambiance: [],
  }

  galleryImages.mode = galleryImages.all.filter((img) => img.category === "mode")
  galleryImages.bien_etre = galleryImages.all.filter((img) => img.category === "bien-etre")
  galleryImages.performances = galleryImages.all.filter((img) => img.category === "performances")
  galleryImages.ambiance = galleryImages.all.filter(
    (img) => img.category === "ambiance" || img.category === "networking",
  )

  const filterImages = (images, term) => {
    if (!term) return images
    return images.filter(
      (img) =>
        img.alt.toLowerCase().includes(term.toLowerCase()) ||
        img.description.toLowerCase().includes(term.toLowerCase()) ||
        img.category.toLowerCase().includes(term.toLowerCase()) ||
        img.year.toLowerCase().includes(term.toLowerCase()),
    )
  }

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
                Souvenirs
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-600">
                Notre Galerie
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-8 max-w-2xl mx-auto">
              Revivez les moments forts de nos événements à travers notre collection de photos
            </motion.p>

            <motion.div variants={fadeIn} className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" />
              <Input
                type="text"
                placeholder="Rechercher par année, catégorie..."
                className="pl-10 pr-10 py-6 rounded-full border-gold-300 focus:border-gold-600 focus:ring-gold-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-500 hover:text-gold-700"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
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
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-12 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                {[
                  { value: "all", label: "Tous" },
                  { value: "mode", label: "Mode" },
                  { value: "bien_etre", label: "Bien-être" },
                  { value: "performances", label: "Performances" },
                  { value: "ambiance", label: "Ambiance" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold-600 data-[state=active]:to-gold-700 data-[state=active]:text-white"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {[
                { value: "all", images: galleryImages.all },
                { value: "mode", images: galleryImages.mode },
                { value: "bien_etre", images: galleryImages.bien_etre },
                { value: "performances", images: galleryImages.performances },
                { value: "ambiance", images: galleryImages.ambiance },
              ].map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterImages(tab.images, searchTerm).length > 0 ? (
                      filterImages(tab.images, searchTerm).map((image, index) => (
                        <motion.div
                          key={index}
                          variants={scaleUp}
                          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="cursor-pointer">
                                <div className="aspect-[4/3] relative">
                                  <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold">{image.alt}</h3>
                                    <p className="text-sm text-white/90">{image.description}</p>
                                    <Badge className="mt-2 bg-white/20 text-white hover:bg-white/30">
                                      {image.year}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                              <div className="relative aspect-[4/3] w-full">
                                <Image
                                  src={image.src || "/placeholder.svg"}
                                  alt={image.alt}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="bg-white p-4 rounded-b-lg">
                                <h3 className="text-xl font-bold text-gold-900">{image.alt}</h3>
                                <p className="text-gold-700">{image.description}</p>
                                <div className="flex justify-between items-center mt-2">
                                  <Badge className="bg-gold-100 text-gold-900">{image.year}</Badge>
                                  <Badge className="bg-gold-100 text-gold-900">{image.category}</Badge>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-gold-700 text-lg">Aucune image ne correspond à votre recherche.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
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
                Suivez-nous
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gold-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 to-gold-600">
                Rejoignez-nous sur Instagram
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gold-800 mb-10 max-w-2xl mx-auto">
              Suivez-nous pour découvrir les coulisses de nos événements et ne rien manquer de nos actualités
            </motion.p>

            <motion.div variants={fadeIn} className="flex justify-center">
              <Link
                href="https://instagram.com/qualityspacewi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-700 to-gold-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative flex items-center text-lg">
                  <Instagram className="w-5 h-5 mr-2" />
                  @qualityspacewi
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
