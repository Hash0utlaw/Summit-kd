import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import ContactCta from "@/components/contact-cta"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Tuscaloosa Roofing Contractor | Summit Roofing",
  description:
    "Premier roofing company in Tuscaloosa, AL — residential and commercial roofing, storm damage repair, and new roof installation. Free inspection available.",
  keywords: [
    "Tuscaloosa roofing contractor",
    "Tuscaloosa AL roofing",
    "roofing company Tuscaloosa",
    "roof repair Tuscaloosa",
    "roof replacement Tuscaloosa AL",
    "Tuscaloosa roofer",
    "Northport roofing",
    "storm damage roofing Tuscaloosa",
  ],
  openGraph: {
    title: "Tuscaloosa Roofing Contractor | Summit Roofing",
    description: "Premier residential and commercial roofing in Tuscaloosa, AL — storm damage repair and new roof installation. Free inspection.",
    url: "/service-areas/tuscaloosa-roofing",
    siteName: "Summit Roofing Professionals",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Summit Roofing Professionals serving Tuscaloosa, Alabama" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Tuscaloosa Roofing Contractor | Summit Roofing", description: "Premier roofing in Tuscaloosa, AL — residential, commercial, storm damage repair. Free inspection." },
  robots: { index: true, follow: true },
  alternates: { canonical: "/service-areas/tuscaloosa-roofing" },
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Summit Roofing Professionals",
  url: "https://www.summitroofingprofessionals.com/service-areas/tuscaloosa-roofing",
  telephone: "+1-704-578-4756",
  address: { "@type": "PostalAddress", addressLocality: "Tuscaloosa", addressRegion: "AL", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 33.209, longitude: -87.567 },
  areaServed: { "@type": "City", name: "Tuscaloosa" },
}

export default function TuscaloosaRoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <ServicePageHero
        title="Championship Roofing for Tuscaloosa, AL"
        subtitle="Summit Roofing delivers winning performance and durability for homes and businesses in the City of Champions."
        imageUrl="/images/tuscaloosa-skyline.png"
        imageAlt="Tuscaloosa, Alabama skyline representing professional roofing services by Summit Roofing Professionals"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Tuscaloosa Roofing Champions</h2>
              <p className="mt-4 text-lg text-gray-600">
                In a city that demands excellence, your roof should be nothing less than the best. Summit Roofing is the
                trusted contractor for Tuscaloosa, providing top-tier roofing services for homeowners, landlords, and
                business owners. We understand the local environment and build roofs that last.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Residential Roofing:</strong> From homes near the University of
                    Alabama to properties on Lake Tuscaloosa, we provide beautiful and durable roofing systems to
                    protect your family.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Multi-Family &amp; Commercial:</strong> We are experts in roofing
                    for apartment complexes, retail centers, and other commercial properties, ensuring minimal
                    disruption to tenants and operations.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gray-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Game Day Ready Repairs:</strong> Don&apos;t let a leak ruin your
                    weekend. We offer prompt and reliable repair services to handle any issue, big or small, so you can
                    focus on the Tide.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 text-center">The Winning Choice in T-Town</h3>
              <p className="mt-4 text-center text-gray-600">We bring our A-game to every single project.</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>A+ Rating with the Better Business Bureau</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Experience with Alabama&apos;s Severe Weather</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Free Inspections for Hail and Wind Damage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Strong Warranties for Your Peace of Mind</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Get a Champion's Roof in Tuscaloosa"
        subtitle="Step up your property's defense. Contact Summit Roofing today for a free estimate and join our team of satisfied customers."
      />
    </>
  )
}
