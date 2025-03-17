'use client'

import { useState } from "react"
import { Rocket, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Pricing", href: "/#pricing" },
    { name: "Docs", href: "/docs" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full p-4">
      <div className="container max-w-screen-3xl">
        <div className="rounded-lg bg-background/95 shadow-md dark:bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-background/100">
          <div className="flex h-14 items-center px-4">
            <div className="flex items-center flex-1">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                  >
                    <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                  <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setIsOpen}
                  >
                    <Rocket className="mr-2 h-4 w-4" />
                    <span className="font-bold">PyLaunch</span>
                  </MobileLink>
                  <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                      {navItems.map((item) => (
                        <MobileLink
                          key={item.name}
                          href={item.href}
                          onOpenChange={setIsOpen}
                        >
                          {item.name}
                        </MobileLink>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Link className="flex items-center space-x-2" href="/">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="font-bold text-sm sm:text-base">PyLaunch</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center justify-center flex-1 space-x-4 lg:space-x-6 text-xl font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-end flex-1 space-x-2">
              <Button asChild className="hidden sm:inline-flex">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild className="sm:hidden" size="sm">
                <Link href="/get-started">Get PyLaunch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: {
  href: string;
  onOpenChange: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange(false)}
      className={`text-foreground/70 transition-colors hover:text-foreground ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}