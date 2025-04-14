import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Baby,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle2,
  HeartPulse,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Syringe,
  Utensils,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Your <span className="text-purple-600">Child's Development</span>
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                Discover how LittleSteps.AI helps you track, understand, and support your child's unique development
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Syringe className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Vaccination Tracker</CardTitle>
                  <CardDescription>Never miss an important immunization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized vaccination schedule based on your child's age</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Timely reminders for upcoming vaccinations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Digital record of completed immunizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Information about each vaccine and its importance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Milestone Tracker</CardTitle>
                  <CardDescription>Monitor developmental progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Age-appropriate milestone tracking across all development domains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Visual progress indicators and achievement celebrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Early detection of potential developmental concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized activities to support milestone achievement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Utensils className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Nutrition Guide</CardTitle>
                  <CardDescription>Optimize your child's diet</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Age-specific nutritional recommendations and meal plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Food tracking with nutritional analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Allergy and preference management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Healthy recipe suggestions for picky eaters</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>AI Assistant</CardTitle>
                  <CardDescription>Get expert guidance anytime</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>24/7 AI-powered parenting assistant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized advice based on your child's profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Evidence-based responses to common parenting questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Seamless integration with all platform features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-pink-100 w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Growth Analytics</CardTitle>
                  <CardDescription>Visualize development progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive growth charts and development graphs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Comparison with standard developmental curves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Trend analysis across all developmental domains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Shareable reports for healthcare providers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Health Records</CardTitle>
                  <CardDescription>Keep medical information organized</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Secure storage of medical history and records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Medication tracking and reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Doctor appointment scheduling and history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Growth measurements and health metrics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">How LittleSteps.AI Works</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Our platform uses advanced AI to provide personalized guidance for your child's unique development
                journey.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                    <Baby className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="absolute top-0 right-0 rounded-full bg-purple-100 w-6 h-6 flex items-center justify-center border-2 border-white">
                    <span className="text-sm font-bold text-purple-600">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Create Profile</h3>
                <p className="text-gray-500">
                  Add your child's information to create a personalized development profile.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute top-0 right-0 rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center border-2 border-white">
                    <span className="text-sm font-bold text-blue-600">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                <p className="text-gray-500">
                  Record milestones, vaccinations, nutrition, and other important development data.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                    <Sparkles className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="absolute top-0 right-0 rounded-full bg-teal-100 w-6 h-6 flex items-center justify-center border-2 border-white">
                    <span className="text-sm font-bold text-teal-600">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Get Insights</h3>
                <p className="text-gray-500">
                  Receive AI-powered recommendations and insights based on your child's unique development pattern.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                    <HeartPulse className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="absolute top-0 right-0 rounded-full bg-pink-100 w-6 h-6 flex items-center justify-center border-2 border-white">
                    <span className="text-sm font-bold text-pink-600">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Support Growth</h3>
                <p className="text-gray-500">
                  Use our personalized activities and resources to support your child's optimal development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-100 p-4 mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl max-w-[800px]">
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
                  <Link href="/pricing">View Pricing</Link>
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
