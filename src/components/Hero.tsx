const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="text-sm font-body text-muted-foreground">
            Available for Freelance
          </span>
        </div>
        
        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-extrabold text-foreground leading-[0.9] tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Dushyant
          <br />
          Dubey
        </h1>
        
        {/* Role */}
        <p className="text-lg md:text-xl font-body text-muted-foreground mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Senior Motion Designer
        </p>

        {/* CTA */}
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Scroll to explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;