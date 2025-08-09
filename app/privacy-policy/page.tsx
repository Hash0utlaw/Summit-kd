import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Summit Roofing Professionals",
  description:
    "Learn how Summit Roofing Professionals collects, uses, and protects your personal information. Read our privacy practices and your choices.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Summit Roofing Professionals",
    description:
      "Learn how Summit Roofing Professionals collects, uses, and protects your personal information. Read our privacy practices and your choices.",
    url: "/privacy-policy",
    type: "website",
  },
}

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@summitroofing.com"
const CONTACT_PHONE = "(704) 578-4758"
const CONTACT_ADDRESS_LINE_1 = "3707 2nd Ave, Suite 103"
const CONTACT_ADDRESS_LINE_2 = "Columbus, GA 31904"
const LAST_UPDATED = "August 9, 2025"

export default function PrivacyPolicyPage() {
  return (
    <main role="main" className="w-full bg-white" aria-labelledby="privacy-policy-heading">
      {/* Page header */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 id="privacy-policy-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-gray-600">Last updated: {LAST_UPDATED}</p>
          <p className="mt-2 text-gray-600">
            This Privacy Policy explains how Summit Roofing Professionals (“we,” “us,” or “our”) collects, uses, and
            shares your personal information when you visit our website, contact us, or use our services.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="border-b bg-white">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <h2 className="text-lg font-semibold text-gray-900">Contents</h2>
          <ul className="mt-3 grid gap-2 text-sm text-gray-700 md:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link href="#information-we-collect" className="hover:text-orange-600">
                Information We Collect
              </Link>
            </li>
            <li>
              <Link href="#how-we-use-information" className="hover:text-orange-600">
                How We Use Information
              </Link>
            </li>
            <li>
              <Link href="#cookies-and-tracking" className="hover:text-orange-600">
                Cookies and Tracking
              </Link>
            </li>
            <li>
              <Link href="#analytics-and-advertising" className="hover:text-orange-600">
                Analytics and Advertising
              </Link>
            </li>
            <li>
              <Link href="#sharing-of-information" className="hover:text-orange-600">
                Sharing of Information
              </Link>
            </li>
            <li>
              <Link href="#data-retention" className="hover:text-orange-600">
                Data Retention
              </Link>
            </li>
            <li>
              <Link href="#your-rights" className="hover:text-orange-600">
                Your Privacy Choices and Rights
              </Link>
            </li>
            <li>
              <Link href="#data-security" className="hover:text-orange-600">
                Data Security
              </Link>
            </li>
            <li>
              <Link href="#childrens-privacy" className="hover:text-orange-600">
                Children’s Privacy
              </Link>
            </li>
            <li>
              <Link href="#changes-to-this-policy" className="hover:text-orange-600">
                Changes to This Policy
              </Link>
            </li>
            <li>
              <Link href="#contact-us" className="hover:text-orange-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="mx-auto max-w-3xl text-gray-800">
          <section id="information-we-collect" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="mt-3">
              We collect information that you voluntarily provide and certain data that is collected automatically when
              you use our website.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                Contact information (e.g., name, email address, phone number) when you submit forms or request a quote.
              </li>
              <li>Project details you provide (e.g., property address, roof type, photos).</li>
              <li>
                Usage data such as IP address, browser type, pages visited, and referral source collected via cookies or
                similar technologies.
              </li>
              <li>Communications, including emails, phone calls, and messages exchanged with us.</li>
            </ul>
          </section>

          <section id="how-we-use-information" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">How We Use Information</h2>
            <p className="mt-3">
              We use your information to operate our business and provide quality services, including:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Responding to inquiries, scheduling inspections, and providing quotes.</li>
              <li>Performing services and managing customer relationships.</li>
              <li>Improving our website, services, and customer experience.</li>
              <li>
                Sending service updates, appointment reminders, or relevant marketing communications (you can opt out at
                any time).
              </li>
              <li>Complying with legal obligations and enforcing our agreements.</li>
            </ul>
          </section>

          <section id="cookies-and-tracking" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Cookies and Tracking Technologies</h2>
            <p className="mt-3">
              We use cookies and similar technologies to improve site functionality, measure performance, and understand
              how visitors interact with our site. You can control cookies through your browser settings. Disabling
              cookies may affect certain features.
            </p>
          </section>

          <section id="analytics-and-advertising" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Analytics and Advertising</h2>
            <p className="mt-3">
              We may use analytics tools to help us understand website traffic and usage. We may also work with
              advertising partners to show relevant ads. These partners may set cookies or use similar technologies to
              collect information about your activities on our site and other websites over time.
            </p>
            <p className="mt-3">
              Where required by law, we will request your consent before enabling non-essential cookies or similar
              tracking technologies.
            </p>
          </section>

          <section id="sharing-of-information" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Sharing of Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share information in the following circumstances:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                With service providers who help us operate our business (e.g., scheduling, communications, analytics),
                under appropriate confidentiality commitments.
              </li>
              <li>To comply with legal obligations or respond to lawful requests.</li>
              <li>In connection with a business transaction (merger, acquisition), where permitted by law.</li>
              <li>With your consent or at your direction.</li>
            </ul>
          </section>

          <section id="data-retention" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Data Retention</h2>
            <p className="mt-3">
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy,
              comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section id="your-rights" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Your Privacy Choices and Rights</h2>
            <p className="mt-3">
              Depending on your location, you may have rights such as requesting access to, correction of, or deletion
              of your personal information; objecting to or restricting certain processing; and withdrawing consent
              where we rely on consent. To exercise these rights, please contact us using the details below.
            </p>
            <p className="mt-3">
              You can opt out of marketing emails by using the unsubscribe link included in those messages, or by
              contacting us directly.
            </p>
          </section>

          <section id="data-security" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
            <p className="mt-3">
              We implement reasonable administrative, technical, and physical safeguards designed to protect personal
              information. No method of transmission or storage is 100% secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section id="childrens-privacy" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Children’s Privacy</h2>
            <p className="mt-3">
              Our services are not directed to children under 13, and we do not knowingly collect personal information
              from children. If you believe a child has provided us with personal information, please contact us so we
              can take appropriate action.
            </p>
          </section>

          <section id="changes-to-this-policy" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will
              update the “Last updated” date at the top of this page when changes occur.
            </p>
          </section>

          <section id="contact-us" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <address className="mt-3 not-italic">
              <div>{CONTACT_ADDRESS_LINE_1}</div>
              <div>{CONTACT_ADDRESS_LINE_2}</div>
              <div className="mt-2">
                Phone:{" "}
                <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`} className="text-orange-600 hover:underline">
                  {CONTACT_PHONE}
                </a>
              </div>
              <div className="mt-1">
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </address>
          </section>

          <div className="mt-12">
            <Link href="#privacy-policy-heading" className="text-sm text-gray-700 hover:text-orange-600 underline">
              Back to top
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
