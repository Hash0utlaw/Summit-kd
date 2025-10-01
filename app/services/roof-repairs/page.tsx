import type { Metadata } from "next"
import Image from "next/image"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { AlertTriangle, Wind, Droplets, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Roof Repair Services in AL & GA | Summit Roofing",
  description:
    "Fast and reliable roof repair services for leaks, storm damage, and missing shingles in Alabama and Georgia. Rapid response available for urgent issues.",
}

const repairFaqs = [
  {
    question: "How can I tell if my roof has storm damage?",
    answer:
      "Signs of storm damage include missing, cracked, or bruised shingles, dents in vents or gutters, and granules collecting in your downspouts. We offer a free, no-obligation inspection to assess for damage after a storm.",
  },
  {
    question: "Is a small leak a serious problem?",
    answer:
      "Absolutely. Even a small leak can lead to significant problems over time, including mold growth, rotted framing, damaged insulation, and ceiling stains. It's crucial to address any leak as soon as it's discovered.",
  },
  {
    question: "Do you offer rapid response for urgent roof repairs?",
    answer:
      "Yes, we offer rapid response services to address urgent roofing issues and prevent further damage to your property. If you have a roofing emergency, call us immediately.",
  },
]

const commonProblems = [
  {
    icon: <Droplets className="h-10 w-10 text-red-600" />,
    title: "Roof Leaks",
    description: "Promptly locating and fixing leaks to prevent water damage.",
  },
  {
    icon: <Wind className="h-10 w-10 text-red-600" />,
    title: "Storm & Hail Damage",
    description: "Repairing damage from severe weather, including missing shingles and hail impacts.",
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
    title: "General Wear & Tear",
    description: "Addressing issues from aging, such as cracked seals and deteriorated materials.",
  },
]

export default function RoofRepairsPage() {
  return (
    <>
      <ServicePageHero
        title="Prompt & Reliable Roof Repairs"
        subtitle="Quickly addressing leaks, storm damage, and wear to protect your property."
        imageUrl="/images/repairs/repair-in-progress.png"
        imageAlt="Professional roofer carefully applying a patch to a flat roof."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">We Fix All Types of Roof Problems</h2>
            <p className="mt-4 text-lg text-gray-600">
              From minor leaks to major storm damage, our experienced technicians can diagnose and repair your roofing
              issues efficiently, restoring the integrity of your roof and giving you peace of mind.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {commonProblems.map((problem, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border">
                <div className="flex justify-center mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{problem.title}</h3>
                <p className="mt-2 text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Repair Process: Safe & Thorough</h2>
              <p className="mt-4 text-lg text-gray-600">
                We don't just fix the symptom; we find the source. Our repair process begins with a comprehensive
                inspection to identify all underlying issues. We prioritize safety and quality in every step, ensuring a
                durable, long-lasting solution.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Detailed Inspection:</span> We use advanced techniques to accurately
                    diagnose the problem.
                  </span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Quality Materials:</span> We use only high-quality materials that
                    match your existing roof for seamless repairs.
                  </span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Expert Workmanship:</span> Our certified technicians ensure every
                    repair is performed to the highest industry standards.
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/repairs/roofer-on-commercial-roof.png"
                alt="Roofer in safety gear inspecting a large commercial roof under a stormy sky."
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={repairFaqs} />
      <CtaSection
        title="Don't Wait, Repair Your Roof Today!"
        description="Ignoring roof damage can lead to more expensive problems down the line. Contact us now for a fast, free repair estimate."
        buttonText="Get My Free Repair Estimate"
      />
    </>
  )
}
