import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getBlogPost, getRelatedPosts, getBlogCategories } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  ArrowRight,
  Quote,
  AlertCircle,
  CheckCircle,
  Star,
} from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://summitroofingprofessionals.com/blog/${post.slug}`,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  }
}

// Helper function to format content with enhanced styling
function formatBlogContent(content: string) {
  return (
    content
      // Main headings
      .replace(
        /^# (.+)$/gm,
        '<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-16 mb-8 leading-tight border-l-4 border-blue-600 pl-6">$1</h1>',
      )
      // Section headings
      .replace(
        /^## (.+)$/gm,
        '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3"><span class="w-2 h-8 bg-blue-600 rounded"></span>$1</h2>',
      )
      // Subsection headings
      .replace(
        /^### (.+)$/gm,
        '<h3 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 relative"><span class="absolute -left-4 top-1 w-2 h-2 bg-blue-400 rounded-full"></span>$1</h3>',
      )
      // Bold text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900 bg-yellow-50 px-1 rounded">$1</strong>')
      // Bullet points with enhanced styling
      .replace(
        /^- (.+)$/gm,
        '<li class="flex items-start gap-3 mb-3"><span class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span><span class="text-gray-700">$1</span></li>',
      )
      // Line breaks
      .replace(/\n/g, "<br />")
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post)
  const categories = getBlogCategories()
  const currentCategory = categories.find((cat) => cat.slug === post.category)

  const shareUrl = `https://summitroofingprofessionals.com/blog/${post.slug}`
  const shareTitle = encodeURIComponent(post.title)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://summitroofingprofessionals.com${post.featuredImage}`,
    url: shareUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: `https://summitroofingprofessionals.com${post.author.image}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Summit Roofing Professionals",
      logo: {
        "@type": "ImageObject",
        url: "https://summitroofingprofessionals.com/images/summit-roofing-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-6">
          <div className="container mx-auto px-4 md:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-200 hover:gap-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Category Badge */}
              <div className="flex justify-center mb-8">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-4 py-2 text-sm font-medium shadow-lg">
                  {currentCategory?.name}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h1>

              {/* Excerpt */}
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-100">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">Expert Authors</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="font-medium">{post.readingTime} min read</span>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm font-medium text-gray-700">Share this article:</span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="mb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="relative h-64 md:h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <Image
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Key Takeaways Box */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-12 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Key Takeaways</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Learn essential maintenance tips for Alabama and Georgia's unique climate
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Understand seasonal maintenance schedules and priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Identify when to DIY vs. when to call professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Save money through preventive care and early problem detection
                    </span>
                  </li>
                </ul>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg prose-gray max-w-none">
                <div
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: formatBlogContent(post.content),
                  }}
                />
              </div>

              {/* Expert Quote */}
              <div className="my-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 left-4 opacity-20">
                  <Quote className="h-16 w-16" />
                </div>
                <div className="relative z-10">
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                    "Proper roof maintenance in Alabama and Georgia isn't just about fixing problems—it's about
                    preventing them. The humid climate and severe weather patterns in our region require a proactive
                    approach that can save homeowners thousands of dollars in the long run."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{post.author.name}</p>
                      <p className="text-blue-200 text-sm">Summit Roofing Professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Safety First</h4>
                    <p className="text-amber-800">
                      Always prioritize safety when inspecting or maintaining your roof. When in doubt, contact
                      professional roofing contractors who have the proper equipment and expertise to handle roof work
                      safely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Topics Covered</h4>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-sm px-3 py-1 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-blue-100">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">About Our Team</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{post.author.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        GAF Master Elite Certified
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        NRCA Members
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Continue Reading</h2>
                  <p className="text-xl text-gray-600">Explore more expert roofing insights and tips</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white"
                    >
                      <div className="relative">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedPost.featuredImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white shadow-lg">
                            {categories.find((cat) => cat.slug === relatedPost.category)?.name}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(relatedPost.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {relatedPost.readingTime} min
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                          <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{relatedPost.excerpt}</p>

                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-200 hover:gap-3"
                        >
                          Read Full Article
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/roofer-working-sunset.png')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready for Professional Roofing Help?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get expert advice and free estimates from Alabama and Georgia's most trusted roofing professionals. Our
                certified team is ready to help protect your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services/residential-roofing"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
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
