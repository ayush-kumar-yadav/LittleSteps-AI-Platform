import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="LittleSteps.AI Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-purple-600">
            LittleSteps<span className="text-blue-500">.AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-purple-600">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-purple-600">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-purple-600">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-purple-600">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-purple-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-medium hover:text-purple-600">
            Sign In
          </Link>
          <Button asChild className="rounded-full">
            <Link href="/login?tab=register">Get Started</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium hover:text-purple-600">
                  Home
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-purple-600">
                  Features
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-purple-600">
                  Pricing
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-purple-600">
                  About
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-purple-600">
                  Contact
                </Link>
                <Link href="/login" className="text-sm font-medium hover:text-purple-600">
                  Sign In
                </Link>
                <Button asChild className="mt-4 rounded-full">
                  <Link href="/login?tab=register">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
