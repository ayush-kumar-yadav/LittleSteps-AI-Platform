import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent <span className="text-purple-600">Pricing</span>
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                Choose the perfect plan for your family's needs with no hidden fees or surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Basic Plan */}
              <Card className="border-none shadow-md relative overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Basic</CardTitle>
                  <CardDescription>Essential features for new parents</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-500 ml-2">/ month</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>1 child profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Basic milestone tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Vaccination reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Limited AI assistant queries (5/day)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Basic nutrition guidance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full" asChild>
                    <Link href="/login?tab=register&plan=basic">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Premium Plan */}
              <Card className="border-none shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-xs font-bold uppercase">
                  Most Popular
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <CardDescription>Complete features for growing families</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="text-gray-500 ml-2">/ month</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Up to 3 child profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Advanced milestone tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Complete vaccination management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited AI assistant queries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized nutrition plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Development analytics and reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/login?tab=register&plan=premium">Get Premium</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Family Plan */}
              <Card className="border-none shadow-md relative overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Family</CardTitle>
                  <CardDescription>Ultimate solution for larger families</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$14.99</span>
                    <span className="text-gray-500 ml-2">/ month</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited child profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>All Premium features included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Family calendar integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Multiple parent/caregiver accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Advanced data export options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dedicated family support specialist</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full" asChild>
                    <Link href="/login?tab=register&plan=family">Get Family Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Feature Comparison */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-4 text-left">Feature</th>
                      <th className="py-4 px-4 text-center">Basic</th>
                      <th className="py-4 px-4 text-center">Premium</th>
                      <th className="py-4 px-4 text-center">Family</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span>Child Profiles</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-60">Number of children you can add to your account</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">1</td>
                      <td className="py-4 px-4 text-center">Up to 3</td>
                      <td className="py-4 px-4 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span>AI Assistant Queries</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-60">Number of questions you can ask our AI assistant per day</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">5/day</td>
                      <td className="py-4 px-4 text-center">Unlimited</td>
                      <td className="py-4 px-4 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span>Nutrition Guidance</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-60">Personalized nutrition recommendations and meal planning</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">Basic</td>
                      <td className="py-4 px-4 text-center">Advanced</td>
                      <td className="py-4 px-4 text-center">Advanced</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span>Development Analytics</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-60">Detailed charts and insights about your child's development</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">Limited</td>
                      <td className="py-4 px-4 text-center">Full Access</td>
                      <td className="py-4 px-4 text-center">Full Access</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span>Customer Support</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-60">Level of customer support provided</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">Email</td>
                      <td className="py-4 px-4 text-center">Priority Email</td>
                      <td className="py-4 px-4 text-center">Dedicated Support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Find answers to common questions about our pricing and plans.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Can I change plans later?</h3>
                <p className="text-gray-500">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your
                  next billing cycle.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Is there a free trial?</h3>
                <p className="text-gray-500">
                  Yes, all paid plans come with a 14-day free trial. No credit card required to start.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">How secure is my child's data?</h3>
                <p className="text-gray-500">
                  We take data security very seriously. All data is encrypted and we never share your information with
                  third parties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-500">
                  Yes, you can cancel your subscription at any time with no cancellation fees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Do you offer annual billing?</h3>
                <p className="text-gray-500">
                  Yes, we offer annual billing with a 20% discount compared to monthly billing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-500">
                  We accept all major credit cards, PayPal, and Apple Pay for subscription payments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl max-w-[800px]">
                Start your child's development journey today
              </h2>
              <p className="mt-4 text-gray-600 max-w-[600px] mx-auto mb-8">
                Choose the plan that's right for your family and begin tracking your child's growth with LittleSteps.AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/login?tab=register">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Contact Sales</Link>
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
