import { motion } from "framer-motion";
import sketch1 from "@/assets/project-sketch-1.jpg";
import sketch2 from "@/assets/project-sketch-2.jpg";
import sketch3 from "@/assets/project-sketch-3.jpg";
import sketch4 from "@/assets/project-sketch-4.jpg";

const projects = [
  { img: sketch1, title: "Perspective Design", category: "Design Practice", desc: "Watercolor exploration of geometric forms and structures" },
  { img: sketch2, title: "Creative Poster", category: "School Project", desc: "Hand-lettered poster with playful illustrations" },
  { img: sketch3, title: "Problem Solving Map", category: "Design Practice", desc: "Visual brainstorming for real-world problem concepts" },
  { img: sketch4, title: "Botanical Illustration", category: "Design Practice", desc: "Nature-inspired watercolor study with pastel tones" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container max-w-5xl">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">View Details</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="font-display text-lg font-semibold mt-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
