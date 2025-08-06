import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Award, FileText } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img
          src="/images/roofer-craftsmanship-sunset.png"
          alt="Roofer demonstrating craftsmanship on a roof at sunset"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-4 md:px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Expert Roofing Solutions in
          <br />
          <span className="text-orange-500">Alabama & Georgia</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
          Professional roofing services with unmatched quality and customer satisfaction.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
            <Link href="/contact">
              <FileText className="mr-2 h-5 w-5" />
              Get a Free Estimate
            </Link>
          </Button>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-400" />
            <span>Fully Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-400" />
            <span>Lifetime Transferable Warranties</span>
          </div>
        </div>
      </div>
    </section>
  )
}
