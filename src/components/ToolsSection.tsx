import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { useRef, useState, useEffect } from "react";

const tools = [
  {
    title: "Email Automation",
    description: "With our best in class email automation, you can automate your entire emailing process.",
    image: "https://proactiv-aceternity.vercel.app/_next/image?url=%2Ffirst.png&w=2048&q=75",
  },
  {
    title: "Cross Platform Marketing",
    description: "With our cross platform marketing, you can reach your audience on all the platforms they use.",
    image: "https://proactiv-aceternity.vercel.app/_next/image?url=%2Fsecond-backup.png&w=2048&q=75",
  },
  {
    title: "Managed CRM",
    description: "With our managed CRM, you can manage your leads and contacts in one place.",
    image: "https://proactiv-aceternity.vercel.app/_next/image?url=%2Ffourth-backup.png&w=2048&q=75",
  },
  {
    title: "Apps Automation",
    description: "We have cloned zapier and built our very own apps automation platform.",
    image: "https://proactiv-aceternity.vercel.app/_next/image?url=%2Fthird.png&w=2048&q=75",
  },
];

export function ToolsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-card/30 to-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Perfect set of tools
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-hero max-w-xl mx-auto">
            Proactiv comes with perfect tools for the perfect jobs out there.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Tool tabs */}
          <div className="space-y-4">
            {tools.map((tool, i) => (
              <motion.button
                key={tool.title}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-6 rounded-xl border transition-all ${
                  activeIndex === i
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-muted-foreground/30"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className={`font-semibold text-lg mb-2 ${activeIndex === i ? "text-primary" : "text-foreground"}`}>
                  {tool.title}
                </h3>
                <p className="text-muted-foreground text-sm">{tool.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Tool preview */}
          <div ref={containerRef} className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
            {tools.map((tool, i) => (
              <motion.img
                key={tool.title}
                src={tool.image}
                alt={tool.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
