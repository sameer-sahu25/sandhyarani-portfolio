import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 text-center glow-mint"
        >
          <Sparkles size={32} className="text-mint mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Growing & <span className="text-gradient-pastel">Learning</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-2">
            Currently not offering professional services — actively developing skills 
            and exploring the world of design.
          </p>
          <p className="text-sm text-primary">
            Open to learning, collaboration, and future opportunities ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
