import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import FaqSection from "@/components/faq-section"
import SocialProof from "@/components/social-proof"
import { FileText, Search, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Roof Insurance Claims Assistance | Summit Roofing Professionals",
  description:
    "Don't navigate your roof insurance claim alone. Summit Roofing offers expert assistance with storm damage assessment, documentation, and working with adjusters in Alabama & Georgia. Get a free inspection today!",
  alternates: {
    canonical: "/insurance-claims",
  },
}

const claimProcessSteps = [
  {
    step: 1,
    title: "Free Damage Assessment",
    description:
      "Contact us for a comprehensive, no-obligation inspection. We'll thoroughly document all storm-related damage to your roof, siding, and gutters with photos and detailed notes.",
  },
  {
    step: 2,
    title: "File Your Claim",
    description:
      "Call your insurance provider's claims department to report the damage. Let them know that Summit Roofing Professionals is your chosen contractor.",
  },
  {
    step: 3,
    title: "Meet the Adjuster",
    description:
      "We will meet with your insurance adjuster on-site to review our findings, ensuring all damage is accounted for and you receive a fair assessment for a full roof replacement.",
  },
  {
    step: 4,
    title: "Review & Plan",
    description:
      "Once the claim is approved, we review the scope of work with you, help you select your new roofing materials, and schedule your project.",
  },
  {
    step: 5,
    title: "Expert Roof Replacement",
    description:
      "Our certified crew will install your new roof according to the highest industry standards, ensuring quality craftsmanship and long-lasting protection.",
  },
  {
    step: 6,
    title: "Finalize & Certify",
    description:
      "After the work is complete, we submit a final invoice to your insurance company and provide you with all necessary documentation and warranty information.",
  },
]

const benefits = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Expert Damage Detection",
    description: "Our trained eyes spot damage that adjusters might miss.",
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: "Thorough Documentation",
    description: "We provide detailed reports and photo evidence for your claim.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Adjuster Meeting Representation",
    description: "We advocate on your behalf to ensure a fair assessment.",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Quality Restoration",
    description: "We restore your roof with superior materials and workmanship.",
  },
]

const insuranceFaqs = [
  {
    question: "Will filing a claim increase my insurance premiums?",
    answer:
      "Typically, claims filed due to natural events like hail or wind storms (Acts of God) do not result in premium increases for individual homeowners. However, rates may rise for an entire region after a major storm.",
  },
  {
    question: "What if my insurance claim is denied?",
    answer:
      "If your claim is denied, you have the right to appeal the decision. We can help you understand the reason for the denial and assist in providing additional documentation or requesting a second inspection from a different adjuster.",
  },
  {
    question: "How long does the insurance claim process take?",
    answer:
      "The timeline can vary depending on your insurance company and the severity of storm damage in your area. It can range from a few weeks to a few months. We work to keep the process moving as efficiently as possible.",
  },
  {
    question: "Can I just keep the insurance money and not fix my roof?",
    answer:
      "This is generally not advisable and may violate your mortgage agreement. Your mortgage lender is often listed on the check and will require proof of repairs before releasing the full funds. Neglecting repairs can also lead to future claim denials.",
  },
]

export default function InsuranceClaimsPage() {
  return (
    <>
      <ServicePageHero
        title="Stress-Free Roof Insurance Claims"
        subtitle="Let our experts guide you through every step of the insurance process, from damage inspection to final payment."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hail-hero-7R8Fr4voZJwC68inlLpWqNCQaaitJD.png"
        imageAlt="Wet asphalt shingles after a storm, symbolizing roof hail and wind damage for insurance claims in Alabama and Georgia"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {"Don't Navigate Storm Damage Claims Alone"}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {
                "Dealing with roof damage is stressful enough without the added complexity of an insurance claim. At Summit Roofing Professionals, we specialize in assisting homeowners in Alabama and Georgia with their roof insurance claims. We act as your advocate, ensuring the process is smooth, transparent, and that you receive the full compensation you're entitled to."
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Simple 6-Step Claim Process</h2>
          </div>
          <div className="max-w-4xl mx-auto grid gap-8">
            {claimProcessSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Partner With Us On Your Claim?</h2>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/roofer-with-homeowner.png"
                alt="Summit Roofing professional discussing roof insurance claim options with a homeowner"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <SocialProof />

      <FaqSection faqs={insuranceFaqs} title="Insurance Claim Questions" />

      <CtaSection
        title="Get Your Free, No-Obligation Claim Assessment"
        description="If you suspect your roof has been damaged by a storm, don't wait. Contact our Birmingham and Atlanta area experts today for a free inspection and professional claims assistance."
        buttonText="Start My Free Inspection"
      />
    </>
  )
}
