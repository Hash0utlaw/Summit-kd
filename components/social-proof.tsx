import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "John D.",
    location: "Birmingham, AL",
    text: "Summit Roofing was incredible. They handled my insurance claim flawlessly and gave me a beautiful new roof. Highly recommend!",
    avatar: "/images/smiling-man.png",
  },
  {
    name: "Sarah P.",
    location: "Atlanta, GA",
    text: "The team was professional, efficient, and the quality of their work is top-notch. My commercial property's roof has never been better.",
    avatar: "/images/diverse-woman-smiling.png",
  },
  {
    name: "Mike R.",
    location: "Huntsville, AL",
    text: "Fast, reliable, and honest. They came out for an emergency repair and saved us from major water damage. True professionals.",
    avatar: "/images/smiling-man-hat.png",
  },
]

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trusted by Your Neighbors</h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our satisfied customers have to say about their experience with Summit Roofing Professionals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
