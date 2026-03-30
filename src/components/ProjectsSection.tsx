import { motion } from "framer-motion";
import sketch1 from "@/assets/project-sketch-1.jpg";
import sketch2 from "@/assets/project-sketch-2.jpg";
import sketch3 from "@/assets/project-sketch-3.jpg";
import sketch4 from "@/assets/project-sketch-4.jpg";
import sketch5 from "@/assets/project-sketch-5.jpg";
import sketch6 from "@/assets/project-sketch-6.jpg";

const projects = [
  { img: sketch1, title: "Perspective Design", category: "Design Practice", desc: "Watercolor exploration of geometric forms and structures" },
  { img: sketch2, title: "Creative Poster", category: "School Project", desc: "Hand-lettered poster with playful illustrations" },
  { img: sketch3, title: "Product Design", category: "Design Practice", desc: "Visual brainstorming for real-world problem concepts" },
  { img: sketch4, title: "Water Colour & Pencil Colour Sketching", category: "Design Practice", desc: "Nature-inspired watercolor study with pastel tones" },
  { img: sketch5, title: "Cartoon Sketching", category: "Design Practice", desc: "Cute character illustrations with pencil and ink" },
  { img: sketch6, title: "Storyboards", category: "School Project", desc: "Sequential visual narratives for storytelling concepts" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-lavender/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-mint/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2 font-body">Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            My <span className="text-gradient-pastel">Work</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-glass-border"
                  >
                    View Details
                  </motion.span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="font-display text-lg font-semibold mt-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
