import type { MetadataRoute } from "next"
import { getBlogPosts, getBlogCategories } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://summitroofingprofessionals.com"

  // Get dynamic blog content
  const blogPosts = getBlogPosts()
  const blogCategories = getBlogCategories()

  // Static pages with their priorities and change frequencies
  const staticPages = [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },

    // Main service and contact pages - high priority
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/residential-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/commercial-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/roof-repairs`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },

    // Important business pages - medium-high priority
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insurance-claims`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Main blog page - high priority for content marketing
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Service area pages - medium priority
    {
      url: `${baseUrl}/service-areas/atlanta-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/birmingham-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/augusta-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/columbus-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/huntsville-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/mobile-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/montgomery-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/tuscaloosa-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },

    // Specific service pages - medium priority
    {
      url: `${baseUrl}/services/architectural-shingles`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/metal-shingles`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/cedar-shake-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/slate-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/tile-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },

    // Commercial service sub-pages - medium priority
    {
      url: `${baseUrl}/services/commercial/single-ply`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/commercial/modified-bitumen`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/commercial/fluid-applied`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/commercial/repair`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/commercial/inspections-maintenance`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/commercial/energy-efficient`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

    // Secondary pages - lower priority
    {
      url: `${baseUrl}/financing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },

    // Legal pages - lowest priority
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  // Dynamic blog posts - medium-high priority for SEO
  const blogPostPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog category pages - medium priority
  const blogCategoryPages = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPostPages, ...blogCategoryPages]
}
