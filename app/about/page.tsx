import type { Metadata } from "next"
import Image from "next/image"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import CertificationGallery from "@/components/certification-gallery"
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

const certificates = [
  {
    src: "/images/certifications/gaf-certified-letter.jpg",
    alt: "GAF Certified Contractor reference letter for Summit Roofing Professionals",
  },
  {
    src: "/images/certifications/uniflex-premier-contractor.jpg",
    alt: "Uniflex Authorized Premier Contractor certificate awarded to Summit Roofing Professionals",
  },
  {
    src: "/images/certifications/iko-premier-contractor.png",
    alt: "IKO Craftsman Premier Contractor badge credential for Summit Roofing",
  },
  {
    src: "/images/certifications/nrca-member-cert.jpg",
    alt: "NRCA Member certificate verifying Summit Roofing Professionals membership",
  },
  {
    src: "/images/certifications/uniflex-university-cert.jpg",
    alt: "Uniflex University training certificate for Davis Meek of Summit Roofing Professionals",
  },
]

export default function AboutPage() {
  return (
    <>
      <ServicePageHero
        title="About Summit Roofing Professionals"
        subtitle="Building trust one roof at a time across Alabama and Georgia."
        imageUrl="/images/about-us-hero-sunset.png"
        imageAlt="Shingle roof at sunset representing Summit Roofing Professionals’ quality roofing in Alabama and Georgia"
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Certifications & Qualifications</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are committed to ongoing training and adhere to the highest industry standards. Click on any
              certificate to view the full document.
            </p>
          </div>
          <CertificationGallery certificates={certificates} />
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
