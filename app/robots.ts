import type { MetadataRoute } from "next"

/**
 * Generates the robots.txt file for the Summit Roofing Professionals website.
 * This file tells search engine crawlers which pages or files the crawler can or can't request from the site.
 * It's used to manage crawler traffic and prevent crawling of non-public or unimportant pages.
 *
 * SEO Best Practices Applied:
 * - Prioritizes Googlebot with no crawl delay for faster indexing
 * - Blocks unnecessary directories to focus crawl budget on important content
 * - Includes clear sitemap reference for efficient page discovery
 * - Sets canonical host to prevent duplicate content issues
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Prioritize Google's crawler with immediate access
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0, // No delay for Google to maximize crawl efficiency
      },
      {
        // Bing's crawler - also prioritized for search visibility
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1, // Slight delay to manage server load
      },
      {
        // All other crawlers with standard restrictions
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Block API routes (not user-facing content)
          "/admin/", // Block admin areas (if they exist)
          "/_next/", // Block Next.js internal files
          "/private/", // Block any private directories
          "/*.json$", // Block JSON files that aren't meant for indexing
          "/404", // Don't index error pages
          "/500", // Don't index error pages
        ],
        crawlDelay: 2, // Moderate delay for other crawlers to manage server resources
      },
    ],
    // Reference to the dynamically generated sitemap
    sitemap: "https://www.summitroofingprofessionals.com/sitemap.xml",
    // Canonical host declaration to prevent duplicate content issues
    host: "https://www.summitroofingprofessionals.com",
  }
}
