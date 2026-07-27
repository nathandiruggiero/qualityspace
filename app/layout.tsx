import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/JsonLd"
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Laurëlia Events — L'événement lifestyle en Guadeloupe",
    template: "%s | Laurëlia Events",
  },
  description: "L'événement lifestyle, bien-être et entrepreneuriat local en Guadeloupe",
  keywords: [
    "événement lifestyle Guadeloupe",
    "entrepreneuriat féminin Guadeloupe",
    "bien-être Guadeloupe",
    "Laurëlia Events",
    "Gourbeyre",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon/favicon.ico", type: "image/svg+xml" },
    ],
    apple: [{ url: "/images/favicon/apple-touch-icon.png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Laurëlia Events — L'événement lifestyle en Guadeloupe",
    description: "L'événement lifestyle, bien-être et entrepreneuriat local en Guadeloupe",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurëlia Events — L'événement lifestyle en Guadeloupe",
    description: "L'événement lifestyle, bien-être et entrepreneuriat local en Guadeloupe",
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${OG_IMAGE}`,
  sameAs: ["https://www.instagram.com/laureliaevents"],
  areaServed: "Guadeloupe",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <JsonLd data={jsonLd} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
