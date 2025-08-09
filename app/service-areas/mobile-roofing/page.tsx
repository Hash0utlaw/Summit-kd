import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import ContactCta from "@/components/contact-cta"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Mobile, AL Roofing Contractor | Summit Roofing Professionals",
  description:
    "Expert roofing services for Mobile, AL. Specializing in hurricane-rated systems, roof repair, and commercial roofing for the Gulf Coast.",
}

export default function MobileRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Resilient Roofing for Mobile, AL"
        subtitle="Protecting your Gulf Coast property with hurricane-rated roofing systems and expert craftsmanship you can trust."
        imageUrl="/images/mobile-skyline.png"
        imageAlt="Mobile, Alabama skyline and waterfront symbolizing coastal roofing expertise by Summit Roofing Professionals"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Gulf Coast Roofing Authority</h2>
              <p className="mt-4 text-lg text-gray-600">
                Living on the Gulf Coast means preparing for the worst. Summit Roofing specializes in fortified,
                hurricane-rated roofing systems designed to withstand high winds and torrential rain. We provide Mobile
                homeowners and businesses with robust solutions that offer maximum protection and peace of mind.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Hurricane-Rated Systems:</strong> We install fortified roofing
                    systems that meet or exceed local building codes for high-wind zones, including superior fastening
                    and sealing techniques.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Commercial &amp; Industrial:</strong> From warehouses on the port
                    to downtown businesses, we provide durable, salt-air resistant commercial roofing to protect your
                    operations.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gray-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Post-Storm Inspections:</strong> After a major weather event,
                    trust our experts for a thorough inspection to identify hidden damage and prevent future leaks.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 text-center">Why Mobile Trusts Summit?</h3>
              <p className="mt-4 text-center text-gray-600">
                We&apos;re built for the coast and committed to our community.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Certified Fortified Roof™ Installers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Expertise in Coastal Weatherproofing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Rapid Response Team for Storm Damage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Financing for Unplanned Replacements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Fortify Your Roof in Mobile"
        subtitle="Don't wait for the next storm. Contact Summit Roofing for a free, comprehensive roof inspection and learn about our fortified solutions."
      />
    </>
  )
}
