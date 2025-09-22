import Link from "next/link"
import Image from "next/image"
import { Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/summit-roofing-logo.png"
                alt="Summit Roofing Professionals Logo"
                width={180}
                height={45}
                className="h-auto"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Licensed, Insured & Veteran-Owned. Serving Alabama and Georgia with integrity.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61572937707369"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/residential-roofing" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential-roofing" className="hover:text-white transition-colors">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-roofing" className="hover:text-white transition-colors">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/roof-repairs" className="hover:text-white transition-colors">
                  Roof Repairs
                </Link>
              </li>
              <li>
                <Link href="/insurance-claims" className="hover:text-white transition-colors">
                  Insurance Claims
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="font-semibold text-gray-300 mr-2">A:</span>
                <span>3707 2nd Ave Ste 103, Columbus, GA 31904</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-gray-300 mr-2">P:</span>
                <a href="tel:+17045784756" className="hover:text-white transition-colors">
                  (704) 578-4756
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-gray-300 mr-2">E:</span>
                <a
                  href="mailto:davis@summitroofingprofessionals.com"
                  className="hover:text-white transition-colors break-all"
                >
                  davis@summitroofingprofessionals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Summit Roofing Professionals. All Rights Reserved.</p>
          <p className="mt-1 text-xs">Summit Roofing is a DBA of Meek Renovations LLC</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
