import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Insurance Claims | Summit Roofing Professionals",
  description:
    "Storm damage help from inspection to claim approval. We document, guide, and restore your roof with your insurer.",
}

export default function InsuranceClaimsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero with provided Source URL */}
      <section aria-label="Insurance claims hero" className="relative isolate">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hail-hero-7R8Fr4voZJwC68inlLpWqNCQaaitJD.png"
            alt="Close-up of storm-soaked asphalt shingles with rain droplets"
            className="h-[48vh] w-full object-cover sm:h-[60vh] md:h-[70vh]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative container mx-auto flex h-[48vh] items-end px-4 py-12 sm:h-[60vh] md:h-[70vh] md:px-6 md:py-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Insurance Claims Made Easy</h1>
            <p className="mt-4 text-lg text-white/90">
              From inspection and documentation to adjuster meetings and final restoration, our team helps you navigate
              every step with clarity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/contact">Request Free Inspection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <Link href="#process">See Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple process section (optional content below hero) */}
      <section id="process" className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">1. Inspection & Documentation</h2>
            <p className="mt-2 text-muted-foreground">
              We assess storm damage, capture photos, and prepare a clear report for your insurer.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">2. Claim Guidance</h2>
            <p className="mt-2 text-muted-foreground">
              We help you file the claim, coordinate with your adjuster, and answer questions promptly.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">3. Restore & Warranty</h2>
            <p className="mt-2 text-muted-foreground">
              We install high‑quality materials, complete repairs or replacement, and back it with strong warranties.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
