import type { Metadata } from "next"
import Link from "next/link"
import ServicePageHero from "@/components/service-page-hero"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Service Areas in Alabama & Georgia | Summit Roofing",
  description:
    "Summit Roofing Professionals proudly serves communities across Alabama and Georgia. Find your local roofing expert in Birmingham, Atlanta, and more.",
}

const serviceLocations = [
  { name: "Birmingham, AL", href: "/service-areas/birmingham-roofing", available: true },
  { name: "Atlanta, GA", href: "/service-areas/atlanta-roofing", available: true },
  { name: "Huntsville, AL", href: "/service-areas/huntsville-roofing", available: true },
  { name: "Montgomery, AL", href: "/service-areas/montgomery-roofing", available: true },
  { name: "Mobile, AL", href: "/service-areas/mobile-roofing", available: true },
  { name: "Tuscaloosa, AL", href: "/service-areas/tuscaloosa-roofing", available: true },
  { name: "Columbus, GA", href: "/service-areas/columbus-roofing", available: true },
  { name: "Augusta, GA", href: "/service-areas/augusta-roofing", available: true },
]

export default function ServiceAreasHubPage() {
  return (
    <>
      <ServicePageHero
        title="Serving Communities Across the Southeast"
        subtitle="We are proud to be local roofing experts, providing reliable services to homeowners and businesses throughout Alabama and Georgia."
        imageUrl="/images/alabama-georgia-map.png"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Find Your Local Roofing Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Select your city below to learn more about the services we offer in your area. We are constantly
              expanding, so check back soon if you don't see your location listed.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {serviceLocations.map((location) => (
              <div
                key={location.name}
                className="p-6 border border-gray-200 rounded-lg text-center flex flex-col items-center justify-center"
              >
                <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-800">{location.name}</h3>
                {location.available ? (
                  <Button asChild variant="link" className="mt-2 text-orange-500 hover:text-orange-600">
                    <Link href={location.href}>View Local Services &rarr;</Link>
                  </Button>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">Coming Soon</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
