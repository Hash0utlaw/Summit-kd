import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CtaSectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function CtaSection({
  title = "Get Your Free Roofing Estimate",
  description = "Don't wait for a small problem to become a major issue. Contact us today for a comprehensive, no-obligation inspection and estimate.",
  buttonText = "Request Free Estimate",
  buttonLink = "/contact",
}: CtaSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{description}</p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
