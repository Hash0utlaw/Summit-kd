import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getBlogPostsByCategory, getBlogCategory, getBlogCategories } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, ArrowRight, ArrowLeft } from "lucide-react"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getBlogCategory(params.category)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.name} Articles | Summit Roofing Blog`,
    description: `${category.description} - Expert insights from Summit Roofing Professionals serving Alabama and Georgia.`,
    openGraph: {
      title: `${category.name} | Summit Roofing Blog`,
      description: category.description,
      type: "website",
      url: `https://summitroofingprofessionals.com/blog/category/${category.slug}`,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getBlogCategory(params.category)
  const posts = getBlogPostsByCategory(params.category)
  const allCategories = getBlogCategories()

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/roofer-working-sunset.png')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Articles
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{category.name}</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">{category.description}</p>

            <div className="flex items-center justify-center gap-4 text-blue-200">
              <span>{category.count} articles</span>
              <span>•</span>
              <span>Expert insights and tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/blog">
                <Button variant="outline" className="hover:bg-blue-50 hover:border-blue-300 bg-transparent">
                  All Articles
                </Button>
              </Link>
              {allCategories.map((cat) => (
                <Link key={cat.id} href={`/blog/category/${cat.slug}`}>
                  <Button
                    variant={cat.slug === params.category ? "default" : "outline"}
                    className={
                      cat.slug === params.category ? "bg-blue-600 text-white" : "hover:bg-blue-50 hover:border-blue-300"
                    }
                  >
                    {cat.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white"
                  >
                    <div className="relative">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.featuredImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white shadow-lg">{category.name}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readingTime} min read
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={post.author.image || "/placeholder.svg"}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-600">{post.author.name}</span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-200 hover:gap-3"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Yet</h3>
                  <p className="text-gray-600 mb-8">
                    We're working on adding more content to this category. Check back soon for expert insights and tips!
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Browse All Articles
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Need Professional Roofing Help?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get expert advice and free estimates from Alabama and Georgia's most trusted roofing professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
