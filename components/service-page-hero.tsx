interface ServicePageHeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default function ServicePageHero({ title, subtitle, imageUrl }: ServicePageHeroProps) {
  return (
    <section className="relative bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover opacity-40" />
      </div>
      <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  )
}
