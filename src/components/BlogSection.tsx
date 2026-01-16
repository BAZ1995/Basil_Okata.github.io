import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building My Home Lab with MikroTik RB5009UPr+S+IN",
    excerpt: "How I set up a professional-grade home network using the MikroTik RB5009UPr+S+IN router, complete with VLANs, firewall rules, and network segmentation for hands-on CCNA practice.",
    date: "Jan 10, 2026",
    readTime: "15 min read",
    category: "Networking",
    url: "#",
  },
  {
    title: "Setting Up Pi-hole for Network-Wide Ad Blocking",
    excerpt: "A complete guide to deploying an adblock server on your home network, filtering ads and trackers at the DNS level for all connected devices.",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    category: "Home Lab",
    url: "#",
  },
  {
    title: "CCNA Journey: From Theory to Hands-On Practice",
    excerpt: "My experience taking the CCNA course and how running a home lab with real networking hardware accelerated my learning and practical skills.",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    category: "Networking",
    url: "#",
  },
];

const categoryColors: Record<string, string> = {
  Networking: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Home Lab": "bg-green-500/10 text-green-400 border-green-500/20",
  AWS: "bg-orange-500/10 text-orange-400 border-orange-500/20",
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
            Sharing insights from my networking journey, home lab experiments, and IT expertise
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
