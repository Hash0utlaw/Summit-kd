import type { Metadata } from "next"
import Link from "next/link"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import SocialProof from "@/components/social-proof"
import { Home, Building, Wrench, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Atlanta Roofing Contractors | Summit Roofing Professionals",
  description:
    "Top-rated roofing services in Atlanta, GA. From commercial roofing in Buckhead to residential repairs in Decatur, we've got you covered. Request your free estimate!",
  alternates: {
    canonical: "/service-areas/atlanta-roofing",
  },
}

const atlantaServices = [
  { icon: Home, title: "Residential Roofing", href: "/services/residential-roofing" },
  { icon: Building, title: "Commercial Roofing", href: "/services/commercial-roofing" },
  { icon: Wrench, title: "Roof Repairs", href: "/services/roof-repairs" },
  { icon: FileText, title: "Insurance Claims", href: "/insurance-claims" },
]

export default function AtlantaPage() {
  return (
    <>
      <ServicePageHero
        title="Atlanta's Premier Roofing Professionals"
        subtitle="Delivering exceptional roofing services for residential and commercial properties across the Atlanta Metro Area."
        imageUrl="/images/atlanta-skyline.png"
        imageAlt="Atlanta skyline representing local roofing services by Summit Roofing Professionals"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>Protecting Your Atlanta Property</h2>
              <p>
                Summit Roofing Professionals is proud to serve the vibrant and dynamic city of Atlanta. We have
                extensive experience working with the diverse architecture of the area, from historic homes in
                Virginia-Highland to modern commercial buildings in Midtown. Our team understands the importance of a
                durable, well-maintained roof to combat Georgia&apos;s pop-up thunderstorms and high humidity.
              </p>
              <p>
                We are experts in navigating local building codes and permitting processes, ensuring every project in
                areas like Marietta, Decatur, and Sandy Springs is completed to the highest standards of safety and
                quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {atlantaServices.map((service) => (
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
        title="Get a Free Estimate for Your Atlanta Roof"
        description="Whether you need a minor repair or a full replacement, our Atlanta team is ready to help. Contact us for your free, detailed estimate."
        buttonText="Request My Free Atlanta Estimate"
      />
    </>
  )
}
