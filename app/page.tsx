import type { Metadata } from "next"
import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Summit Roofing | Expert Roofing in Alabama & Georgia",
  description:
    "Professional roofing services in Alabama and Georgia. Residential, commercial, and specialty roofing with insurance claims expertise. Licensed, insured, and veteran-owned.",
  keywords: [
    "roofing Alabama",
    "roofing Georgia",
    "residential roofing",
    "commercial roofing",
    "roof repair",
    "roof replacement",
    "insurance claims roofing",
    "veteran owned roofing",
    "Summit Roofing Professionals",
  ],
  openGraph: {
    title: "Summit Roofing | Expert Roofing in Alabama & Georgia",
    description:
      "Professional roofing services in Alabama and Georgia. Residential, commercial, and specialty roofing with insurance claims expertise. Licensed, insured, and veteran-owned.",
    url: "/",
    siteName: "Summit Roofing Professionals",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summit Roofing Professionals — Expert Roofing in Alabama & Georgia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Roofing | Expert Roofing in Alabama & Georgia",
    description:
      "Professional roofing services in Alabama and Georgia. Residential, commercial, and specialty roofing with insurance claims expertise.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const ServicesOverview = dynamic(() => import("@/components/services-overview"))
const RotatingTestimonials = dynamic(() => import("@/components/rotating-testimonials"))
const ContactCTAHomepage = dynamic(() => import("@/components/contact-cta-homepage"))
const CompanyCredentials = dynamic(() => import("@/components/company-credentials"))
const CertificationLogos = dynamic(() => import("@/components/certification-logos"))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <RotatingTestimonials />
      <ContactCTAHomepage />
      <CompanyCredentials />
      <CertificationLogos />
    </>
  )
}
