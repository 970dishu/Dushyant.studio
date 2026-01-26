const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground text-sm md:text-base mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Hi
            </p>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Duncan Robert
            </h1>
            
            <div className="flex items-baseline gap-4 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <span className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground italic">
                digital
              </span>
            </div>
            
            <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <span className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground italic">
                designer
              </span>
            </div>
            
            <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              I'm a US-based digital designer and Framer developer
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right - Portrait Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=faces"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Secondary Image */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-background shadow-xl opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces"
                  alt="Portrait secondary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
