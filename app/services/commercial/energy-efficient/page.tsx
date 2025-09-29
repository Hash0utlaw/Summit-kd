import type { Metadata } from "next"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Leaf, DollarSign, Thermometer, Shield, CheckCircle, TrendingDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Energy-Efficient Roofing Systems | Summit Roofing",
  description:
    "Reduce your cooling costs with energy-efficient roofing solutions. Summit Roofing Professionals offers expert installation of cool roofs and reflective coatings. Get a free estimate!",
}

const energyFaqs = [
  {
    question: "What makes a roof 'energy-efficient'?",
    answer:
      "An energy-efficient or 'cool' roof has high solar reflectivity and high thermal emittance. It reflects sunlight and radiates absorbed heat, keeping the roof surface and the building below it cooler.",
  },
  {
    question: "How much can I save with an energy-efficient roof?",
    answer:
      "Savings vary, but many building owners see a 10-30% reduction in their annual cooling costs. The U.S. Department of Energy estimates that cool roofs can lower rooftop temperatures by up to 50°F.",
  },
  {
    question: "What types of energy-efficient roofing materials are available?",
    answer:
      "We offer white TPO and PVC membranes, reflective EPDM systems, cool roof coatings, modified bitumen with reflective granules, and metal roofing with specialized reflective finishes.",
  },
  {
    question: "Do energy-efficient roofs qualify for tax incentives?",
    answer:
      "Yes, many energy-efficient roofing systems qualify for federal tax credits, state rebates, and utility incentives. We can help you identify available programs and ensure your system meets qualification requirements.",
  },
  {
    question: "How long do energy-efficient roofing systems last?",
    answer:
      "With proper installation and maintenance, energy-efficient roofing systems typically last 20-30 years or more, providing decades of energy savings and environmental benefits.",
  },
]

export default function EnergyEfficientPage() {
  return (
    <>
      <ServicePageHero
        title="Energy-Efficient Roofing Systems"
        subtitle="Lower your energy bills and improve your building's comfort with our cool roofing solutions."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flat-roof-commerical-repair-hero-OvLUFzbpRsVmSkZO5aebzfYXI1F24b.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Revolutionary Energy-Efficient Roofing Solutions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your commercial building into an energy-efficient powerhouse with Summit Roofing's advanced
                cool roofing technologies. Our energy-efficient roofing systems don't just protect your building – they
                actively reduce your operating costs while contributing to environmental sustainability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduce Energy Costs</h3>
                <p className="text-gray-600">
                  Save 10-30% on annual cooling costs with reflective roofing systems that keep your building cooler.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Improved Comfort</h3>
                <p className="text-gray-600">
                  Maintain consistent indoor temperatures and reduce HVAC strain for better occupant comfort.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Impact</h3>
                <p className="text-gray-600">
                  Reduce your carbon footprint and contribute to urban heat island reduction efforts.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Energy-efficient roofing represents the future of commercial building management. These advanced systems
                utilize cutting-edge materials and technologies to reflect solar radiation, reduce heat absorption, and
                minimize the energy required to maintain comfortable indoor temperatures. The result is significant cost
                savings, improved building performance, and reduced environmental impact.
              </p>
              <p className="mb-6">
                At Summit Roofing Professionals, we specialize in the design and installation of comprehensive
                energy-efficient roofing solutions tailored to your building's specific needs. Our team stays current
                with the latest developments in cool roofing technology, ensuring you receive the most effective and
                cost-efficient system available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Advanced Energy-Efficient Roofing Technologies
            </h2>

            <div className="space-y-12">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cool Roof Membranes</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Our premium cool roof membranes, including white TPO and PVC systems, are engineered to reflect up
                    to 90% of solar radiation. These single-ply membranes combine superior weather resistance with
                    exceptional energy performance, making them ideal for commercial applications throughout Alabama and
                    Georgia.
                  </p>
                  <p>
                    These membranes feature advanced polymer formulations that maintain their reflective properties over
                    time, ensuring long-term energy savings. They're also highly resistant to UV degradation, chemical
                    exposure, and extreme weather conditions common in the Southeast.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reflective Roof Coatings</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Our fluid-applied reflective coatings provide an excellent solution for existing roofs that need
                    energy efficiency upgrades. These coatings can be applied over various substrates, including
                    modified bitumen, built-up roofing, and metal systems, transforming them into high-performance cool
                    roofs.
                  </p>
                  <p>
                    Available in acrylic, silicone, and polyurethane formulations, these coatings offer excellent
                    adhesion, flexibility, and durability. They can reduce roof surface temperatures by up to 50°F while
                    providing additional waterproofing protection.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Energy-Efficient Metal Roofing</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Metal roofing systems with specialized reflective finishes offer exceptional energy performance
                    combined with outstanding durability. These systems feature advanced paint technologies that reflect
                    solar radiation while maintaining their appearance and performance for decades.
                  </p>
                  <p>
                    Our energy-efficient metal roofing options include standing seam systems, corrugated panels, and
                    architectural metal tiles, all available with ENERGY STAR qualified finishes that meet or exceed
                    federal energy efficiency standards.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Green Roofing Systems</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    For the ultimate in energy efficiency and environmental benefits, we offer comprehensive green
                    roofing solutions. These living roof systems provide natural insulation, reduce stormwater runoff,
                    improve air quality, and create valuable green space in urban environments.
                  </p>
                  <p>
                    Our green roof installations include extensive systems for maximum energy benefits with minimal
                    maintenance, and intensive systems that can support larger plants and recreational use. All systems
                    include proper waterproofing, drainage, and plant selection for optimal performance.
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
              Comprehensive Benefits of Energy-Efficient Roofing
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <TrendingDown className="h-6 w-6 text-green-600 mr-2" />
                  Financial Benefits
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Reduced cooling costs by 10-30% annually
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Lower peak demand charges from utilities
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Extended HVAC equipment lifespan
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Potential tax credits and utility rebates
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Increased property value and marketability
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  Performance Benefits
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Improved indoor comfort and temperature stability
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Reduced thermal stress on roofing materials
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Enhanced roof membrane longevity
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Better moisture management and ventilation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Reduced urban heat island effect contribution
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Return on Investment</h3>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Energy-efficient roofing systems typically pay for themselves through energy savings within 5-10
                  years, depending on the building size, local energy costs, and system type. Over the life of the roof,
                  total savings can exceed the initial investment by 200-300%.
                </p>
                <p>
                  When combined with available tax incentives, utility rebates, and financing options, the payback
                  period can be even shorter. Our team can help you calculate the specific return on investment for your
                  building and identify all available incentive programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Energy-Efficient Roofing Process
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Assessment</h3>
                  <p className="text-gray-600">
                    We conduct a comprehensive energy assessment of your current roofing system, analyzing thermal
                    performance, insulation levels, and potential energy savings opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom System Design</h3>
                  <p className="text-gray-600">
                    Our engineers design a customized energy-efficient roofing solution based on your building's
                    specific needs, local climate conditions, and energy efficiency goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Incentive Identification</h3>
                  <p className="text-gray-600">
                    We research and identify all available tax credits, rebates, and financing options to maximize your
                    return on investment and reduce upfront costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Installation</h3>
                  <p className="text-gray-600">
                    Our certified installation teams use industry-leading techniques and quality control processes to
                    ensure optimal system performance and longevity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Monitoring</h3>
                  <p className="text-gray-600">
                    We provide ongoing performance monitoring and maintenance services to ensure your energy-efficient
                    roofing system continues to deliver maximum savings throughout its lifespan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={energyFaqs} />
      <CtaSection title="Get a Free Energy-Efficient Roofing Assessment" buttonText="Request My Free Assessment" />
    </>
  )
}
