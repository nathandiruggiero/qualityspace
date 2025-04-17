"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Search, X, Instagram, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useMobile } from "@/hooks/use-mobile"

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

  // Images de galerie par catégorie
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
        src: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=600&auto=format&fit=crop",
        alt: "Atelier créatif",
        category: "ateliers",
        year: "2024",
        description: "Atelier de création de bijoux",
      },
      {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop",
        alt: "Espace bien-être",
        category: "bien-etre",
        year: "2024",
        description: "Séance de massage dans l'espace bien-être",
      },
      {
        src: "https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=600&auto=format&fit=crop",
        alt: "Performance musicale",
        category: "performances",
        year: "2024",
        description: "Concert live pendant l'événement",
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
        src: "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=600&auto=format&fit=crop",
        alt: "Atelier culinaire",
        category: "ateliers",
        year: "2024",
        description: "Atelier de cuisine locale",
      },
      {
        src: "https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=600&auto=format&fit=crop",
        alt: "Espace VIP",
        category: "vip",
        year: "2024",
        description: "Espace VIP avec cocktails exclusifs",
      },
      {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        alt: "Fondatrices",
        category: "equipe",
        year: "2024",
        description: "Les fondatrices lors de l'inauguration",
      },
      {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
        alt: "Équipe organisatrice",
        category: "equipe",
        year: "2024",
        description: "L'équipe organisatrice au complet",
      },
    ],
    mode: [],
    bien_etre: [],
    ateliers: [],
    performances: [],
    ambiance: [],
  }

  // Filtrer les images par catégorie
  galleryImages.mode = galleryImages.all.filter((img) => img.category === "mode")
  galleryImages.bien_etre = galleryImages.all.filter((img) => img.category === "bien-etre")
  galleryImages.ateliers = galleryImages.all.filter((img) => img.category === "ateliers")
  galleryImages.performances = galleryImages.all.filter((img) => img.category === "performances")
  galleryImages.ambiance = galleryImages.all.filter(
    (img) => img.category === "ambiance" || img.category === "networking",
  )

  // Filtrer les images par terme de recherche
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
                Souvenirs
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600">
                Notre Galerie
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-8 max-w-2xl mx-auto">
              Revivez les moments forts de nos événements à travers notre collection de photos
            </motion.p>

            <motion.div variants={fadeIn} className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-400" />
              <Input
                type="text"
                placeholder="Rechercher par année, catégorie..."
                className="pl-10 pr-10 py-6 rounded-full border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 hover:text-rose-600"
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
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-rose-100 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-rose-100 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-12 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                {[
                  { value: "all", label: "Tous" },
                  { value: "mode", label: "Mode" },
                  { value: "bien_etre", label: "Bien-être" },
                  { value: "ateliers", label: "Ateliers" },
                  { value: "performances", label: "Performances" },
                  { value: "ambiance", label: "Ambiance" },
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

              {[
                { value: "all", images: galleryImages.all },
                { value: "mode", images: galleryImages.mode },
                { value: "bien_etre", images: galleryImages.bien_etre },
                { value: "ateliers", images: galleryImages.ateliers },
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
                                <h3 className="text-xl font-bold text-rose-800">{image.alt}</h3>
                                <p className="text-rose-600">{image.description}</p>
                                <div className="flex justify-between items-center mt-2">
                                  <Badge className="bg-rose-100 text-rose-800">{image.year}</Badge>
                                  <Badge className="bg-rose-100 text-rose-800">{image.category}</Badge>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-rose-600 text-lg">Aucune image ne correspond à votre recherche.</p>
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,205,211,0.5)_0%,rgba(255,255,255,0)_70%)]"></div>

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
                Suivez-nous
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">
                Rejoignez-nous sur Instagram
              </span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-rose-800 mb-10 max-w-2xl mx-auto">
              Suivez-nous pour découvrir les coulisses de nos événements et ne rien manquer de nos actualités
            </motion.p>

            <motion.div variants={fadeIn} className="flex justify-center">
              <Link
                href="https://instagram.com/qualityspacewi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center h-14 px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
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
