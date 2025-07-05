import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Droplets, Sun, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Fluid-Applied Roofing Services | Summit Roofing",
  description:
    "Protect your existing roof with a seamless, waterproof membrane using fluid-applied roofing. Summit Roofing Professionals offers expert application services. Get a free quote!",
}

const fluidAppliedFaqs = [
  {
    question: "Can fluid-applied roofing be installed over my existing roof?",
    answer:
      "Yes, in most cases. One of the biggest advantages of fluid-applied systems is that they can be applied directly over existing roof surfaces like metal, modified bitumen, and single-ply, saving you the cost and disruption of a full tear-off.",
  },
  {
    question: "How does a fluid-applied system work?",
    answer:
      "The liquid coating is rolled or sprayed onto a prepared roof surface. As it cures, it forms a single, seamless, and flexible membrane that is fully adhered to the roof. This monolithic layer has no seams, which are the most common source of leaks.",
  },
  {
    question: "How long does a fluid-applied roof restoration last?",
    answer:
      "A professionally installed fluid-applied roofing system can extend the life of your existing roof by 10-20 years. They also offer renewable warranties; the roof can be re-coated at the end of the warranty period to extend protection.",
  },
]

const benefits = [
  {
    icon: <Droplets className="h-8 w-8 text-blue-600" />,
    title: "Seamless & Waterproof",
    description: "Creates a monolithic membrane with no seams, eliminating the primary source of leaks.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
    title: "Extends Roof Life",
    description: "Restores and protects your existing roof, delaying the need for a costly replacement.",
  },
  {
    icon: <Sun className="h-8 w-8 text-blue-600" />,
    title: "Improves Energy Efficiency",
    description: "Reflective 'cool roof' coatings lower roof temperatures and reduce energy consumption.",
  },
]

export default function FluidAppliedPage() {
  return (
    <>
      <ServicePageHero
        title="Fluid-Applied Roofing"
        subtitle="Seamless, waterproof, and restorative solutions to extend the life of your roof."
        imageUrl="/images/fluid-applied-roof.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>Restore Your Roof, Don't Replace It</h2>
              <p>
                Fluid-applied roofing systems are an innovative and cost-effective solution for restoring and protecting
                an existing commercial roof. These liquid coatings cure to form a durable, seamless membrane that stops
                leaks, improves energy efficiency, and significantly extends the service life of your roof. It's a
                smarter way to manage your roofing assets.
              </p>
            </div>
            <div>
              <img
                src="/images/fluid-applied-application.png"
                alt="Roofer applying a white fluid-applied coating with a roller"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Fluid-Applied Roofing?</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={fluidAppliedFaqs} title="Fluid-Applied Roofing Questions" />
      <CtaSection
        title="Request a Free Fluid-Applied Roofing Consultation"
        description="Learn how you can restore your roof and save money with a seamless, fluid-applied system. Contact us for a free consultation."
        buttonText="Get My Free Consultation"
      />
    </>
  )
}
