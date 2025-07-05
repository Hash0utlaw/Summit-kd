import type { Metadata } from "next"
import Link from "next/link"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import { Layers, Feather, Droplets, Sun, Search, Wrench, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Commercial Roofing Contractors in Alabama & Georgia | Summit Roofing",
  description:
    "Specialized commercial roofing services including TPO, EPDM, Modified Bitumen, and more for businesses in Alabama and Georgia. Durable, energy-efficient solutions.",
}

const commercialServices: {
  icon: LucideIcon
  title: string
  description: string
  href: string
}[] = [
  {
    icon: Layers,
    title: "Modified Bitumen",
    description: "Time-tested, multi-layer protection for flat and low-slope roofs.",
    href: "/services/commercial/modified-bitumen",
  },
  {
    icon: Feather,
    title: "Single-Ply Roofing",
    description: "Modern, lightweight, and energy-efficient TPO, EPDM, and PVC systems.",
    href: "/services/commercial/single-ply",
  },
  {
    icon: Droplets,
    title: "Fluid-Applied Roofing",
    description: "Seamless, restorative coatings that extend the life of your existing roof.",
    href: "/services/commercial/fluid-applied",
  },
  {
    icon: Sun,
    title: "Energy-Efficient Systems",
    description: "Cool roof solutions designed to lower your energy costs.",
    href: "/services/commercial/energy-efficient",
  },
  {
    icon: Search,
    title: "Inspections & Maintenance",
    description: "Proactive plans to protect your investment and prevent costly repairs.",
    href: "/services/commercial/inspections-maintenance",
  },
  {
    icon: Wrench,
    title: "Commercial Roof Repair",
    description: "Fast and reliable repairs for all types of commercial roofing systems.",
    href: "/services/commercial/repair",
  },
]

export default function CommercialRoofingHubPage() {
  return (
    <>
      <ServicePageHero
        title="Professional Commercial Roofing"
        subtitle="Protecting Your Business Investment with Durable and Efficient Roofing Systems."
        imageUrl="/images/commercial-building-roof.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Commercial Roofing Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a complete suite of commercial roofing services tailored to the unique needs of businesses,
              industrial facilities, and multi-family properties in Alabama and Georgia. Explore our specialized
              solutions below.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((service) => (
              <div
                key={service.title}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow flex flex-col"
              >
                <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
                <Button asChild variant="link" className="p-0 mt-4 text-orange-500 hover:text-orange-600 self-start">
                  <Link href={service.href}>Learn More &rarr;</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
