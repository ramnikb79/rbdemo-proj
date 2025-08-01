import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@example.com",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our headquarters",
      contact: "123 Business St, City, State 12345",
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      contact: "Mon-Fri: 9AM-6PM EST",
      action: "Schedule Call",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{method.contact}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form Placeholder */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 