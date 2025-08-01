import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://summitroofingprofessionals.com"),
  title: {
    default: "Summit Roofing Professionals | Expert Roofing in Alabama & Georgia",
    template: "%s | Summit Roofing Professionals",
  },
  description:
    "Professional roofing services in Alabama and Georgia. Residential, commercial, and specialty roofing with insurance claims expertise. Licensed, insured, and veteran-owned.",
  keywords: [
    "roofing",
    "Alabama",
    "Georgia",
    "residential roofing",
    "commercial roofing",
    "roof repair",
    "insurance claims",
    "veteran owned",
  ],
  authors: [{ name: "Summit Roofing Professionals" }],
  creator: "Summit Roofing Professionals",
  publisher: "Summit Roofing Professionals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://summitroofingprofessionals.com",
    title: "Summit Roofing Professionals | Expert Roofing in Alabama & Georgia",
    description:
      "Professional roofing services in Alabama and Georgia. Residential, commercial, and specialty roofing with insurance claims expertise.",
    siteName: "Summit Roofing Professionals",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summit Roofing Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Roofing Professionals | Expert Roofing in Alabama & Georgia",
    description:
      "Professional roofing services in Alabama and Georgia. Residential, commercial, and specialty roofing with insurance claims expertise.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Summit Roofing Professionals",
    image: "https://summitroofingprofessionals.com/og-image.png",
    "@id": "https://summitroofingprofessionals.com",
    url: "https://summitroofingprofessionals.com",
    telephone: "(704) 578-4758",
    email: "info@summitroofing.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3707 2nd Ave, Suite 103",
      addressLocality: "Columbus",
      addressRegion: "GA",
      postalCode: "31904",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.4854,
      longitude: -84.9537,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      {
        "@type": "State",
        name: "Alabama",
      },
      {
        "@type": "State",
        name: "Georgia",
      },
    ],
  }

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
