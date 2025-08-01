import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactCta() {
  return (
    <section className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Roofing Project?</h2>
            <p className="mt-4 text-lg text-blue-200">
              Contact us today for a free, no-obligation inspection and estimate. Our team is ready to assist you with
              all your roofing needs.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-orange-400" />
                <a href="tel:(704) 578-4758" className="text-lg hover:text-orange-400">
                  (704) 578-4758
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-orange-400" />
                <a href="mailto:info@summitroofing.com" className="text-lg hover:text-orange-400">
                  info@summitroofing.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-orange-400 mt-1" />
                <p className="text-lg">Serving Alabama & Georgia</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-2xl text-gray-800">
            <h3 className="text-2xl font-bold mb-6">Request a Free Estimate</h3>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="tel" placeholder="Phone Number" />
              <Input type="email" placeholder="Email Address" />
              <Textarea placeholder="How can we help you?" />
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
