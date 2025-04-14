import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Heart, Search, Tag, Clock, ArrowRight, Filter, Bell, User, Play, CheckCircle2 } from "lucide-react"

export default function Resources() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">GrowthGuide</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:underline">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Milestones
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Activities
            </Link>
            <Link href="/resources" className="text-sm font-medium text-sky-600 underline underline-offset-4">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Resources Library</h1>
            <p className="text-gray-500">Expert articles, guides, and activities for parents</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search resources..." className="pl-8" />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>

        <Tabs defaultValue="articles" className="mb-6">
          <TabsList>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Tag className="h-3 w-3" />
                        <span>Child Development</span>
                        <Clock className="h-3 w-3 ml-2" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">Understanding Your Child's Developmental Milestones</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">
                      Learn about the key developmental milestones for children aged 2-3 years and how to support their
                      growth.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0">
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Tag className="h-3 w-3" />
                        <span>Parenting Guide</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">Complete Guide to Toddler Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">
                      A comprehensive guide to ensuring your toddler gets the nutrition they need for healthy
                      development.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0">
                      View Guide
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Tag className="h-3 w-3" />
                        <span>Activity</span>
                        <Clock className="h-3 w-3 ml-2" />
                        <span>15 min</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">Sensory Play with Homemade Playdough</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">
                      Create homemade playdough and engage your child in sensory play that develops fine motor skills.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0">
                      View Activity
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Tag className="h-3 w-3" />
                        <span>Video</span>
                        <Clock className="h-3 w-3 ml-2" />
                        <span>8 min</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">Expert Tips for Managing Toddler Tantrums</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="aspect-video bg-slate-100 rounded-md flex items-center justify-center mb-2">
                      <Play className="h-8 w-8 text-slate-300" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Child psychologist Dr. Smith shares practical strategies for managing toddler tantrums
                      effectively.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0">
                      Watch Video
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Expert-Recommended Resources</CardTitle>
            <CardDescription>Curated by child development specialists</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 mb-2">
                      <BookOpen className="h-5 w-5 text-sky-600" />
                    </div>
                    <CardTitle className="text-base">Language Development Guide</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">
                      Essential strategies to support your child's language acquisition and communication skills.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Resource
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Join Our Parenting Community</CardTitle>
            <CardDescription>Connect with other parents and access exclusive resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4">
                  Join our community of parents to share experiences, ask questions, and access exclusive resources to
                  support your parenting journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Weekly expert Q&A sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Exclusive developmental activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Parent support groups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Early access to new features</span>
                  </li>
                </ul>
                <Button className="mt-4">Join Community</Button>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Parent community"
                  className="rounded-lg object-cover"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">GrowthGuide</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 GrowthGuide. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
