import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  title: "Project Gallery | Summit Roofing Professionals",
  description:
    "View our portfolio of completed residential and commercial roofing projects in Alabama and Georgia. See the quality craftsmanship of Summit Roofing Professionals.",
  openGraph: {
    title: "Project Gallery | Summit Roofing Professionals",
    description:
      "View our portfolio of completed residential and commercial roofing projects in Alabama and Georgia. See the quality craftsmanship of Summit Roofing Professionals.",
    url: "/gallery",
    siteName: "Summit Roofing Professionals",
    images: [
      {
        url: "/images/gallery-hero.png",
        width: 1200,
        height: 630,
        alt: "Summit Roofing Professionals Project Gallery",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/gallery",
  },
}

export default function GalleryPage() {
  return <GalleryClientPage />
}
