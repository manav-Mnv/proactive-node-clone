import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Twitter, Linkedin, BarChart3, Sparkles, Users, Target } from "lucide-react";

const features = [
  {
    title: "Post to multiple platforms at once",
    description: "With our AI-powered platform, you can post to multiple platforms at once, saving you time and effort.",
    icon: <Twitter className="w-6 h-6" />,
    span: "col-span-1 md:col-span-2",
    visual: (
      <div className="flex items-center gap-4 mt-4">
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center border-2 border-card">
            <Twitter className="w-5 h-5 text-foreground" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center border-2 border-card">
            <Linkedin className="w-5 h-5 text-foreground" />
          </div>
        </div>
        <span className="text-sm text-muted-foreground">+200 connections</span>
      </div>
    ),
  },
  {
    title: "Analytics for everything",
    description: "Check analytics, track your posts, and get insights into your audience.",
    icon: <BarChart3 className="w-6 h-6" />,
    span: "col-span-1",
    visual: (
      <div className="mt-4 h-24 flex items-end gap-1">
        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-t"
          />
        ))}
      </div>
    ),
  },
  {
    title: "Integrated AI",
    description: "Proactiv uses AI to help you create engaging content.",
    icon: <Sparkles className="w-6 h-6" />,
    span: "col-span-1",
    visual: (
      <div className="mt-4 space-y-2">
        {["Twitter post", "Email Campaign", "Newsletter Campaign"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-secondary/50 rounded-lg px-3 py-2 text-sm text-muted-foreground"
          >
            {item}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Easy Collaboration",
    description: "Proactive can integrate with Zapier, Slack and every other popular integration tools.",
    icon: <Users className="w-6 h-6" />,
    span: "col-span-1",
    visual: (
      <div className="mt-4 flex gap-3">
        <div className="bg-card rounded-lg p-3 flex-1">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=60&h=60&fit=crop"
            alt="User"
            className="w-10 h-10 rounded-full mx-auto mb-2"
          />
          <p className="text-xs text-center text-muted-foreground">Manu Arora</p>
          <p className="text-xs text-center text-primary font-medium">69,420</p>
        </div>
        <div className="bg-card rounded-lg p-3 flex-1">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop"
            alt="User"
            className="w-10 h-10 rounded-full mx-auto mb-2"
          />
          <p className="text-xs text-center text-muted-foreground">Tyler Durden</p>
          <p className="text-xs text-center text-primary font-medium">8,008</p>
        </div>
      </div>
    ),
  },
  {
    title: "Know your audience",
    description: "Based on your audience, create funnels and drive more traffic.",
    icon: <Target className="w-6 h-6" />,
    span: "col-span-1",
    visual: (
      <div className="mt-4">
        <div className="relative w-24 h-24 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283 }}
              whileInView={{ strokeDashoffset: 70 }}
              transition={{ duration: 1 }}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">75%</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Automate your social media
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-hero max-w-2xl mx-auto">
            Proactiv houses a rich set of features to automate your marketing efforts across all social medias
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${feature.span} bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-primary">{feature.icon}</div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
              {feature.visual}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
