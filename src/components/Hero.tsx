import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Smoky Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        {/* Smoke layers */}
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[400px] bg-gradient-radial from-foreground/5 via-foreground/2 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-gradient-radial from-foreground/8 via-foreground/3 to-transparent rounded-full blur-3xl animate-float-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[350px] bg-gradient-radial from-foreground/4 via-transparent to-transparent rounded-full blur-3xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <p className="text-xs md:text-sm font-body text-muted-foreground tracking-[0.3em] uppercase mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          Crafting Unique Motion Experiences
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold text-foreground leading-[1.05] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Motion<span className="text-primary">that</span>you
          <br />
          need<span className="text-primary">Indeed</span>
        </h1>
        
        <p className="text-base md:text-lg font-body text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Elevate your brand with custom motion design and animation. Showcase your story through bold visuals and strategic design solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get Started Now
          </a>
          <a
            href="#work"
            className="px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            See Projects
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
        <a href="#work" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll down</span>
          <span className="text-xs text-muted-foreground/60">to see projects</span>
          <ArrowDown size={16} className="animate-bounce mt-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
