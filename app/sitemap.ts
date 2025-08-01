import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://summitroofingprofessionals.com"

  // Static pages
  const staticPages = ["", "/about", "/contact", "/gallery", "/financing", "/insurance-claims"]

  // Service pages
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

  // Service area pages
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

  const allPages = [...staticPages, ...servicePages, ...serviceAreaPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : page.startsWith("/service-areas") ? 0.8 : 0.9,
  }))
}
