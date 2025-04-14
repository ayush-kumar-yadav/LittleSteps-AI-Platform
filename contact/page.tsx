import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Heart, Shield, Star, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission: Supporting <span className="text-purple-600">Every Child's Journey</span>
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed">
                  At LittleSteps.AI, we're dedicated to empowering parents with the tools and knowledge they need to
                  nurture their child's unique development path.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Team of child development experts"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-6 -right-6 bg-purple-300 rounded-full p-4 shadow-lg">
                    <Heart className="h-6 w-6 text-purple-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <div className="mt-6 space-y-4 text-gray-500 text-left">
                <p>
                  LittleSteps.AI was founded in 2023 by a team of parents, pediatricians, and child development experts
                  who recognized a gap in the resources available to parents navigating their child's early years.
                </p>
                <p>
                  As parents ourselves, we understood the challenges of tracking developmental milestones, managing
                  healthcare needs, and finding reliable information tailored to each child's unique journey.
                </p>
                <p>
                  We created LittleSteps.AI to combine cutting-edge artificial intelligence with evidence-based child
                  development research, providing parents with personalized guidance exactly when they need it.
                </p>
                <p>
                  Our platform has since grown to support thousands of families worldwide, helping parents understand
                  their children's development and make informed decisions about their care and education.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card className="border-none shadow-md bg-purple-50">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">10,000+</h3>
                  <p className="text-gray-500">Families Supported</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">4.8/5</h3>
                  <p className="text-gray-500">Average Rating</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-teal-50">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">25+</h3>
                  <p className="text-gray-500">Child Development Experts</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1M+</h3>
                  <p className="text-gray-500">Milestones Tracked</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                The principles that guide everything we do at LittleSteps.AI
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Child-Centered</h3>
                <p className="text-gray-500">
                  We believe every child is unique, with their own developmental timeline. Our platform adapts to each
                  child's individual needs and growth patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Evidence-Based</h3>
                <p className="text-gray-500">
                  All our recommendations and insights are grounded in scientific research and validated by child
                  development experts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Family-Focused</h3>
                <p className="text-gray-500">
                  We support the entire family unit, recognizing that a child's development is influenced by their home
                  environment and caregivers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accessible</h3>
                <p className="text-gray-500">
                  We're committed to making child development resources accessible to all families, regardless of
                  background or circumstances.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-pink-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Privacy-First</h3>
                <p className="text-gray-500">
                  We maintain the highest standards of data privacy and security, ensuring your family's information is
                  always protected.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                <p className="text-gray-500">
                  We're constantly learning and evolving, using feedback from families and new research to enhance our
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">The passionate experts behind LittleSteps.AI</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Founder & CEO",
                  bio: "Pediatrician with 15+ years of experience and mother of two.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Michael Chen",
                  role: "CTO",
                  bio: "AI specialist with a background in child development technology.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  role: "Child Development Lead",
                  bio: "Child psychologist specializing in early childhood development.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "James Wilson",
                  role: "Head of Product",
                  bio: "Former educator with a passion for creating intuitive family tech.",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-purple-600 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link href="/contact">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl max-w-[800px]">
                Ready to start your child's development journey?
              </h2>
              <p className="mt-4 text-gray-600 max-w-[600px] mx-auto mb-8">
                Join thousands of parents who trust LittleSteps.AI to guide their children's growth and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/login?tab=register">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
