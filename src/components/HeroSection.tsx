import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop",
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient-hero">Transform Your</span>
            <br />
            <span className="text-gradient-hero">Marketing with Proactiv</span>
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Automate Campaigns, Engage Audiences, and Boost Lead Generation with Our All-in-One Marketing Solution
          </p>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2">
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              {/* Stars */}
              <div className="flex gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-star text-star" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Trusted by <span className="text-foreground font-medium">27,000+</span> creators
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-lg group"
            >
              Book a demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* Dashboard image container */}
            <div className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
              <img
                src="https://proactiv-aceternity.vercel.app/_next/image?url=%2Fdashboard.png&w=3840&q=75"
                alt="Proactiv Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
