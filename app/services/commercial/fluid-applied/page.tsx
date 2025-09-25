import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Droplets, Sun, RefreshCw } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Fluid-Applied Roofing & Coatings | Summit Roofing",
  description:
    "Restore and protect your commercial roof with a seamless, waterproof fluid-applied membrane. Summit Roofing offers expert application services for all roof types. Get a free quote!",
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
  {
    question: "Is this process disruptive to my business operations?",
    answer:
      "We strive to minimize disruption. The application process is generally quieter and less intrusive than a full roof replacement. We work with you to create a schedule that accommodates your business needs.",
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
        title="Fluid-Applied Roof Coatings"
        subtitle="Seamless, waterproof, and restorative solutions to extend the life of your commercial roof."
        imageUrl="/images/commercial/modern-commercial-roof.png"
        imageAlt="Modern commercial building with bright white reflective roof coating"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>Restore Your Roof, Don&apos;t Replace It</h2>
              <p>
                Fluid-applied roofing systems are an innovative and cost-effective solution for restoring and protecting
                an existing commercial roof. These liquid coatings cure to form a durable, seamless membrane that stops
                leaks, improves energy efficiency, and significantly extends the service life of your roof. It&apos;s a
                smarter way to manage your roofing assets.
              </p>
              <p>
                From metal roofs to modified bitumen and single-ply systems, our fluid-applied solutions are versatile
                and can be tailored to your specific roof type and needs, ensuring long-lasting protection.
              </p>
            </div>
            <div>
              <Image
                src="/images/commercial/coatings/application-in-progress.png"
                alt="Professional roofer in protective gear spraying white roof coating during application"
                width={600}
                height={450}
                sizes="(min-width: 768px) 50vw, 100vw"
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Versatile Solutions for Every Roof Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/commercial/coatings/surface-preparation.png"
                alt="Surface preparation on commercial roof before coating to improve adhesion"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="rounded-lg shadow-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Thorough Preparation</h3>
              <p className="mt-2 text-gray-600">
                Every project begins with meticulous surface preparation to ensure maximum adhesion and longevity.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/commercial/coatings/spray-application-closeup.png"
                alt="Close-up of spray gun applying waterproof roof coating to create a seamless membrane"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="rounded-lg shadow-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Precise Application</h3>
              <p className="mt-2 text-gray-600">
                We use state-of-the-art equipment to apply a consistent, seamless membrane across your entire roof.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/commercial/coatings/metal-roof-coating.png"
                alt="Completed reflective silver coating on a commercial metal roof with turbine vents"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="rounded-lg shadow-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Metal Roof Restoration</h3>
              <p className="mt-2 text-gray-600">
                Our coatings are perfect for metal roofs, stopping leaks, preventing rust, and improving energy
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={fluidAppliedFaqs} title="Fluid-Applied Roofing Questions" />
      <CtaSection
        title="Request a Free Roof Coating Consultation"
        description="Learn how you can restore your roof and save money with a seamless, fluid-applied system. Contact us for a free consultation."
        buttonText="Get My Free Consultation"
      />
    </>
  )
}
