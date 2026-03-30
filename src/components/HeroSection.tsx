import { motion } from "framer-motion";
import heroWatercolor from "@/assets/hero-watercolor.jpg";
import profileIllustration from "@/assets/profile-illustration.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={heroWatercolor}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="container relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 py-32">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Aspiring Product Designer
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient-pastel">Sandhyarani</span>
            <br />
            <span className="text-foreground">Pursi</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Passionate about visual storytelling and user-centered design. Creating meaningful, 
            impactful designs inspired by real-world problems.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-lavender"
          >
            View My Work
          </a>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-card glow-lavender animate-float">
            <img
              src={profileIllustration}
              alt="Sandhyarani Pursi illustration"
              className="w-full h-full object-cover"
              width={512}
              height={512}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
