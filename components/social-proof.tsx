import Image from "next/image"
import { Star, Calendar, Award } from "lucide-react"

const featuredReviews = [
  {
    name: "Rick B.",
    location: "Alabama",
    review:
      "Davis got my whole roof replaced even after previously being denied by my insurance company. Every detail was handled with excellence and diligence.",
    image: "/images/testimonials/rick-b.jpeg",
    rating: 5,
  },
  {
    name: "Bill P.",
    location: "Georgia",
    review: "This team is highly professional, hard-working, conscientious, and so very courteous! You get an A+.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8435.PNG-kHcxPRiMJUmvv5ALmv0d3Ieh2Sy3Ph.jpeg",
    rating: 5,
  },
  {
    name: "Caitlin Foley",
    location: "Georgia",
    review:
      "They got my insurance to pay so it didn't cost me a dollar! The team was super professional, quick, and friendly.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8443.PNG-SOft8s856MTd8SjxEp1uvij3H9eGvZ.jpeg",
    rating: 5,
  },
]

const stats = [
  {
    icon: Calendar,
    number: "15+",
    label: "Years Experience",
  },
  {
    icon: Star,
    number: "5.0",
    label: "Average Rating",
  },
  {
    icon: Award,
    number: "100%",
    label: "Satisfaction Rate",
  },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Reviews */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Homeowners Across Alabama & Georgia</h3>
          <p className="text-xl text-gray-600">See what our customers are saying about their experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredReviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 italic">"{review.review}"</blockquote>

              <div className="flex items-center">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={`${review.name} customer review`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-gray-600 text-sm">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Veteran Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
