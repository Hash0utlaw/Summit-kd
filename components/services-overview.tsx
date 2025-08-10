import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Residential Roofing",
    description:
      "Protect your home with our expert residential roofing services, from new installations to full replacements.",
    imageUrl: "/images/residential/hero.png",
    imageAlt: "A beautiful suburban home with a newly installed architectural shingle roof by Summit Roofing.",
    href: "/services/residential-roofing",
  },
  {
    title: "Commercial Roofing",
    description:
      "We provide durable, energy-efficient roofing solutions for businesses and commercial properties of all sizes.",
    imageUrl: "/images/commercial/modern-commercial-roof.png",
    imageAlt: "A large, modern commercial building with a flat TPO roof system installed by Summit Roofing.",
    href: "/services/commercial-roofing",
  },
  {
    title: "Roof Repairs & Insurance Claims",
    description:
      "From storm damage to leaks, we offer fast, reliable repairs and expert assistance with insurance claims.",
    imageUrl: "/images/roof-damage-hail.png",
    imageAlt: "Close-up of hail damage on a shingle roof, a common reason for roof repairs and insurance claims.",
    href: "/services/roof-repairs",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Roofing Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for every roofing need, delivered with quality and integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-56 w-full">
                  {/* Optimized Next/Image for service cards */}
                  <Image
                    src={service.imageUrl || "/placeholder.svg"}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-700">{service.description}</p>
                  <Button asChild variant="link" className="mt-4 px-0 text-orange-600 hover:text-orange-700">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
