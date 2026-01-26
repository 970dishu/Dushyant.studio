import dushyantPortrait from "@/assets/dushyant-portrait.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-20">
        {/* Main Layout - Three Column with Image Center */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          
          {/* Left Text - Name above, MOTION below */}
          <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 text-center lg:text-left z-10 flex flex-col">
            <p className="text-foreground text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] font-medium mb-1 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Dushyant
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold text-foreground uppercase tracking-tight leading-none opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Motion
            </h1>
          </div>

          {/* Center - Portrait Image */}
          <div className="relative z-20 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] w-64 md:w-72 lg:w-80 bg-secondary border border-border/50">
              <img
                src={dushyantPortrait}
                alt="Dushyant - Motion Designer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Hi Badge */}
            <div 
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <span className="text-primary-foreground font-heading text-xl md:text-2xl font-medium">Hi</span>
            </div>
          </div>

          {/* Right Text - DESIGNER on top, description below */}
          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 text-center lg:text-right z-10 flex flex-col">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold text-foreground uppercase tracking-tight leading-none opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Designer
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xs mx-auto lg:mx-0 lg:ml-auto mt-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              I'm a motion designer and<br />a creative director
            </p>
          </div>
        </div>

        {/* CTA Buttons - Below the main layout */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
