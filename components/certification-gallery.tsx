"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface CertificationGalleryProps {
  certificates: {
    src: string
    alt: string
  }[]
}

export default function CertificationGallery({ certificates }: CertificationGalleryProps) {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const openLightbox = (src: string) => {
    setSelectedCert(src)
  }

  const closeLightbox = () => {
    setSelectedCert(null)
  }

  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {certificates.map((cert, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg border aspect-[4/5]"
                  onClick={() => openLightbox(cert.src)}
                >
                  <Image
                    src={cert.src || "/placeholder.svg"}
                    alt={cert.alt}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-600 z-10"
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={selectedCert || "/placeholder.svg"}
              alt="Full size certificate"
              width={800}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
