import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  CheckCircle2,
  Shield,
  Clock,
  Award,
  Star,
  Home,
  Wrench,
  FileText,
  DollarSign,
  MapPin,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Roof Replacement Contractors Near Me | Free Estimate",
  description:
    "Expert residential roof replacement contractors in Alabama & Georgia. New roof installation, flat roof replacement, financing available. Licensed & insured. Get your free estimate today!",
  keywords: [
    "roof replacement contractors near me",
    "roof replacement companies near me",
    "residential roof replacement",
    "flat roof replacement near me",
    "new roof installation",
    "roof replacement estimate near me",
    "roof replacement financing near me",
    "residential roof leak repair",
    "house roof leak repair",
  ],
  openGraph: {
    title: "Residential Roof Replacement Contractors Near Me | Summit Roofing",
    description:
      "Expert residential roof replacement contractors in Alabama & Georgia. Free estimates, financing available, licensed & insured.",
    type: "website",
  },
}

export default function RoofReplacementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/roofer-craftsmanship-sunset.png"
            alt="Professional roof replacement contractors installing new residential roof"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white border-0">
              Top-Rated Roof Replacement Contractors
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              Expert Residential Roof Replacement Near You
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 text-balance mb-8 leading-relaxed">
              Professional new roof installation and flat roof replacement services in Alabama & Georgia. Licensed,
              insured, and trusted by homeowners for over a decade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">
                  <FileText className="mr-2 h-5 w-5" />
                  Get Free Estimate
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full"
              >
                <a href="tel:+17045784756">
                  <Phone className="mr-2 h-5 w-5" />
                  (704) 578-4756
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Free Roof Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Financing Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Lifetime Warranties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-400" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-400" />
              <span className="font-semibold">Veteran Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-orange-400" />
              <span className="font-semibold">500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-400" />
              <span className="font-semibold">Rapid Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Residential Roof Replacement Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From new roof installation to flat roof replacement and emergency leak repairs, we handle all your
              residential roofing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">New Roof Installation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Complete new roof installation for residential properties. Quality materials, expert craftsmanship,
                  and lifetime warranties on all new roofs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Premium roofing materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Energy-efficient options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lifetime transferable warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flat Roof Replacement</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Specialized flat roof replacement services for residential properties. Modern materials and proven
                  techniques for long-lasting protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>TPO & EPDM systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Superior waterproofing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Extended warranties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Residential Roof Leak Repair</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Emergency house roof leak repair services. Fast response to protect your home from water damage and
                  prevent costly repairs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 emergency service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Thorough leak detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Permanent solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Free Roof Inspection & Estimate</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Get your free roof replacement estimate near you. Comprehensive inspection and detailed quote with no
                  obligation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Detailed roof assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No hidden fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Roof Replacement Financing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Flexible roof replacement financing options near you. Make your new roof affordable with our payment
                  plans.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Flexible payment plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Quick approval process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Competitive rates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Insurance Claims Assistance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Expert help with insurance claims for roof replacement. We work directly with your insurance company
                  to maximize your coverage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Claims documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Insurance negotiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stress-free process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Summit Roofing for Your Roof Replacement?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              As the leading roof replacement contractors near you, we deliver exceptional quality and service on every
              project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-blue-200 leading-relaxed">
                Fully licensed roof replacement contractors with comprehensive insurance for your protection
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Veteran Owned</h3>
              <p className="text-blue-200 leading-relaxed">
                Military precision and dedication in every residential roof replacement project
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-blue-200 leading-relaxed">
                500+ successful roof replacements with satisfied homeowners across Alabama & Georgia
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response</h3>
              <p className="text-blue-200 leading-relaxed">
                Quick scheduling for roof replacement estimates and emergency leak repairs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Roof Replacement Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and stress-free residential roof replacement from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Free Inspection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Schedule your free roof inspection. We'll assess your roof's condition and provide expert
                  recommendations.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Detailed Estimate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive a comprehensive roof replacement estimate with transparent pricing and material options.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our expert team completes your new roof installation with precision and minimal disruption.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Final Inspection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Thorough quality check and cleanup. Your satisfaction is guaranteed with our lifetime warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Roof Replacement Contractors Serving Alabama & Georgia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find trusted roof replacement companies near you. We proudly serve homeowners throughout the region.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <h3 className="text-2xl font-bold">Alabama</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Birmingham & surrounding areas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Montgomery & Central Alabama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Mobile & Gulf Coast region</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Huntsville & North Alabama</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <h3 className="text-2xl font-bold">Georgia</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Columbus & West Georgia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Atlanta Metro area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Macon & Central Georgia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Augusta & East Georgia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your New Roof? Get Your Free Estimate Today!
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join hundreds of satisfied homeowners who chose Summit Roofing Professionals for their residential roof
              replacement. Contact us now for your free inspection and estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">
                  <FileText className="mr-2 h-5 w-5" />
                  Get Free Estimate
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full"
              >
                <a href="tel:+17045784756">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (704) 578-4756
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-orange-200">Emergency Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-orange-200">Roofs Replaced</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-orange-200">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions About Roof Replacement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about residential roof replacement, costs, and our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How much does residential roof replacement cost?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Roof replacement costs vary based on size, materials, and complexity. We offer free estimates and
                  financing options to make your new roof affordable. Contact us for a detailed quote tailored to your
                  home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How long does a roof replacement take?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of
                  your roof. We work efficiently to minimize disruption to your daily routine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer financing for roof replacement?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! We offer flexible roof replacement financing options with competitive rates and quick approval.
                  Ask about our payment plans during your free estimate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're proud to serve homeowners throughout Alabama and Georgia, including Birmingham, Montgomery,
                  Mobile, Columbus, Atlanta, and surrounding areas. Contact us to confirm service in your area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Do you handle insurance claims for roof replacement?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're experienced in working with insurance companies and can help you navigate the claims process for
                  storm damage or other covered events. We'll document everything needed for your claim.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
