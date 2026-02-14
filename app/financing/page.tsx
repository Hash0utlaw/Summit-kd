import type { Metadata } from "next"
import Image from "next/image"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import FaqSection from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Rocket, Clock, Shield, CreditCard } from "lucide-react"

export const metadata: Metadata = {
  title: "Roof Financing Options in AL & GA | Summit Roofing",
  description:
    "Affordable roof financing options for your new roof. Summit Roofing Professionals offers flexible payment plans through Alabama Power and Acorn Finance. Apply online today!",
  alternates: {
    canonical: "/financing",
  },
}

const financingBenefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Start Your Project Now",
    description: "Don't wait for a small issue to become a costly disaster. Get the roof you need today.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Flexible Monthly Payments",
    description: "Choose a payment plan that fits comfortably within your monthly budget.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
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
      "Interest rates and terms vary based on your credit history and the loan amount. Alabama Power offers rates from 9.9% to 19.9% with terms up to 120 months. Acorn Finance offers APRs as low as 6.99% with terms up to 12 years.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "In many cases, you can receive a decision on your application within minutes. With Acorn Finance, funds can be available the same or next day upon approval.",
  },
  {
    question: "Can I finance only a portion of my roofing project?",
    answer:
      "Yes, you can often finance the entire project cost or just a portion of it. This gives you the flexibility to use financing in a way that makes the most sense for your financial situation.",
  },
  {
    question: "Do I need to be an Alabama Power customer to use their financing?",
    answer:
      "No, any single-family homeowner in Alabama can apply for Alabama Power Smart Financing, regardless of whether you're an Alabama Power customer.",
  },
]

export default function FinancingPage() {
  return (
    <>
      <ServicePageHero
        title="Flexible Financing Options"
        subtitle="Make your roofing project affordable with our trusted financing partners."
        imageUrl="/images/projects/auburn-residential-1.jpeg"
        imageAlt="Beautiful residential home with new roofing"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">A Quality Roof is Within Reach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
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
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Trusted Financing Partners</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We work with reputable lenders who specialize in home improvement financing to bring you the best possible
              options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Alabama Power Smart Financing */}
            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">Alabama Power</h3>
                  <p className="text-sm text-muted-foreground">Smart Financing</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">$2,000 - $25,000</p>
                    <p className="text-sm text-muted-foreground">Financing amounts available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">9.9% - 19.9% APR</p>
                    <p className="text-sm text-muted-foreground">Competitive interest rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Up to 120 Months</p>
                    <p className="text-sm text-muted-foreground">Flexible repayment terms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Trusted Since 1906</p>
                    <p className="text-sm text-muted-foreground">Backed by Alabama Power's reputation</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-md p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Special Feature:</strong> Combine your loan payment with your
                  power bill for added convenience. Available to all Alabama homeowners.
                </p>
              </div>

              <Button className="w-full" size="lg">
                Apply with Alabama Power
              </Button>
            </div>

            {/* Acorn Finance */}
            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">Acorn Finance</h3>
                  <p className="text-sm text-muted-foreground">Home Improvement Loans</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Up to $100,000</p>
                    <p className="text-sm text-muted-foreground">Higher financing limits available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">As Low as 6.99% APR</p>
                    <p className="text-sm text-muted-foreground">Competitive rates for qualified borrowers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Up to 12 Years</p>
                    <p className="text-sm text-muted-foreground">Extended repayment options</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">No Credit Impact</p>
                    <p className="text-sm text-muted-foreground">Check rates without affecting your score</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-md p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Special Feature:</strong> Compare multiple lender offers with one
                  application. Same or next-day funding available upon approval.
                </p>
              </div>

              <Button className="w-full" size="lg">
                Apply with Acorn Finance
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Simple 4-Step Process</h2>
          </div>
          <div className="max-w-4xl mx-auto grid gap-8">
            {howItWorksSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Check Your Financing Options Now
            </Button>
            <p className="text-sm text-muted-foreground mt-2">(Checking options will not affect your credit score)</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Financing for Your Roof?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Protect Your Home Now</h3>
                    <p className="text-muted-foreground">
                      Don't wait for minor damage to become a major problem. Address roofing issues immediately.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Manageable Monthly Payments</h3>
                    <p className="text-muted-foreground">
                      Spread the cost over time with payments that fit your budget.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Increase Home Value</h3>
                    <p className="text-muted-foreground">
                      A new roof is one of the best investments you can make in your property.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Energy Savings</h3>
                    <p className="text-muted-foreground">
                      Modern roofing materials can reduce your energy bills and pay for themselves over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/completed-home-project.jpg"
                alt="Beautiful completed roofing project financed through Summit Roofing's financing partners"
                fill
                className="object-cover"
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
