"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
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
import { Menu, Home, Building } from "lucide-react"

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-44 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <div className="relative">
            <Image
              src="/images/summit-roofing-logo.png"
              alt="Summit Roofing Professionals Logo"
              width={200}
              height={200}
              className="h-40 w-auto"
              priority
              sizes="200px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[260px] p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/residential-roofing"
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        )}
                      >
                        <Home className="h-4 w-4 text-orange-500" aria-hidden="true" />
                        <span className="font-medium">Residential</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/commercial-roofing"
                        className={cn(
                          "mt-1 flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        )}
                      >
                        <Building className="h-4 w-4 text-blue-600" aria-hidden="true" />
                        <span className="font-medium">Commercial</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/gallery">Gallery</Link>
              </NavigationMenuLink>
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
              <Link href="/" className="flex items-center mb-4" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/summit-roofing-logo.png"
                  alt="Summit Roofing Professionals Logo"
                  width={120}
                  height={120}
                  className="h-32 w-auto"
                  loading="lazy"
                  sizes="120px"
                />
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
                      Residential
                    </Link>
                    <Link
                      href="/services/commercial-roofing"
                      className="block py-2 font-semibold text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
