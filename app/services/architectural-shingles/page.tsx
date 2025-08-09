import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import FaqSection from "@/components/faq-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Architectural Shingle Roofing | Summit Roofing Professionals",
  description:
    "Discover the beauty and durability of architectural shingles with Summit Roofing. We offer expert installation for a high-performance, dimensional look in Alabama and Georgia.",
}

const benefits = [
  "Enhanced Curb Appeal: Dimensional, textured appearance that mimics natural materials.",
  "Superior Durability: Heavier and more resilient than traditional 3-tab shingles.",
  "Longer Lifespan: Typically lasts 30-50 years with proper maintenance.",
  "Excellent Wind Resistance: Engineered to withstand higher wind speeds.",
  "Increased Home Value: A popular and attractive choice for homeowners.",
  "Wide Variety of Colors: Available in a vast range of colors to match any home style.",
]

const faqItems = [
  {
    question: "What are architectural shingles?",
    answer:
      "Architectural shingles, also known as dimensional or laminate shingles, are a premium type of asphalt shingle. They are made with a heavier base mat and multiple layers of asphalt, creating a textured, three-dimensional appearance that adds depth and character to your roof.",
  },
  {
    question: "How long do architectural shingles last?",
    answer:
      "With professional installation and regular maintenance, architectural shingles typically last between 30 and 50 years, which is significantly longer than standard 3-tab shingles. Many also come with longer manufacturer warranties.",
  },
  {
    question: "Are architectural shingles worth the extra cost?",
    answer:
      "While they have a higher upfront cost, architectural shingles provide superior durability, a longer lifespan, better wind resistance, and enhanced curb appeal. For many homeowners, these benefits make them a worthwhile long-term investment that can increase home value.",
  },
]

export default function ArchitecturalShinglesPage() {
  return (
    <>
      <ServicePageHero
        title="Architectural Shingle Roofing"
        subtitle="Dimensional Beauty, Lasting Performance"
        imageUrl="/images/shingles/shingle-hero.png"
        imageAlt="Close-up of dimensional architectural shingles on a residential roof"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">The Gold Standard in Residential Roofing</h2>
              <p>
                Architectural shingles are the most popular roofing choice for homeowners across Alabama and Georgia,
                and for good reason. They offer a perfect blend of aesthetic appeal, rugged durability, and excellent
                value. Unlike traditional flat 3-tab shingles, architectural shingles feature a multi-layered, laminated
                construction that creates a rich, textured look, mimicking the appearance of natural materials like
                slate or wood shakes.
              </p>
              <p>
                At Summit Roofing Professionals, we specialize in the expert installation of high-quality architectural
                shingles from leading manufacturers. Our meticulous process ensures your new roof is not only beautiful
                but also engineered to provide maximum protection against wind, rain, and the harsh Southern sun for
                decades to come.
              </p>
            </div>
            <div>
              <Image
                src="/images/shingles/shingle-gallery-4.png"
                alt="Close-up of expertly installed architectural shingles on a luxury home with complex gables"
                width={600}
                height={400}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Benefits of Architectural Shingles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection faqs={faqItems} title="Architectural Shingle Questions" />

      <CtaSection
        title="Ready to Upgrade Your Roof?"
        description="Contact Summit Roofing Professionals today for a free, no-obligation estimate on a beautiful new architectural shingle roof."
        buttonText="Schedule Your Free Inspection"
        buttonLink="/contact"
      />
    </>
  )
}
