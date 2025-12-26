import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { Mail, Share2, Users, Zap } from "lucide-react";

const features = [
  {
    title: "Email Automation",
    description: "With our best in class email automation, you can automate your entire emailing process.",
    icon: <Mail className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    title: "Cross Platform Marketing",
    description: "With our cross platform marketing, you can reach your audience on all the platforms they use.",
    icon: <Share2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    title: "Managed CRM",
    description: "With our managed CRM, you can manage your leads and contacts in one place.",
    icon: <Users className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
  },
  {
    title: "Apps Automation",
    description: "We have cloned zapier and built our very own apps automation platform.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
  },
];

export default function Features() {
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
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-hero mb-4">
              Perfect set of tools
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proactiv comes with perfect tools for the perfect jobs out there.
            </p>
          </motion.div>

          {/* Features List */}
          <div className="space-y-32">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border text-primary">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{feature.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full rounded-2xl border border-border shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
