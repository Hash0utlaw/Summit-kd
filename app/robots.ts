import type { MetadataRoute } from "next"

/**
 * Generates the robots.txt file for the Summit Roofing Professionals website.
 * This file tells search engine crawlers which pages or files the crawler can or can't request from the site.
 * It's used to manage crawler traffic and prevent crawling of non-public or unimportant pages.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: "https://www.summitroofingprofessionals.com/sitemap.xml",
    host: "https://www.summitroofingprofessionals.com",
  }
}
