import type { Metadata } from "next"
import Link from "next/link"
import ServicePageHero from "@/components/service-page-hero"
import { Button } from "@/components/ui/button"
import { MapPin, Shield, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Service Areas in AL & GA | Summit Roofing",
  description:
    "Summit Roofing Professionals proudly serves communities across Alabama and Georgia. Find your local roofing expert in Birmingham, Atlanta, and more.",
}

const serviceLocations = [
  { name: "Birmingham, AL", href: "/service-areas/birmingham-roofing", available: true },
  { name: "Atlanta, GA", href: "/service-areas/atlanta-roofing", available: true },
  { name: "Huntsville, AL", href: "/service-areas/huntsville-roofing", available: true },
  { name: "Montgomery, AL", href: "/service-areas/montgomery-roofing", available: true },
  { name: "Mobile, AL", href: "/service-areas/mobile-roofing", available: true },
  { name: "Tuscaloosa, AL", href: "/service-areas/tuscaloosa-roofing", available: true },
  { name: "Columbus, GA", href: "/service-areas/columbus-roofing", available: true },
  { name: "Augusta, GA", href: "/service-areas/augusta-roofing", available: true },
]

export default function ServiceAreasHubPage() {
  return (
    <>
      <ServicePageHero
        title="Serving Communities Across the Southeast"
        subtitle="We are proud to be local roofing experts, providing reliable services to homeowners and businesses throughout Alabama and Georgia."
        imageUrl="/images/alabama-georgia-map.png"
        imageAlt="Map graphic illustrating Summit Roofing Professionals service areas across Alabama and Georgia"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Your Trusted Local Roofing Experts
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Summit Roofing Professionals has established itself as the premier roofing contractor serving Alabama
                and Georgia communities. Our extensive service area coverage ensures that homeowners and business owners
                throughout the Southeast have access to professional, reliable roofing services when they need them
                most.
              </p>
              <p className="mb-6">
                With decades of combined experience working in the unique climate conditions of Alabama and Georgia, our
                team understands the specific challenges that roofs face in this region. From the intense summer heat
                and humidity to severe thunderstorms, hurricanes, and occasional winter weather, we've seen it all and
                know how to build roofing systems that can withstand these demanding conditions.
              </p>
              <p className="mb-6">
                Our commitment to serving local communities goes beyond just providing roofing services. We're invested
                in the success and safety of the neighborhoods we serve, building lasting relationships with homeowners,
                business owners, and local contractors. This local focus allows us to provide personalized service while
                maintaining the highest standards of quality and professionalism.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed and insured in both Alabama and Georgia, providing peace of mind for every project.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">
                  Emergency services available 24/7 throughout our entire service area for urgent roofing needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of regional building codes, weather patterns, and architectural styles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Find Your Local Roofing Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Select your city below to learn more about the services we offer in your area. We are constantly
              expanding, so check back soon if you don't see your location listed.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {serviceLocations.map((location) => (
              <div
                key={location.name}
                className="p-6 border border-gray-200 rounded-lg text-center flex flex-col items-center justify-center"
              >
                <MapPin className="h-8 w-8 text-blue-600 mb-3" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-800">{location.name}</h3>
                {location.available ? (
                  <Button asChild variant="link" className="mt-2 text-orange-500 hover:text-orange-600">
                    <Link href={location.href} aria-label={`View roofing services for ${location.name}`}>
                      View Local Services &rarr;
                    </Link>
                  </Button>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">Coming Soon</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Regional Roofing Specializations
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Alabama Roofing Services</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Alabama's diverse climate presents unique challenges for roofing systems. From the Gulf Coast's
                    hurricane-prone areas to the northern regions that experience more varied weather patterns, our
                    Alabama roofing teams are equipped to handle it all.
                  </p>
                  <p className="mb-4">
                    We specialize in hurricane-resistant roofing systems for coastal areas like Mobile, energy-efficient
                    solutions for the hot summers in Birmingham and Montgomery, and durable materials that can withstand
                    the severe thunderstorms common throughout the state.
                  </p>
                  <p>
                    Our Alabama teams are well-versed in local building codes and have established relationships with
                    local suppliers, ensuring efficient project completion and competitive pricing for our customers.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Georgia Roofing Services</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Georgia's climate varies significantly from the mountains in the north to the coastal plains in the
                    south. Our Georgia roofing specialists understand these regional differences and select appropriate
                    materials and installation techniques for each area.
                  </p>
                  <p className="mb-4">
                    In Atlanta and surrounding metropolitan areas, we focus on energy-efficient roofing solutions that
                    help reduce cooling costs during hot summers. For coastal Georgia communities, we emphasize
                    wind-resistant and moisture-resistant roofing systems.
                  </p>
                  <p>
                    Our Georgia teams maintain current knowledge of state and local building requirements, ensuring all
                    installations meet or exceed code requirements while providing optimal performance for the local
                    climate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Local Expertise Matters</h3>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Choosing a roofing contractor with deep local knowledge makes a significant difference in the quality
                  and longevity of your roofing investment. Our teams understand the specific weather patterns, building
                  codes, and architectural styles common in each area we serve.
                </p>
                <p className="mb-4">
                  This local expertise allows us to recommend the most appropriate roofing materials and installation
                  techniques for your specific location. We know which materials perform best in high humidity, which
                  systems provide optimal wind resistance, and how to design proper ventilation for your regional
                  climate.
                </p>
                <p className="mb-4">
                  Additionally, our established relationships with local suppliers and building officials help
                  streamline the permitting process and ensure timely material delivery, keeping your project on
                  schedule and within budget.
                </p>
                <p>
                  When you choose Summit Roofing Professionals, you're not just getting a roofing contractor – you're
                  getting a local partner committed to protecting your investment and serving your community for years
                  to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Service Commitment</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                No matter which community you call home within our service area, you can expect the same level of
                professional service, quality workmanship, and customer satisfaction that has made Summit Roofing
                Professionals the preferred choice throughout Alabama and Georgia.
              </p>
              <p className="mb-6">
                We maintain consistent standards across all our service locations while adapting our approach to meet
                the unique needs of each community. Our local teams are supported by company-wide training programs,
                quality control processes, and access to the latest roofing technologies and materials.
              </p>
              <p className="mb-8">
                Ready to experience the Summit Roofing difference in your community? Contact us today for a free
                consultation and discover why homeowners and business owners throughout the Southeast trust us with
                their most important roofing projects.
              </p>
            </div>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">Get Your Free Quote Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
