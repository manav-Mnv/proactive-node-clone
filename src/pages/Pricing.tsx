import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";
import { LogoMarquee } from "@/components/LogoMarquee";

const plans = [
  {
    name: "Hobby",
    price: { monthly: "$0", yearly: "$0" },
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
    highlighted: false,
  },
  {
    name: "Pro",
    price: { monthly: "$30", yearly: "$24" },
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
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
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

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6">
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-hero mb-4">
              Simple pricing
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple pricing for startups, small businesses, medium scale businesses and enterprises.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? "bg-primary" : "bg-secondary"
              }`}
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-foreground rounded-full"
                animate={{ x: isYearly ? 26 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              yearly
            </span>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 ${
                  plan.highlighted
                    ? "bg-card border-2 border-primary"
                    : "bg-card border border-border"
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== "Custom" && (
                    <span className="text-muted-foreground text-sm"> / month</span>
                  )}
                </div>
                <p className="text-sm text-primary mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>

        <div className="mt-20">
          <LogoMarquee />
        </div>
      </main>
      <Footer />
    </div>
  );
}
