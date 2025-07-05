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
import { Menu, Mountain } from "lucide-react"

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

  const residentialLinks = [
    {
      title: "Residential Roofing Hub",
      href: "/services/residential-roofing",
      description: "High-quality roofing solutions for your home.",
    },
    { title: "Slate Roofing", href: "/services/slate-roofing", description: "Elegant and enduring slate." },
    {
      title: "Cedar Shake Roofing",
      href: "/services/cedar-shake-roofing",
      description: "Natural beauty and insulation.",
    },
    { title: "Tile Roofing", href: "/services/tile-roofing", description: "Durable and stylish clay or concrete." },
    {
      title: "Metal Shingles",
      href: "/services/metal-shingles",
      description: "Modern aesthetics, unmatched longevity.",
    },
    { title: "Roof Repairs", href: "/services/roof-repairs", description: "Prompt and effective repairs." },
  ]

  const commercialLinks = [
    {
      title: "Commercial Roofing Hub",
      href: "/services/commercial-roofing",
      description: "An overview of all our commercial services.",
    },
    {
      title: "Modified Bitumen",
      href: "/services/commercial/modified-bitumen",
      description: "Time-tested, multi-layer protection.",
    },
    {
      title: "Single-Ply (TPO/EPDM)",
      href: "/services/commercial/single-ply",
      description: "Modern, lightweight, energy-efficient.",
    },
    {
      title: "Fluid-Applied Roofing",
      href: "/services/commercial/fluid-applied",
      description: "Seamless, restorative coatings.",
    },
    {
      title: "Commercial Roof Repair",
      href: "/services/commercial/repair",
      description: "Fast and reliable repairs for all systems.",
    },
    {
      title: "Inspections & Maintenance",
      href: "/services/commercial/inspections-maintenance",
      description: "Proactive plans to protect your investment.",
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
                <div className="grid w-[600px] grid-cols-2 gap-4 p-4">
                  {/* Residential column */}
                  <div className="flex flex-col space-y-1">
                    <h3 className="px-3 py-2 font-medium text-orange-500">Residential Services</h3>
                    <ul className="flex flex-col">
                      {residentialLinks.map((link) => (
                        <ListItem key={link.title} href={link.href} title={link.title}>
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>

                  {/* Commercial column */}
                  <div className="flex flex-col space-y-1">
                    <h3 className="px-3 py-2 font-medium text-blue-600">Commercial Services</h3>
                    <ul className="flex flex-col">
                      {commercialLinks.map((link) => (
                        <ListItem key={link.title} href={link.href} title={link.title}>
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
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
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="residential" className="border-b-0">
                        <AccordionTrigger className="text-base font-semibold text-orange-500 hover:no-underline">
                          Residential
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          {residentialLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block py-2 text-gray-600 hover:text-orange-500"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {link.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="commercial" className="border-b-0">
                        <AccordionTrigger className="text-base font-semibold text-blue-600 hover:no-underline">
                          Commercial
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          {commercialLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block py-2 text-gray-600 hover:text-blue-600"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {link.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
