import { motion } from "framer-motion";
import { BookOpen, Music, Pencil } from "lucide-react";

const interests = [
  { icon: Pencil, label: "Drawing" },
  { icon: Music, label: "Music" },
  { icon: BookOpen, label: "Reading" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-lavender/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl relative z-10">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ borderColor: "hsl(270 50% 75% / 0.3)" }}
            className="glass-card p-8 sm:p-10 space-y-6 transition-colors duration-500"
          >
            <p className="text-muted-foreground leading-relaxed">
              My name is Sandhyarani Prusty. I'm a creative and curious person who loves to learn new things and think about new ideas. I really like design and like to express my thoughts through activities like sketching, painting, embroidery, stitching, and crafting. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These things have made me more patient and made me pay more attention to the little things. For me, design isn't just about making things look nice; it's also about finding simple and meaningful ways to solve problems. I get ideas from the things I see and do every day, as well as from nature and my surroundings. I want to grow and make work that is simple, useful, and meaningful because I am curious and love designing.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-sm cursor-default"
                >
                  <item.icon size={16} className="text-primary" />
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
