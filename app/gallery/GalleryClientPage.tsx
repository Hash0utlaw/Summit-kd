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
  {
    id: 9,
    category: "Specialty",
    location: "Luxury Residence",
    imageUrl: "/images/slate/gallery-2.png",
    description: "Multi-colored slate roof on a grand estate, showcasing a blend of grey, green, and red tiles.",
  },
  {
    id: 10,
    category: "Specialty",
    location: "Lakeside Estate",
    imageUrl: "/images/slate/gallery-3.png",
    description: "Expansive slate roof on a beautiful estate surrounded by vibrant autumn foliage.",
  },
  {
    id: 11,
    category: "Residential",
    location: "New Construction",
    imageUrl: "/images/slate/gallery-4.png",
    description: "Pristine grey slate roof installation on a new construction home with light brick exterior.",
  },
  {
    id: 12,
    category: "Specialty",
    location: "Detail Work",
    imageUrl: "/images/slate/gallery-5.png",
    description: "Expertly installed slate roof featuring copper flashing and snow guards for superior protection.",
  },
  {
    id: 13,
    category: "Specialty",
    location: "Historic Building",
    imageUrl: "/images/slate/gallery-6.png",
    description: "Durable slate roof with copper gutters and snow guards on a classic stone building.",
  },
  {
    id: 14,
    category: "Residential",
    location: "New Build",
    imageUrl: "/images/slate/gallery-1.png",
    description: "Side-angle view of a new grey slate roof on a home under construction.",
  },
  {
    id: 15,
    category: "Residential",
    location: "Sprawling Residential Roof",
    imageUrl: "/images/shingles/shingle-gallery-2.png",
    description: "Aerial view of a complete architectural shingle roof replacement on a large brick home.",
  },
  {
    id: 16,
    category: "Residential",
    location: "Ranch Home Roof",
    imageUrl: "/images/shingles/shingle-gallery-3.png",
    description: "New multi-tonal architectural shingle roof on a classic American ranch-style house.",
  },
  {
    id: 17,
    category: "Residential",
    location: "Complex Gable Roof",
    imageUrl: "/images/shingles/shingle-gallery-4.png",
    description: "Detailed view of architectural shingles on a home with complex gables and stone accents.",
  },
  {
    id: 18,
    category: "Specialty",
    location: "Modern Farmhouse",
    imageUrl: "/images/metal/metal-roof-2.png",
    description: "Sleek dark standing seam metal roof on a modern white farmhouse.",
  },
  {
    id: 19,
    category: "Specialty",
    location: "Complex Metal Roof",
    imageUrl: "/images/metal/gallery-1.png",
    description: "Aerial view of a dark standing seam metal roof with intricate hips and valleys.",
  },
  {
    id: 20,
    category: "Specialty",
    location: "Residential Metal Roof",
    imageUrl: "/images/metal/metal-roofing-1.png",
    description: "Light-colored standing seam metal roof on a large residential property.",
  },
  {
    id: 21,
    category: "Specialty",
    location: "Architectural Metal",
    imageUrl: "/images/metal/gallery-4.png",
    description: "Clean lines of a light-colored standing seam metal roof on a modern building.",
  },
  {
    id: 22,
    category: "Specialty",
    location: "Teal Metal Shingles",
    imageUrl: "/images/metal/metal-shingle-2.png",
    description: "Unique and durable teal-colored metal shingle roof.",
  },
  {
    id: 23,
    category: "Specialty",
    location: "Stone-Coated Metal Shingles",
    imageUrl: "/images/metal/metal-shingle-3.png",
    description: "Textured stone-coated metal shingles on a rustic log home.",
  },
  {
    id: 24,
    category: "Specialty",
    location: "Standing Seam Detail",
    imageUrl: "/images/metal/gallery-3.png",
    description: "Close-up of a dark standing seam metal roof under a cloudy sky.",
  },
  {
    id: 25,
    category: "Specialty",
    location: "Sunroom Metal Roof",
    imageUrl: "/images/metal/metal-roof.png",
    description: "Glossy standing seam metal roof reflecting the sun on a home extension.",
  },
  {
    id: 26,
    category: "Specialty",
    location: "Luxury Estate Cedar Roof",
    imageUrl: "/images/cedar/cedar-special.png",
    description: "Aerial view of a stunning new cedar shake roof with copper flashing on a luxury estate.",
  },
  {
    id: 27,
    category: "Specialty",
    location: "Classic Colonial Home",
    imageUrl: "/images/cedar/gallery-2.png",
    description: "New golden-brown cedar shake roof on a classic colonial home with brick chimneys.",
  },
  {
    id: 28,
    category: "Specialty",
    location: "Holiday Decorated Home",
    imageUrl: "/images/cedar/gallery-3.png",
    description: "Weathered cedar shake roof on a white brick home elegantly decorated for the holidays.",
  },
  {
    id: 29,
    category: "Specialty",
    location: "Stone and Cedar Home",
    imageUrl: "/images/cedar/gallery-4.png",
    description: "Textured cedar shake style roof complementing a beautiful stone-sided home.",
  },
  {
    id: 30,
    category: "Specialty",
    location: "Poolside Cedar Roof",
    imageUrl: "/images/cedar/gallery-6.png",
    description: "A beautifully weathered cedar shake roof on a stone home overlooking a luxury pool and patio.",
  },
  {
    id: 31,
    category: "Specialty",
    location: "Rustic Modern Design",
    imageUrl: "/images/cedar/gallery-7.png",
    description: "Aged cedar shake roof on a rustic-modern home with dark siding and large windows.",
  },
]

const filterCategories = ["All", "Residential", "Commercial", "Specialty"]

export default function GalleryClientPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  useEffect(() => {
    const sortedProjects = [...projects].sort((a, b) => a.id - b.id)
    if (activeFilter === "All") {
      setFilteredProjects(sortedProjects)
    } else {
      setFilteredProjects(sortedProjects.filter((p) => p.category === activeFilter))
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
