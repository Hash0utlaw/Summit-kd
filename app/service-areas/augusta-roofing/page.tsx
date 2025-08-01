import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import ContactCta from "@/components/contact-cta"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Augusta, GA Roofing Contractor | Summit Roofing Professionals",
  description:
    "Your local roofing expert in Augusta, GA. Offering high-quality residential and commercial roof repair, replacement, and installation services.",
}

export default function AugustaRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Championship-Level Roofing in Augusta, GA"
        subtitle="Summit Roofing brings precision and excellence to every project, protecting homes and businesses throughout the Garden City."
        imageUrl="/images/augusta-skyline.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">A Tradition of Quality in Augusta</h2>
              <p className="mt-4 text-lg text-gray-600">
                In a city famous for its meticulous standards and beautiful landscapes, your roof should be no
                exception. Summit Roofing serves the Augusta community with a focus on quality materials, expert
                workmanship, and unparalleled customer service, ensuring your property is both beautiful and secure.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="font-semibold">Residential Roofing:</strong> We install a wide variety of roofing
                    materials, including designer architectural shingles and elegant metal roofs, to enhance your home's
                    value and protection.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="font-semibold">Commercial & Medical Facilities:</strong> We have extensive
                    experience with the specific roofing needs of commercial properties, including the medical district,
                    offering reliable and long-lasting solutions.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="font-semibold">Preventative Maintenance:</strong> Protect your investment with
                    our proactive maintenance plans, designed to identify and address minor issues before they become
                    costly problems.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 text-center">Why We're Above Par in Augusta</h3>
              <p className="mt-4 text-center text-gray-600">Our attention to detail and customer focus is unmatched.</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Owens Corning Platinum Preferred Contractor</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Clean and Respectful Job Site Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Transparent Pricing with No Hidden Fees</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Local Team with Strong Community Ties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Get a Flawless Roof in Augusta"
        subtitle="Contact Summit Roofing for your free, no-obligation estimate and let us provide the championship-level service your property deserves."
      />
    </>
  )
}
