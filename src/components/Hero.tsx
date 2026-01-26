import dushyantPortrait from "@/assets/dushyant-portrait.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-20">
        {/* Main Layout - Three Column Flex */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0">
          
          {/* Left Column - Name & MOTION */}
          <div className="flex-1 flex flex-col justify-between py-4 lg:py-8 text-center lg:text-left order-1 lg:order-1">
            <p className="text-foreground text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] font-medium opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Dushyant Garg
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] xl:text-[8rem] font-bold text-foreground uppercase tracking-tight leading-none mt-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Motion
            </h1>
          </div>

          {/* Center - Portrait Image */}
          <div className="flex-shrink-0 flex items-center justify-center order-2 lg:order-2 py-8 lg:py-0 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative overflow-hidden aspect-[3/4] w-48 md:w-56 lg:w-64 xl:w-72">
              <img
                src={dushyantPortrait}
                alt="Dushyant - Motion Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - DESIGNER & Description */}
          <div className="flex-1 flex flex-col justify-between py-4 lg:py-8 text-center lg:text-right order-3 lg:order-3">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] xl:text-[8rem] font-bold text-foreground uppercase tracking-tight leading-none lg:mt-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Designer
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xs mx-auto lg:mx-0 lg:ml-auto mt-4 lg:mt-0 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
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
