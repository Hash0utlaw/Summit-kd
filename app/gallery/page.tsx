import type { Metadata } from "next"
import GalleryClientPage from "./gallery-client-page"
import ServicePageHero from "@/components/service-page-hero"

export const metadata: Metadata = {
  title: "Project Gallery | Summit Roofing Pros",
  description:
    "Browse completed residential and commercial roofing projects across Alabama and Georgia. See real results — shingle, metal, slate, and tile roofs by Summit Roofing Professionals.",
  keywords: [
    "roofing project gallery",
    "completed roofing projects Alabama",
    "completed roofing projects Georgia",
    "roof replacement photos",
    "roofing portfolio",
    "before after roofing",
    "Summit Roofing projects",
  ],
  openGraph: {
    title: "Project Gallery | Summit Roofing Pros",
    description:
      "Browse completed residential and commercial roofing projects across Alabama and Georgia. Shingle, metal, slate, and tile roofs by Summit Roofing Professionals.",
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
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | Summit Roofing Pros",
    description:
      "Browse completed residential and commercial roofing projects across Alabama and Georgia by Summit Roofing Professionals.",
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
