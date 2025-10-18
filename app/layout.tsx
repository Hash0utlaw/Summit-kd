import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.summitroofingprofessionals.com"),
  title: {
    default: "Summit Roofing | Expert Roofing in Alabama & Georgia",
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
    url: "https://www.summitroofingprofessionals.com",
    title: "Summit Roofing | Expert Roofing in Alabama & Georgia",
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
    title: "Summit Roofing | Expert Roofing in Alabama & Georgia",
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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://www.summitroofingprofessionals.com/#roofingcontractor",
    name: "Summit Roofing Professionals",
    image: "https://www.summitroofingprofessionals.com/og-image.png",
    url: "https://www.summitroofingprofessionals.com",
    telephone: "+1-704-578-4756",
    email: "davis@summitroofingprofessionals.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3707 2nd Ave Ste 103",
      addressLocality: "Columbus",
      addressRegion: "GA",
      postalCode: "31904",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.484654,
      longitude: -84.96137,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://www.facebook.com/profile.php?id=61572937707369"],
    areaServed: [
      {
        "@type": "State",
        name: "Georgia",
      },
      {
        "@type": "State",
        name: "Alabama",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Roofing",
            description: "Complete residential roofing installation and repair services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Roofing",
            description: "Professional commercial roofing solutions for businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Repairs",
            description: "Emergency and scheduled roof repair services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Insurance Claims Assistance",
            description: "Expert help with roofing insurance claims",
          },
        },
      ],
    },
  }

  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16871498775" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16871498775');
        `}
      </Script>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Suspense fallback={null}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
