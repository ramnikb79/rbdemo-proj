"use client"

import { ProtectedRoute } from "@/components/auth/protected-route"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/contexts/auth-context"
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard, 
  LogOut,
  Settings,
  Eye,
  Lock,
  Mail
} from "lucide-react"

function SettingsContent() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  const settingsSections = [
    {
      title: "Account Settings",
      icon: User,
      items: [
        {
          title: "Profile Information",
          description: "Update your personal information and profile picture",
          action: "Edit Profile",
          icon: User,
        },
        {
          title: "Email Preferences",
          description: "Manage your email notifications and preferences",
          action: "Configure",
          icon: Mail,
        },
        {
          title: "Password & Security",
          description: "Change your password and security settings",
          action: "Update",
          icon: Lock,
        },
      ],
    },
    {
      title: "Appearance",
      icon: Palette,
      items: [
        {
          title: "Theme Settings",
          description: "Customize your dashboard appearance",
          action: "Customize",
          icon: Palette,
        },
        {
          title: "Display Options",
          description: "Adjust display settings and preferences",
          action: "Configure",
          icon: Eye,
        },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        {
          title: "Email Notifications",
          description: "Manage your email notification preferences",
          action: "Configure",
          icon: Mail,
        },
        {
          title: "Push Notifications",
          description: "Control push notification settings",
          action: "Manage",
          icon: Bell,
        },
      ],
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      items: [
        {
          title: "Two-Factor Authentication",
          description: "Add an extra layer of security to your account",
          action: "Enable",
          icon: Shield,
          badge: "Recommended",
        },
        {
          title: "Privacy Settings",
          description: "Control your privacy and data sharing preferences",
          action: "Configure",
          icon: Lock,
        },
      ],
    },
    {
      title: "Billing & Subscription",
      icon: CreditCard,
      items: [
        {
          title: "Payment Methods",
          description: "Manage your payment methods and billing information",
          action: "Manage",
          icon: CreditCard,
        },
        {
          title: "Subscription Plan",
          description: "View and modify your current subscription",
          action: "View Plan",
          icon: CreditCard,
        },
      ],
    },
  ]

  return (
    <DashboardLayout 
      title="Settings" 
      subtitle="Manage your account settings and preferences"
    >
      <div className="space-y-6">
        {/* User Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p className="text-lg font-semibold">{user?.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="text-lg font-semibold">{user?.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <Card key={sectionIndex}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <section.icon className="h-5 w-5" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{item.title}</h3>
                          {item.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {item.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Logout Section */}
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <LogOut className="h-5 w-5" />
              Sign Out
            </CardTitle>
            <CardDescription>
              Sign out of your account. You can sign back in anytime.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <SettingsContent />
    </ProtectedRoute>
  )
} 