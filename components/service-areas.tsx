import { MapPin } from "lucide-react"

export default function ServiceAreas() {
  const alabamaCities = ["Birmingham", "Huntsville", "Montgomery", "Mobile", "Tuscaloosa"]
  const georgiaCities = ["Atlanta", "Columbus", "Augusta", "Macon", "Savannah"]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Serving Communities Across Alabama & Georgia</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are proud to be local roofing experts, providing reliable services to homeowners and businesses in
            numerous cities.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">Alabama</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center md:text-left">
              {alabamaCities.map((city) => (
                <li key={city} className="text-gray-600 p-2 bg-white rounded shadow-sm">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">Georgia</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center md:text-left">
              {georgiaCities.map((city) => (
                <li key={city} className="text-gray-600 p-2 bg-white rounded shadow-sm">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
