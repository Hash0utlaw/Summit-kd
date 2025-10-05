import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileCheck, Clock, Phone, CheckCircle2, AlertTriangle, DollarSign, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Storm Damage Roof Insurance Claims | Free Inspection",
  description:
    "Hail or storm damage to your roof? Get a free inspection and expert help with your insurance claim. We handle everything from documentation to working with adjusters. Serving Alabama & Georgia.",
  keywords: [
    "hail damage roof insurance claim",
    "roof damage insurance claim",
    "roof replacement insurance claim",
    "storm damage roof repair",
    "roof insurance claim",
    "roof claim",
    "insurance roofing",
    "roof replacement",
    "new roof",
    "roof replacement services",
    "making an insurance claim on your roof",
    "roof claim company",
  ],
  alternates: {
    canonical: "/storm-claim", // Updated canonical URL to match new page location
  },
  robots: {
    index: true,
    follow: true,
  },
}

const urgentSigns = [
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Missing or Damaged Shingles",
    description: "Visible gaps, cracks, or shingles blown off by wind",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Hail Damage Marks",
    description: "Dents, bruises, or granule loss on shingles",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Water Leaks or Stains",
    description: "Interior ceiling stains or active leaking after storms",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Damaged Gutters or Vents",
    description: "Dented gutters, damaged vents, or loose flashing",
  },
]

const whyChooseUs = [
  {
    icon: <Shield className="h-8 w-8 text-orange-500" />,
    title: "100% Free Inspection",
    description: "No-obligation roof damage assessment with detailed photo documentation",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-orange-500" />,
    title: "Insurance Claim Experts",
    description: "We handle all paperwork and meet with your adjuster on your behalf",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: "Fast Response Time",
    description: "Emergency inspections available within 24-48 hours",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-orange-500" />,
    title: "Maximize Your Claim",
    description: "We ensure all damage is documented so you get the full compensation you deserve",
  },
]

const processSteps = [
  {
    number: "1",
    title: "Call for Free Inspection",
    description:
      "Contact us immediately after storm damage. We'll schedule a comprehensive roof inspection at no cost.",
  },
  {
    number: "2",
    title: "Document All Damage",
    description: "Our experts thoroughly inspect and photograph all storm damage to your roof, gutters, and siding.",
  },
  {
    number: "3",
    title: "File Your Insurance Claim",
    description: "We help you file your claim and provide all necessary documentation to your insurance company.",
  },
  {
    number: "4",
    title: "Meet with Adjuster",
    description: "We meet with your insurance adjuster to ensure all damage is properly assessed and approved.",
  },
  {
    number: "5",
    title: "Get Your New Roof",
    description: "Once approved, we install your new roof with premium materials and expert craftsmanship.",
  },
]

const testimonials = [
  {
    name: "Bill P.",
    location: "Birmingham, AL",
    rating: 5,
    text: "Summit Roofing made the insurance claim process so easy! They handled everything from the inspection to meeting with my adjuster. Got a brand new roof and only paid my deductible. Highly recommend!",
  },
  {
    name: "Caitlin Foley",
    location: "Atlanta, GA",
    rating: 5,
    text: "After hail damage, I didn't know where to start. Summit Roofing walked me through every step of the insurance claim. They were professional, responsive, and my new roof looks amazing!",
  },
  {
    name: "Michael R.",
    location: "Montgomery, AL",
    rating: 5,
    text: "Best roofing company I've worked with. They documented all the storm damage thoroughly and my insurance approved the full replacement. The crew was efficient and cleaned up perfectly.",
  },
]

export default function StormDamageInsuranceLandingPage() {
  return (
    <>
      <ServicePageHero
        title="Storm Damaged Your Roof? We'll Handle Your Insurance Claim"
        subtitle="Free inspection • Expert claim assistance • Fast approval • Quality roof replacement"
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hail-hero-7R8Fr4voZJwC68inlLpWqNCQaaitJD.png"
        imageAlt="Storm damaged roof with hail damage requiring insurance claim assistance in Alabama and Georgia"
      />

      {/* Urgent CTA Section */}
      <section className="py-12 bg-orange-50 border-y-4 border-orange-500">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Phone className="h-12 w-12 text-orange-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Storm Damage? Call Now for FREE Inspection
                </h2>
                <p className="text-lg text-gray-700 mt-1">Available 7 days a week • Fast response guaranteed</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg whitespace-nowrap"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                (704) 578-4756
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Signs of Storm Damage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Did Recent Storms Damage Your Roof?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't wait until small damage becomes a major problem. Look for these warning signs:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {urgentSigns.map((sign, index) => (
              <Card key={index} className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-4">
                      {sign.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{sign.title}</h3>
                    <p className="text-sm text-gray-600">{sign.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-orange-600">
              See any of these signs? Your insurance may cover a full roof replacement!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Homeowners Trust Summit Roofing with Their Insurance Claims
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We've helped hundreds of homeowners in Alabama and Georgia get their roofs replaced through insurance
              claims
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Simple 5-Step Insurance Claim Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              We make getting your roof replaced through insurance easy and stress-free
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-2xl flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You Get When You Work With Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Free, no-obligation roof inspection",
                "Detailed damage documentation with photos",
                "Help filing your insurance claim",
                "We meet with your adjuster for you",
                "Premium roofing materials included",
                "Lifetime transferable warranty",
                "Licensed, insured, and veteran-owned",
                "Serving Alabama & Georgia",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Real reviews from homeowners we've helped with their insurance claims
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Common Questions About Roof Insurance Claims
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Will my insurance cover storm damage to my roof?
                </h3>
                <p className="text-gray-600">
                  Most homeowner insurance policies cover storm damage, including hail and wind damage. We'll help you
                  determine if your damage qualifies and assist with the entire claim process.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How much will I have to pay out of pocket?</h3>
                <p className="text-gray-600">
                  Typically, you'll only pay your insurance deductible. We work directly with your insurance company to
                  ensure you get the full coverage you're entitled to for a complete roof replacement.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How long does the insurance claim process take?
                </h3>
                <p className="text-gray-600">
                  The process typically takes 2-4 weeks from inspection to approval. We expedite this by providing
                  thorough documentation and working directly with your adjuster to ensure a smooth process.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What if my claim gets denied?</h3>
                <p className="text-gray-600">
                  We have extensive experience helping homeowners appeal denied claims. Our detailed documentation and
                  expertise often result in successful appeals and approved claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection
        title="Don't Wait - Storm Damage Gets Worse Over Time"
        description="Get your free roof inspection today and let us handle your insurance claim from start to finish. Most homeowners only pay their deductible for a brand new roof!"
        buttonText="Schedule Free Inspection Now"
        buttonLink="/contact"
      />

      {/* Sticky CTA button that follows user down the page */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600 to-orange-700 shadow-2xl border-t-4 border-orange-800 md:hidden">
        <div className="container mx-auto px-4 py-3">
          <Button
            asChild
            size="lg"
            className="w-full bg-white hover:bg-gray-100 text-orange-600 font-bold text-lg py-6"
          >
            <Link href="/contact">Get Your Free Inspection</Link>
          </Button>
        </div>
      </div>

      {/* Sticky CTA for desktop */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <Button
          asChild
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
        >
          <Link href="/contact">
            <Phone className="mr-2 h-5 w-5" />
            Schedule Free Inspection
          </Link>
        </Button>
      </div>
    </>
  )
}
