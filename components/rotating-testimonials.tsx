"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Will Wilson",
    location: "Alabama",
    rating: 5,
    date: "April 28, 2024",
    review:
      "Truly the best experience I have ever had with a roofing company. Very personable and professional. Quick and painless. My problem was found and fixed within the hour. Can not recommend enough!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8442%20%281%29.PNG-2H4IOd158zW9xvc2THvoLOJeWSQv3o.jpeg",
    alt: "Will Wilson customer review for Summit Roofing Professionals",
  },
  {
    id: 2,
    name: "Bill P.",
    location: "Georgia",
    rating: 5,
    date: "June 29, 2024",
    review:
      "We cannot say enough about the fabulous reroofing job the team at Summit Roofing Professionals did from start to finish, from initial consultation with us and our insurance company to the wonderful finish. To say are pleased and satisfied is an understatement. This team is highly professional, hard-working, conscientious, and so very courteous! They went out of their way to accommodate us at every turn, from coverage of shrubs and plants to placing all our outdoor furniture back in the exact spot! Their clean-up was swift and immaculate and their attention to detail was amazing. But most of all we were so impressed by their courtesy and manners! Thank you, Summit Roofing Professionals! You get an A+.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8435.PNG-kHcxPRiMJUmvv5ALmv0d3Ieh2Sy3Ph.jpeg",
    alt: "Bill P. customer review for Summit Roofing Professionals",
  },
  {
    id: 3,
    name: "Rick B.",
    location: "Alabama",
    rating: 5,
    date: "July 6, 2024",
    review:
      "Davis got my whole roof replaced even after previously being denied by my insurance company. It pays to know the process and how to work the system insurance companies set up for their (not its customers) benefit. Every detail of my job was handled with excellence and diligence, something the owner probably learned during his military service. Davis even came back after my job was closed out to make sure every detail was taken care of.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8436.PNG-mXDJt2UhWchZl5nhPDzqsz1bOE8ltX.jpeg",
    alt: "Rick B. customer review for Summit Roofing Professionals",
  },
  {
    id: 4,
    name: "Brooklyn Lundy",
    location: "Georgia",
    rating: 5,
    date: "March 18, 2024",
    review:
      "The guys at Summit Roofing made the hassle of getting a new roof stress-free! Their level of professionalism and efficiency is unmatched. They answered all my crazy questions and handled pretty much everything with insurance. I cannot thank them enough for all their help!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8444.PNG-hdpDEnvZNzFIGXP2XhH3G1o6XmnUYw.jpeg",
    alt: "Brooklyn Lundy customer review for Summit Roofing Professionals",
  },
  {
    id: 5,
    name: "Dustin Hudmon",
    location: "Alabama",
    rating: 5,
    date: "April 29, 2024",
    review: "Great company! Went above and beyond!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8438.PNG-Ww03EAqESdy3u2rUvls9GyhEsOa7cE.jpeg",
    alt: "Dustin Hudmon customer review for Summit Roofing Professionals",
  },
  {
    id: 6,
    name: "Caitlin Foley",
    location: "Georgia",
    rating: 5,
    date: "March 18, 2024",
    review:
      "Summit Roofing just replaced my roof, and I'm thrilled! They got my insurance to pay so it didn't cost me a dollar! The team was super professional, quick, and friendly. They finished on time and my roof looks amazing 😍. Highly recommend!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8443.PNG-SOft8s856MTd8SjxEp1uvij3H9eGvZ.jpeg",
    alt: "Caitlin Foley customer review for Summit Roofing Professionals",
  },
  {
    id: 7,
    name: "Rachel Nolan",
    location: "Alabama",
    rating: 5,
    date: "April 21, 2024",
    review:
      "I had a great experience with this company. They completed the work efficiently and ensured everything was thoroughly cleaned up afterward. The crew was polite, respectful, and maintained a high level of professionalism throughout the entire project. I highly recommend them for anyone in need of roofing services.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8439.PNG-lR8DxegipB0UoGy8WkXfYSFexwYmev.jpeg",
    alt: "Rachel Nolan customer review for Summit Roofing Professionals",
  },
  {
    id: 8,
    name: "Rick Byrd",
    location: "Georgia",
    rating: 5,
    date: "May 7, 2024",
    review:
      "High-quality company operated by a high-quality individual. Davis always did what he said he would do, when he said he would do it. I had been denied a roof claim 2 years ago, so I was reluctant to try again; however, Davis made it happen this time. His approach working with insurance companies is highly successful, because he knows what they look for and provides it. My roof approval was quick and painless.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8434.PNG-hCgY3NHkInlx0RpdwwU5UiRy3fajUl.jpeg",
    alt: "Rick Byrd customer review for Summit Roofing Professionals",
  },
]

export default function RotatingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50" aria-label="Customer Testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied customers across Alabama and Georgia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{currentTestimonial.review}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <cite className="not-italic">
                    <div className="font-semibold text-gray-900 text-lg">{currentTestimonial.name}</div>
                    <div className="text-gray-600">
                      {currentTestimonial.location} • {currentTestimonial.date}
                    </div>
                  </cite>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Summit Roofing Professionals",
            review: testimonials.map((testimonial) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: testimonial.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: testimonial.rating,
                bestRating: 5,
              },
              reviewBody: testimonial.review,
              datePublished: testimonial.date,
            })),
          }),
        }}
      />
    </section>
  )
}
