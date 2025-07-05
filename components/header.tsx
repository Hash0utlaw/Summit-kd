"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, Mountain, Home, Building } from "lucide-react"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const residentialServiceLinks = [
    {
      title: "Residential Roofing",
      href: "/services/residential-roofing",
      description: "High-quality roofing solutions for your home.",
    },
    {
      title: "Slate Roofing",
      href: "/services/slate-roofing",
      description: "Elegant and enduring slate for a timeless look.",
    },
    {
      title: "Cedar Shake Roofing",
      href: "/services/cedar-shake-roofing",
      description: "Natural beauty and excellent insulation.",
    },
    {
      title: "Tile Roofing",
      href: "/services/tile-roofing",
      description: "Durable and stylish clay or concrete tiles.",
    },
    {
      title: "Metal Shingles",
      href: "/services/metal-shingles",
      description: "Modern aesthetics with unmatched longevity.",
    },
  ]

  const commercialServiceLinks = [
    {
      title: "Commercial Roofing Hub",
      href: "/services/commercial-roofing",
      description: "An overview of all our commercial services.",
    },
    {
      title: "Modified Bitumen",
      href: "/services/commercial/modified-bitumen",
      description: "Time-tested, multi-layer protection for flat roofs.",
    },
    {
      title: "Single-Ply (TPO/EPDM)",
      href: "/services/commercial/single-ply",
      description: "Modern, lightweight, and energy-efficient systems.",
    },
    {
      title: "Fluid-Applied Roofing",
      href: "/services/commercial/fluid-applied",
      description: "Seamless, restorative coatings to extend roof life.",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-orange-500" />
          <span className="font-bold text-lg text-gray-800">Summit Roofing</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2 ">
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-50 to-orange-100 p-6 no-underline outline-none focus:shadow-md"
                        href="/services/residential-roofing"
                      >
                        <Home className="h-6 w-6 text-orange-500" />
                        <div className="mb-2 mt-4 text-lg font-medium text-orange-800">Residential Services</div>
                        <p className="text-sm leading-tight text-orange-700">
                          Protecting your home with high-quality roofing solutions, from repairs to full replacements.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {residentialServiceLinks.map((service) => (
                    <ListItem key={service.title} href={service.href} title={service.title}>
                      {service.description}
                    </ListItem>
                  ))}

                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                        href="/services/commercial-roofing"
                      >
                        <Building className="h-6 w-6 text-blue-600" />
                        <div className="mb-2 mt-4 text-lg font-medium text-blue-800">Commercial Services</div>
                        <p className="text-sm leading-tight text-blue-700">
                          Durable and efficient systems for businesses, industrial facilities, and multi-family
                          properties.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {commercialServiceLinks.map((service) => (
                    <ListItem key={service.title} href={service.href} title={service.title}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/insurance-claims" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Insurance Claims</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Gallery</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/contact">Get Free Inspection</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
            <div className="grid gap-2 p-4">
              <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsMenuOpen(false)}>
                <Mountain className="h-6 w-6 text-orange-500" />
                <span className="font-bold text-lg text-gray-800">Summit Roofing</span>
              </Link>
              <Link
                href="/"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b-0">
                  <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-orange-500 py-2 hover:no-underline">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <Link
                      href="/services/residential-roofing"
                      className="block py-2 font-semibold text-gray-600 hover:text-orange-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Residential Services
                    </Link>
                    <Link
                      href="/services/commercial-roofing"
                      className="block py-2 font-semibold text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial Services
                    </Link>
                    <Link
                      href="/services/roof-repairs"
                      className="block py-2 font-semibold text-gray-600 hover:text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Roof Repairs
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href="/insurance-claims"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Insurance Claims
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Free Inspection
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
