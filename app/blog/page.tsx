import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts, getBlogCategories } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, Calendar, ArrowRight, Search, BookOpen, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Roofing Blog | Expert Tips & Insights | Summit Roofing Professionals",
  description:
    "Stay informed with expert roofing tips, maintenance guides, and industry insights from Summit Roofing Professionals. Serving Alabama and Georgia homeowners.",
  keywords: [
    "roofing blog",
    "roof maintenance tips",
    "Alabama roofing",
    "Georgia roofing",
    "roof repair guides",
    "roofing experts",
  ],
  openGraph: {
    title: "Expert Roofing Blog | Summit Roofing Professionals",
    description:
      "Get expert roofing advice, maintenance tips, and industry insights from Alabama and Georgia's trusted roofing professionals.",
    type: "website",
    url: "https://summitroofingprofessionals.com/blog",
    images: [
      {
        url: "/images/blog/roof-maintenance-guide.png",
        width: 1200,
        height: 630,
        alt: "Summit Roofing Blog",
      },
    ],
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()
  const categories = getBlogCategories()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Summit Roofing Professionals Blog",
    description:
      "Expert roofing tips, maintenance guides, and industry insights from Alabama and Georgia's trusted roofing experts.",
    url: "https://summitroofingprofessionals.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Summit Roofing Professionals",
      logo: {
        "@type": "ImageObject",
        url: "https://summitroofingprofessionals.com/images/summit-roofing-logo.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://summitroofingprofessionals.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/roofer-working-sunset.png')] bg-cover bg-center" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Expert Roofing Insights & Tips
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-md">
                Stay informed with professional advice, maintenance guides, and industry insights from Alabama and
                Georgia's trusted roofing experts.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-3 w-full rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-blue-600 transition-all backdrop-blur-sm"
                >
                  All Articles
                </Button>
                {categories.slice(0, 4).map((category) => (
                  <Link key={category.id} href={`/blog/category/${category.slug}`}>
                    <Button
                      variant="outline"
                      className="bg-transparent text-white border-white/30 hover:bg-white hover:text-blue-600 transition-all backdrop-blur-sm"
                    >
                      {category.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-xl text-gray-600">Expert insights to help you maintain and protect your roof</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white"
                  >
                    <div className="relative">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={post.featuredImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white shadow-lg">
                          {categories.find((cat) => cat.slug === post.category)?.name}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed text-base">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src={post.author.image || "/placeholder.svg"}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200 hover:gap-3"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Content Teaser */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">More Expert Content Coming Soon</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're constantly adding new articles, guides, and insights to help you make informed decisions about
                your roofing needs. Stay tuned for more expert content covering everything from seasonal maintenance to
                advanced roofing technologies.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Seasonal Guides</h3>
                  <p className="text-sm text-gray-600">Comprehensive seasonal maintenance and preparation guides</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Material Comparisons</h3>
                  <p className="text-sm text-gray-600">
                    In-depth analysis of different roofing materials and their benefits
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry Insights</h3>
                  <p className="text-sm text-gray-600">Latest trends and innovations in the roofing industry</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Get Expert Consultation
                </Link>
                <Link
                  href="/services/residential-roofing"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Professional Roofing Help?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                While our blog provides valuable insights, nothing replaces professional expertise. Get a free
                consultation from our certified roofing specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services/residential-roofing"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
