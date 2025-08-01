import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Now Available
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Transform Your Business
                <br />
                <span className="text-primary">with Our Platform</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Our compelling value proposition goes here. Explain how your SaaS solves a critical problem and why users should choose your platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Cancel anytime
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="AI working on computer - Artificial Intelligence technology"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">AI Powered</div>
              <div className="text-xs opacity-80">Smart Solutions</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border border-border p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Real-time Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 