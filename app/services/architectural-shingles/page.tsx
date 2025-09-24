import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ServicePageHero from "@/components/service-page-hero"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star, Shield, Zap, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Architectural Shingles Installation | Premium Roofing in Alabama & Georgia",
  description:
    "Professional architectural shingle installation in Alabama and Georgia. GAF Master Elite contractors offering premium shingles with superior warranties and craftsmanship.",
  openGraph: {
    title: "Architectural Shingles Installation | Summit Roofing Professionals",
    description:
      "Professional architectural shingle installation in Alabama and Georgia. GAF Master Elite contractors offering premium shingles with superior warranties and craftsmanship.",
    url: "/services/architectural-shingles",
    siteName: "Summit Roofing Professionals",
    images: [
      {
        url: "/images/residential/gallery/architectural-shingle-estate.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional architectural shingle installation by Summit Roofing Professionals",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/services/architectural-shingles",
  },
}

const architecturalShinglesFaqs = [
  {
    question: "What are architectural shingles and how are they different from 3-tab shingles?",
    answer:
      "Architectural shingles are premium asphalt shingles that are thicker, more durable, and have a dimensional appearance that mimics the look of wood shake or slate. Unlike flat 3-tab shingles, architectural shingles have multiple layers and varied shapes that create depth and visual interest. They typically last 25-30 years compared to 15-20 years for 3-tab shingles.",
  },
  {
    question: "How long do architectural shingles last in Alabama and Georgia's climate?",
    answer:
      "In Alabama and Georgia's humid subtropical climate, quality architectural shingles typically last 20-25 years with proper installation and maintenance. Factors like ventilation, storm exposure, and regular maintenance can extend this lifespan. Our GAF Master Elite installation includes enhanced warranties that can extend coverage up to 50 years.",
  },
  {
    question: "What warranty comes with architectural shingle installation?",
    answer:
      "As GAF Master Elite contractors, we offer enhanced warranties including up to 50-year material warranties and 25-year workmanship warranties. Standard manufacturer warranties typically cover 25-30 years for materials. We also provide our own workmanship guarantee to ensure your complete satisfaction.",
  },
  {
    question: "How much do architectural shingles cost compared to other roofing materials?",
    answer:
      "Architectural shingles offer excellent value, typically costing 15-25% more than basic 3-tab shingles but significantly less than premium materials like slate or metal. The investment pays off through longer lifespan, better storm resistance, improved curb appeal, and enhanced warranties. We provide detailed estimates with financing options available.",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Superior Storm Protection",
    description: "Enhanced wind resistance up to 130 mph and impact resistance for Alabama and Georgia weather.",
  },
  {
    icon: Star,
    title: "Premium Aesthetics",
    description: "Dimensional design creates depth and visual appeal that increases your home's curb appeal and value.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Reflective granules and proper ventilation help reduce cooling costs during hot Southern summers.",
  },
  {
    icon: Home,
    title: "Long-Term Value",
    description: "25-30 year lifespan with enhanced warranties provides excellent return on investment.",
  },
]

const galleryImages = [
  {
    src: "/images/projects/auburn-residential-1.jpeg",
    alt: "Beautiful architectural shingle roof on Auburn, AL home with complex gables",
    caption: "Auburn, AL - Complex gable roof with premium architectural shingles",
  },
  {
    src: "/images/projects/auburn-residential-2.jpeg",
    alt: "Front view of Auburn home with new architectural shingle roof",
    caption: "Auburn, AL - Professional installation showcasing dimensional shingles",
  },
  {
    src: "/images/shingles/shingle-gallery-2.png",
    alt: "Aerial view of architectural shingle roof replacement",
    caption: "Complete architectural shingle roof replacement on large residential home",
  },
  {
    src: "/images/shingles/shingle-gallery-3.png",
    alt: "Multi-tonal architectural shingles on ranch home",
    caption: "Multi-tonal architectural shingles on classic ranch-style house",
  },
  {
    src: "/images/shingles/shingle-gallery-4.png",
    alt: "Architectural shingles on complex roof with stone accents",
    caption: "Detailed installation on complex roof with stone accent features",
  },
  {
    src: "/images/residential/gallery/atlanta-estate-roof.jpeg",
    alt: "Architectural shingle roof on Atlanta estate",
    caption: "Atlanta, GA - Premium architectural shingles on luxury estate",
  },
]

export default function ArchitecturalShinglesPage() {
  return (
    <>
      <ServicePageHero
        title="Architectural Shingles"
        subtitle="Premium dimensional shingles combining beauty, durability, and value for your home"
        imageUrl="/images/residential/gallery/architectural-shingle-estate.jpeg"
        altText="Professional architectural shingle installation showcasing dimensional design and superior craftsmanship"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                The Perfect Balance of Beauty and Performance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Architectural shingles represent the gold standard in residential roofing, offering the dimensional
                beauty of premium materials with the reliability and affordability of advanced asphalt technology.
                Perfect for Alabama and Georgia homes, these shingles provide superior protection against our region's
                unique weather challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Enhanced Storm Resistance</h4>
                    <p className="text-gray-600">
                      Superior wind uplift resistance and impact protection for severe weather events
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Dimensional Aesthetics</h4>
                    <p className="text-gray-600">
                      Multi-layered design creates depth and shadow lines that enhance curb appeal
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Long-Term Value</h4>
                    <p className="text-gray-600">25-30 year lifespan with enhanced warranty options available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/projects/auburn-residential-1.jpeg"
                alt="Beautiful architectural shingle roof installation in Auburn, AL"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Recent Project</p>
                <p className="text-sm">Auburn, AL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Architectural Shingles?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the advantages that make architectural shingles the preferred choice for discerning homeowners
              across Alabama and Georgia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="mb-2">{benefit.title}</CardTitle>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Architectural Shingle Projects</h2>
            <p className="mt-4 text-lg text-gray-600">
              See the beautiful results of our professional architectural shingle installations across Alabama and
              Georgia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Installation Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              As GAF Master Elite contractors, we follow strict installation standards to ensure your architectural
              shingle roof performs optimally for decades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Inspection</h3>
              <p className="text-gray-600">
                Detailed assessment of your current roof condition and structural requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Material Selection</h3>
              <p className="text-gray-600">
                Choose from premium GAF architectural shingles in colors and styles that complement your home
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-600">
                Expert installation following GAF Master Elite standards with proper ventilation and flashing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Final inspection and cleanup with comprehensive warranty documentation</p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={architecturalShinglesFaqs} />
      <CtaSection />
    </>
  )
}
