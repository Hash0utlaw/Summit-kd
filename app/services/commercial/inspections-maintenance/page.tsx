import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Roof Inspections & Maintenance Services | Summit Roofing",
  description:
    "Ensure the longevity of your roof with comprehensive roof inspections and preventive maintenance. Summit Roofing Professionals offers expert services. Contact us today!",
}

const inspectionFaqs = [
  {
    question: "How often should I have my commercial roof inspected?",
    answer:
      "We recommend professional inspections at least twice a year—once in the spring and once in the fall—and after any major weather event. This proactive approach catches small problems before they become costly disasters.",
  },
  {
    question: "What does a maintenance plan include?",
    answer:
      "Our customizable plans include regular inspections, debris removal from drains and gutters, minor repairs to seals and flashing, and a detailed report on your roof's condition. It's the best way to maximize your roof's lifespan.",
  },
]

export default function InspectionsMaintenancePage() {
  return (
    <>
      <ServicePageHero
        title="Roof Inspections & Maintenance"
        subtitle="Protect your investment with proactive inspections and preventative maintenance plans."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flat-roof-commerical-repair-hero-OvLUFzbpRsVmSkZO5aebzfYXI1F24b.png"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Prevention is the Best Policy</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Regular maintenance is the single most important factor in determining the lifespan of your commercial roof.
            Our programs are designed to identify and address potential issues early, saving you thousands in premature
            replacement costs.
          </p>
        </div>
      </section>
      <FaqSection faqs={inspectionFaqs} />
      <CtaSection title="Schedule a Free Roof Inspection" buttonText="Schedule My Inspection" />
    </>
  )
}
