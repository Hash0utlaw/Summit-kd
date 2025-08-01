import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Summit Roofing | Free Estimates in Alabama & Georgia",
  description:
    "Get your free roofing estimate today. Contact Summit Roofing for professional residential and commercial roofing services in Alabama and Georgia.",
  keywords: "contact summit roofing, free estimate, roofing quote, Alabama roofer, Georgia roofer",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your roofing project? Fill out the form below and we'll get back to you within 24 hours with
            a detailed estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-orange-500" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-gray-900 mb-2">(704) 578-4758</p>
                <p className="text-gray-600">Call us for immediate assistance or emergency repairs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-gray-900 mb-2">info@summitroofing.com</p>
                <p className="text-gray-600">Send us your questions or project details</p>
              </CardContent>
            </Card>

            {/* Our Office */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3707+2nd+Ave+suite+103+columbus+ga+31904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-900 hover:text-orange-500"
                >
                  3707 2nd Ave, Suite 103
                  <br />
                  Columbus, GA 31904
                </a>
                <p className="text-gray-600 mt-2">Visit us or send mail to our office location.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 7:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 8:00 AM - 4:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> Emergency Only
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Free Inspection</h4>
                      <p className="text-sm text-gray-600">We'll assess your roof and provide a detailed evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Detailed Estimate</h4>
                      <p className="text-sm text-gray-600">
                        Receive a comprehensive quote with material and labor costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Professional Installation</h4>
                      <p className="text-sm text-gray-600">Our certified team completes your project with precision</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
