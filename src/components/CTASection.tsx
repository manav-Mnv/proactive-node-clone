import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Maker",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop",
  },
];

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
            Get started today with Proactiv to kickstart your marketing efforts
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Proactiv houses the best in class software tools to kickstart your marketing journey. Join 127,000+ other users to get started.
          </p>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex flex-row items-center justify-center w-full">
                <AnimatedTooltip items={people} />
              </div>
              <div className="flex gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-star text-star" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Trusted by <span className="text-foreground font-medium">27,000+</span> creators
            </p>
          </div>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-lg group"
          >
            Book a demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Dashboard preview with perspective */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl" style={{ perspective: "1000px" }}>
            <div
              className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl"
              style={{ transform: "rotateX(10deg)" }}
            >
              <img
                src="https://proactiv-aceternity.vercel.app/_next/image?url=%2Fdashboard.png&w=3840&q=75"
                alt="Proactiv Dashboard"
                className="w-full h-auto"
              />
            </div>
            {/* Fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
