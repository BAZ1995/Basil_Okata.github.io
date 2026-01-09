import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "react-query-kit",
    description: "A toolkit for React Query that streamlines API integration with type-safe hooks and smart caching strategies.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 892,
    forks: 124,
    url: "https://github.com",
  },
  {
    name: "terminal-ui",
    description: "Beautiful terminal-inspired UI components for React. Dark mode first, accessible, and customizable.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1243,
    forks: 89,
    url: "https://github.com",
  },
  {
    name: "git-hooks-cli",
    description: "A zero-config CLI tool for managing Git hooks across your team. Supports pre-commit, pre-push, and more.",
    language: "Rust",
    languageColor: "#dea584",
    stars: 567,
    forks: 43,
    url: "https://github.com",
  },
  {
    name: "markdown-notes",
    description: "A minimal markdown note-taking app with real-time collaboration and end-to-end encryption.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 324,
    forks: 67,
    url: "https://github.com",
  },
  {
    name: "api-rate-limiter",
    description: "Flexible rate limiting middleware for Node.js APIs. Supports Redis, memory, and custom stores.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 445,
    forks: 31,
    url: "https://github.com",
  },
  {
    name: "dotfiles",
    description: "My personal dotfiles for macOS. Includes Neovim, tmux, zsh configs, and automated setup scripts.",
    language: "Shell",
    languageColor: "#89e051",
    stars: 156,
    forks: 28,
    url: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of open-source projects I've built and contributed to
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
