import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Leaf, Thermometer, Wind } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Cedar Shake Roofing Services in Alabama & Georgia | Summit Roofing",
  description:
    "Enhance your home with the natural beauty and insulation of cedar shake roofing. Summit Roofing Professionals provides expert installation and repair services in Alabama & Georgia. Contact us today!",
}

const cedarFaqs = [
  {
    question: "How long does a cedar shake roof last?",
    answer:
      "A well-maintained cedar shake roof can last 30 to 40 years, or even longer, depending on the quality of the cedar, installation, and local climate. Regular maintenance is key to maximizing its lifespan.",
  },
  {
    question: "Does a cedar roof require a lot of maintenance?",
    answer:
      "Cedar roofs require more maintenance than asphalt or metal. This includes periodic cleaning to remove moss and debris, and treatments to preserve the wood and maintain its resistance to rot and insects.",
  },
  {
    question: "Are cedar shakes environmentally friendly?",
    answer:
      "Yes, cedar shakes are a sustainable roofing choice. They are made from a renewable resource and are biodegradable at the end of their life. They are also excellent natural insulators, which can reduce your home's energy consumption.",
  },
]

const benefits = [
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: "Stunning Natural Beauty",
    description: "Offers a rustic, timeless charm with rich tones that age gracefully.",
  },
  {
    icon: <Thermometer className="h-8 w-8 text-green-600" />,
    title: "Excellent Insulation",
    description: "Wood is a natural insulator, helping to keep your home cooler in summer and warmer in winter.",
  },
  {
    icon: <Wind className="h-8 w-8 text-green-600" />,
    title: "Wind & Impact Resistant",
    description: "Cedar shakes are durable and can withstand severe weather, including high winds and hail.",
  },
]

export default function CedarShakeRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Natural Beauty of Cedar Shake Roofing"
        subtitle="Bring a warm, rustic elegance to your home with authentic cedar shake roofing."
        imageUrl="/images/cedar/cedar-special.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>A Timeless, Eco-Friendly Choice</h2>
              <p>
                Cedar shake roofing provides a distinctive look that blends beautifully with natural surroundings. Known
                for its dimensional texture and rich, warm tones, cedar adds character and curb appeal that is both
                classic and highly sought-after. At Summit Roofing Professionals, we use high-quality cedar and expert
                installation techniques to ensure your roof is as durable as it is beautiful.
              </p>
              <h3>Why Homeowners Love Cedar</h3>
              <ul>
                <li>
                  <strong>Aesthetic Appeal:</strong> Each shake is unique, creating a charming, one-of-a-kind roof.
                </li>
                <li>
                  <strong>Energy Efficiency:</strong> The natural insulating properties of wood can help lower your
                  energy bills.
                </li>
                <li>
                  <strong>Durability:</strong> Cedar contains natural preservatives that make it resistant to moisture,
                  UV rays, and insect damage.
                </li>
                <li>
                  <strong>Eco-Friendly:</strong> A renewable and biodegradable material, making it a green choice.
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/cedar/gallery-7.png"
                alt="Close-up of a rustic cedar shake roof on a modern home"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Cedar Shake Advantage</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the unique benefits that make cedar a premium roofing material.
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

      <FaqSection faqs={cedarFaqs} title="Cedar Shake Roofing Questions" />
      <CtaSection
        title="Get a Free Cedar Shake Roofing Inspection"
        description="Explore the benefits of a natural wood roof for your home. Contact us for a professional consultation and free inspection."
        buttonText="Schedule My Inspection"
      />
    </>
  )
}
