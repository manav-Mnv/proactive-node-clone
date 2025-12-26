import { motion } from "framer-motion";
import { Container } from "./ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is Proactiv?",
    answer: "Proactiv is an all-in-one marketing automation platform that helps you automate campaigns, engage audiences, and boost lead generation across all your social media platforms.",
  },
  {
    question: "How does Proactiv work?",
    answer: "Proactiv uses AI-powered tools to help you schedule posts, analyze performance, and create engaging content. Simply connect your social media accounts and let our platform handle the rest.",
  },
  {
    question: "Which social media platforms does Proactiv support?",
    answer: "Proactiv supports all major social media platforms including Twitter, LinkedIn, Facebook, Instagram, and more. We're constantly adding new integrations.",
  },
  {
    question: "Can I schedule posts in advance with Proactiv?",
    answer: "Yes! Our scheduling feature allows you to plan and schedule your content weeks or even months in advance, ensuring consistent posting across all your platforms.",
  },
  {
    question: "Does Proactiv provide analytics?",
    answer: "Absolutely. Proactiv provides comprehensive analytics including engagement metrics, audience insights, and performance tracking to help you optimize your marketing strategy.",
  },
  {
    question: "Is Proactiv suitable for small businesses?",
    answer: "Yes, Proactiv is designed for businesses of all sizes. Our flexible pricing plans make it accessible for small businesses while offering enterprise features for larger organizations.",
  },
  {
    question: "Can I collaborate with my team on Proactiv?",
    answer: "Yes, Proactiv offers robust collaboration features including team workspaces, role-based permissions, and shared content calendars.",
  },
  {
    question: "Does Proactiv offer customer support?",
    answer: "We offer multiple support channels including email support, live chat, and a comprehensive knowledge base. Premium plans include priority support.",
  },
  {
    question: "Is there a free trial available for Proactiv?",
    answer: "Yes, we offer a 14-day free trial with access to all features. No credit card required to get started.",
  },
  {
    question: "How can I get started with Proactiv?",
    answer: "Getting started is easy! Simply sign up for a free account, connect your social media platforms, and start automating your marketing efforts right away.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-hero">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
