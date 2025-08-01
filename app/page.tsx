import RotatingTestimonials from "@/components/rotating-testimonials"
import ContactCTAHomepage from "@/components/contact-cta-homepage"
import CompanyCredentials from "@/components/company-credentials"
import SocialProof from "@/components/social-proof"
import CertificationLogos from "@/components/certification-logos"

export default function HomePage() {
  return (
    <>
      <RotatingTestimonials />
      <ContactCTAHomepage />
      <CompanyCredentials />
      <SocialProof />
      <CertificationLogos />
    </>
  )
}
