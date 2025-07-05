import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building, Wrench, ShieldAlert, Award, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

const services: Service[] = [
  {
    icon: FileText,
    title: "Insurance Claims",
    description: "Expert assistance with your roofing insurance claims.",
    href: "/insurance-claims",
  },
  {
    icon: Home,
    title: "Residential Roofing",
    description: "High-quality roofing solutions for your home.",
    href: "/services/residential-roofing",
  },
  {
    icon: Building,
    title: "Commercial Roofing",
    description: "Durable and reliable roofing for commercial properties.",
    href: "/services/commercial-roofing",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    description: "Prompt and effective repairs for all types of roof damage.",
    href: "/services/roof-repairs",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Service",
    description: "24/7 emergency response for urgent roofing issues.",
    href: "/services/emergency-services",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "We stand by our work with a commitment to quality.",
    href: "/about#quality",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Roofing Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a comprehensive range of roofing services to meet the needs of our clients in Alabama and Georgia.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <Button asChild variant="link" className="p-0 mt-4 text-orange-500 hover:text-orange-600">
                <Link href={service.href}>Learn More &rarr;</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
