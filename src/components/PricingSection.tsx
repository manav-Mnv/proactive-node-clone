import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Hobby",
    price: { monthly: "$0", yearly: "$0" },
    period: "month",
    description: "For individuals trying out the product",
    features: [
      "Access to all tools for 14 days",
      "No credit card required",
      "Community Support",
      "Access to Aceternity UI",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Starter",
    price: { monthly: "$20", yearly: "$16" },
    period: "month",
    description: "For serious founders",
    features: [
      "Everything in Hobby +",
      "Access to Proactiv AI",
      "Priority tools access",
      "Support for Slack and Twitter",
      "Priority support",
      "99.67% Uptime SLA",
      "Access to Aceternity UI Templates",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Pro",
    price: { monthly: "$30", yearly: "$24" },
    period: "month",
    description: "For small to large businesses",
    features: [
      "Everything in Starter +",
      "Access to our dev team",
      "Coffee with the CEO",
      "Access to Aceternity UI",
      "Request tools",
      "Advanced analytics",
      "Customizable dashboards",
      "24/7 customer support",
      "Unlimited data storage",
      "Enhanced security features",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    period: "",
    description: "For large scale businesses",
    features: [
      "Everything in Pro +",
      "HIPAA and SOC2 compliance",
      "Bulk email support",
      "Customizable dashboards",
      "24/7 customer support",
    ],
    cta: "Book a demo",
    highlighted: false,
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Simple pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-hero max-w-xl mx-auto">
            Simple pricing for startups, small businesses, medium scale businesses and enterprises.
          </h2>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-full p-1 flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              yearly
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary"
                  : "bg-card border border-border"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold text-foreground">
                  {isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                {plan.period && <span className="text-muted-foreground text-sm"> / {plan.period}</span>}
              </div>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
