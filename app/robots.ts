import type { MetadataRoute } from "next"

/**
 * Generates the robots.txt file for the Summit Roofing Professionals website.
 * This file tells search engine crawlers which pages or files the crawler can or can't request from the site.
 * It's used to manage crawler traffic and prevent crawling of non-public or unimportant pages.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://summitroofingprofessionals.com"

  return {
    rules: [
      {
        // This rule applies to all user-agents (search engine crawlers).
        userAgent: "*",
        // Allow crawlers to access all content by default.
        allow: "/",
        // Disallow crawlers from accessing specific directories that don't contain
        // user-facing content, such as API routes or administrative areas.
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    // Provide the URL to the sitemap, helping crawlers discover all pages.
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
