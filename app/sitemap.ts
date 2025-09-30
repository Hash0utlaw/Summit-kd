import type { MetadataRoute } from "next"
import { getBlogPosts, getBlogCategories } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.summitroofingprofessionals.com"

  // Get dynamic blog content
  const blogPosts = getBlogPosts()
  const blogCategories = getBlogCategories()

  // Static pages with optimized priorities and change frequencies
  const staticPages = [
    // Homepage - highest priority, updated frequently
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },

    // Primary service pages - highest business priority
    {
      url: `${baseUrl}/services/residential-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/commercial-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/roof-repairs`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },

    // Contact and conversion pages - very high priority
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insurance-claims`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },

    // Important business pages - high priority
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Blog main page - high priority for content marketing
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Major service area pages - high local SEO priority
    {
      url: `${baseUrl}/service-areas/atlanta-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/service-areas/birmingham-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },

    // Other service area pages - medium-high priority
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

    // Residential service pages - medium-high priority
    {
      url: `${baseUrl}/services/architectural-shingles`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
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
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services/slate-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services/tile-roofing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },

    // Commercial service sub-pages - medium priority
    {
      url: `${baseUrl}/services/commercial/single-ply`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services/commercial/modified-bitumen`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services/commercial/fluid-applied`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services/commercial/repair`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/commercial/inspections-maintenance`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/commercial/energy-efficient`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },

    // Secondary business pages - medium priority
    {
      url: `${baseUrl}/financing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

    // Legal pages - lowest priority
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  const blogPostPages = blogPosts.map((post) => {
    const publishDate = new Date(post.publishedAt)
    const daysSincePublish = Math.floor((Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24))

    // Higher priority for newer posts, lower for older ones
    let priority = 0.7
    if (daysSincePublish < 30)
      priority = 0.8 // Recent posts
    else if (daysSincePublish < 90)
      priority = 0.75 // Moderately recent
    else if (daysSincePublish < 365)
      priority = 0.7 // Older posts
    else priority = 0.6 // Very old posts

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: "monthly" as const,
      priority,
    }
  })

  // Blog category pages - medium priority with weekly updates
  const blogCategoryPages = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }))

  const allPages = [...staticPages, ...blogPostPages, ...blogCategoryPages]
  return allPages.sort((a, b) => b.priority - a.priority)
}
