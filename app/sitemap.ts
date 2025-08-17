import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.summitroofingprofessionals.com"

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insurance-claims`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas/atlanta-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/augusta-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/birmingham-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/columbus-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/huntsville-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/mobile-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/montgomery-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/tuscaloosa-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/residential-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/commercial-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/roof-repairs`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/architectural-shingles`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/metal-shingles`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/slate-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/tile-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/cedar-shake-roofing`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/commercial/single-ply`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/commercial/modified-bitumen`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/commercial/fluid-applied`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/commercial/energy-efficient`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/commercial/inspections-maintenance`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/commercial/repair`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}
