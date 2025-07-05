import Link from "next/link"
import { Mountain, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl text-white">Summit Roofing</span>
            </Link>
            <p className="text-sm">Your trusted roofing professionals in Alabama and Georgia.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/insurance-claims" className="hover:text-orange-500">
                  Insurance Claims
                </Link>
              </li>
              <li>
                <Link href="/services/residential-roofing" className="hover:text-orange-500">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-roofing" className="hover:text-orange-500">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/roof-repairs" className="hover:text-orange-500">
                  Roof Repairs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-orange-500">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Main St, Birmingham, AL</li>
              <li>
                <a href="tel:1-800-555-ROOF" className="hover:text-orange-500">
                  1-800-555-ROOF
                </a>
              </li>
              <li>
                <a href="mailto:contact@summitroofing.com" className="hover:text-orange-500">
                  contact@summitroofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Summit Roofing Professionals. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
