import type { Metadata } from "next"
import GalleryClientPage from "./gallery-client-page"
import ServicePageHero from "@/components/service-page-hero"

export const metadata: Metadata = {
  title: "Project Gallery | Summit Roofing Pros",
  description:
    "View our portfolio of completed residential and commercial roofing projects in Alabama and Georgia. See the quality craftsmanship of Summit Roofing Professionals.",
  openGraph: {
    title: "Project Gallery | Summit Roofing Pros",
    description:
      "View our portfolio of completed residential and commercial roofing projects in Alabama and Georgia. See the quality craftsmanship of Summit Roofing Professionals.",
    url: "/gallery",
    siteName: "Summit Roofing Professionals",
    images: [
      {
        url: "/images/gallery-hero-brick-home.png",
        width: 1200,
        height: 630,
        alt: "Gallery of completed roofing projects by Summit Roofing Professionals",
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
  return (
    <>
      <ServicePageHero
        imageUrl="/images/gallery-hero-brick-home.png"
        title="Our Project Gallery"
        subtitle="A Showcase of Our Quality & Craftsmanship"
      />
      <GalleryClientPage />
    </>
  )
}
