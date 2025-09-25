"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import CtaSection from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    category: "Residential",
    location: "Auburn, AL",
    imageUrl: "/images/projects/auburn-residential-1.jpeg",
    description:
      "Stunning two-story home with complex architectural shingle roofing featuring multiple gables and dormers.",
    date: "2024",
    featured: true,
  },
  {
    id: 2,
    category: "Residential",
    location: "Auburn, AL",
    imageUrl: "/images/projects/auburn-residential-2.jpeg",
    description:
      "Professional architectural shingle installation with three-car garage and beautiful landscaping integration.",
    date: "2024",
    featured: true,
  },
  {
    id: 3,
    category: "Residential",
    location: "Birmingham, AL",
    imageUrl: "/images/gallery-residential-1.png",
    description: "A beautiful new architectural shingle roof for a suburban family home.",
    date: "2024",
  },
  {
    id: 4,
    category: "Commercial",
    location: "Atlanta, GA",
    imageUrl: "/images/gallery-commercial-1.png",
    description: "A durable and energy-efficient TPO single-ply system for a large commercial facility.",
    date: "2024",
  },
  {
    id: 5,
    category: "Specialty",
    location: "Peachtree City, GA",
    imageUrl: "/images/gallery-slate-1.png",
    description: "An elegant and timeless slate roof installation on a luxury estate.",
    date: "2024",
  },
  {
    id: 6,
    category: "Specialty",
    location: "Huntsville, AL",
    imageUrl: "/images/gallery-metal-1.png",
    description: "A modern standing seam metal roof, providing longevity and a sleek aesthetic.",
    date: "2024",
  },
  {
    id: 7,
    category: "Residential",
    location: "Columbus, GA",
    imageUrl: "/images/gallery-residential-2.png",
    description: "Complete roof replacement with high-definition shingles after storm damage.",
    date: "2024",
  },
  {
    id: 8,
    category: "Specialty",
    location: "Auburn, AL",
    imageUrl: "/images/gallery-tile-1.png",
    description: "A classic Mediterranean-style clay tile roof, perfect for Southern architecture.",
    date: "2024",
  },
  {
    id: 9,
    category: "Commercial",
    location: "Montgomery, AL",
    imageUrl: "/images/gallery-commercial-2.png",
    description: "Fluid-applied roof coating to restore and extend the life of an existing commercial roof.",
    date: "2024",
  },
  {
    id: 10,
    category: "Specialty",
    location: "Sandy Springs, GA",
    imageUrl: "/images/gallery-cedar-1.png",
    description: "A rustic and beautiful cedar shake roof that adds natural charm.",
    date: "2024",
  },
  {
    id: 11,
    category: "Specialty",
    location: "Luxury Residence",
    imageUrl: "/images/slate/gallery-2.png",
    description: "Multi-colored slate roof on a grand estate, showcasing a blend of grey, green, and red tiles.",
    date: "2024",
  },
  {
    id: 12,
    category: "Specialty",
    location: "Lakeside Estate",
    imageUrl: "/images/slate/gallery-3.png",
    description: "Expansive slate roof on a beautiful estate surrounded by vibrant autumn foliage.",
    date: "2024",
  },
  {
    id: 13,
    category: "Residential",
    location: "New Construction",
    imageUrl: "/images/slate/gallery-4.png",
    description: "Pristine grey slate roof installation on a new construction home with light brick exterior.",
    date: "2024",
  },
  {
    id: 14,
    category: "Specialty",
    location: "Detail Work",
    imageUrl: "/images/slate/gallery-5.png",
    description: "Expertly installed slate roof featuring copper flashing and snow guards for superior protection.",
    date: "2024",
  },
  {
    id: 15,
    category: "Specialty",
    location: "Historic Building",
    imageUrl: "/images/slate/gallery-6.png",
    description: "Durable slate roof with copper gutters and snow guards on a classic stone building.",
    date: "2024",
  },
  {
    id: 16,
    category: "Residential",
    location: "New Build",
    imageUrl: "/images/slate/gallery-1.png",
    description: "Side-angle view of a new grey slate roof on a home under construction.",
    date: "2024",
  },
  {
    id: 17,
    category: "Residential",
    location: "Sprawling Residential Roof",
    imageUrl: "/images/shingles/shingle-gallery-2.png",
    description: "Aerial view of a complete architectural shingle roof replacement on a large brick home.",
    date: "2024",
  },
  {
    id: 18,
    category: "Residential",
    location: "Ranch Home Roof",
    imageUrl: "/images/shingles/shingle-gallery-3.png",
    description: "New multi-tonal architectural shingle roof on a classic American ranch-style house.",
    date: "2024",
  },
  {
    id: 19,
    category: "Residential",
    location: "Complex Gable Roof",
    imageUrl: "/images/shingles/shingle-gallery-4.png",
    description: "Detailed view of architectural shingles on a home with complex gables and stone accents.",
    date: "2024",
  },
  {
    id: 20,
    category: "Specialty",
    location: "Modern Farmhouse",
    imageUrl: "/images/metal/metal-roof-2.png",
    description: "Sleek dark standing seam metal roof on a modern white farmhouse.",
    date: "2024",
  },
  {
    id: 21,
    category: "Specialty",
    location: "Complex Metal Roof",
    imageUrl: "/images/metal/gallery-1.png",
    description: "Aerial view of a dark standing seam metal roof with intricate hips and valleys.",
    date: "2024",
  },
  {
    id: 22,
    category: "Specialty",
    location: "Residential Metal Roof",
    imageUrl: "/images/metal/metal-roofing-1.png",
    description: "Light-colored standing seam metal roof on a large residential property.",
    date: "2024",
  },
  {
    id: 23,
    category: "Specialty",
    location: "Architectural Metal",
    imageUrl: "/images/metal/gallery-4.png",
    description: "Clean lines of a light-colored standing seam metal roof on a modern building.",
    date: "2024",
  },
  {
    id: 24,
    category: "Specialty",
    location: "Teal Metal Shingles",
    imageUrl: "/images/metal/metal-shingle-2.png",
    description: "Unique and durable teal-colored metal shingle roof.",
    date: "2024",
  },
]

const filterCategories = ["All", "Featured", "Residential", "Commercial", "Specialty"]

export default function GalleryClientPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    let filtered = projects
    if (activeFilter === "Featured") {
      filtered = projects.filter((p) => p.featured)
    } else if (activeFilter !== "All") {
      filtered = projects.filter((p) => p.category === activeFilter)
    }
    return filtered.sort((a, b) => b.id - a.id)
  }, [activeFilter])

  // Handle filter change
  const handleFilterChange = useCallback((category: string) => {
    setActiveFilter(category)
  }, [])

  // Lightbox navigation
  const navigateProject = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedProject) return

      const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id)
      let newIndex

      if (direction === "prev") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1
      } else {
        newIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0
      }

      setSelectedProject(filteredProjects[newIndex])
    },
    [selectedProject, filteredProjects],
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return

      switch (e.key) {
        case "Escape":
          setSelectedProject(null)
          break
        case "ArrowLeft":
          navigateProject("prev")
          break
        case "ArrowRight":
          navigateProject("next")
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject, navigateProject])

  return (
    <>
      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our completed roofing projects across Alabama and Georgia
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => handleFilterChange(category)}
                className={`transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
                {category === "Featured" && (
                  <Badge variant="secondary" className="ml-2 bg-orange-100 text-orange-800">
                    New
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid - All Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.description}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        project.category === "Residential"
                          ? "bg-green-100 text-green-800"
                          : project.category === "Commercial"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {project.category}
                    </Badge>
                    {project.featured && <Badge className="bg-orange-500 text-white">Featured</Badge>}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-colors"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateProject("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateProject("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] bg-gray-100">
              <Image
                src={selectedProject.imageUrl || "/placeholder.svg"}
                alt={selectedProject.description}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Badge
                  variant="outline"
                  className={`${
                    selectedProject.category === "Residential"
                      ? "border-green-200 text-green-800"
                      : selectedProject.category === "Commercial"
                        ? "border-blue-200 text-blue-800"
                        : "border-purple-200 text-purple-800"
                  }`}
                >
                  {selectedProject.category}
                </Badge>
                {selectedProject.featured && <Badge className="bg-orange-500 text-white">Featured</Badge>}
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPin className="h-4 w-4" />
                <span className="font-semibold">{selectedProject.location}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <CtaSection />
    </>
  )
}
