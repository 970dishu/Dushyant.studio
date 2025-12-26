import heroImage from "@/assets/hero-motion.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Motion design abstract"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-body text-primary tracking-widest uppercase mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Motion Designer
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-foreground leading-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            I craft stories
            <br />
            through <span className="text-primary">motion</span>
          </h1>
          
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Transforming ideas into captivating visual experiences. 
            From kinetic typography to 3D animations, I bring brands to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <a
              href="#work"
              className="px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-sm font-medium uppercase tracking-wider border border-foreground/30 text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
        <a href="#work" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
