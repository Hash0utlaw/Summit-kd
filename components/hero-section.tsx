"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-[500px] w-full">
      {/* Optimized Next/Image for background */}
      <Image
        src="/images/roofer-craftsmanship-sunset.png"
        alt="Summit Roofing professional inspecting a roof at sunset, showcasing quality craftsmanship in Alabama and Georgia."
        fill
        priority // Prioritize loading for LCP
        quality={85} // Slightly reduce quality for smaller file size
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Expert Roofing for Alabama & Georgia
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl text-balance">
              Licensed, Insured, and Veteran-Owned. We deliver military precision and top-tier craftsmanship to protect
              your home.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="/services/residential-roofing">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
