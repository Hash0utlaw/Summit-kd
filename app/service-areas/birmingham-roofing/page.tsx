import type { Metadata } from "next"
import Link from "next/link"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import SocialProof from "@/components/social-proof"
import { Home, Building, Wrench, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Birmingham Roofing Contractors | Summit Roofing",
  description:
    "Expert roofing services in Birmingham, AL. We specialize in roof replacement, repairs, and insurance claims for Birmingham homeowners and businesses. Get your free inspection!",
  alternates: {
    canonical: "/service-areas/birmingham-roofing",
  },
}

const birminghamServices = [
  { icon: Home, title: "Residential Roofing", href: "/services/residential-roofing" },
  { icon: Building, title: "Commercial Roofing", href: "/services/commercial-roofing" },
  { icon: Wrench, title: "Roof Repairs", href: "/services/roof-repairs" },
  { icon: FileText, title: "Insurance Claims", href: "/insurance-claims" },
]

export default function BirminghamPage() {
  return (
    <>
      <ServicePageHero
        title="Your Trusted Roofing Experts in Birmingham, AL"
        subtitle="Providing top-quality roof replacements, repairs, and insurance claim assistance to the Greater Birmingham community."
        imageUrl="/images/birmingham-skyline.png"
        imageAlt="Birmingham, Alabama skyline highlighting Summit Roofing Professionals local roofing services"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>Local Expertise for Birmingham Homes &amp; Businesses</h2>
              <p>
                Welcome to Summit Roofing Professionals, Birmingham&apos;s premier choice for reliable roofing services.
                We understand the unique challenges that Alabama weather presents—from intense summer heat and humidity
                to the threat of severe thunderstorms and hail. Our team is equipped with the local knowledge and
                high-quality materials needed to ensure your roof can withstand the elements and protect your property
                for years to come.
              </p>
              <p>
                Whether you&apos;re in Homewood, Hoover, Vestavia Hills, or right in the heart of the city, we are
                committed to delivering exceptional craftsmanship and unparalleled customer service to our neighbors.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {birminghamServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="p-6 bg-gray-50 rounded-lg border hover:shadow-lg transition-shadow text-center"
                >
                  <service.icon className="h-10 w-10 text-orange-500 mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-800">{service.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SocialProof />

      <CtaSection
        title="Get a Free Roofing Inspection in Birmingham"
        description="Ready to start your roofing project? Contact our local Birmingham team today for a free, no-obligation inspection and estimate."
        buttonText="Request My Free Birmingham Estimate"
      />
    </>
  )
}
