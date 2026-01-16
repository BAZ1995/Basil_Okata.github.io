import { motion } from "framer-motion";

const skills = [
  { name: "IT Support & Troubleshooting", level: 95, color: "bg-cyan-500" },
  { name: "Network & System Administration", level: 92, color: "bg-blue-500" },
  { name: "Cloud Computing (AWS)", level: 88, color: "bg-orange-500" },
  { name: "CCNA / Networking", level: 85, color: "bg-indigo-500" },
  { name: "Cybersecurity Fundamentals", level: 85, color: "bg-red-500" },
  { name: "ICT Asset Management", level: 90, color: "bg-violet-500" },
];

const technologies = [
  { name: "AWS", icon: "☁️" },
  { name: "Citrix Workspace", icon: "🖥️" },
  { name: "MikroTik", icon: "📡" },
  { name: "Windows Server", icon: "🪟" },
  { name: "Linux", icon: "🐧" },
  { name: "Active Directory", icon: "🔐" },
  { name: "Network Security", icon: "🛡️" },
  { name: "VPN/Firewall", icon: "🔥" },
  { name: "CCNA", icon: "🌐" },
  { name: "Pi-hole/AdBlock", icon: "🚫" },
  { name: "Virtualization", icon: "📦" },
  { name: "Backup & Recovery", icon: "💾" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies and technologies I leverage to deliver reliable IT solutions
          </p>
        </motion.div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Tech Stack</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-2"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
