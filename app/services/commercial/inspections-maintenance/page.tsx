import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Search, Calendar, Shield, Wrench, CheckCircle, AlertTriangle, FileText, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Roof Inspections & Maintenance Services | Summit Roofing",
  description:
    "Ensure the longevity of your roof with comprehensive roof inspections and preventive maintenance. Summit Roofing Professionals offers expert services. Contact us today!",
}

const inspectionFaqs = [
  {
    question: "How often should I have my commercial roof inspected?",
    answer:
      "We recommend professional inspections at least twice a year—once in the spring and once in the fall—and after any major weather event. This proactive approach catches small problems before they become costly disasters.",
  },
  {
    question: "What does a maintenance plan include?",
    answer:
      "Our customizable plans include regular inspections, debris removal from drains and gutters, minor repairs to seals and flashing, and a detailed report on your roof's condition. It's the best way to maximize your roof's lifespan.",
  },
  {
    question: "How long does a typical roof inspection take?",
    answer:
      "Most commercial roof inspections take 2-4 hours depending on the size and complexity of your roof system. We provide a comprehensive written report within 24-48 hours of the inspection.",
  },
  {
    question: "What happens if you find problems during an inspection?",
    answer:
      "We prioritize any issues found and provide detailed recommendations with cost estimates. Emergency repairs are addressed immediately, while less urgent items can be scheduled at your convenience.",
  },
  {
    question: "Do maintenance plans include emergency services?",
    answer:
      "Yes, our maintenance plan customers receive priority scheduling for emergency repairs and discounted rates on all services. We're available 24/7 for urgent roofing issues.",
  },
]

export default function InspectionsMaintenancePage() {
  return (
    <>
      <ServicePageHero
        title="Roof Inspections & Maintenance"
        subtitle="Protect your investment with proactive inspections and preventative maintenance plans."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flat-roof-commerical-repair-hero-OvLUFzbpRsVmSkZO5aebzfYXI1F24b.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Roof Inspection & Maintenance Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your commercial roof is one of your most significant investments, protecting your business, employees,
                and valuable assets. Regular professional inspections and preventive maintenance are essential for
                maximizing your roof's lifespan, preventing costly emergency repairs, and maintaining optimal building
                performance.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Thorough Inspections</h3>
                <p className="text-gray-600 text-sm">Comprehensive evaluation of all roofing components and systems</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled Maintenance</h3>
                <p className="text-gray-600 text-sm">Regular preventive care to avoid costly emergency repairs</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Reports</h3>
                <p className="text-gray-600 text-sm">Comprehensive documentation with photos and recommendations</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Response</h3>
                <p className="text-gray-600 text-sm">24/7 availability for urgent roofing issues and repairs</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                At Summit Roofing Professionals, we understand that prevention is far more cost-effective than emergency
                repairs. Our comprehensive inspection and maintenance programs are designed to identify potential issues
                before they become major problems, extending your roof's lifespan and protecting your investment.
              </p>
              <p className="mb-6">
                Our certified roofing professionals use advanced inspection techniques and state-of-the-art equipment to
                evaluate every aspect of your roofing system. From membrane integrity and flashing conditions to
                drainage performance and structural components, we leave no detail unchecked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Professional Roof Inspection Services
            </h2>

            <div className="space-y-12">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Visual Inspections</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Our thorough visual inspections examine every accessible area of your roof system, including the
                    membrane surface, seams, penetrations, flashing, gutters, and drainage systems. We document all
                    findings with high-resolution photographs and detailed notes.
                  </p>
                  <p>
                    Our inspectors are trained to identify early warning signs of potential problems, including membrane
                    deterioration, ponding water, loose or damaged flashing, clogged drains, and structural issues that
                    could compromise your roof's performance.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Diagnostic Testing</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    When visual inspection reveals potential concerns, we employ advanced diagnostic techniques to
                    assess the extent and severity of issues. This includes infrared thermography to detect moisture
                    intrusion, core sampling to evaluate membrane and insulation conditions, and electronic leak
                    detection for precise problem identification.
                  </p>
                  <p>
                    These advanced techniques allow us to provide accurate assessments and targeted repair
                    recommendations, ensuring you invest your maintenance budget where it will have the greatest impact
                    on roof performance and longevity.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Post-Storm Damage Assessments</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Alabama and Georgia experience severe weather events that can cause significant roof damage. Our
                    emergency inspection services provide rapid assessment of storm damage, helping you understand the
                    extent of repairs needed and supporting insurance claims with detailed documentation.
                  </p>
                  <p>
                    We're available 24/7 for post-storm inspections and can provide temporary protection measures while
                    permanent repairs are planned and executed. Our detailed storm damage reports include photographic
                    evidence and professional recommendations for insurance claim support.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Warranty and Insurance Inspections</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Many roofing warranties require regular professional inspections to remain valid. Our certified
                    inspectors provide warranty-compliant inspections that meet manufacturer requirements while
                    identifying maintenance needs that could affect warranty coverage.
                  </p>
                  <p>
                    We also provide pre-purchase inspections for property acquisitions and insurance-required
                    inspections, delivering the detailed documentation needed for informed decision-making and policy
                    compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Preventive Maintenance Programs
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Maintenance Plan</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bi-annual inspections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Drain and gutter cleaning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Minor sealant repairs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Detailed inspection reports
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Perfect for newer roofs in good condition</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Comprehensive Plan</h3>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">POPULAR</span>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quarterly inspections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete drainage maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Preventive repairs included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority emergency service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Warranty compliance tracking
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Ideal for most commercial properties</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Plan</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monthly inspections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced diagnostic testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All minor repairs included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 emergency response
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Detailed performance tracking
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Best for critical facilities and older roofs</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maintenance Program Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    Cost Savings
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Prevent costly emergency repairs</li>
                    <li>• Extend roof lifespan by 50-100%</li>
                    <li>• Maintain warranty coverage</li>
                    <li>• Reduce insurance claims</li>
                    <li>• Lower long-term replacement costs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Wrench className="h-5 w-5 text-blue-600 mr-2" />
                    Performance Benefits
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Optimal drainage performance</li>
                    <li>• Enhanced energy efficiency</li>
                    <li>• Improved indoor air quality</li>
                    <li>• Reduced business disruption</li>
                    <li>• Peace of mind protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Inspection & Maintenance Process
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive evaluation of your roof system, building history, and maintenance
                    needs to develop a customized inspection and maintenance plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Scheduled Inspections</h3>
                  <p className="text-gray-600">
                    Our certified inspectors conduct thorough evaluations according to your maintenance plan schedule,
                    documenting all findings with detailed reports and photographic evidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Preventive Maintenance</h3>
                  <p className="text-gray-600">
                    We perform all scheduled maintenance tasks, including cleaning, minor repairs, and system
                    adjustments to keep your roof performing at its best.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Reporting</h3>
                  <p className="text-gray-600">
                    You receive comprehensive reports after each service visit, including current roof condition,
                    completed work, and recommendations for future maintenance or repairs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our team provides continuous support, emergency response when needed, and regular plan reviews to
                    ensure your maintenance program continues to meet your building's evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              The Cost of Neglecting Roof Maintenance
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Without Regular Maintenance:</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• Small problems become major failures</li>
                    <li>• Roof lifespan reduced by 50% or more</li>
                    <li>• Emergency repairs cost 3-5x more than preventive maintenance</li>
                    <li>• Warranty coverage may be voided</li>
                    <li>• Business disruption from unexpected failures</li>
                    <li>• Potential interior damage from leaks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Studies show that commercial roofs with regular professional maintenance last 50-100% longer than those
                without proper care. The cost of a comprehensive maintenance program is typically just 1-3% of the
                roof's replacement cost annually, while providing protection for your entire investment.
              </p>
              <p className="mb-6">
                Don't wait for problems to develop. Proactive maintenance is always more cost-effective than reactive
                repairs. Contact Summit Roofing Professionals today to develop a customized inspection and maintenance
                program that protects your investment and provides peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={inspectionFaqs} />
      <CtaSection title="Schedule a Free Roof Inspection" buttonText="Schedule My Inspection" />
    </>
  )
}
