import type { Metadata } from "next"
import Link from "next/link"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import SocialProof from "@/components/social-proof"
import { Home, Building, Wrench, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Birmingham Roofing Contractors | Summit Roofing",
  description:
    "Expert roofing services in Birmingham, AL. Roof replacement, repairs, and insurance claims for Birmingham homeowners and businesses. Get your free inspection today.",
  keywords: [
    "Birmingham roofing contractors",
    "Birmingham AL roofing",
    "roofing company Birmingham",
    "roof repair Birmingham",
    "roof replacement Birmingham AL",
    "commercial roofing Birmingham",
    "Birmingham roofer",
    "Hoover roofing",
    "Vestavia Hills roofing",
  ],
  openGraph: {
    title: "Birmingham Roofing Contractors | Summit Roofing",
    description:
      "Expert roofing services in Birmingham, AL — roof replacement, repairs, and insurance claims for homeowners and businesses.",
    url: "/service-areas/birmingham-roofing",
    siteName: "Summit Roofing Professionals",
    images: [{ url: "/images/birmingham-skyline.png", width: 1200, height: 630, alt: "Summit Roofing Professionals serving Birmingham, Alabama" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Birmingham Roofing Contractors | Summit Roofing", description: "Expert roofing in Birmingham, AL — replacement, repairs, and insurance claims. Free inspection." },
  robots: { index: true, follow: true },
  alternates: { canonical: "/service-areas/birmingham-roofing" },
}

const birminghamServices = [
  { icon: Home, title: "Residential Roofing", href: "/services/residential-roofing" },
  { icon: Building, title: "Commercial Roofing", href: "/services/commercial-roofing" },
  { icon: Wrench, title: "Roof Repairs", href: "/services/roof-repairs" },
  { icon: FileText, title: "Insurance Claims", href: "/insurance-claims" },
]

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Summit Roofing Professionals",
  url: "https://www.summitroofingprofessionals.com/service-areas/birmingham-roofing",
  telephone: "+1-704-578-4756",
  address: { "@type": "PostalAddress", addressLocality: "Birmingham", addressRegion: "AL", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 33.519, longitude: -86.809 },
  areaServed: { "@type": "City", name: "Birmingham" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.summitroofingprofessionals.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.summitroofingprofessionals.com/service-areas" },
    { "@type": "ListItem", position: 3, name: "Birmingham Roofing", item: "https://www.summitroofingprofessionals.com/service-areas/birmingham-roofing" },
  ],
}

export default function BirminghamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
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
