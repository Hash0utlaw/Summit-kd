import Image from "next/image"

const certifications = [
  {
    name: "GAF Master Elite",
    logo: "/images/certifications/gaf-master-elite.png",
    description: "GAF Master Elite® Roofing Contractor",
  },
  {
    name: "Owens Corning Preferred",
    logo: "/images/certifications/owens-corning-preferred.png",
    description: "Owens Corning Preferred Contractor",
  },
  {
    name: "IKO Premier Contractor",
    logo: "/images/certifications/iko-premier-contractor.png",
    description: "IKO Craftsman Premier Contractor",
  },
  {
    name: "Uniflex Premier Contractor",
    logo: "/images/certifications/uniflex-logo.png",
    description: "Uniflex Authorized Premier Contractor",
  },
  {
    name: "NRCA Member",
    logo: "/images/certifications/nrca-member.png",
    description: "National Roofing Contractors Association Member",
  },
  {
    name: "BBB Accredited",
    logo: "/images/certifications/bbb-accredited.png",
    description: "Better Business Bureau Accredited Business",
  },
  {
    name: "Alabama Licensed",
    logo: "/images/certifications/alabama-license.png",
    description: "Licensed & Insured in Alabama",
  },
  {
    name: "Georgia Licensed",
    logo: "/images/certifications/georgia-license.png",
    description: "Licensed & Insured in Georgia",
  },
]

export default function CertificationLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certified & Trusted</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our certifications and partnerships ensure the highest quality workmanship and materials.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group text-center p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image src={cert.logo || "/placeholder.svg"} alt={cert.description} fill className="object-contain" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto">
            These certifications represent our commitment to excellence, ongoing education, and adherence to the highest
            industry standards. When you choose Summit Roofing, you're choosing a team that's recognized by the
            industry's leading organizations.
          </p>
        </div>
      </div>
    </section>
  )
}
