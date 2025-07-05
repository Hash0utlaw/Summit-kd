import HeroSection from "@/components/hero-section"
import InsuranceUspSection from "@/components/insurance-usp-section"
import ServicesOverview from "@/components/services-overview"
import ServiceAreas from "@/components/service-areas"
import SocialProof from "@/components/social-proof"
import ContactCta from "@/components/contact-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InsuranceUspSection />
      <ServicesOverview />
      <ServiceAreas />
      <SocialProof />
      <ContactCta />
    </>
  )
}
