import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Feather, Zap, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Metal Shingle Roofing Services in Alabama & Georgia | Summit Roofing",
  description:
    "Explore the modern and long-lasting benefits of metal shingle roofing. Summit Roofing Professionals provides expert installation and repair for metal shingle roofs in Alabama & Georgia. Get a free estimate!",
}

const metalFaqs = [
  {
    question: "Are metal roofs noisy when it rains?",
    answer:
      "This is a common myth. When installed correctly over a solid roof deck with proper underlayment, a metal shingle roof is no louder than an asphalt shingle roof during a rainstorm.",
  },
  {
    question: "Can metal shingles look like other materials?",
    answer:
      "Yes! Modern metal shingles are incredibly versatile. They can be manufactured to mimic the look of traditional asphalt shingles, wood shakes, or even slate tiles, giving you the aesthetic you want with the durability of metal.",
  },
  {
    question: "How long do metal shingle roofs last?",
    answer:
      "Metal shingle roofs have a very long lifespan, typically lasting 40 to 70 years. They are highly resistant to cracking, shrinking, and eroding, making them a very low-maintenance and cost-effective long-term solution.",
  },
]

const benefits = [
  {
    icon: <RefreshCw className="h-8 w-8 text-gray-700" />,
    title: "Incredible Lifespan",
    description: "A metal shingle roof can last 40-70 years, 2-3 times longer than asphalt.",
  },
  {
    icon: <Zap className="h-8 w-8 text-gray-700" />,
    title: "Highly Energy Efficient",
    description: "Reflects solar heat, which can reduce cooling costs by up to 25%.",
  },
  {
    icon: <Feather className="h-8 w-8 text-gray-700" />,
    title: "Lightweight & Durable",
    description: "Puts less stress on your home's structure while resisting wind, fire, and rot.",
  },
]

export default function MetalShinglesPage() {
  return (
    <>
      <ServicePageHero
        title="Modern & Lasting Metal Shingles"
        subtitle="Get the classic look of shingles with the unmatched strength and longevity of steel."
        imageUrl="/images/metal-shingles-roof.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>The Future of Roofing is Here</h2>
              <p>
                Metal shingle roofing combines the best of both worlds: the timeless, dimensional appearance of
                traditional shingles and the superior durability and performance of metal. Lightweight,
                energy-efficient, and built to last a lifetime, metal shingles are a smart, stylish, and sustainable
                choice for any home in Alabama or Georgia.
              </p>
              <h3>Why Choose Metal Shingles?</h3>
              <ul>
                <li>
                  <strong>Aesthetic Versatility:</strong> Designed to mimic slate, shake, and traditional shingles in a
                  variety of colors.
                </li>
                <li>
                  <strong>Exceptional Durability:</strong> Will not crack, warp, or rot. Highly resistant to hail, wind,
                  and fire.
                </li>
                <li>
                  <strong>Low Maintenance:</strong> Metal roofs require virtually no maintenance over their long
                  lifespan.
                </li>
                <li>
                  <strong>Eco-Friendly:</strong> Often made from recycled materials and are 100% recyclable at the end
                  of their life.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/metal-shingles-closeup.png"
                alt="Close-up of modern metal shingles"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Metal Shingle Difference</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the modern benefits of a roof that's built to perform and last.
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

      <FaqSection faqs={metalFaqs} title="Metal Shingle Roofing Questions" />
      <CtaSection
        title="Get a Free Metal Shingle Roofing Assessment"
        description="Learn more about the long-term benefits of a metal shingle roof. Contact us today for a free assessment and estimate."
        buttonText="Request My Free Assessment"
      />
    </>
  )
}
