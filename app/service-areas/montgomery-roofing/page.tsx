import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import ContactCta from "@/components/contact-cta"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Montgomery Roofing Services | Summit Roofing",
  description:
    "Top-rated roofing contractor in Montgomery, AL — residential and commercial roof replacement, repair, and insurance claim assistance. Free inspection available.",
  keywords: [
    "Montgomery roofing contractor",
    "Montgomery AL roofing",
    "roofing company Montgomery",
    "roof repair Montgomery",
    "roof replacement Montgomery AL",
    "Montgomery roofer",
    "Prattville roofing",
    "insurance claims roofing Montgomery",
  ],
  openGraph: {
    title: "Montgomery Roofing Services | Summit Roofing",
    description: "Top-rated residential and commercial roofing in Montgomery, AL — roof replacement, repair, and insurance claims. Free inspection.",
    url: "/service-areas/montgomery-roofing",
    siteName: "Summit Roofing Professionals",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Summit Roofing Professionals serving Montgomery, Alabama" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Montgomery Roofing Services | Summit Roofing", description: "Residential and commercial roofing in Montgomery, AL. Replacement, repair, and insurance claims." },
  robots: { index: true, follow: true },
  alternates: { canonical: "/service-areas/montgomery-roofing" },
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Summit Roofing Professionals",
  url: "https://www.summitroofingprofessionals.com/service-areas/montgomery-roofing",
  telephone: "+1-704-578-4756",
  address: { "@type": "PostalAddress", addressLocality: "Montgomery", addressRegion: "AL", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 32.361, longitude: -86.279 },
  areaServed: { "@type": "City", name: "Montgomery" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.summitroofingprofessionals.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.summitroofingprofessionals.com/service-areas" },
    { "@type": "ListItem", position: 3, name: "Montgomery Roofing", item: "https://www.summitroofingprofessionals.com/service-areas/montgomery-roofing" },
  ],
}

export default function MontgomeryRoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <ServicePageHero
        title="Trusted Roofing for Montgomery, AL"
        subtitle="From historic Cloverdale to growing East Montgomery, Summit Roofing delivers excellence and durability for every home and business."
        imageUrl="/images/montgomery-skyline.png"
        imageAlt="Montgomery, Alabama skyline representing dependable roofing services by Summit Roofing Professionals"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Capital City Roofing Partner</h2>
              <p className="mt-4 text-lg text-gray-600">
                As the capital of Alabama, Montgomery is a city of significance, and your property is a significant
                investment. Summit Roofing provides comprehensive roofing services designed to protect and enhance that
                investment, using top-tier materials and expert installation techniques suited for the River
                Region&apos;s climate.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Residential Services:</strong> We offer a full range of roofing
                    options, including architectural shingles and classic metal roofs, perfect for protecting your home
                    from summer heat and storms.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Commercial Solutions:</strong> Our team is equipped to handle
                    large-scale commercial projects, providing energy-efficient and low-maintenance roofing systems for
                    local businesses and government buildings.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gray-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Insurance Claim Specialists:</strong> Navigating storm damage
                    claims can be complex. We work directly with your insurance company to ensure a smooth, fair, and
                    expedited process.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 text-center">Why Montgomery Chooses Us</h3>
              <p className="mt-4 text-center text-gray-600">
                Our commitment to quality and customer service sets us apart.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Deep Knowledge of Local Building Codes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Flexible Financing Options Available</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>5-Star Rated Customer Service &amp; Communication</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                  <span>Proven Track Record in the River Region</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Protect Your Montgomery Property"
        subtitle="Schedule your free, no-pressure roof inspection with Summit Roofing today and experience the difference professional quality makes."
      />
    </>
  )
}
