"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AnimatedLogo } from "../logo-animation"
import { ThemeToggle } from "../theme-toggle"
// import { useRouter } from "next/navigation"
// import { ThemeToggle } from "./theme-toggle"
// import { AnimatedLogo } from "./animated-logo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Digital Marketing Solutions",
    href: "/contact",
    description: "Transform your business with comprehensive digital solutions.",
  },
  {
    title: "Branding & Design",
    href: "/contact",
    description: "Expert guidance to navigate your digital transformation.",
  },
  {
    title: "E-commerce & Strategy",
    href: "/contact",
    description: "Grow Online with Our best E-commerce strategies",
  },
  {
    title: "Software Development & Web Solutions",
    href: "/contact",
    description: "Build scalable solutions tailored to your specific needs.",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  // const router = useRouter();

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   } else {
  //     // Navigate to home and scroll smoothly after navigation
  //     router.push(`/?scrollTo=${sectionId}`);
  //   }
  // };
  

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white dark:bg-background">
      <div className="container mx-auto px-4 lg:px-8 flex h-20 items-center">
        <div className="mr-8 lg:mr-20">
          <AnimatedLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Link href="/about" className="text-sm font-medium text-gray-900 dark:text-white">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-900 dark:text-white">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px] md:grid-cols-2">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link href="/our-team" className="text-sm font-medium text-gray-900 dark:text-white">
                  Our Team
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing-plans" className="text-sm font-medium text-gray-900 dark:text-white">
                  Pricing Plans
                </Link>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/contact" className="text-sm font-medium text-gray-900 dark:text-white">
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 lg:space-x-4">
          <ThemeToggle />
          {/* <Button
            variant="ghost"
            className="hidden lg:inline-flex text-sm font-medium hover:bg-primary hover:text-primary-foreground px-3"
            onClick={() => scrollToSection("what-sets-us-apart")}
          >
            What Sets Us Apart
          </Button> */}
          <Link href={"/book-a-call"}>
            <Button
              variant="default"
              className="hidden lg:inline-flex text-sm font-medium bg-primary text-white hover:bg-primary/90 px-4"
            >
              BOOK A SESSION
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                  HOME
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  ABOUT
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  CONTACT US
                </Link>
                <Link href="/who-we-are" onClick={() => setIsOpen(false)}>
                  BOOK A SESSION
                </Link>
                {/* <Button
                  className="w-full"
                  onClick={() => {
                    scrollToSection("what-sets-us-apart")
                    setIsOpen(false)
                  }}
                >
                  What Sets Us Apart
                </Button> */}
                {/* <Button className="w-full">Explore Careers</Button> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

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

