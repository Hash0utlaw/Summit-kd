"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

type ServicePageHeroProps = {
  title: string
  subtitle?: string
  imageUrl: string
  imageAlt?: string
  className?: string
  overlayClassName?: string
}

/**
 * Full-bleed hero with accessible, SEO-friendly image.
 * - Uses Next/Image for optimization
 * - Adds responsive sizes and priority for LCP
 * - Provides a descriptive alt fallback if not supplied
 */
export default function ServicePageHero({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  className,
  overlayClassName,
}: ServicePageHeroProps) {
  const alt =
    imageAlt ||
    `${title} - Summit Roofing Professionals | Alabama & Georgia roofing experts providing inspections, repairs, and replacements`

  return (
    <section aria-label={`${title} hero`} className={cn("relative isolate", className)}>
      <div className="absolute inset-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className={cn("absolute inset-0 bg-black/45", overlayClassName)} />
      </div>

      <div className="relative container mx-auto flex h-[48vh] items-end px-4 py-12 sm:h-[60vh] md:h-[70vh] md:px-6 md:py-16">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-4 text-lg text-white/90">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  )
}
