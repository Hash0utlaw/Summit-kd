import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Feather, Zap, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Metal Roofing in AL & GA | Summit Roofing",
  description:
    "Explore modern metal roofing options, including durable metal shingles and sleek standing seam roofs. Summit Roofing provides expert installation in Alabama & Georgia. Get a free estimate!",
}

const metalFaqs = [
  {
    question: "Are metal roofs noisy when it rains?",
    answer:
      "This is a common myth. When installed correctly over a solid roof deck with proper underlayment, a modern metal roof is no louder than an asphalt shingle roof during a rainstorm.",
  },
  {
    question: "Can metal roofs look like other materials?",
    answer:
      "Yes! Metal shingles are incredibly versatile and can be manufactured to mimic traditional asphalt shingles, wood shakes, or even slate tiles. Standing seam offers a modern, clean look, while other profiles can suit various architectural styles.",
  },
  {
    question: "How long do metal roofs last?",
    answer:
      "Metal roofs have a very long lifespan, typically lasting 40 to 70 years, and sometimes longer. They are highly resistant to cracking, shrinking, and eroding, making them a very low-maintenance and cost-effective long-term solution.",
  },
]

const benefits = [
  {
    icon: <RefreshCw className="h-8 w-8 text-gray-700" />,
    title: "Incredible Lifespan",
    description: "A metal roof can last 40-70 years, 2-3 times longer than traditional roofing materials.",
  },
  {
    icon: <Zap className="h-8 w-8 text-gray-700" />,
    title: "Highly Energy Efficient",
    description: "Reflects solar heat, which can reduce cooling costs by up to 25% and improve home comfort.",
  },
  {
    icon: <Feather className="h-8 w-8 text-gray-700" />,
    title: "Lightweight & Durable",
    description: "Puts less stress on your home's structure while resisting high winds, fire, hail, and rot.",
  },
]

export default function MetalShinglesPage() {
  return (
    <>
      <ServicePageHero
        title="Modern & Lasting Metal Roofing"
        subtitle="From classic shingles to sleek standing seam, discover the strength and style of metal."
        imageUrl="/images/metal/metal-hero.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>The Future of Roofing is Here</h2>
              <p>
                Metal roofing offers an unparalleled combination of longevity, durability, and aesthetic appeal. Whether
                you prefer the timeless, dimensional appearance of metal shingles or the clean, modern lines of a
                standing seam system, you're choosing a roof that's built to last a lifetime. It's a smart, stylish, and
                sustainable choice for any home in Alabama or Georgia.
              </p>
              <h3>Why Choose a Metal Roof?</h3>
              <ul>
                <li>
                  <strong>Aesthetic Versatility:</strong> Metal shingles can mimic slate, shake, and tile, while
                  standing seam offers a contemporary finish.
                </li>
                <li>
                  <strong>Exceptional Durability:</strong> Will not crack, warp, or rot. Highly resistant to hail, wind,
                  and fire.
                </li>
                <li>
                  <strong>Low Maintenance:</strong> Metal roofs require virtually no maintenance over their incredibly
                  long lifespan.
                </li>
                <li>
                  <strong>Eco-Friendly:</strong> Often made from recycled materials and are 100% recyclable at the end
                  of their life.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/metal/metal-roofing.png"
                alt="Modern home with a sleek standing seam metal roof and skylights"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Metal Roofing Difference</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the modern benefits of a roof that's built to perform and last for decades.
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

      <FaqSection faqs={metalFaqs} title="Metal Roofing Questions" />
      <CtaSection
        title="Get a Free Metal Roofing Assessment"
        description="Learn more about the long-term benefits of a metal roof. Contact us today for a free assessment and estimate for your home."
        buttonText="Request My Free Assessment"
      />
    </>
  )
}
