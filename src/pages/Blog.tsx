import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { FileText } from "lucide-react";

const featuredPosts = [
  {
    title: "Changelog for 2024",
    excerpt: "Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improve...",
    image: "https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?w=600&h=400&fit=crop",
    author: "Manu Arora",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop",
    slug: "changelog-for-2024",
  },
  {
    title: "What is marketing anyway",
    excerpt: "Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improve...",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
    author: "Manu Arora",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop",
    slug: "what-is-social-media-marketing",
  },
  {
    title: "Cool things to do with AI",
    excerpt: "Explore the latest AI tools and applications that are revolutionizing various industries. From image...",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
    author: "Manu Arora",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop",
    slug: "cool-things-to-do-with-ai",
  },
];

const morePosts = [
  {
    title: "How companies are working without AI",
    excerpt: "Learn about traditional methods companies still use and how they're adapting to the AI revolution.",
    author: "Manu Arora",
    date: "Dec 20, 2024",
  },
  {
    title: "The future of marketing automation",
    excerpt: "Discover how automation is changing the marketing landscape and what it means for your business.",
    author: "Manu Arora",
    date: "Dec 18, 2024",
  },
  {
    title: "Building scalable SaaS products",
    excerpt: "A comprehensive guide to building software products that can grow with your user base.",
    author: "Manu Arora",
    date: "Dec 15, 2024",
  },
];

export default function Blog() {
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-hero mb-4">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover insightful resources and expert advice from our seasoned team to elevate your knowledge.
            </p>
          </motion.div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 -mt-8 relative z-10 mx-3 transition-all duration-300 group-hover:border-primary/50 group-hover:-translate-y-1">
                  <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">More Posts</h2>
            <div className="space-y-4">
              {morePosts.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:-translate-x-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
