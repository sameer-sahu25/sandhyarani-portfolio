import { motion } from "framer-motion";
import { Paintbrush, Lightbulb, Eye, Palette } from "lucide-react";

const skills = [
  { icon: Paintbrush, label: "Drawing", desc: "Sketching, watercolors & mixed media", color: "text-lavender" },
  { icon: Lightbulb, label: "Creativity", desc: "Ideation & concept development", color: "text-peach" },
  { icon: Eye, label: "Visual Thinking", desc: "Translating ideas into visuals", color: "text-mint" },
  { icon: Palette, label: "Design Aesthetics", desc: "Color theory, composition & style", color: "text-lavender" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-peach/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2 font-body">What I Do</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            My <span className="text-gradient-pastel">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.label}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card p-6 group hover:glow-lavender transition-shadow duration-500"
            >
              <motion.div whileHover={{ rotate: 12, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                <skill.icon size={32} className={`${skill.color} mb-4`} />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-1">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
