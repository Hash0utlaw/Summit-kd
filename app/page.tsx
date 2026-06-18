import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"

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
