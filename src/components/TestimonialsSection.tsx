import { motion } from "framer-motion";
import { Container } from "./ui/container";

const testimonials = [
  {
    quote: "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
    name: "Tyler Durden",
    role: "Creative Director & Business Owner",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
    name: "Alice Johnson",
    role: "Senior Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
    name: "Bob Smith",
    role: "Industry Analyst",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    quote: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
    name: "Cathy Lee",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
    name: "David Wright",
    role: "Research Scientist",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    quote: "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
    name: "Eva Green",
    role: "Operations Director",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    quote: "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
    name: "Frank Moore",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Used by entrepreneurs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-hero max-w-xl mx-auto">
            Proactiv is used by serial entrepreneurs and overachievers.
          </h2>
        </motion.div>
      </Container>

      {/* Scrolling testimonials */}
      <div className="relative">
        <div className="fade-mask">
          {/* Row 1 */}
          <div className="flex gap-6 mb-6 marquee">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[350px] bg-card border border-border rounded-2xl p-6"
              >
                <p className="text-foreground text-sm mb-4 line-clamp-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-foreground font-medium text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - reverse */}
          <div className="flex gap-6 marquee-reverse">
            {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)].map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[350px] bg-card border border-border rounded-2xl p-6"
              >
                <p className="text-foreground text-sm mb-4 line-clamp-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-foreground font-medium text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
