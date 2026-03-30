import { motion } from "framer-motion";
import { BookOpen, Music, Pencil } from "lucide-react";

const interests = [
  { icon: Pencil, label: "Drawing" },
  { icon: Music, label: "Music" },
  { icon: BookOpen, label: "Reading" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2 font-body">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
            Designing with <span className="text-gradient-pastel">Purpose</span>
          </h2>

          <div className="glass-card p-8 sm:p-10 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Recently completed 12th grade and currently preparing for college. 
              Focused on building a strong design foundation and passionate about 
              solving real-world problems through design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sandhyarani enjoys drawing, listening to music, and reading books — 
              all of which inspire her creativity and artistic vision. With a goal 
              to become a top product designer, she is continuously improving her 
              skills and creating meaningful, impactful designs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-sm"
                >
                  <item.icon size={16} className="text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
