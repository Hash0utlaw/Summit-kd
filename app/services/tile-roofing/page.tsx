import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { ShieldCheck, Sun, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Tile Roofing Services in Alabama & Georgia | Summit Roofing",
  description:
    "Choose durable and aesthetically pleasing tile roofing for your home. Summit Roofing Professionals offers expert installation and repair for clay and concrete tile roofs in Alabama & Georgia. Get a free quote!",
}

const tileFaqs = [
  {
    question: "What's the difference between clay and concrete tiles?",
    answer:
      "Clay tiles offer a classic, fade-resistant color but are typically more expensive. Concrete tiles are more versatile in shape and color, very durable, and generally more affordable. We can help you decide which is best for your home.",
  },
  {
    question: "How long does a tile roof last?",
    answer:
      "Both clay and concrete tile roofs are incredibly durable, with lifespans that can exceed 50-100 years. They are an excellent long-term investment for any property.",
  },
  {
    question: "Are tile roofs good for hot climates like Alabama and Georgia?",
    answer:
      "Yes, tile roofs are ideal for hot climates. The air space beneath the curved tiles creates a natural thermal barrier, which helps to block heat transfer and keep your home significantly cooler, reducing energy costs.",
  },
]

const benefits = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-orange-600" />,
    title: "Extreme Durability",
    description: "Resistant to fire, hail, and high winds, offering superior protection.",
  },
  {
    icon: <Sun className="h-8 w-8 text-orange-600" />,
    title: "Energy Efficient",
    description: "Natural thermal resistance helps keep your home cool and lower utility bills.",
  },
  {
    icon: <Palette className="h-8 w-8 text-orange-600" />,
    title: "Versatile Aesthetics",
    description: "Available in a wide array of colors and styles, from Mediterranean to modern.",
  },
]

export default function TileRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Durable & Stylish Tile Roofing"
        subtitle="Add timeless character and long-lasting protection to your home with clay or concrete tile."
        imageUrl="/images/tile-roof.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>A Legacy of Strength and Style</h2>
              <p>
                Tile roofing has been a symbol of premium quality for centuries. Whether you prefer the classic look of
                Spanish clay tiles or the versatility of modern concrete tiles, Summit Roofing Professionals provides
                expert installation that ensures your roof is both beautiful and built to last. Tile is an ideal choice
                for the climate in Alabama and Georgia, offering exceptional durability and energy efficiency.
              </p>
              <h3>The Enduring Appeal of Tile</h3>
              <ul>
                <li>
                  <strong>Longevity:</strong> A tile roof can easily last for 50 years or more with minimal maintenance.
                </li>
                <li>
                  <strong>Weather Resistance:</strong> Tiles can withstand high winds, hail, and are completely
                  fireproof.
                </li>
                <li>
                  <strong>Energy Savings:</strong> The inherent insulating properties of tile can reduce cooling costs
                  by up to 20%.
                </li>
                <li>
                  <strong>Curb Appeal:</strong> Available in a vast range of styles and colors to perfectly match your
                  home's architecture.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/tile-roof-closeup.png"
                alt="Close-up of a Spanish-style tile roof"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Advantages of a Tile Roof</h2>
            <p className="mt-4 text-lg text-gray-600">
              From robust protection to stunning aesthetics, discover why tile is a superior choice.
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

      <FaqSection faqs={tileFaqs} title="Tile Roofing Questions" />
      <CtaSection
        title="Request a Free Tile Roofing Consultation"
        description="Let's discuss how a beautiful, durable tile roof can enhance your home. Contact us for a free consultation and quote."
        buttonText="Get My Free Quote"
      />
    </>
  )
}
