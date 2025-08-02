import type { MetadataRoute } from "next"

/**
 * Generates the sitemap for the Summit Roofing Professionals website.
 * A sitemap helps search engines like Google understand the structure of the site
 * and discover all the important pages to crawl and index.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // The base URL of the production website.
  const baseUrl = "https://summitroofingprofessionals.com"

  // An array of all static, top-level pages.
  // These are core pages of the website.
  const staticPages = [
    "", // Homepage
    "/about",
    "/contact",
    "/gallery",
    "/financing",
    "/insurance-claims",
  ]

  // An array of all primary and secondary service pages.
  // These pages are crucial for business and have high priority.
  const servicePages = [
    "/services/residential-roofing",
    "/services/commercial-roofing",
    "/services/roof-repairs",
    "/services/architectural-shingles",
    "/services/slate-roofing",
    "/services/cedar-shake-roofing",
    "/services/tile-roofing",
    "/services/metal-shingles",
    "/services/commercial/modified-bitumen",
    "/services/commercial/single-ply",
    "/services/commercial/fluid-applied",
    "/services/commercial/energy-efficient",
    "/services/commercial/inspections-maintenance",
    "/services/commercial/repair",
  ]

  // An array of all service area pages.
  // These are important for local SEO.
  const serviceAreaPages = [
    "/service-areas",
    "/service-areas/birmingham-roofing",
    "/service-areas/atlanta-roofing",
    "/service-areas/huntsville-roofing",
    "/service-areas/montgomery-roofing",
    "/service-areas/columbus-roofing",
    "/service-areas/mobile-roofing",
    "/service-areas/augusta-roofing",
    "/service-areas/tuscaloosa-roofing",
  ]

  // Combine all page routes into a single array.
  const allRoutes = [...staticPages, ...servicePages, ...serviceAreaPages]

  // Map over all routes to generate the sitemap entries.
  return allRoutes.map((route) => {
    // Determine priority based on the page's importance.
    // Homepage gets the highest priority (1.0).
    // Core service and about pages get high priority (0.9).
    // Local service area pages get slightly lower but still high priority (0.8).
    const getPriority = () => {
      if (route === "") return 1.0
      if (route.startsWith("/service-areas")) return 0.8
      return 0.9
    }

    // Determine change frequency based on how often content is expected to update.
    // The homepage might be updated more frequently with new testimonials or projects.
    // Other pages are updated less often.
    const getChangeFrequency = () => {
      if (route === "") return "daily"
      return "weekly"
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(), // Use the build date as the last modified date.
      changeFrequency: getChangeFrequency(),
      priority: getPriority(),
    }
  })
}
