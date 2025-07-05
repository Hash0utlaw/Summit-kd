import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Expert Roofing Contractors in Alabama & Georgia | Summit Roofing Professionals",
  description:
    "Professional roofing services in Alabama & Georgia. Insurance claim assistance, free inspections, residential & commercial roofing. Get your free estimate today!",
  keywords: [
    "roofing contractors Alabama",
    "roofing contractors Georgia",
    "insurance roof claims",
    "roof replacement",
    "commercial roofing",
    "residential roofing",
  ],
  openGraph: {
    title: "Summit Roofing Professionals - Alabama & Georgia Roofing Experts",
    description: "Professional roofing services with insurance claim assistance.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://www.summitroofingprofessionals.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
