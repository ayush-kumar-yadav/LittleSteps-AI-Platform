"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BabyIcon,
  Brain,
  Calendar,
  ChevronRight,
  HeartPulse,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chatbot"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-20 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                AI-Powered Child Development
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Growing together, <span className="text-purple-600">one step at a time</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Personalized guidance, milestone tracking, and AI-powered recommendations to help your child thrive at
                every stage.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/login?tab=register">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Happy children playing"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-6 -right-6 bg-yellow-300 rounded-full p-4 shadow-lg">
                  <Sparkles className="h-6 w-6 text-yellow-700" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-teal-300 rounded-full p-4 shadow-lg">
                  <Brain className="h-6 w-6 text-teal-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 floating">
          <div className="w-16 h-16 bg-pink-300 rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-20 left-10 floating" style={{ animationDelay: "0.5s" }}>
          <div className="w-12 h-12 bg-blue-300 rounded-full opacity-30"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How LittleSteps.AI Works</h2>
            <p className="mt-4 text-gray-500 md:text-xl/relaxed max-w-[700px] mx-auto">
              Our AI-powered platform adapts to your child's unique development journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-blue-50 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vaccination Tracker</h3>
                <p className="text-gray-500">
                  Stay on top of your child's immunization schedule with reminders and records.
                </p>
                <Button variant="link" className="mt-4 px-0" asChild>
                  <Link href="/dashboard">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Milestone Tracker</h3>
                <p className="text-gray-500">
                  Monitor your child's developmental milestones across physical, cognitive, and social domains.
                </p>
                <Button variant="link" className="mt-4 px-0" asChild>
                  <Link href="/dashboard">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nutrition Guide</h3>
                <p className="text-gray-500">
                  Get personalized nutrition recommendations based on your child's age and health needs.
                </p>
                <Button variant="link" className="mt-4 px-0" asChild>
                  <Link href="/nutrition">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
                <p className="text-gray-500">
                  Chat with our AI assistant for instant guidance on parenting questions and concerns.
                </p>
                <Button
                  variant="link"
                  className="mt-4 px-0"
                  onClick={() => document.getElementById("chat-trigger")?.click()}
                >
                  Try it now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Personalized for Every Child</h2>
              <p className="text-gray-500 mb-6">
                Every child develops at their own pace. Our AI technology adapts to your child's unique journey,
                providing personalized recommendations and insights that evolve as they grow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Age-appropriate milestone tracking and activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Customized nutrition and health recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Early detection of potential developmental concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Tailored guidance for parents at every stage</span>
                </li>
              </ul>
              <Button className="mt-6 rounded-full" asChild>
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mother and child using LittleSteps.AI app"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 bg-purple-100 rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">AI-Powered Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Profiles Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Little Ones</h2>
              <p className="mt-4 text-gray-500 max-w-[600px]">
                Create profiles for each of your children and track their unique development journeys
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 rounded-full" asChild>
              <Link href="/dashboard">
                View All Profiles <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Emma",
                age: "2 years 3 months",
                image: "/placeholder.svg?height=300&width=300",
                color: "bg-pink-100",
                progress: 85,
              },
              {
                name: "Noah",
                age: "4 years 1 month",
                image: "/placeholder.svg?height=300&width=300",
                color: "bg-blue-100",
                progress: 92,
              },
              {
                name: "Olivia",
                age: "8 months",
                image: "/placeholder.svg?height=300&width=300",
                color: "bg-purple-100",
                progress: 78,
              },
            ].map((child, index) => (
              <Link href="/dashboard" key={index} className="group">
                <Card className={`${child.color} border-none shadow-md transition-all duration-300 hover:shadow-lg`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={child.image || "/placeholder.svg"}
                            alt={child.name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
                          <BabyIcon className="h-4 w-4 text-purple-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{child.name}</h3>
                        <p className="text-gray-500">{child.age}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm font-bold">{child.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: `${child.progress}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between mt-4">
                        <div className="text-center">
                          <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center mx-auto">
                            <HeartPulse className="h-4 w-4 text-red-500" />
                          </div>
                          <p className="text-xs mt-1">Health</p>
                        </div>
                        <div className="text-center">
                          <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center mx-auto">
                            <Brain className="h-4 w-4 text-blue-500" />
                          </div>
                          <p className="text-xs mt-1">Cognitive</p>
                        </div>
                        <div className="text-center">
                          <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center mx-auto">
                            <Utensils className="h-4 w-4 text-green-500" />
                          </div>
                          <p className="text-xs mt-1">Nutrition</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full mt-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300"
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by Parents Everywhere</h2>
            <p className="mt-4 text-gray-500 max-w-[700px] mx-auto">See what parents are saying about LittleSteps.AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "LittleSteps.AI has been a game-changer for our family. The vaccination reminders alone have saved us so much stress!",
                name: "Sarah M.",
                role: "Mother of two",
                image: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "As a first-time dad, I was overwhelmed until I found this app. The AI assistant answers all my questions, day or night.",
                name: "James L.",
                role: "Father of one",
                image: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "The milestone tracker helped us identify early that our son might need speech therapy. Early intervention made all the difference.",
                name: "Emily K.",
                role: "Mother of three",
                image: "/placeholder.svg?height=64&width=64",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-200 p-4 mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-[800px]">
              Ready to start your child's development journey?
            </h2>
            <p className="mt-4 text-gray-600 max-w-[600px] mx-auto mb-8">
              Join thousands of parents who trust LittleSteps.AI to guide their children's growth and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/login?tab=register">Sign Up Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link href="/features">Take a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}
