import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Roofing Services in Alabama & Georgia | Summit Roofing",
  description:
    "Expert residential roofing services, including new roof installation, replacement, and high-quality shingle options for your home in Alabama and Georgia.",
}

const residentialFaqs = [
  {
    question: "How long does a new roof installation take?",
    answer:
      "Most residential roof replacements can be completed in 1-3 days, depending on the size and complexity of your roof and the weather conditions.",
  },
  {
    question: "What type of shingles should I choose?",
    answer:
      "The best shingle type depends on your budget, desired aesthetic, and longevity goals. We offer a wide range of options, including asphalt, metal, and architectural shingles, and can help you choose the best fit for your home.",
  },
  {
    question: "How do I know if I need a roof replacement or just a repair?",
    answer:
      "Our free inspection will determine the extent of the damage. Generally, if more than 30% of your roof is damaged, or if it's nearing the end of its lifespan, a replacement is more cost-effective in the long run.",
  },
]

const ourProcess = [
  { name: "Thorough Inspection", description: "We start with a detailed assessment of your current roof's condition." },
  { name: "Material Selection", description: "We help you choose the best materials to fit your style and budget." },
  {
    name: "Expert Installation",
    description: "Our certified team ensures a flawless installation with meticulous attention to detail.",
  },
  {
    name: "Final Walk-through & Cleanup",
    description: "We ensure your property is spotless and you are 100% satisfied with the work.",
  },
]

export default function ResidentialRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Expert Residential Roofing"
        subtitle="Protecting your home and family with durable, high-quality roofing solutions."
        imageUrl="/images/residential-roof.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Home's First Line of Defense</h2>
            <p className="mt-4 text-lg text-gray-600">
              A reliable roof is crucial for the safety and comfort of your home. We provide comprehensive residential
              roofing services, from minor repairs to full replacements, using only the highest quality materials.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/happy-family-home.png"
                alt="Happy family in front of their home"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Proven Process</h3>
              <ul className="space-y-4">
                {ourProcess.map((step) => (
                  <li key={step.name} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{step.name}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={residentialFaqs} />
      <CtaSection />
    </>
  )
}
