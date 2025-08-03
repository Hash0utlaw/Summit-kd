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
    image: "/images/residential/gallery/suburban-home-roof-replacement.jpeg",
    alt: "Beautiful suburban home with a new shingle roof by Summit Roofing.",
  },
  {
    id: 2,
    name: "Bill P.",
    location: "Georgia",
    rating: 5,
    date: "June 29, 2024",
    review:
      "We cannot say enough about the fabulous reroofing job the team at Summit Roofing Professionals did from start to finish... To say are pleased and satisfied is an understatement. This team is highly professional, hard-working, conscientious, and so very courteous!",
    image: "/images/testimonials/bill-p.jpeg",
    alt: "Customer Bill P. with a Summit Roofing representative in front of his new roof.",
  },
  {
    id: 3,
    name: "Rick B.",
    location: "Alabama",
    rating: 5,
    date: "July 6, 2024",
    review:
      "Davis got my whole roof replaced even after previously being denied by my insurance company. It pays to know the process... Every detail of my job was handled with excellence and diligence, something the owner probably learned during his military service.",
    image: "/images/testimonials/rick-b.jpeg",
    alt: "A new roof installed by Summit Roofing on Rick B.'s home.",
  },
  {
    id: 4,
    name: "Eric S.",
    location: "Alabama",
    rating: 5,
    date: "July 15, 2024",
    review:
      "The team at Summit Roofing was fantastic. They handled everything with my insurance and delivered a high-quality roof. The process was smooth and professional from start to finish. Highly recommend!",
    image: "/images/testimonials/eric-s.jpeg",
    alt: "Customer Eric S. getting a new roof from Summit Roofing Professionals.",
  },
  {
    id: 5,
    name: "Davis, Owner",
    location: "Alabama & Georgia",
    rating: 5,
    date: "August 1, 2025",
    review:
      "As the owner, I personally stand behind every roof we build. My commitment is to bring military precision, integrity, and top-tier craftsmanship to your home. We're not just building roofs; we're protecting families.",
    image: "/images/owner-in-front-of-house-1.jpeg",
    alt: "Davis, owner of Summit Roofing Professionals, in front of a completed residential roofing project.",
  },
  {
    id: 6,
    name: "Brooklyn Lundy",
    location: "Georgia",
    rating: 5,
    date: "March 18, 2024",
    review:
      "The guys at Summit Roofing made the hassle of getting a new roof stress-free! Their level of professionalism and efficiency is unmatched. They answered all my crazy questions and handled pretty much everything with insurance. I cannot thank them enough for all their help!",
    image: "/images/residential/gallery/architectural-shingle-estate.jpeg",
    alt: "High-end estate with a new architectural shingle roof by Summit Roofing.",
  },
  {
    id: 7,
    name: "Caitlin Foley",
    location: "Georgia",
    rating: 5,
    date: "March 18, 2024",
    review:
      "Summit Roofing just replaced my roof, and I'm thrilled! They got my insurance to pay so it didn't cost me a dollar! The team was super professional, quick, and friendly. They finished on time and my roof looks amazing 😍. Highly recommend!",
    image: "/images/residential/gallery/luxury-brick-home-roof.jpeg",
    alt: "Luxury brick home with a new roof and a Summit Roofing truck in the driveway.",
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
                  height={600}
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
