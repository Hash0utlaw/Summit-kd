import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import ContactCta from "@/components/contact-cta"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Huntsville Roofing Contractor | Summit Roofing Professionals",
  description:
    "Your trusted local roofing experts in Huntsville, AL. We offer premier residential and commercial roofing services, from new installations to emergency repairs.",
}

export default function HuntsvilleRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Premier Roofing Services in Huntsville, AL"
        subtitle="Summit Roofing is proud to serve the Rocket City with unparalleled craftsmanship and reliable roofing solutions for homes and businesses."
        imageUrl="/images/huntsville-skyline.png"
        imageAlt="Huntsville, Alabama skyline with blue sky, representing trusted roofing services by Summit Roofing Professionals"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Local Huntsville Roofing Experts</h2>
              <p className="mt-4 text-lg text-gray-600">
                In a city known for innovation and precision, your property deserves a roof that meets the highest
                standards. Summit Roofing brings decades of expertise to the Huntsville area, ensuring every project is
                handled with the utmost professionalism, whether it's a family home in Hampton Cove or a commercial
                facility in Cummings Research Park.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Residential Roofing:</strong> We provide durable, high-quality
                    roofing systems, including asphalt shingles, metal, and slate, to protect your family and enhance
                    your home's curb appeal.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Commercial Roofing:</strong> Specialized solutions like TPO, EPDM,
                    and fluid-applied membranes to protect your business investment and ensure operational continuity.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gray-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Storm Damage &amp; Repairs:</strong> Huntsville is no stranger to
                    severe weather. We offer rapid-response emergency repairs and expert insurance claim assistance to
                    restore your peace of mind.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 text-center">Why Choose Us in Huntsville?</h3>
              <p className="mt-4 text-center text-gray-600">
                We understand the specific needs of Northern Alabama properties.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Certified and Insured Local Technicians</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Expertise with Alabama&apos;s Climate Challenges</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Free, No-Obligation Inspections &amp; Estimates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Industry-Leading Material &amp; Workmanship Warranties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Ready for a Better Roof in Huntsville?"
        subtitle="Contact Summit Roofing today for a free inspection and discover why we are the trusted choice for property owners across the Tennessee Valley."
      />
    </>
  )
}
