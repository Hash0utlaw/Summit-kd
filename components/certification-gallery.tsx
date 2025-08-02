"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-lg border"
            onClick={() => openLightbox(cert.src)}
          >
            <Image
              src={cert.src || "/placeholder.svg"}
              alt={cert.alt}
              width={500}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

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
