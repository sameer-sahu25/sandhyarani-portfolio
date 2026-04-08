import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container text-center space-y-4">
      <div className="flex justify-center">
        <a 
          href="mailto:sandhyaaa.0122@gmail.com" 
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
            <Mail size={18} />
          </div>
          <span className="text-sm font-medium">sandhyaaa.0122@gmail.com</span>
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        © 2026 <span className="text-gradient-pastel font-display font-semibold">Sandhyarani Pursi</span> — Aspiring Product Designer
      </p>
    </div>
  </footer>
);

export default Footer;
