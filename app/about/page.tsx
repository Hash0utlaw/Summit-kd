import type { Metadata } from "next"
import Image from "next/image"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import { Award, ShieldCheck, HeartHandshake, Lightbulb, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Summit Roofing Professionals | Alabama & Georgia Roofing Experts",
  description:
    "Learn about Summit Roofing Professionals. As a veteran-owned company with over 200 years of combined experience, we are committed to quality, integrity, and serving our community.",
  alternates: {
    canonical: "/about",
  },
}

const ourValues = [
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Commitment to Excellence",
    description: "We bring top-tier craftsmanship and unmatched expertise to every single project.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Integrity In All Dealings",
    description: "Honesty and transparency are the cornerstones of our business.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-blue-600" />,
    title: "Customer-First Approach",
    description: "We put the needs of our customers, employees, and community first, always.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: "Continuous Improvement",
    description: "We are always learning and adopting the best practices and materials in the industry.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Community Involvement",
    description: "We believe in giving back to the communities we are proud to serve.",
  },
]

const alabamaCities = ["Auburn", "Phenix City", "Opelika", "Valley", "Smith Station", "Lannet"]
const georgiaCities = [
  "Columbus",
  "Newnan",
  "Sharpsburg",
  "Peachtree City",
  "Union City",
  "LaGrange",
  "Tyrone",
  "Atlanta",
  "Canton",
  "WoodStock",
  "Sandy Springs",
  "Kennesaw",
  "Johns Creek",
  "Duluth",
]

export default function AboutPage() {
  return (
    <>
      <ServicePageHero
        title="About Summit Roofing Professionals"
        subtitle="Building trust one roof at a time across Alabama and Georgia."
        imageUrl="/images/company-truck.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>Our Story</h2>
              <p>
                As a veteran with a lifetime of roofing experience, both in and out of military service, I've built a
                company rooted in principle, family, and service. Together with my dedicated team, we bring over 200
                years of combined experience to every project, ensuring top-tier craftsmanship and unmatched expertise.
              </p>
              <p>
                We specialize in all types of roofing systems—residential, commercial, industrial, specialized, and
                fluid-applied solutions. Our residential services are particularly focused on helping homeowners secure
                full roof replacements through insurance approvals, saving our clients time, stress, and money.
              </p>
            </div>
            <div>
              <Image
                src="/images/founder-portrait.png"
                alt="Founder of Summit Roofing Professionals"
                width={500}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Values</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Family, integrity, and exceptional customer service are the foundation of everything we do. We believe in
            putting others first—our customers, employees, and community are always our top priorities.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {ourValues.map((item) => (
              <div key={item.title} className="p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Comprehensive Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether it's a small residential repair or a complex industrial project, we approach every job with the
              same dedication, care, and attention to detail.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
            <ul className="space-y-2 list-disc list-inside text-lg">
              <li>Residential Roofing (including insurance claim assistance)</li>
              <li>Commercial Roofing</li>
              <li>Industrial Roofing</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside text-lg">
              <li>Specialized Roofing Solutions</li>
              <li>Fluid-Applied Roofing Systems</li>
              <li>Roof Repairs and Maintenance</li>
            </ul>
          </div>
          <div className="mt-12 text-center">
            <Image
              src="/images/uniflex-logo.png"
              alt="Uniflex Certified Contractor"
              width={200}
              height={100}
              className="mx-auto"
            />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We are proud to be Uniflex certified, ensuring that we provide top-quality fluid-applied roofing systems
              with industry-leading warranties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Proudly Serving Our Communities</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer our services across Alabama and Georgia, with dedicated local teams in numerous cities.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Alabama</h3>
              <ul className="columns-2 space-y-2">
                {alabamaCities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Georgia</h3>
              <ul className="columns-2 space-y-2">
                {georgiaCities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600">
            For commercial, industrial, and specialized roofs, we offer our services statewide in both Alabama and
            Georgia.
          </p>
        </div>
      </section>

      <CtaSection
        title="Ready to Work With a Team You Can Trust?"
        description="Experience the Summit Roofing Professionals difference. Contact us today for a free consultation and estimate for your next roofing project."
        buttonText="Get Your Free Estimate"
      />
    </>
  )
}
