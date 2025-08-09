import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Energy-Efficient Roofing Systems | Summit Roofing",
  description:
    "Reduce your cooling costs with energy-efficient roofing solutions. Summit Roofing Professionals offers expert installation of cool roofs and reflective coatings. Get a free estimate!",
}

const energyFaqs = [
  {
    question: "What makes a roof 'energy-efficient'?",
    answer:
      "An energy-efficient or 'cool' roof has high solar reflectivity and high thermal emittance. It reflects sunlight and radiates absorbed heat, keeping the roof surface and the building below it cooler.",
  },
  {
    question: "How much can I save with an energy-efficient roof?",
    answer:
      "Savings vary, but many building owners see a 10-30% reduction in their annual cooling costs. The U.S. Department of Energy estimates that cool roofs can lower rooftop temperatures by up to 50°F.",
  },
]

export default function EnergyEfficientPage() {
  return (
    <>
      <ServicePageHero
        title="Energy-Efficient Roofing Systems"
        subtitle="Lower your energy bills and improve your building's comfort with our cool roofing solutions."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flat-roof-commerical-repair-hero-OvLUFzbpRsVmSkZO5aebzfYXI1F24b.png"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Cut Costs and Go Green</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            We install a variety of energy-efficient systems, including white TPO/PVC membranes and reflective
            fluid-applied coatings, to help you save money and reduce your carbon footprint.
          </p>
        </div>
      </section>
      <FaqSection faqs={energyFaqs} />
      <CtaSection title="Get a Free Energy-Efficient Roofing Assessment" buttonText="Request My Free Assessment" />
    </>
  )
}
