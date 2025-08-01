import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer: "You can start your free trial immediately after signing up. No credit card required. You'll have full access to all features for 14 days, and you can cancel anytime before the trial ends.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security measures including SSL encryption, regular security audits, and compliance with industry standards like SOC 2 and GDPR.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide 24/7 customer support via email and live chat. Enterprise customers also get priority phone support.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate applies at your next billing cycle.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 