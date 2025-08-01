"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/homepage/navigation"
import { HeroSection } from "@/components/homepage/hero-section"
import { FeaturesSection } from "@/components/homepage/features-section"
import { PricingSection } from "@/components/homepage/pricing-section"
import { FAQSection } from "@/components/homepage/faq-section"
import { ContactSection } from "@/components/homepage/contact-section"
import { FooterSection } from "@/components/homepage/footer-section"
import { useAuth } from "@/contexts/auth-context"

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect to dashboard
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
