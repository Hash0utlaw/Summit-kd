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
 * Compact, accessible hero:
 * - Uses Next/Image for optimization (priority for LCP)
 * - Reduced vertical height for better balance
 * - Keeps overlay for legibility and attention
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

      {/* Reduced height across breakpoints for a smaller, balanced hero */}
      <div className="relative container mx-auto flex h-[36vh] items-end px-4 py-10 sm:h-[42vh] sm:py-12 md:h-[50vh] md:px-6 md:py-14">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-3 text-base text-white/90 sm:mt-4 sm:text-lg">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  )
}
