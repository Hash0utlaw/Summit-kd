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

const qualifications = [
  { name: "GAF Master Elite", description: "GAF Master Elite® Roofing Contractor" },
  { name: "Owens Corning Preferred", description: "Owens Corning Preferred Contractor" },
  { name: "IKO Premier Contractor", description: "IKO Craftsman Premier Contractor" },
  { name: "Uniflex Premier Contractor", description: "Uniflex Authorized Premier Contractor" },
  { name: "NRCA Member", description: "National Roofing Contractors Association Member" },
  { name: "BBB Accredited", description: "Better Business Bureau Accredited Business" },
  { name: "Alabama Licensed", description: "Licensed & Insured in Alabama" },
  { name: "Georgia Licensed", description: "Licensed & Insured in Georgia" },
  { name: "Veteran Owned", description: "Proudly veteran-owned and operated" },
  { name: "200+ Years Experience", description: "Combined team experience across all roofing systems" },
  { name: "Insurance Claims Specialists", description: "Expert navigation of insurance processes" },
  { name: "Residential & Commercial", description: "Complete roofing solutions for every need" },
]

export default function AboutPage() {
  return (
    <>
      <ServicePageHero
        title="About Summit Roofing Professionals"
        subtitle="Building trust one roof at a time across Alabama and Georgia."
        imageUrl="/images/about-us-hero-sunset.png"
        imageAlt="Shingle roof at sunset representing Summit Roofing Professionals' quality roofing in Alabama and Georgia"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none lg:prose-lg">
              <h2>Our Story</h2>
              <p>
                What started as a mission to serve continues today as a commitment to excellence. As a veteran who
                learned the values of precision, integrity, and service in the military, I founded Summit Roofing
                Professionals with a simple belief: every family deserves a roof they can trust to protect what matters
                most.
              </p>
              <p>
                From storm-damaged homes to dream renovations, we've seen firsthand how the right roof transforms not
                just a house, but a family's sense of security. That's why we've assembled a team of craftsmen who share
                our dedication—professionals with over 200 years of combined experience who treat every project as if it
                were their own home.
              </p>
              <p>
                Whether you're navigating insurance claims after unexpected damage or planning a complete home
                transformation, we're here to guide you through every step. We don't just install roofs—we restore peace
                of mind, one family at a time, across Alabama and Georgia.
              </p>
            </div>
            <div>
              <Image
                src="/images/founder-on-roof.jpg"
                alt="Founder of Summit Roofing Professionals standing on a finished residential roof project"
                width={500}
                height={500}
                className="rounded-lg shadow-lg mx-auto object-cover aspect-square"
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
                <div className="flex justify-center mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Certifications & Qualifications</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our credentials reflect a commitment to quality, safety, and professionalism in every project we
              undertake.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {qualifications.map((qualification) => (
              <li
                key={qualification.name}
                aria-label={
                  qualification.description
                    ? `${qualification.name} — ${qualification.description}`
                    : qualification.name
                }
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                      {qualification.name}
                    </h3>
                    {qualification.description ? (
                      <p className="mt-1 text-sm text-gray-600">{qualification.description}</p>
                    ) : (
                      <span className="sr-only">{qualification.name}</span>
                    )}
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"
                />
              </li>
            ))}
          </ul>

          <div className="text-center mt-10 sm:mt-12">
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              These recognitions signify ongoing training, rigorous standards, and trusted manufacturer partnerships.
              Choose Summit Roofing with confidence.
            </p>
          </div>
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
