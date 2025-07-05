import { FileText, Search, Award } from "lucide-react"

export default function InsuranceUspSection() {
  const benefits = [
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Expert Claim Assistance",
      description: "We handle the entire insurance process for you, from filing to approval.",
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Free Inspection & Claim Filing",
      description: "No upfront costs. We provide a thorough inspection and file the claim on your behalf.",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Potential Premium Reduction",
      description: "Upgrade your shingles for free and potentially lower your insurance premiums.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Full Roof Replacement Covered by Insurance</h2>
          <p className="mt-4 text-lg text-gray-600">
            Let our experts navigate the complexities of your insurance claim, ensuring you get the coverage you
            deserve.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
