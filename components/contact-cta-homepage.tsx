import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Zap } from "lucide-react"

export default function ContactCTAHomepage() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Free Roof Inspection?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Join hundreds of satisfied customers who chose Summit Roofing Professionals. Get your free estimate today
              and see why we're Alabama and Georgia's trusted roofing experts.
            </p>

            {/* Main CTA Button */}
            <div className="mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Get Your Free Estimate</Link>
              </Button>
            </div>

            {/* Quick Contact Options */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:7045784756"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-200" />
                  <div>
                    <div className="text-sm text-orange-200">Call Now</div>
                    <div className="font-semibold">(704) 578-4756</div>
                  </div>
                </div>
              </a>

              <a
                href="mailto:davis@summitroofingprofessionals.com"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-200" />
                  <div>
                    <div className="text-sm text-orange-200">Email Us</div>
                    <div className="font-semibold text-sm">davis@summitroofingprofessionals.com</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Service Areas */}
            <div className="mt-6 flex items-center space-x-2 text-orange-200">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Serving Alabama & Georgia</span>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/owner-in-front-of-house-2.jpeg"
                alt="Owner of Summit Roofing Professionals in front of a completed residential project"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-gray-900">Rapid Response</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
