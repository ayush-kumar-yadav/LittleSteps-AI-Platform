import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p className="max-w-xs text-gray-500">
              Personalized AI-powered guidance for your child's development journey, from infancy through adolescence.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="#" className="text-gray-500 hover:text-purple-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-purple-600">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LittleSteps.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
