import { Shield, Award, Users, Wrench } from "lucide-react"

const credentials = [
  {
    icon: Shield,
    title: "Veteran Owned and Operated",
    description: "Military precision and dedication in every project",
  },
  {
    icon: Award,
    title: "Licensed and Insured",
    description: "Fully certified and protected for your peace of mind",
  },
  {
    icon: Users,
    title: "Residential, Commercial, Industrial, and Specialty Roofing",
    description: "Complete roofing solutions for every need",
  },
  {
    icon: Wrench,
    title: "Insurance Claims Specialists",
    description: "Expert navigation of insurance processes",
  },
]

export default function CompanyCredentials() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Summit Roofing Professionals?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Experience the difference of working with Alabama and Georgia's most trusted roofing experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6 group-hover:bg-orange-400 transition-colors duration-300">
                <credential.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{credential.title}</h3>
              <p className="text-blue-200 leading-relaxed">{credential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
