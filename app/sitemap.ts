import type { MetadataRoute } from "next"

/**
 * Generates an SEO-optimized sitemap for the Summit Roofing Professionals website.
 * This sitemap uses strategic priorities and change frequencies to help search engines
 * understand which pages are most important and how often they should be crawled.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.summitroofingprofessionals.com"
  const currentDate = new Date()

  // Homepage - highest priority, updated weekly with testimonials/projects
  const homepage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }

  // Core business pages - high priority, moderate update frequency
  const corePages = [
    {
      route: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      route: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.8, // Contact is crucial for conversions
    },
    {
      route: "/gallery",
      changeFrequency: "weekly" as const, // New projects added regularly
      priority: 0.6,
    },
    {
      route: "/financing",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      route: "/insurance-claims",
      changeFrequency: "monthly" as const,
      priority: 0.7, // Important for storm damage leads
    },
  ]

  // Primary service pages - highest business value
  const primaryServicePages = [
    {
      route: "/services/residential-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.95, // Core residential service
    },
    {
      route: "/services/commercial-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.95, // Core commercial service
    },
    {
      route: "/services/roof-repairs",
      changeFrequency: "monthly" as const,
      priority: 0.9, // High-frequency service
    },
  ]

  // Specific residential service pages - good search volume
  const residentialServicePages = [
    {
      route: "/services/architectural-shingles",
      changeFrequency: "monthly" as const,
      priority: 0.8, // Most popular residential option
    },
    {
      route: "/services/metal-shingles",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      route: "/services/slate-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.7, // Premium service, lower volume
    },
    {
      route: "/services/cedar-shake-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      route: "/services/tile-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]

  // Commercial service sub-pages - B2B focused
  const commercialServicePages = [
    {
      route: "/services/commercial/single-ply",
      changeFrequency: "monthly" as const,
      priority: 0.8, // Popular commercial service
    },
    {
      route: "/services/commercial/modified-bitumen",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      route: "/services/commercial/fluid-applied",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      route: "/services/commercial/energy-efficient",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      route: "/services/commercial/inspections-maintenance",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      route: "/services/commercial/repair",
      changeFrequency: "monthly" as const,
      priority: 0.8, // Emergency repairs are high-value
    },
  ]

  // Service area hub page
  const serviceAreaHub = {
    route: "/service-areas",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }

  // Major metropolitan service areas - highest local SEO value
  const majorServiceAreas = [
    {
      route: "/service-areas/birmingham-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.85, // Major market
    },
    {
      route: "/service-areas/atlanta-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.9, // Largest market
    },
    {
      route: "/service-areas/huntsville-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      route: "/service-areas/montgomery-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Secondary service areas - good local SEO value
  const secondaryServiceAreas = [
    {
      route: "/service-areas/columbus-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      route: "/service-areas/mobile-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      route: "/service-areas/augusta-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      route: "/service-areas/tuscaloosa-roofing",
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]

  // Helper function to create sitemap entries
  const createSitemapEntry = (page: { route: string; changeFrequency: any; priority: number }) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  })

  // Combine all pages into the sitemap
  return [
    homepage,
    ...corePages.map(createSitemapEntry),
    ...primaryServicePages.map(createSitemapEntry),
    ...residentialServicePages.map(createSitemapEntry),
    ...commercialServicePages.map(createSitemapEntry),
    createSitemapEntry(serviceAreaHub),
    ...majorServiceAreas.map(createSitemapEntry),
    ...secondaryServiceAreas.map(createSitemapEntry),
  ]
}
