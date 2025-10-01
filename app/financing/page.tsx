import type { Metadata } from "next"
import Image from "next/image"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import FaqSection from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Roof Financing Options in AL & GA | Summit Roofing",
  description:
    "Affordable roof financing options for your new roof. Summit Roofing Professionals offers flexible payment plans to make your project possible. Apply online today!",
  alternates: {
    canonical: "/financing",
  },
}

const financingBenefits = [
  {
    icon: <Rocket className="h-8 w-8 text-blue-600" />,
    title: "Start Your Project Now",
    description: "Don't wait for a small issue to become a costly disaster. Get the roof you need today.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: "Flexible Monthly Payments",
    description: "Choose a payment plan that fits comfortably within your monthly budget.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    title: "Preserve Your Savings",
    description: "Keep your cash on hand for other investments, expenses, or emergencies.",
  },
]

const howItWorksSteps = [
  {
    step: 1,
    title: "Quick Application",
    description: "Fill out a simple online application in just a few minutes. It's fast, secure, and straightforward.",
  },
  {
    step: 2,
    title: "View Your Options",
    description:
      "See pre-qualified offers and loan options from our lending partners without any impact on your credit score.",
  },
  {
    step: 3,
    title: "Choose Your Plan",
    description: "Review the terms and select the monthly payment plan that works best for you and your family.",
  },
  {
    step: 4,
    title: "Begin Your Project",
    description: "Once your financing is approved, we'll schedule your roof replacement and get to work!",
  },
]

const financingFaqs = [
  {
    question: "Does checking my financing options affect my credit score?",
    answer:
      "No. Our financing partners use a 'soft pull' to check for pre-qualified offers, which does not impact your credit score. A 'hard pull' is only performed if you decide to move forward with a loan.",
  },
  {
    question: "What are the typical interest rates and terms?",
    answer:
      "Interest rates and terms vary based on your credit history, the loan amount, and the specific lender. We work with partners who offer competitive rates and a variety of term lengths to fit your needs.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "In many cases, you can receive a decision on your application within minutes. The entire process is designed to be as fast and efficient as possible.",
  },
  {
    question: "Can I finance only a portion of my roofing project?",
    answer:
      "Yes, you can often finance the entire project cost or just a portion of it. This gives you the flexibility to use financing in a way that makes the most sense for your financial situation.",
  },
]

export default function FinancingPage() {
  return (
    <>
      <ServicePageHero
        title="Affordable Financing For Your New Roof"
        subtitle="Don't let budget concerns delay your project. We offer flexible payment options to make your new roof a reality."
        imageUrl="/images/financing-hero.png"
        imageAlt="Homeowner reviewing roof financing options to fund a new roof installation in Alabama and Georgia"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">A Quality Roof is Within Reach</h2>
            <p className="mt-4 text-lg text-gray-600">
              We believe every homeowner deserves a safe and reliable roof without financial strain. That's why we've
              partnered with leading finance companies to offer flexible, affordable payment plans tailored to your
              needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {financingBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="flex justify-center mb-4" aria-hidden="true">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Simple 4-Step Process</h2>
          </div>
          <div className="max-w-4xl mx-auto grid gap-8">
            {howItWorksSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Check Your Financing Options Now
            </Button>
            <p className="text-sm text-gray-500 mt-2">(Checking options will not affect your credit score)</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Trusted Financing Partners</h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with reputable lenders who specialize in home improvement financing to bring you the best possible
              options.
            </p>
            <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
              <Image
                src="/images/hearth-logo.png"
                alt="Hearth home improvement financing partner logo"
                width={150}
                height={50}
              />
              <Image
                src="/images/service-finance-logo.png"
                alt="Service Finance Company lending partner logo"
                width={180}
                height={60}
              />
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={financingFaqs} title="Financing Questions" />

      <CtaSection
        title="Ready to Get Started?"
        description="Have questions about financing or ready to begin your project? Our team is here to help. Contact us today for a free, no-obligation estimate."
        buttonText="Get My Free Estimate"
      />
    </>
  )
}
