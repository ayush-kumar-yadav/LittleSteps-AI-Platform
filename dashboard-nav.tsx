import Link from "next/link"
import Image from "next/image"
import {
  Baby,
  BarChart3,
  Calendar,
  ChevronRight,
  Home,
  MessageCircle,
  Settings,
  Shield,
  Syringe,
  Utensils,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function DashboardNav() {
  return (
    <SidebarProvider>
      <Sidebar variant="inset" className="border-r">
        <SidebarHeader className="flex flex-col items-center justify-center py-4">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="LittleSteps.AI Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-sm font-medium">Sarah Johnson</h3>
            <p className="text-xs text-gray-500">Parent</p>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/dashboard">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Baby className="h-4 w-4" />
                  <span>Children</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Syringe className="h-4 w-4" />
                  <span>Vaccinations</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Shield className="h-4 w-4" />
                  <span>Milestones</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Utensils className="h-4 w-4" />
                  <span>Nutrition</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Calendar className="h-4 w-4" />
                  <span>Appointments</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <BarChart3 className="h-4 w-4" />
                  <span>Reports</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <MessageCircle className="h-4 w-4" />
                  <span>Messages</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <User className="h-4 w-4" />
                  <span>Account</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <ChevronRight className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarTrigger />
      </Sidebar>
    </SidebarProvider>
  )
}
