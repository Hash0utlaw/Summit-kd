import HeroSection from "@/components/hero-section"
import RotatingTestimonials from "@/components/rotating-testimonials"
import ContactCTAHomepage from "@/components/contact-cta-homepage"
import CompanyCredentials from "@/components/company-credentials"
import CertificationLogos from "@/components/certification-logos"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RotatingTestimonials />
      <ContactCTAHomepage />
      <CompanyCredentials />
      <CertificationLogos />
    </>
  )
}
