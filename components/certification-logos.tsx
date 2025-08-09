import { ShieldCheck } from "lucide-react"

type Certification = {
  name: string
  description?: string
}

const certifications: Certification[] = [
  { name: "GAF Master Elite", description: "GAF Master Elite® Roofing Contractor" },
  { name: "Owens Corning Preferred", description: "Owens Corning Preferred Contractor" },
  { name: "IKO Premier Contractor", description: "IKO Craftsman Premier Contractor" },
  { name: "Uniflex Premier Contractor", description: "Uniflex Authorized Premier Contractor" },
  { name: "NRCA Member", description: "National Roofing Contractors Association Member" },
  { name: "BBB Accredited", description: "Better Business Bureau Accredited Business" },
  { name: "Alabama Licensed", description: "Licensed & Insured in Alabama" },
  { name: "Georgia Licensed", description: "Licensed & Insured in Georgia" },
]

export default function CertificationLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Certified & Trusted</h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Our credentials reflect a commitment to quality, safety, and professionalism.
          </p>
        </div>

        {/* Names-only, accessible, responsive grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              aria-label={cert.description ? `${cert.name} — ${cert.description}` : cert.name}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">{cert.name}</h3>
                  {cert.description ? (
                    <p className="mt-1 text-sm text-gray-600">{cert.description}</p>
                  ) : (
                    <span className="sr-only">{cert.name}</span>
                  )}
                </div>
              </div>

              {/* subtle accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
              />
            </li>
          ))}
        </ul>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            These recognitions signify ongoing training, rigorous standards, and trusted manufacturer partnerships.
            Choose Summit Roofing with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
