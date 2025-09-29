import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Zap, Shield, Clock, Wrench, CheckCircle, AlertTriangle, Phone, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Roof Repair Services | Summit Roofing",
  description:
    "Get expert repairs for all types of commercial roofing systems. Summit Roofing Professionals provides fast and reliable repair services. Get a free estimate!",
}

const repairFaqs = [
  {
    question: "What are common signs I need a roof repair?",
    answer:
      "Common signs include visible water stains on ceilings, pooling water on the roof, cracked or blistering membrane surfaces, and loose flashing around vents or HVAC units. If you see any of these, call us immediately.",
  },
  {
    question: "Do you offer emergency commercial roof repair?",
    answer:
      "Yes, we have teams ready to respond to emergency repair needs to mitigate damage and secure your property as quickly as possible. We understand that for a business, time is money.",
  },
  {
    question: "How long do commercial roof repairs typically take?",
    answer:
      "Repair timeframes vary based on the extent of damage and weather conditions. Minor repairs can often be completed in a few hours, while major repairs may take 1-3 days. We provide accurate timelines during our initial assessment.",
  },
  {
    question: "Will my business operations be disrupted during repairs?",
    answer:
      "We work diligently to minimize disruption to your business operations. Most repairs can be completed during off-hours or in sections to allow continued business activity. We coordinate closely with you to schedule work at convenient times.",
  },
  {
    question: "Do you provide warranties on repair work?",
    answer:
      "Yes, all our repair work comes with comprehensive warranties covering both materials and workmanship. Warranty terms vary based on the type and extent of repairs performed.",
  },
  {
    question: "Can you help with insurance claims for roof damage?",
    answer:
      "Absolutely. We work directly with insurance companies and provide detailed documentation, photos, and reports to support your claim. Our experience with insurance processes helps ensure you receive fair compensation for covered damages.",
  },
]

export default function CommercialRepairPage() {
  return (
    <>
      <ServicePageHero
        title="Commercial Roof Repair"
        subtitle="Fast, reliable, and effective repairs for all commercial roofing systems."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flat-roof-commerical-repair-hero-OvLUFzbpRsVmSkZO5aebzfYXI1F24b.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert Commercial Roof Repair Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                When your commercial roof needs repair, time is critical. Water damage, business disruption, and
                escalating repair costs are all risks that increase with every hour of delay. Summit Roofing
                Professionals provides rapid response, expert diagnosis, and durable repair solutions for all types of
                commercial roofing systems throughout Alabama and Georgia.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Response</h3>
                <p className="text-gray-600 text-sm">24/7 availability for urgent commercial roofing repairs</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">All System Types</h3>
                <p className="text-gray-600 text-sm">Expert repairs for TPO, EPDM, modified bitumen, and more</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimal Disruption</h3>
                <p className="text-gray-600 text-sm">Efficient repairs that keep your business operational</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lasting Solutions</h3>
                <p className="text-gray-600 text-sm">Durable repairs backed by comprehensive warranties</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Commercial roof repairs require specialized knowledge, professional-grade materials, and experienced
                technicians who understand the unique challenges of business environments. Our team has extensive
                experience with all major commercial roofing systems and can quickly identify the most effective repair
                approach for your specific situation.
              </p>
              <p className="mb-6">
                We understand that every hour of delay can mean lost revenue, potential interior damage, and increased
                repair costs. That's why we maintain emergency response capabilities and prioritize rapid assessment and
                repair of critical issues. Our goal is to restore your roof's integrity quickly while providing
                long-lasting solutions that prevent future problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Commercial Repair Services
            </h2>

            <div className="space-y-12">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Single-Ply Membrane Repairs</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    TPO, PVC, and EPDM membrane systems are popular for their durability and energy efficiency, but they
                    can develop issues from weather exposure, foot traffic, or mechanical damage. Our technicians are
                    certified in all major membrane systems and use manufacturer-approved repair techniques and
                    materials.
                  </p>
                  <p>
                    Common single-ply repairs include seam reinforcement, puncture patching, flashing replacement, and
                    membrane section replacement. We use heat welding, chemical bonding, and mechanical fastening
                    techniques as appropriate for each system type and repair situation.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modified Bitumen System Repairs</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Modified bitumen roofing systems offer excellent durability but can develop cracks, blisters, or
                    seam failures over time. Our repair techniques include torch application, cold adhesive methods, and
                    self-adhering membrane patches, depending on the specific system and repair requirements.
                  </p>
                  <p>
                    We address common issues such as granule loss, thermal splitting, and edge detail failures using
                    proven repair methods that restore the system's waterproof integrity while maintaining its long-term
                    performance characteristics.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Built-Up Roofing (BUR) Repairs</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Built-up roofing systems, while durable, can develop issues such as membrane splitting, blister
                    formation, and gravel displacement. Our experienced technicians understand the layered construction
                    of BUR systems and can perform targeted repairs that address underlying issues.
                  </p>
                  <p>
                    Repair techniques include hot asphalt application, membrane patching, and surface restoration. We
                    also provide protective coatings and surfacing materials to extend the life of aging BUR systems
                    while addressing immediate repair needs.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Metal Roofing Repairs</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Commercial metal roofing systems can develop issues such as fastener loosening, panel separation,
                    and corrosion damage. Our metal roofing specialists use appropriate sealants, fasteners, and panel
                    replacement techniques to restore system integrity.
                  </p>
                  <p>
                    We address standing seam separation, corrugated panel damage, and flashing failures using
                    manufacturer-approved materials and techniques. Our repairs maintain the system's structural
                    integrity and weather resistance while preserving its aesthetic appearance.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flashing and Penetration Repairs</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Roof penetrations and flashing details are common sources of leaks in commercial roofing systems. We
                    specialize in repairing and replacing flashing around HVAC units, vents, skylights, and other roof
                    penetrations using appropriate materials and installation techniques.
                  </p>
                  <p>
                    Our flashing repairs include base flashing replacement, counter flashing installation, and
                    penetration sealing using compatible materials that provide long-term weather protection. We ensure
                    all repairs integrate properly with the existing roofing system.
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
              Emergency Repair Services
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">When to Call for Emergency Repairs:</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• Active leaks causing interior damage</li>
                    <li>• Storm damage compromising roof integrity</li>
                    <li>• Large membrane tears or punctures</li>
                    <li>• Structural damage from fallen debris</li>
                    <li>• HVAC equipment damage affecting roof system</li>
                    <li>• Any situation threatening business operations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="h-6 w-6 text-orange-600 mr-2" />
                  24/7 Emergency Response
                </h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Our emergency response team is available around the clock to address urgent commercial roofing
                    issues. We understand that roofing emergencies don't wait for convenient times, and neither do we.
                    When you call, you'll reach a real person who can dispatch our emergency crew immediately.
                  </p>
                  <p>
                    Our emergency services include temporary weatherproofing, leak mitigation, debris removal, and
                    immediate repairs to prevent further damage. We carry emergency supplies and equipment to handle
                    most urgent situations on the first visit.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  Insurance Claim Support
                </h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Storm damage and emergency repairs often involve insurance claims. Our team has extensive experience
                    working with insurance companies and can provide the detailed documentation needed to support your
                    claim, including photographs, damage assessments, and repair estimates.
                  </p>
                  <p>
                    We can work directly with your insurance adjuster to ensure all damage is properly documented and
                    that you receive fair compensation for covered repairs. Our goal is to make the claims process as
                    smooth as possible while getting your roof repaired quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Response Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1 text-sm">
                    1
                  </div>
                  <p className="text-gray-600">
                    <strong>Immediate Response:</strong> Emergency crew dispatched within 2 hours of your call
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1 text-sm">
                    2
                  </div>
                  <p className="text-gray-600">
                    <strong>Damage Assessment:</strong> Rapid evaluation of damage extent and safety concerns
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1 text-sm">
                    3
                  </div>
                  <p className="text-gray-600">
                    <strong>Immediate Protection:</strong> Temporary measures to prevent further damage
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1 text-sm">
                    4
                  </div>
                  <p className="text-gray-600">
                    <strong>Permanent Repairs:</strong> Complete restoration using appropriate materials and techniques
                  </p>
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
              Our Commercial Repair Process
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Assessment</h3>
                  <p className="text-gray-600">
                    Our certified technicians conduct a thorough evaluation of the damage, identifying all affected
                    areas and determining the most effective repair approach. We provide immediate recommendations for
                    urgent issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Estimate</h3>
                  <p className="text-gray-600">
                    We provide comprehensive repair estimates that detail all necessary work, materials, and costs. Our
                    transparent pricing ensures you understand exactly what's included in your repair project.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Coordinated Scheduling</h3>
                  <p className="text-gray-600">
                    We work with you to schedule repairs at times that minimize disruption to your business operations.
                    For urgent repairs, we can often begin work immediately to prevent further damage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Repairs</h3>
                  <p className="text-gray-600">
                    Our experienced technicians perform all repairs using manufacturer-approved materials and
                    techniques. We maintain strict quality control standards to ensure lasting results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    After completion, we conduct thorough inspections to ensure all repairs meet our quality standards.
                    We provide detailed documentation and warranty information for all work performed.
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
              Why Choose Summit Roofing for Commercial Repairs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience & Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Certified technicians for all major roofing systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Decades of commercial roofing experience
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Manufacturer-approved repair techniques
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Ongoing training on latest technologies
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Excellence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    24/7 emergency response availability
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Minimal disruption to business operations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Comprehensive warranties on all work
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Insurance claim assistance and documentation
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                When your commercial roof needs repair, you need a contractor who understands the urgency and has the
                expertise to provide lasting solutions. Summit Roofing Professionals combines rapid response
                capabilities with professional-grade materials and proven repair techniques to restore your roof's
                integrity quickly and effectively.
              </p>
              <p>
                Don't let roofing problems disrupt your business operations or cause costly interior damage. Contact
                Summit Roofing Professionals today for fast, reliable commercial roof repair services throughout Alabama
                and Georgia. We're here when you need us most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={repairFaqs} />
      <CtaSection title="Request a Free Commercial Roof Repair Estimate" buttonText="Get My Repair Estimate" />
    </>
  )
}
