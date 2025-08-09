import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Commercial Roof Repair Services | Summit Roofing",
  description:
    "Get expert repairs for all types of commercial roofing systems. Summit Roofing Professionals provides fast and reliable repair services. Get a free estimate!",
}

const repairFaqs = [
  {
    question: "What are common signs I need a roof repair?",
    answer:
      "Common signs include visible water stains on ceilings, pooling water on the roof, cracked or blistering membrane surfaces, and loose flashing around vents or HVAC units. If you see any of these, call us immediately.",
  },
  {
    question: "Do you offer emergency commercial roof repair?",
    answer:
      "Yes, we have teams ready to respond to emergency repair needs to mitigate damage and secure your property as quickly as possible. We understand that for a business, time is money.",
  },
]

export default function CommercialRepairPage() {
  return (
    <>
      <ServicePageHero
        title="Commercial Roof Repair"
        subtitle="Fast, reliable, and effective repairs for all commercial roofing systems."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flat-roof-commerical-repair-hero-OvLUFzbpRsVmSkZO5aebzfYXI1F24b.png"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Minimizing Disruption, Maximizing Protection</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            A leak or damage to your commercial roof can disrupt your business operations. Our expert technicians
            quickly diagnose issues and perform durable repairs on all system types, from single-ply to modified
            bitumen, to get you back to business as usual.
          </p>
        </div>
      </section>
      <FaqSection faqs={repairFaqs} />
      <CtaSection title="Request a Free Commercial Roof Repair Estimate" buttonText="Get My Repair Estimate" />
    </>
  )
}
