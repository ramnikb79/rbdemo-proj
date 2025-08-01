import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Users, BarChart3, Clock, Globe } from "lucide-react"

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform.",
      badge: "Performance",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security to keep your data safe and protected.",
      badge: "Security",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools.",
      badge: "Collaboration",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with our comprehensive analytics dashboard.",
      badge: "Analytics",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to help you succeed.",
      badge: "Support",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access your platform from anywhere in the world.",
      badge: "Global",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and features you need to take your business to the next level.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 