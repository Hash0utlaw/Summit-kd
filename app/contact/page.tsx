import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"

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
  image: "https://www.summitroofingprofessionals.com/images/summit-roofing-logo.png",
  "@id": "https://www.summitroofingprofessionals.com/",
  url: "https://www.summitroofingprofessionals.com/contact",
  telephone: "+1-704-578-4756",
  email: "davis@summitroofingprofessionals.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3707 2nd Ave Ste 103",
    addressLocality: "Columbus",
    addressRegion: "GA",
    postalCode: "31904",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "17:00",
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
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16871498775" strategy="afterInteractive" />
      <Script id="google-analytics-contact" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16871498775');
        `}
      </Script>

      {googleMapsApiKey && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`}
          strategy="afterInteractive"
        />
      )}

      {/* Add JSON-LD to the page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-amber-50/30 via-white to-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              Get Your Free Quote
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to protect your home? We're here to help 7 days a week with expert roofing solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="order-1 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200/50">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Request Your Quote</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 order-2 lg:order-2">
              <Card className="border-slate-200/50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-orange-600" />
                    </div>
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+17045784756"
                    className="text-xl font-semibold text-slate-900 hover:text-orange-600 transition-colors block mb-2"
                  >
                    (704) 578-4756
                  </a>
                  <p className="text-slate-600 leading-relaxed">
                    Call us for immediate assistance or emergency repairs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200/50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:davis@summitroofingprofessionals.com"
                    className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors block mb-2 break-all"
                  >
                    davis@summitroofingprofessionals.com
                  </a>
                  <p className="text-slate-600 leading-relaxed">Send us your questions or project details</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200/50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <span>Our Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3707+2nd+Ave+Ste+103+columbus+ga+31904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-slate-900 hover:text-green-600 transition-colors block mb-2"
                  >
                    3707 2nd Ave Ste 103
                    <br />
                    Columbus, GA 31904
                  </a>
                  <p className="text-slate-600 leading-relaxed">Visit us or send mail to our office location</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200/50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-slate-600">
                    <p className="leading-relaxed">
                      <span className="font-semibold text-slate-900">Monday - Saturday:</span> 6:00 AM - 9:00 PM
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-semibold text-slate-900">Sunday:</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm mt-3 leading-relaxed">Available 7 days a week to answer your call</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 md:mt-24">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-slate-200/50">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                Learn More About Summit Roofing
              </h2>
              <Accordion type="multiple" className="w-full">
                {/* Why Choose Summit Roofing Section */}
                <AccordionItem value="why-choose" className="border-b">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-slate-900 hover:text-orange-500 py-4">
                    Why Choose Summit Roofing Professionals?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 space-y-4 pb-6">
                    <p>
                      When you contact Summit Roofing Professionals, you're reaching out to Alabama and Georgia's most
                      trusted roofing contractor. With decades of combined experience, our team has built a reputation
                      for excellence that spans across residential and commercial roofing projects throughout the
                      Southeast.
                    </p>
                    <p>
                      Our commitment to quality craftsmanship and customer satisfaction sets us apart from other roofing
                      companies. We understand that your roof is one of your most important investments, protecting your
                      family, employees, and valuable assets. That's why we approach every project with the same level
                      of dedication and attention to detail, whether it's a simple repair or a complete roof
                      replacement.
                    </p>
                    <p>
                      From the moment you contact us, you'll experience the Summit Roofing difference. Our licensed and
                      insured professionals provide transparent communication, detailed estimates, and superior
                      workmanship that stands the test of time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Our Services Section */}
                <AccordionItem value="services" className="border-b">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-slate-900 hover:text-orange-500 py-4">
                    Comprehensive Roofing Services
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 space-y-4 pb-6">
                    <p>
                      Summit Roofing Professionals offers a complete range of roofing services designed to meet all your
                      residential and commercial needs. Our experienced team specializes in various roofing systems and
                      materials, ensuring we can handle any project regardless of size or complexity.
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential Roofing Services</h3>
                      <p>
                        Our residential roofing services include architectural shingle installation, metal roofing
                        systems, tile roofing, and emergency repair services. We work with leading manufacturers to
                        provide high-quality materials that offer superior protection and enhance your home's curb
                        appeal. Whether you need a complete roof replacement due to storm damage or want to upgrade to a
                        more energy-efficient roofing system, our team has the expertise to deliver exceptional results.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Commercial Roofing Solutions</h3>
                      <p>
                        For commercial properties, we offer specialized services including TPO and single-ply membrane
                        installation, built-up roofing systems, modified bitumen, and comprehensive maintenance
                        programs. Our commercial team understands the unique challenges of business roofing, including
                        minimal disruption to operations, compliance with building codes, and long-term durability
                        requirements.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Roofing Services</h3>
                      <p>
                        Roofing emergencies don't wait for convenient times. That's why Summit Roofing Professionals
                        offers 24/7 emergency roofing services throughout Alabama and Georgia. Our rapid response team
                        can quickly assess damage, provide temporary protection, and develop a comprehensive repair plan
                        to restore your roof's integrity.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Service Areas Section */}
                <AccordionItem value="service-areas" className="border-b">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-slate-900 hover:text-orange-500 py-4">
                    Serving Alabama and Georgia
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 space-y-4 pb-6">
                    <p>
                      Summit Roofing Professionals proudly serves communities throughout Alabama and Georgia, bringing
                      professional roofing services directly to your location. Our extensive service area allows us to
                      support both urban and rural communities with the same level of excellence and commitment.
                    </p>
                    <p>
                      We understand the unique weather challenges that affect roofs in the Southeast, from intense
                      summer heat and humidity to severe thunderstorms and occasional winter weather. Our team is
                      experienced in selecting and installing roofing materials that can withstand these regional
                      climate conditions while providing optimal energy efficiency.
                    </p>
                    <p>
                      No matter where you're located within our service area, you can count on Summit Roofing
                      Professionals for prompt, professional service. We maintain local relationships with suppliers and
                      understand regional building codes, ensuring your project meets all requirements while supporting
                      your local community.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Getting Started Section */}
                <AccordionItem value="getting-started">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-slate-900 hover:text-orange-500 py-4">
                    Getting Started is Easy
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 space-y-4 pb-6">
                    <p>
                      Starting your roofing project with Summit Roofing Professionals is straightforward and
                      stress-free. When you contact us, we'll schedule a convenient time for a comprehensive roof
                      inspection and consultation. Our experienced professionals will assess your current roofing
                      system, discuss your needs and preferences, and provide detailed recommendations.
                    </p>
                    <p>
                      We believe in transparent pricing and detailed estimates. After our initial consultation, you'll
                      receive a comprehensive proposal that outlines all work to be performed, materials to be used,
                      project timeline, and total investment. We take time to explain every aspect of your project,
                      ensuring you have all the information needed to make an informed decision.
                    </p>
                    <p>
                      Our team handles all necessary permits and coordinates with your insurance company when
                      applicable. We maintain open communication throughout your project, providing regular updates and
                      addressing any questions or concerns promptly.
                    </p>
                    <p>
                      Contact Summit Roofing Professionals today to schedule your free consultation and discover why
                      we're the preferred choice for roofing services throughout Alabama and Georgia. Your satisfaction
                      is our priority, and we're committed to exceeding your expectations on every project.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
