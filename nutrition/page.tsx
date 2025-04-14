import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DashboardNav } from "@/components/dashboard-nav"
import { ChatBot } from "@/components/chatbot"
import {
  Apple,
  Baby,
  Bell,
  BookOpen,
  Brain,
  Carrot,
  Clock,
  Egg,
  Fish,
  Leaf,
  Milk,
  Plus,
  Search,
  Settings,
  User,
  Utensils,
} from "lucide-react"

export default function NutritionPage() {
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

        {/* Nutrition Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Nutrition Guide</h1>
              <p className="text-gray-500">Personalized nutrition recommendations for Emma</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                <Baby className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Emma, 2 years 3 months</span>
              </div>
            </div>
          </div>

          {/* Nutrition Overview */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Daily Calories</CardTitle>
                <Utensils className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1200</div>
                <p className="text-xs text-gray-500">Recommended intake</p>
                <Progress value={75} className="h-2 mt-2" />
                <p className="text-xs text-gray-500 mt-1">75% of daily goal</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Protein</CardTitle>
                <Egg className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35g</div>
                <p className="text-xs text-gray-500">of 40g daily goal</p>
                <Progress value={88} className="h-2 mt-2" />
                <p className="text-xs text-gray-500 mt-1">88% of daily goal</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Fruits & Veggies</CardTitle>
                <Apple className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-500">of 5 servings</p>
                <Progress value={60} className="h-2 mt-2" />
                <p className="text-xs text-gray-500 mt-1">60% of daily goal</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Calcium</CardTitle>
                <Milk className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">650mg</div>
                <p className="text-xs text-gray-500">of 700mg daily goal</p>
                <Progress value={93} className="h-2 mt-2" />
                <p className="text-xs text-gray-500 mt-1">93% of daily goal</p>
              </CardContent>
            </Card>
          </div>

          {/* Nutrition Tabs */}
          <Tabs defaultValue="meal-plan" className="mb-6">
            <TabsList className="grid grid-cols-4 md:w-[600px]">
              <TabsTrigger value="meal-plan">Meal Plan</TabsTrigger>
              <TabsTrigger value="food-log">Food Log</TabsTrigger>
              <TabsTrigger value="recipes">Recipes</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            {/* Meal Plan Tab */}
            <TabsContent value="meal-plan" className="space-y-6">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Today's Meal Plan</CardTitle>
                      <CardDescription>Personalized for Emma's nutritional needs</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Customize
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                        <Clock className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">Breakfast (7:30 AM)</h3>
                            <p className="text-gray-500">Oatmeal with banana and milk</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">300 cal</Badge>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <Badge variant="outline" className="bg-blue-50">
                            Protein: 10g
                          </Badge>
                          <Badge variant="outline" className="bg-yellow-50">
                            Carbs: 45g
                          </Badge>
                          <Badge variant="outline" className="bg-pink-50">
                            Fat: 7g
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">Morning Snack (10:00 AM)</h3>
                            <p className="text-gray-500">Apple slices with yogurt dip</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">150 cal</Badge>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <Badge variant="outline" className="bg-blue-50">
                            Protein: 5g
                          </Badge>
                          <Badge variant="outline" className="bg-yellow-50">
                            Carbs: 25g
                          </Badge>
                          <Badge variant="outline" className="bg-pink-50">
                            Fat: 3g
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">Lunch (12:30 PM)</h3>
                            <p className="text-gray-500">Chicken, rice, and steamed carrots</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">350 cal</Badge>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <Badge variant="outline" className="bg-blue-50">
                            Protein: 20g
                          </Badge>
                          <Badge variant="outline" className="bg-yellow-50">
                            Carbs: 40g
                          </Badge>
                          <Badge variant="outline" className="bg-pink-50">
                            Fat: 8g
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">Afternoon Snack (3:30 PM)</h3>
                            <p className="text-gray-500">Whole grain crackers with cheese</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">180 cal</Badge>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <Badge variant="outline" className="bg-blue-50">
                            Protein: 7g
                          </Badge>
                          <Badge variant="outline" className="bg-yellow-50">
                            Carbs: 20g
                          </Badge>
                          <Badge variant="outline" className="bg-pink-50">
                            Fat: 8g
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">Dinner (6:00 PM)</h3>
                            <p className="text-gray-500">Pasta with tomato sauce and vegetables</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">320 cal</Badge>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <Badge variant="outline" className="bg-blue-50">
                            Protein: 12g
                          </Badge>
                          <Badge variant="outline" className="bg-yellow-50">
                            Carbs: 50g
                          </Badge>
                          <Badge variant="outline" className="bg-pink-50">
                            Fat: 6g
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Meal or Snack
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Weekly Meal Planning</CardTitle>
                  <CardDescription>Plan meals in advance for better nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Button variant="outline" size="lg" className="rounded-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Weekly Meal Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Food Log Tab */}
            <TabsContent value="food-log" className="space-y-6">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Today's Food Log</CardTitle>
                      <CardDescription>Track what Emma eats throughout the day</CardDescription>
                    </div>
                    <Button size="sm" className="rounded-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Log Food
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                          <Milk className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">Oatmeal with banana and milk</p>
                          <p className="text-sm text-gray-500">Breakfast - 7:30 AM</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">300 cal</Badge>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                          <Apple className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium">Apple slices with yogurt</p>
                          <p className="text-sm text-gray-500">Morning Snack - 10:15 AM</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">150 cal</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                          <Carrot className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium">Chicken, rice, and steamed carrots</p>
                          <p className="text-sm text-gray-500">Lunch - 12:45 PM</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">350 cal</Badge>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <h3 className="font-bold mb-2">Daily Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Calories</p>
                        <p className="font-bold">800 / 1200 cal</p>
                        <Progress value={67} className="h-2 mt-1" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Protein</p>
                        <p className="font-bold">35g / 40g</p>
                        <Progress value={88} className="h-2 mt-1" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Carbohydrates</p>
                        <p className="font-bold">110g / 150g</p>
                        <Progress value={73} className="h-2 mt-1" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fat</p>
                        <p className="font-bold">18g / 40g</p>
                        <Progress value={45} className="h-2 mt-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Previous Days</Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Log Food
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Recipes Tab */}
            <TabsContent value="recipes" className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Recommended Recipes</h2>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search recipes..."
                    className="pl-8 h-9 w-[200px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Rainbow Veggie Pasta",
                    description: "Colorful pasta with hidden vegetables",
                    image: "/placeholder.svg?height=200&width=300",
                    prepTime: "20 min",
                    difficulty: "Easy",
                    tags: ["Vegetables", "Pasta", "Kid-Friendly"],
                  },
                  {
                    title: "Mini Turkey Meatballs",
                    description: "Protein-packed meatballs perfect for little hands",
                    image: "/placeholder.svg?height=200&width=300",
                    prepTime: "25 min",
                    difficulty: "Medium",
                    tags: ["Protein", "Finger Food", "Freezer-Friendly"],
                  },
                  {
                    title: "Fruity Yogurt Parfait",
                    description: "Layered yogurt with fruits and granola",
                    image: "/placeholder.svg?height=200&width=300",
                    prepTime: "10 min",
                    difficulty: "Easy",
                    tags: ["Breakfast", "Snack", "Calcium"],
                  },
                  {
                    title: "Sweet Potato Fries",
                    description: "Baked sweet potato fries with dipping sauce",
                    image: "/placeholder.svg?height=200&width=300",
                    prepTime: "30 min",
                    difficulty: "Easy",
                    tags: ["Vegetables", "Side Dish", "Vitamin A"],
                  },
                  {
                    title: "Fish Fingers",
                    description: "Homemade fish fingers with hidden vegetables",
                    image: "/placeholder.svg?height=200&width=300",
                    prepTime: "25 min",
                    difficulty: "Medium",
                    tags: ["Protein", "Omega-3", "Dinner"],
                  },
                  {
                    title: "Banana Oat Pancakes",
                    description: "Fluffy pancakes with no added sugar",
                    image: "/placeholder.svg?height=200&width=300",
                    prepTime: "15 min",
                    difficulty: "Easy",
                    tags: ["Breakfast", "Whole Grain", "No Added Sugar"],
                  },
                ].map((recipe, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md">
                    <div className="aspect-[3/2] relative">
                      <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{recipe.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">{recipe.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {recipe.prepTime}
                        </div>
                        <Badge variant="outline">{recipe.difficulty}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recipe.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-purple-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="#">View Recipe</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <Button variant="outline" size="lg" className="rounded-full">
                  Load More Recipes
                </Button>
              </div>
            </TabsContent>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations" className="space-y-6">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Nutritional Recommendations</CardTitle>
                  <CardDescription>Personalized guidance for Emma's optimal nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <Brain className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Brain Development</h3>
                        <p className="text-gray-500 mt-1">
                          Emma needs more omega-3 fatty acids for optimal brain development. Try incorporating more fish
                          like salmon, sardines, or trout into her diet 1-2 times per week. Plant sources like chia
                          seeds, flaxseeds, and walnuts can also be added to smoothies or oatmeal.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Omega-3</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 ml-2">DHA</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Vegetable Variety</h3>
                        <p className="text-gray-500 mt-1">
                          Emma is currently eating 2-3 different vegetables regularly. Try to increase variety by
                          introducing a new vegetable each week. Make them more appealing by cutting into fun shapes or
                          serving with dips like hummus or yogurt.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Vegetables</Badge>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 ml-2">Fiber</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Milk className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Calcium Intake</h3>
                        <p className="text-gray-500 mt-1">
                          Emma is getting good calcium intake from dairy products. Continue offering milk, yogurt, and
                          cheese daily. If she shows any signs of dairy sensitivity, consider calcium-fortified plant
                          milks and other calcium sources like tofu, broccoli, and fortified cereals.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Calcium</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 ml-2">Bone Health</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                        <Fish className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Protein Sources</h3>
                        <p className="text-gray-500 mt-1">
                          Emma needs a variety of protein sources for muscle development and growth. Include lean meats,
                          fish, eggs, dairy, beans, and lentils in her diet. Aim for protein at each meal to support her
                          active lifestyle and development.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Protein</Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 ml-2">Growth</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Detailed Nutrition Guide
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Nutrition Challenges</CardTitle>
                  <CardDescription>Common challenges and solutions for toddler nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-purple-50 p-4">
                      <h3 className="font-bold mb-2">Picky Eating</h3>
                      <p className="text-sm">
                        Many toddlers go through phases of picky eating. Continue offering a variety of foods without
                        pressure. Try involving Emma in food preparation and make meals colorful and fun-shaped.
                        Maintain a regular meal and snack schedule.
                      </p>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4">
                      <h3 className="font-bold mb-2">Food Refusal</h3>
                      <p className="text-sm">
                        It can take 10-15 exposures before a child accepts a new food. Keep offering previously rejected
                        foods in different preparations. Pair new foods with familiar favorites and model enjoying these
                        foods yourself.
                      </p>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4">
                      <h3 className="font-bold mb-2">Snacking Too Much</h3>
                      <p className="text-sm">
                        Excessive snacking can interfere with meal appetite. Establish a consistent meal and snack
                        schedule with 2-3 hours between eating times. Offer nutritious snacks like fruits, vegetables,
                        yogurt, or whole grain crackers.
                      </p>
                    </div>
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
