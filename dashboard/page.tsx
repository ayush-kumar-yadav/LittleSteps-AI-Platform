import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Activity,
  Baby,
  BabyIcon,
  BarChart3,
  Bell,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  HeartPulse,
  Plus,
  Settings,
  Shield,
  Star,
  Syringe,
  User,
  Utensils,
} from "lucide-react"
import { DashboardNav } from "@/components/dashboard-nav"
import { ChatBot } from "@/components/chatbot"

export default function Dashboard() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <DashboardNav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-6">
          <div className="flex flex-1 items-center gap-4">
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
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Welcome back, Sarah <span className="wave">👋</span>
              </h1>
              <p className="text-gray-500">Here's what's happening with Emma's development</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                <BabyIcon className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Emma, 2 years 3 months</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Physical Development</CardTitle>
                <Activity className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-gray-500">On track for age</p>
                <Progress value={85} className="h-2 mt-2" />
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Cognitive Development</CardTitle>
                <Brain className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-gray-500">Above average for age</p>
                <Progress value={92} className="h-2 mt-2" />
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Social Development</CardTitle>
                <User className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-gray-500">On track for age</p>
                <Progress value={78} className="h-2 mt-2" />
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Nutrition Status</CardTitle>
                <Utensils className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Good</div>
                <p className="text-xs text-gray-500">Balanced diet</p>
                <Progress value={80} className="h-2 mt-2" />
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList className="grid grid-cols-4 md:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="vaccines">Vaccines</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Upcoming Vaccines</CardTitle>
                    <CardDescription>Next scheduled immunizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                          <Syringe className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">MMR (2nd dose)</p>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3 text-gray-500" />
                            <p className="text-sm text-gray-500">Due in 2 weeks</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                          <Syringe className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">Varicella</p>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3 text-gray-500" />
                            <p className="text-sm text-gray-500">Due in 2 weeks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="link" className="mt-4 px-0">
                      View all vaccines
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Milestones</CardTitle>
                    <CardDescription>Latest achievements in development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Speaks in 3-4 word sentences</p>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3 text-gray-500" />
                            <p className="text-sm text-gray-500">Achieved 2 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Jumps with both feet</p>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3 text-gray-500" />
                            <p className="text-sm text-gray-500">Achieved 1 week ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="link" className="mt-4 px-0">
                      View all milestones
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Nutrition Insights</CardTitle>
                    <CardDescription>Dietary recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-purple-50 p-4">
                        <p className="text-sm">
                          <span className="font-medium">Protein intake:</span> Emma needs more protein-rich foods.
                          Consider adding more eggs, yogurt, and lean meats to her diet.
                        </p>
                      </div>
                      <div className="rounded-lg bg-purple-50 p-4">
                        <p className="text-sm">
                          <span className="font-medium">Vegetables:</span> Try introducing colorful vegetables in fun
                          shapes to increase acceptance.
                        </p>
                      </div>
                    </div>
                    <Button variant="link" className="mt-4 px-0">
                      View full nutrition plan
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Development Progress</CardTitle>
                  <CardDescription>Tracking Emma's growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full rounded-lg bg-slate-50 flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-slate-200" />
                    <span className="ml-2 text-slate-400">Development progress chart</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Vaccines Tab */}
            <TabsContent value="vaccines">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Vaccination Tracker</CardTitle>
                  <CardDescription>Keep track of Emma's immunization schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-purple-600" />
                        Upcoming Vaccinations
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                              <Syringe className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium">MMR (Measles, Mumps, Rubella) - 2nd dose</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-1 h-3 w-3" />
                                <span>Due on May 15, 2025</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Upcoming</Badge>
                        </div>

                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                              <Syringe className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium">Varicella (Chickenpox) - 1st dose</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-1 h-3 w-3" />
                                <span>Due on May 15, 2025</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Upcoming</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                        Completed Vaccinations
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                              <Syringe className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">DTaP (Diphtheria, Tetanus, Pertussis) - 4th dose</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-1 h-3 w-3" />
                                <span>Completed on January 10, 2025</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </div>

                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                              <Syringe className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Hib (Haemophilus influenzae type b) - 4th dose</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-1 h-3 w-3" />
                                <span>Completed on January 10, 2025</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                              <Syringe className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">PCV13 (Pneumococcal) - 4th dose</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-1 h-3 w-3" />
                                <span>Completed on January 10, 2025</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Vaccination Record
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Milestones Tab */}
            <TabsContent value="milestones">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Milestone Tracking</CardTitle>
                  <CardDescription>Track and record Emma's developmental milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Physical Development</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-1" />
                            <label htmlFor="milestone-1" className="text-sm">
                              Runs with better coordination
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Expected: 24-30 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-2" checked />
                            <label htmlFor="milestone-2" className="text-sm">
                              Jumps with both feet
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Achieved at 26 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-3" />
                            <label htmlFor="milestone-3" className="text-sm">
                              Kicks ball forward
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Expected: 24-30 months</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Cognitive Development</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-4" checked />
                            <label htmlFor="milestone-4" className="text-sm">
                              Follows 2-step instructions
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Achieved at 25 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-5" checked />
                            <label htmlFor="milestone-5" className="text-sm">
                              Sorts objects by shape or color
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Achieved at 24 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-6" />
                            <label htmlFor="milestone-6" className="text-sm">
                              Completes simple puzzles
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Expected: 24-30 months</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Language Development</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-7" checked />
                            <label htmlFor="milestone-7" className="text-sm">
                              Speaks in 3-4 word sentences
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Achieved at 27 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-8" />
                            <label htmlFor="milestone-8" className="text-sm">
                              Uses pronouns (I, me, you)
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Expected: 24-36 months</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox id="milestone-9" />
                            <label htmlFor="milestone-9" className="text-sm">
                              Names most familiar objects
                            </label>
                          </div>
                          <span className="text-xs text-gray-500">Expected: 24-30 months</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Record New Milestone
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Nutrition Tab */}
            <TabsContent value="nutrition">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Nutrition Tracker</CardTitle>
                  <CardDescription>Monitor and optimize Emma's diet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      <Card className="border border-gray-100">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="rounded-full bg-green-100 w-10 h-10 flex items-center justify-center">
                              <Utensils className="h-5 w-5 text-green-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Daily Goal</span>
                          </div>
                          <h3 className="text-2xl font-bold">1200</h3>
                          <p className="text-xs text-gray-500">calories</p>
                          <Progress value={75} className="h-2 mt-2" />
                          <p className="text-xs text-gray-500 mt-1">75% of daily goal</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-100">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                              <HeartPulse className="h-5 w-5 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Protein</span>
                          </div>
                          <h3 className="text-2xl font-bold">35g</h3>
                          <p className="text-xs text-gray-500">of 40g daily goal</p>
                          <Progress value={88} className="h-2 mt-2" />
                          <p className="text-xs text-gray-500 mt-1">88% of daily goal</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-100">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="rounded-full bg-yellow-100 w-10 h-10 flex items-center justify-center">
                              <Star className="h-5 w-5 text-yellow-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Fruits & Veggies</span>
                          </div>
                          <h3 className="text-2xl font-bold">3</h3>
                          <p className="text-xs text-gray-500">of 5 servings</p>
                          <Progress value={60} className="h-2 mt-2" />
                          <p className="text-xs text-gray-500 mt-1">60% of daily goal</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-100">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                              <Baby className="h-5 w-5 text-purple-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Calcium</span>
                          </div>
                          <h3 className="text-2xl font-bold">650mg</h3>
                          <p className="text-xs text-gray-500">of 700mg daily goal</p>
                          <Progress value={93} className="h-2 mt-2" />
                          <p className="text-xs text-gray-500 mt-1">93% of daily goal</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Today's Meals</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                              <Clock className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Breakfast</p>
                              <p className="text-sm text-gray-500">Oatmeal with banana and milk</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Balanced</Badge>
                        </div>

                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                              <Clock className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Lunch</p>
                              <p className="text-sm text-gray-500">Chicken, rice, and steamed carrots</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Balanced</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                              <Clock className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Snack</p>
                              <p className="text-sm text-gray-500">Apple slices and yogurt</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Balanced</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Nutrition Recommendations</h3>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-purple-50 p-4">
                          <p className="text-sm">
                            <span className="font-medium">Protein intake:</span> Emma needs more protein-rich foods.
                            Consider adding more eggs, yogurt, and lean meats to her diet.
                          </p>
                        </div>
                        <div className="rounded-lg bg-purple-50 p-4">
                          <p className="text-sm">
                            <span className="font-medium">Vegetables:</span> Try introducing colorful vegetables in fun
                            shapes to increase acceptance.
                          </p>
                        </div>
                        <div className="rounded-lg bg-purple-50 p-4">
                          <p className="text-sm">
                            <span className="font-medium">Hydration:</span> Ensure Emma drinks enough water throughout
                            the day, especially during active play.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Log Meal or Snack
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* AI Chatbot */}
          <ChatBot />
        </main>
      </div>
    </div>
  )
}
