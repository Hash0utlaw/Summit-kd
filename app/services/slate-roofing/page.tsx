import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Gem, ShieldCheck, Sun } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Slate Roofing Services in Alabama & Georgia | Summit Roofing",
  description:
    "Discover the elegance and longevity of slate roofing. Summit Roofing Professionals offers expert installation and repair services for slate roofs in Alabama & Georgia. Get a free estimate!",
}

const slateFaqs = [
  {
    question: "How long does a slate roof really last?",
    answer:
      "A professionally installed slate roof can last over 100 years, often outliving the structure it protects. It's one of the most durable and long-lasting roofing materials available.",
  },
  {
    question: "Is a slate roof too heavy for my home?",
    answer:
      "Slate is a heavy material, and not all home structures can support it without reinforcement. As part of our initial consultation, we conduct a thorough structural assessment to ensure your home is suitable for a slate roof.",
  },
  {
    question: "How do you repair a damaged slate tile?",
    answer:
      "Repairing slate requires special tools and expertise. Our technicians carefully remove the broken slate using a slate ripper and slide a new, matching slate into place, securing it with a copper nail and bib.",
  },
]

const benefits = [
  {
    icon: <Gem className="h-8 w-8 text-blue-600" />,
    title: "Unmatched Longevity",
    description: "A slate roof can last for a century or more with proper maintenance.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Superior Durability",
    description: "Naturally resistant to fire, rot, insects, and extreme weather.",
  },
  {
    icon: <Sun className="h-8 w-8 text-blue-600" />,
    title: "Timeless Beauty",
    description: "Offers a classic, elegant aesthetic that enhances curb appeal and property value.",
  },
]

export default function SlateRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Elegant & Enduring Slate Roofing"
        subtitle="Experience the pinnacle of roofing with natural slate—unmatched in beauty, durability, and prestige."
        imageUrl="/images/slate/slate-hero.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>The Ultimate Roofing Investment</h2>
              <p>
                Slate roofing is synonymous with luxury and permanence. Harvested from the earth, each tile is unique,
                providing a sophisticated texture and color variation that cannot be replicated. For homeowners in
                Alabama and Georgia seeking the very best, a slate roof from Summit Roofing Professionals is a statement
                of quality that will protect your home for generations.
              </p>
              <h3>The Benefits of Natural Slate</h3>
              <ul>
                <li>
                  <strong>Longevity:</strong> With a lifespan of 100+ years, it's often called the "forever roof."
                </li>
                <li>
                  <strong>Fire Resistance:</strong> Slate is completely fireproof, offering the highest level of
                  protection.
                </li>
                <li>
                  <strong>Low Maintenance:</strong> Naturally resistant to fungus and mold, requiring minimal upkeep.
                </li>
                <li>
                  <strong>Increased Home Value:</strong> A slate roof is a significant asset that boosts your property's
                  value.
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/slate/slate-house.png"
                alt="Beautiful luxury home with a professionally installed dark slate roof"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Slate?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Slate offers a combination of benefits that synthetic materials simply cannot match.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={slateFaqs} title="Slate Roofing Questions" />
      <CtaSection
        title="Request a Free Slate Roofing Estimate"
        description="Discover if a timeless slate roof is the right choice for your home. Contact us for a detailed consultation and estimate."
        buttonText="Get My Slate Estimate"
      />
    </>
  )
}
