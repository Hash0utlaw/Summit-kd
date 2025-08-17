import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/404",
          "/500",
        ],
      },
    ],
    sitemap: "https://www.summitroofingprofessionals.com/sitemap.xml",
    host: "https://www.summitroofingprofessionals.com",
  }
}
