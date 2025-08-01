import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  Heart
} from "lucide-react"

const footerLinks = {
  product: [
    { name: "[Feature 1]", href: "#" },
    { name: "[Feature 2]", href: "#" },
    { name: "[Feature 3]", href: "#" },
    { name: "[Feature 4]", href: "#" },
  ],
  company: [
    { name: "[About Us]", href: "#" },
    { name: "[Blog]", href: "#" },
    { name: "[Careers]", href: "#" },
    { name: "[Press]", href: "#" },
  ],
  support: [
    { name: "[Help Center]", href: "#" },
    { name: "[Documentation]", href: "#" },
    { name: "[Contact]", href: "#" },
    { name: "[Status]", href: "#" },
  ],
  legal: [
    { name: "[Privacy Policy]", href: "#" },
    { name: "[Terms of Service]", href: "#" },
    { name: "[Cookie Policy]", href: "#" },
    { name: "[GDPR]", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Email", href: "mailto:hello@yourcompany.com", icon: Mail },
]

export const FooterSection = () => {
  return (
    <footer className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">RB</span>
              </div>
              <span className="font-semibold text-lg">RBDemo</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              [RBDemo's mission statement or brief description. 
              Example: "We help businesses grow by providing innovative solutions."]
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Product</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Company</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Support</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="mt-16" />
        
        {/* Bottom footer */}
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 RBDemo. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by RBDemo</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 