import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications with Clean Architecture",
    excerpt: "Learn how to structure your React projects for maintainability and scalability using clean architecture principles.",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    category: "React",
    url: "#",
  },
  {
    title: "A Deep Dive into TypeScript Generics",
    excerpt: "Master TypeScript generics with practical examples and real-world use cases that will level up your code.",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    category: "TypeScript",
    url: "#",
  },
  {
    title: "Optimizing Node.js APIs for High Performance",
    excerpt: "Discover techniques to boost your Node.js API performance including caching, connection pooling, and more.",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    category: "Node.js",
    url: "#",
  },
];

const categoryColors: Record<string, string> = {
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
};

const BlogSection = () => {
  return (
    <section id="blogs" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog Posts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights from my journey as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
