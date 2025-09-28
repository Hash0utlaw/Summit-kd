import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Sun, Feather, ShieldCheck } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Single-Ply TPO, EPDM, & PVC Roofing | Summit Roofing",
  description:
    "Explore energy-efficient single-ply roofing solutions, including TPO, EPDM, and PVC. Summit Roofing provides expert installation and repair for commercial buildings. Contact us today!",
}

const singlePlyFaqs = [
  {
    question: "What are the main types of single-ply roofing?",
    answer:
      "The three main types are TPO (Thermoplastic Olefin), EPDM (Ethylene Propylene Diene Monomer), and PVC (Polyvinyl Chloride). Each has unique benefits. TPO is known for energy efficiency, EPDM for durability, and PVC for chemical resistance.",
  },
  {
    question: "How does single-ply roofing save energy?",
    answer:
      "Light-colored single-ply membranes, especially white TPO and PVC, are highly reflective. They reflect the sun's UV rays, reducing heat absorption into the building. This lowers the workload on your HVAC system and can significantly cut cooling costs.",
  },
  {
    question: "How are the seams sealed on a single-ply roof?",
    answer:
      "This is a key part of the system's integrity. For TPO and PVC, seams are heat-welded with hot air, fusing them into a single, monolithic membrane. For EPDM, seams are sealed with specialized adhesives and tapes.",
  },
]

const benefits = [
  {
    icon: <Sun className="h-8 w-8 text-blue-600" />,
    title: "Energy Efficiency",
    description: "Reflective surfaces lower cooling costs and improve indoor comfort.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Proven Durability",
    description: "Resistant to UV radiation, punctures, and chemicals.",
  },
  {
    icon: <Feather className="h-8 w-8 text-blue-600" />,
    title: "Lightweight & Flexible",
    description: "Reduces structural load and easily conforms to various roof shapes.",
  },
]

export default function SinglePlyPage() {
  return (
    <>
      <ServicePageHero
        title="Single-Ply Roofing Systems"
        subtitle="Modern, energy-efficient, and durable solutions for your commercial roof."
        imageUrl="/images/commercial/tpo/hero.png"
        imageAlt="Professional installation of white TPO single-ply membrane on commercial building"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>The Smart Choice for Modern Buildings</h2>
              <p>
                Single-ply roofing membranes are a leading choice for commercial and industrial buildings. These systems
                consist of a single layer of flexible, synthetic material that provides a durable, waterproof, and
                energy-efficient shield for your property. Summit Roofing is certified to install and maintain all major
                single-ply systems, including TPO, EPDM, and PVC.
              </p>
            </div>
            <div>
              <Image
                src="/images/commercial/clean-single-ply-roof.jpg"
                alt="Clean white TPO single-ply membrane roof on modern commercial building"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Benefits of Single-Ply Roofing</h2>
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

      <FaqSection faqs={singlePlyFaqs} title="Single-Ply Roofing Questions" />
      <CtaSection
        title="Get a Free Single-Ply Roofing Inspection"
        description="Find out which single-ply system is right for your building. Contact us for a free inspection and detailed proposal."
        buttonText="Schedule My Free Inspection"
      />
    </>
  )
}
