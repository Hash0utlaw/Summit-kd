import type { MetadataRoute } from "next"
import { getBlogPosts, getBlogCategories } from "@/lib/blog"

// Constants for better maintainability
const BASE_URL = "https://www.summitroofingprofessionals.com"
const LAST_MAJOR_UPDATE = new Date('2024-10-01')

// Priority levels for clarity
const PRIORITIES = {
  HOMEPAGE: 1.0,
  PRIMARY_SERVICE: 0.95,
  CONVERSION: 0.9,
  IMPORTANT: 0.85,
  HIGH: 0.8,
  MEDIUM_HIGH: 0.75,
  MEDIUM: 0.7,
  MEDIUM_LOW: 0.65,
  LOW: 0.6,
  VERY_LOW: 0.3,
} as const

// Change frequencies
const FREQUENCIES = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
  YEARLY: "yearly",
} as const

// Page configuration
const PAGE_CONFIGS = {
  homepage: { priority: PRIORITIES.HOMEPAGE, frequency: FREQUENCIES.WEEKLY },
  primaryService: { priority: PRIORITIES.PRIMARY_SERVICE, frequency: FREQUENCIES.MONTHLY },
  conversion: { priority: PRIORITIES.CONVERSION, frequency: FREQUENCIES.MONTHLY },
  important: { priority: PRIORITIES.IMPORTANT, frequency: FREQUENCIES.MONTHLY },
  high: { priority: PRIORITIES.HIGH, frequency: FREQUENCIES.WEEKLY },
  mediumHigh: { priority: PRIORITIES.MEDIUM_HIGH, frequency: FREQUENCIES.MONTHLY },
  medium: { priority: PRIORITIES.MEDIUM, frequency: FREQUENCIES.MONTHLY },
  mediumLow: { priority: PRIORITIES.MEDIUM_LOW, frequency: FREQUENCIES.MONTHLY },
  low: { priority: PRIORITIES.LOW, frequency: FREQUENCIES.MONTHLY },
  veryLow: { priority: PRIORITIES.VERY_LOW, frequency: FREQUENCIES.YEARLY },
}

type PageConfig = {
  url: string
  config: keyof typeof PAGE_CONFIGS
  lastModified?: Date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts()
  const blogCategories = getBlogCategories()

  // Define pages with configurations
  const pages: PageConfig[] = [
    // Homepage & core pages
    { url: '', config: 'homepage' },
    { url: '/about', config: 'important' },
    { url: '/contact', config: 'conversion' },
    { url: '/gallery', config: 'high' },
    
    // Primary services (high conversion pages)
    { url: '/services/residential-roofing', config: 'primaryService' },
    { url: '/services/commercial-roofing', config: 'primaryService' },
    { url: '/services/roof-repairs', config: 'primaryService' },
    { url: '/roofing', config: 'primaryService' }, // SEO landing page
    
    // Conversion pages
    { url: '/insurance-claims', config: 'conversion' },
    { url: '/financing', config: 'low' },
    
    // Blog
    { url: '/blog', config: 'high' },
    
    // Service areas hub
    { url: '/service-areas', config: 'important' },
    
    // Major service areas (local SEO)
    { url: '/service-areas/atlanta-roofing', config: 'mediumHigh' },
    { url: '/service-areas/birmingham-roofing', config: 'mediumHigh' },
    { url: '/service-areas/augusta-roofing', config: 'medium' },
    { url: '/service-areas/columbus-roofing', config: 'medium' },
    { url: '/service-areas/huntsville-roofing', config: 'medium' },
    { url: '/service-areas/mobile-roofing', config: 'medium' },
    { url: '/service-areas/montgomery-roofing', config: 'medium' },
    { url: '/service-areas/tuscaloosa-roofing', config: 'medium' },
    
    // Residential services
    { url: '/services/architectural-shingles', config: 'mediumHigh' },
    { url: '/services/metal-shingles', config: 'medium' },
    { url: '/services/cedar-shake-roofing', config: 'mediumLow' },
    { url: '/services/slate-roofing', config: 'mediumLow' },
    { url: '/services/tile-roofing', config: 'mediumLow' },
    
    // Commercial services
    { url: '/services/commercial/single-ply', config: 'mediumLow' },
    { url: '/services/commercial/modified-bitumen', config: 'mediumLow' },
    { url: '/services/commercial/fluid-applied', config: 'mediumLow' },
    { url: '/services/commercial/repair', config: 'medium' },
    { url: '/services/commercial/inspections-maintenance', config: 'medium' },
    { url: '/services/commercial/energy-efficient', config: 'mediumLow' },
    
    // Legal
    { url: '/privacy-policy', config: 'veryLow' },
  ]

  // Build static pages
  const staticPages = pages.map(({ url, config, lastModified }) => {
    const pageConfig = PAGE_CONFIGS[config]
    return {
      url: `${BASE_URL}${url}`,
      lastModified: lastModified || LAST_MAJOR_UPDATE,
      changeFrequency: pageConfig.frequency as const,
      priority: pageConfig.priority,
    }
  })

  // Build blog post pages with dynamic priority
  const blogPostPages = blogPosts.map((post) => {
    const publishDate = new Date(post.publishedAt)
    const daysSincePublish = Math.floor(
      (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24)
    )

    // Priority based on freshness
    let priority = PRIORITIES.MEDIUM
    if (daysSincePublish < 30) priority = PRIORITIES.HIGH
    else if (daysSincePublish < 90) priority = PRIORITIES.MEDIUM_HIGH
    else if (daysSincePublish < 365) priority = PRIORITIES.MEDIUM
    else priority = PRIORITIES.LOW

    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: FREQUENCIES.MONTHLY as const,
      priority,
    }
  })

  // Build blog category pages
  const blogCategoryPages = blogCategories.map((category) => ({
    url: `${BASE_URL}/blog/category/${category.slug}`,
    lastModified: LAST_MAJOR_UPDATE,
    changeFrequency: FREQUENCIES.WEEKLY as const,
    priority: PRIORITIES.MEDIUM_LOW,
  }))

  // Combine and sort by priority
  const allPages = [...staticPages, ...blogPostPages, ...blogCategoryPages]
  return allPages.sort((a, b) => b.priority - a.priority)
}
