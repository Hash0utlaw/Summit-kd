import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Layers, Wind, ShieldCheck } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Modified Bitumen Roofing Services | Summit Roofing",
  description:
    "Discover the durability and flexibility of modified bitumen roofing for your commercial property. Summit Roofing Professionals offers expert installation and repair services. Get a free estimate!",
}

const modBitFaqs = [
  {
    question: "What is Modified Bitumen roofing?",
    answer:
      "Modified Bitumen (Mod-Bit) is an asphalt-based roofing material designed for low-slope or flat roofs. It consists of multiple layers, including modifiers like APP or SBS, which add flexibility, strength, and weather resistance.",
  },
  {
    question: "How is Modified Bitumen applied?",
    answer:
      "It can be installed in several ways, including torch-applied, hot-mopped, cold-applied adhesive, or self-adhered. Our team will recommend the best application method for your specific building and safety requirements.",
  },
  {
    question: "Is Modified Bitumen a good choice for Georgia and Alabama weather?",
    answer:
      "Yes, its multi-layer protection and excellent tensile strength make it highly resistant to punctures, tears, and extreme weather, including high heat, heavy rain, and foot traffic, making it ideal for our region.",
  },
]

const benefits = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Superior Durability",
    description: "Multi-layer system offers excellent puncture and tear resistance.",
  },
  {
    icon: <Layers className="h-8 w-8 text-blue-600" />,
    title: "Proven Flexibility",
    description: "Polymer modification allows the roof to expand and contract without damage.",
  },
  {
    icon: <Wind className="h-8 w-8 text-blue-600" />,
    title: "Excellent Weatherproofing",
    description: "Provides a robust, waterproof barrier against heavy rain and storms.",
  },
]

export default function ModifiedBitumenPage() {
  return (
    <>
      <ServicePageHero
        title="Modified Bitumen Roofing"
        subtitle="A time-tested, durable, and flexible solution for commercial flat roofs."
        imageUrl="/images/mod-bit-roof.png"
        imageAlt="Modified Bitumen commercial flat roof with multi-layer protection installed by Summit Roofing Professionals"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>Reliable Protection for Your Property</h2>
              <p>
                Modified Bitumen roofing is a top choice for commercial property owners in Alabama and Georgia looking
                for a tough, resilient, and proven flat roofing system. Its multi-layer design creates a formidable
                barrier against the elements, ensuring long-term protection for your valuable assets. At Summit Roofing
                Professionals, we are experts in the installation and maintenance of these robust systems.
              </p>
            </div>
            <div>
              <Image
                src="/images/mod-bit-application.png"
                alt="Roofer applying torched modified bitumen cap sheet during commercial roof installation"
                width={720}
                height={480}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Modified Bitumen Advantage</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6">
                <div className="flex justify-center mb-4" aria-hidden="true">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={modBitFaqs} title="Modified Bitumen Questions" />
      <CtaSection
        title="Request a Free Modified Bitumen Roofing Estimate"
        description="Learn how a durable Modified Bitumen roof can protect your commercial property. Contact us for a free, no-obligation estimate."
        buttonText="Get My Free Estimate"
      />
    </>
  )
}
