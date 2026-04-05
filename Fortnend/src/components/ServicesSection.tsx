import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-48 h-48 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="glass-card p-10 text-center glow-mint"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={32} className="text-mint mx-auto mb-4" />
          </motion.div>
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
