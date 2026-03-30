import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import sketch1 from "@/assets/project-sketch-1.jpg";
import sketch2 from "@/assets/project-sketch-2.jpg";
import sketch3 from "@/assets/project-sketch-3.jpg";
import sketch4 from "@/assets/project-sketch-4.jpg";
import sketch5 from "@/assets/project-sketch-5.jpg";
import sketch6 from "@/assets/project-sketch-6.jpg";

import p1 from "@/assets/perspective-1.jpg";
import p2 from "@/assets/perspective-2.jpg";
import p3 from "@/assets/perspective-3.jpg";
import p4 from "@/assets/perspective-4.jpg";
import p5 from "@/assets/perspective-5.jpg";
import p6 from "@/assets/perspective-6.jpg";
import p7 from "@/assets/perspective-7.jpg";
import p8 from "@/assets/perspective-8.jpg";
import p9 from "@/assets/perspective-9.jpg";

import pd1 from "@/assets/product-1.jpg";
import pd2 from "@/assets/product-2.jpg";
import pd3 from "@/assets/product-3.jpg";
import pd4 from "@/assets/product-4.jpg";

import wc1 from "@/assets/watercolour-1.jpg";
import wc2 from "@/assets/watercolour-2.jpg";
import wc3 from "@/assets/watercolour-3.jpg";
import wc4 from "@/assets/watercolour-4.jpg";
import wc5 from "@/assets/watercolour-5.jpg";
import wc6 from "@/assets/watercolour-6.jpg";
import wc7 from "@/assets/watercolour-7.jpg";
import wc8 from "@/assets/watercolour-8.jpg";
import wc9 from "@/assets/watercolour-9.jpg";
import wc10 from "@/assets/watercolour-10.jpg";
import wc11 from "@/assets/watercolour-11.jpg";
import wc12 from "@/assets/watercolour-12.jpg";
import wc13 from "@/assets/watercolour-13.jpg";

import ct1 from "@/assets/cartoon-1.jpg";
import ct2 from "@/assets/cartoon-2.jpg";
import ct3 from "@/assets/cartoon-3.jpg";
import ct4 from "@/assets/cartoon-4.jpg";
import ct5 from "@/assets/cartoon-5.jpg";
import ct6 from "@/assets/cartoon-6.jpg";

import sb1 from "@/assets/storyboard-1.jpg";
import sb2 from "@/assets/storyboard-2.jpg";
import sb3 from "@/assets/storyboard-3.jpg";
import sb4 from "@/assets/storyboard-4.jpg";

import ptr1 from "@/assets/portrait-1.png";
import ptr2 from "@/assets/portrait-2.png";
import ptr3 from "@/assets/portrait-3.png";
import ptr4 from "@/assets/portrait-4.png";
import ptr5 from "@/assets/portrait-5.png";
import ptr6 from "@/assets/portrait-6.png";
import ptr7 from "@/assets/portrait-7.png";
import ptr8 from "@/assets/portrait-8.png";
import ptr9 from "@/assets/portrait-9.png";
import ptr10 from "@/assets/portrait-10.png";
import ptr11 from "@/assets/portrait-11.png";
import ptr12 from "@/assets/portrait-12.png";
import ptr13 from "@/assets/portrait-13.png";
import ptr14 from "@/assets/portrait-14.png";

const perspectiveGallery = [
  { img: p1, caption: "Two-point perspective — Study desk scene" },
  { img: p2, caption: "Kitchen interior — Perspective drawing" },
  { img: p3, caption: "Room scene — Character and environment" },
  { img: p4, caption: "Bedroom interior — Furniture perspective" },
  { img: p5, caption: "Gym scene — Figure drawing with perspective" },
  { img: p6, caption: "Railway station — Detailed scene sketch" },
  { img: p7, caption: "Desk setup — Bird's eye perspective" },
  { img: p8, caption: "Dice study — 3D form exploration" },
  { img: p9, caption: "Kitchen interior — Worm's eye view" },
];

const productGallery = [
  { img: pd1, caption: "Lighter — 3D form with shadow study" },
  { img: pd2, caption: "Earbuds — Multi-angle product sketches" },
  { img: pd3, caption: "Lighter — Closed form perspective" },
  { img: pd4, caption: "Toothbrush — Product design exploration" },
];

const watercolourGallery = [
  { img: wc1, caption: "Coffee shop — Ink illustration" },
  { img: wc2, caption: "Mandala — Intricate ink pattern art" },
  { img: wc3, caption: "Duck pond — Watercolor painting" },
  { img: wc4, caption: "Mother & child — Acrylic canvas painting" },
  { img: wc5, caption: "Cherries — Pencil colour still life" },
  { img: wc6, caption: "Krishna — Acrylic portrait painting" },
  { img: wc7, caption: "Surreal eyes — Pencil colour illustration" },
  { img: wc8, caption: "Innocent — Cute character sketch" },
  { img: wc9, caption: "Character contrast — Body type study" },
  { img: wc10, caption: "Funny uncle — Character with dialogue" },
  { img: wc11, caption: "Girl on stool — Figure drawing" },
  { img: wc12, caption: "Ballerina — Graceful pose sketch" },
  { img: wc13, caption: "Ice cream dialogue — Comic characters" },
];

const cartoonGallery = [
  { img: ct1, caption: "Innocent — Cute chibi character" },
  { img: ct2, caption: "Character contrast — Body type exploration" },
  { img: ct3, caption: "Funny uncle — Character with dialogue" },
  { img: ct4, caption: "Girl on stool — Seated figure sketch" },
  { img: ct5, caption: "Ballerina — Graceful dance pose" },
  { img: ct6, caption: "Ice cream dialogue — Comic scene" },
];

const storyboardGallery = [
  { img: sb1, caption: "Art supplies — Scene composition panels" },
  { img: sb2, caption: "Strange glasses — Sequential narrative" },
  { img: sb3, caption: "Water conservation — Visual storytelling" },
  { img: sb4, caption: "Potato chips recipe — Instructional storyboard" },
];


const portraitGallery = [
  { img: ptr1, caption: "Anime girl — Cheerful peace sign pose" },
  { img: ptr2, caption: "Girl portrait — Semi-realistic style" },
  { img: ptr3, caption: "Judy Hopps — Character study sketch" },
  { img: ptr4, caption: "Girl portrait — Expressive pencil drawing" },
  { img: ptr5, caption: "Twin portraits — Detailed pencil study" },
  { img: ptr6, caption: "Camping sunset — Watercolor painting" },
  { img: ptr7, caption: "Anime girl — Cheerful peace sign sketch" },
  { img: ptr8, caption: "Girl portrait — Semi-realistic pencil drawing" },
  { img: ptr9, caption: "Judy Hopps — Character profile sketch" },
  { img: ptr10, caption: "Girl portrait — Expressive wavy hair drawing" },
  { img: ptr11, caption: "Detailed portrait — Floral background pencil study" },
  { img: ptr12, caption: "Twin portraits — Detailed pencil composition" },
  { img: ptr13, caption: "Camping sunset — Watercolor landscape painting" },
  { img: ptr14, caption: "Spider-Man — Dynamic ink and colour illustration" },
];

interface Project {
  img: string;
  title: string;
  category: string;
  desc: string;
  gallery?: { img: string; caption: string }[];
}

const projects: Project[] = [
  { img: sketch1, title: "Perspective Design", category: "Design Practice", desc: "Watercolor exploration of geometric forms and structures", gallery: perspectiveGallery },
  { img: sketch2, title: "Portrait", category: "School Project", desc: "Hand-lettered poster with playful illustrations" },
  { img: pd1, title: "Product Design", category: "Design Practice", desc: "Visual brainstorming for real-world problem concepts", gallery: productGallery },
  { img: wc3, title: "Water Colour & Pencil Colour Sketching", category: "Design Practice", desc: "Nature-inspired watercolor study with pastel tones", gallery: watercolourGallery },
  { img: ct1, title: "Cartoon Sketching", category: "Design Practice", desc: "Cute character illustrations with pencil and ink", gallery: cartoonGallery },
  { img: sb2, title: "Storyboards", category: "School Project", desc: "Sequential visual narratives for storytelling concepts", gallery: storyboardGallery },
  { img: ptr4, title: "Portraits", category: "Design Practice", desc: "Expressive character and figure portrait sketches", gallery: portraitGallery },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (project: Project) => {
    if (project.gallery) {
      setSelectedProject(project);
      setCurrentIndex(0);
    }
  };

  const navigate = (dir: number) => {
    if (!selectedProject?.gallery) return;
    setCurrentIndex((prev) => (prev + dir + selectedProject.gallery!.length) % selectedProject.gallery!.length);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
              onClick={() => openGallery(p)}
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
                  <span className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-glass-border">
                    {p.gallery ? `View Gallery (${p.gallery.length})` : "View Details"}
                  </span>
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

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject?.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X size={28} />
              </button>

              {/* Main image */}
              <div className="relative flex-1 flex items-center justify-center">
                <button
                  onClick={() => navigate(-1)}
                  className="absolute left-2 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-glass-border text-foreground hover:bg-card transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedProject.gallery[currentIndex].img}
                    alt={selectedProject.gallery[currentIndex].caption}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain"
                  />
                </AnimatePresence>

                <button
                  onClick={() => navigate(1)}
                  className="absolute right-2 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-glass-border text-foreground hover:bg-card transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Caption & counter */}
              <div className="text-center mt-4">
                <p className="font-display text-lg font-semibold text-foreground">{selectedProject.gallery[currentIndex].caption}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentIndex + 1} / {selectedProject.gallery.length}
                </p>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                {selectedProject.gallery.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      i === currentIndex ? "border-primary scale-110" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
