"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import CtaSection from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    location: "Auburn, AL",
    imageUrl: "/images/projects/auburn-residential-1.jpeg",
    description:
      "Stunning two-story home with complex architectural shingle roofing featuring multiple gables and dormers.",
    date: "2024",
    featured: true,
  },
  {
    id: 2,
    location: "Auburn, AL",
    imageUrl: "/images/projects/auburn-residential-2.jpeg",
    description:
      "Professional architectural shingle installation with three-car garage and beautiful landscaping integration.",
    date: "2024",
    featured: true,
  },
  {
    id: 3,
    location: "Birmingham, AL",
    imageUrl: "/images/residential/gallery/luxury-brick-home-roof.jpeg",
    description: "A beautiful new architectural shingle roof for a suburban family home.",
    date: "2024",
  },
  {
    id: 4,
    location: "Atlanta, GA",
    imageUrl: "/images/commercial/tpo/gallery-2.jpeg",
    description: "A durable and energy-efficient TPO single-ply system for a large commercial facility.",
    date: "2024",
  },
  {
    id: 5,
    location: "Peachtree City, GA",
    imageUrl: "/images/slate/gallery-2.png",
    description: "An elegant and timeless slate roof installation on a luxury estate.",
    date: "2024",
  },
  {
    id: 6,
    location: "Huntsville, AL",
    imageUrl: "/images/metal/gallery-1.png",
    description: "A modern standing seam metal roof, providing longevity and a sleek aesthetic.",
    date: "2024",
  },
  {
    id: 7,
    location: "Columbus, GA",
    imageUrl: "/images/residential/gallery/suburban-home-roof-replacement.jpeg",
    description: "Complete roof replacement with high-definition shingles after storm damage.",
    date: "2024",
  },
  {
    id: 8,
    location: "Auburn, AL",
    imageUrl: "/images/tile/gallery-1.png",
    description: "A classic Mediterranean-style clay tile roof, perfect for Southern architecture.",
    date: "2024",
  },
  {
    id: 9,
    location: "Montgomery, AL",
    imageUrl: "/images/commercial/tpo/gallery-4.jpeg",
    description: "Fluid-applied roof coating to restore and extend the life of an existing commercial roof.",
    date: "2024",
  },
  {
    id: 10,
    location: "Sandy Springs, GA",
    imageUrl: "/images/cedar/gallery-2.png",
    description: "A rustic and beautiful cedar shake roof that adds natural charm.",
    date: "2024",
  },
  {
    id: 11,
    location: "Luxury Residence",
    imageUrl: "/images/slate/gallery-3.png",
    description: "Multi-colored slate roof on a grand estate, showcasing a blend of grey, green, and red tiles.",
    date: "2024",
  },
  {
    id: 12,
    location: "Lakeside Estate",
    imageUrl: "/images/residential/gallery/atlanta-estate-roof.jpeg",
    description: "Expansive slate roof on a beautiful estate surrounded by vibrant autumn foliage.",
    date: "2024",
  },
]

const ITEMS_PER_PAGE = 12

export default function GalleryClientPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({})
  const [isLoading, setIsLoading] = useState(false)

  const sortedProjects = useMemo(() => {
    return projects.sort((a, b) => {
      // Featured projects first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      // Then by ID descending
      return b.id - a.id
    })
  }, [])

  // Memoized paginated projects
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return sortedProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [sortedProjects, currentPage])

  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE)

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // Handle image load
  const handleImageLoad = useCallback((projectId: number) => {
    setImageLoadStates((prev) => ({ ...prev, [projectId]: true }))
  }, [])

  // Lightbox navigation
  const navigateProject = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedProject) return

      const currentIndex = sortedProjects.findIndex((p) => p.id === selectedProject.id)
      let newIndex

      if (direction === "prev") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : sortedProjects.length - 1
      } else {
        newIndex = currentIndex < sortedProjects.length - 1 ? currentIndex + 1 : 0
      }

      setSelectedProject(sortedProjects[newIndex])
    },
    [selectedProject, sortedProjects],
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Project Gallery</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Explore our portfolio of exceptional roofing projects across Alabama and Georgia. From residential homes
              to commercial buildings, see the quality craftsmanship that sets us apart.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{sortedProjects.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Alabama & Georgia</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2024 Portfolio</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="/landing/storm-claim"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Test: Storm Damage Insurance Landing Page
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-300 rounded-lg h-64 mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-3 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.description}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                          imageLoadStates[project.id] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(project.id)}
                        loading="lazy"
                      />
                      {!imageLoadStates[project.id] && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <div className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Featured
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-1 text-sm mb-1">
                          <MapPin className="h-3 w-3" />
                          <span className="font-medium">{project.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {project.location}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 ${
                        currentPage === page ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"
                      }`}
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent z-10 p-4">
              <div className="flex justify-between items-start">
                <div className="text-white">
                  {selectedProject.featured && (
                    <div className="mb-2">
                      <div className="bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-semibold inline-block">
                        Featured
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{selectedProject.location}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                  aria-label="Close image viewer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateProject("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateProject("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
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

            {/* Footer */}
            <div className="p-6 bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedProject.location}</span>
                    <span>•</span>
                    <Calendar className="h-4 w-4" />
                    <span>{selectedProject.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CtaSection />
    </>
  )
}
