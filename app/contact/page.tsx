import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Summit Roofing | Free Quotes 7 Days a Week",
  description:
    "Contact Summit Roofing for a free, no-obligation quote. We're available 7 days a week, from 6 a.m. to 6 p.m., for all your roofing needs in Alabama and Georgia.",
  keywords:
    "contact summit roofing, free roofing quote, roofer near me, Alabama roofer, Georgia roofer, emergency roofing",
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Summit Roofing",
  image: "https://www.summitroofing.pro/images/summit-roofing-logo.png",
  "@id": "https://www.summitroofing.pro/",
  url: "https://www.summitroofing.pro/contact",
  telephone: "+1-704-578-4758",
  email: "davis@summitroofingprofessionals.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3707 2nd Ave, Suite 103",
    addressLocality: "Columbus",
    addressRegion: "GA",
    postalCode: "31904",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    {
      "@type": "State",
      name: "Alabama",
    },
    {
      "@type": "State",
      name: "Georgia",
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      {/* Add JSON-LD to the page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us for a Free Quote</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or ready for a free, no-obligation quote? Contact us today! We're available 7 days a week
              to assist you.
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
                  </CardTitle>{" "}
                  {/* Corrected JSX closing tag */}
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-gray-900 mb-2">davis@summitroofingprofessionals.com</p>
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
                      <span className="font-medium">Monday - Sunday:</span> 6:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm">We are available 7 days a week to answer your call.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
