import { motion } from "framer-motion";
import { Paintbrush, Lightbulb, Eye, Palette } from "lucide-react";

const skills = [
  { icon: Paintbrush, label: "Drawing", desc: "Sketching, watercolors & mixed media", color: "text-lavender" },
  { icon: Lightbulb, label: "Creativity", desc: "Ideation & concept development", color: "text-peach" },
  { icon: Eye, label: "Visual Thinking", desc: "Translating ideas into visuals", color: "text-mint" },
  { icon: Palette, label: "Design Aesthetics", desc: "Color theory, composition & style", color: "text-lavender" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container max-w-5xl">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:glow-lavender transition-shadow duration-500"
            >
              <skill.icon size={32} className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-lg font-semibold mb-1">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
