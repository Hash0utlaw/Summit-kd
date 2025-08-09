import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import ContactCta from "@/components/contact-cta"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Columbus, GA Roofing Company | Summit Roofing Professionals",
  description:
    "Summit Roofing is the leading roofing contractor in Columbus, GA. We provide expert roof repair, replacement, and installation for homes and businesses.",
}

export default function ColumbusRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Expert Roofing Services in Columbus, GA"
        subtitle="Serving the Fountain City with integrity, quality, and a commitment to protecting your most valuable assets."
        imageUrl="/images/columbus-skyline.png"
        imageAlt="Columbus, Georgia skyline representing trusted local roofing services by Summit Roofing Professionals"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Your Columbus &amp; Phenix City Roofing Pro
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Straddling the Chattahoochee River, the Columbus area has a unique blend of historic charm and modern
                growth. Summit Roofing provides tailored solutions that respect the architectural integrity of historic
                homes while offering the latest in roofing technology for new constructions and commercial properties.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Residential Roofing:</strong> From classic shingles that
                    complement historic districts to durable metal roofing for modern homes, we have the perfect
                    solution for your needs and budget.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Commercial Roofing:</strong> We offer a full suite of commercial
                    services, including built-up roofing, single-ply systems, and preventative maintenance plans to keep
                    your business covered.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gray-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">GAF Master Elite Contractor:</strong> As a GAF Master Elite
                    contractor, we offer the best warranties in the industry, giving you peace of mind for decades to
                    come.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 text-center">The Summit Advantage in Columbus</h3>
              <p className="mt-4 text-center text-gray-600">
                We are committed to delivering superior results and service.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Licensed in Both Georgia and Alabama</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Expertise in Handling Hail and Wind Damage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Free, Detailed Project Estimates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Dedicated Project Management for Every Job</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Get a Superior Roof in Columbus"
        subtitle="Call Summit Roofing for your free inspection. Let us show you why we're the top choice for roofing in the Chattahoochee Valley."
      />
    </>
  )
}
