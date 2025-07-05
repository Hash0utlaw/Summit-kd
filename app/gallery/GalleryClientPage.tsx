"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import ServicePageHero from "@/components/service-page-hero"
import CtaSection from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    category: "Residential",
    location: "Birmingham, AL",
    imageUrl: "/images/gallery-residential-1.png",
    description: "A beautiful new architectural shingle roof for a suburban family home.",
  },
  {
    id: 2,
    category: "Commercial",
    location: "Atlanta, GA",
    imageUrl: "/images/gallery-commercial-1.png",
    description: "A durable and energy-efficient TPO single-ply system for a large commercial facility.",
  },
  {
    id: 3,
    category: "Specialty",
    location: "Peachtree City, GA",
    imageUrl: "/images/gallery-slate-1.png",
    description: "An elegant and timeless slate roof installation on a luxury estate.",
  },
  {
    id: 4,
    category: "Specialty",
    location: "Huntsville, AL",
    imageUrl: "/images/gallery-metal-1.png",
    description: "A modern standing seam metal roof, providing longevity and a sleek aesthetic.",
  },
  {
    id: 5,
    category: "Residential",
    location: "Columbus, GA",
    imageUrl: "/images/gallery-residential-2.png",
    description: "Complete roof replacement with high-definition shingles after storm damage.",
  },
  {
    id: 6,
    category: "Specialty",
    location: "Auburn, AL",
    imageUrl: "/images/gallery-tile-1.png",
    description: "A classic Mediterranean-style clay tile roof, perfect for Southern architecture.",
  },
  {
    id: 7,
    category: "Commercial",
    location: "Montgomery, AL",
    imageUrl: "/images/gallery-commercial-2.png",
    description: "Fluid-applied roof coating to restore and extend the life of an existing commercial roof.",
  },
  {
    id: 8,
    category: "Specialty",
    location: "Sandy Springs, GA",
    imageUrl: "/images/gallery-cedar-1.png",
    description: "A rustic and beautiful cedar shake roof that adds natural charm.",
  },
]

const filterCategories = ["All", "Residential", "Commercial", "Specialty"]

export default function GalleryClientPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeFilter))
    }
  }, [activeFilter])

  const openLightbox = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
  }

  const closeLightbox = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <ServicePageHero
        title="Our Work"
        subtitle="A Showcase of Quality Craftsmanship and Satisfied Customers"
        imageUrl="/images/gallery-hero.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap">
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category ? "bg-orange-500 hover:bg-orange-600" : "border-gray-300 text-gray-700"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openLightbox(project)}
              >
                <div className="relative">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.description}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white bg-orange-500 px-2 py-1 text-sm font-semibold rounded">
                      {project.category}
                    </span>
                    <h3 className="text-white text-lg font-bold mt-1">{project.location}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
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
              src={selectedProject.imageUrl || "/placeholder.svg"}
              alt={selectedProject.description}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">{selectedProject.location}</h3>
              <p className="text-gray-600 mt-2">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <CtaSection />
    </>
  )
}
