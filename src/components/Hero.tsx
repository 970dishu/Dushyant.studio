const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary text-sm md:text-base mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Hello, I'm
            </p>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Dushyant Garg
            </h1>
            
            <div className="flex items-baseline gap-4 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <span className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground italic">
                motion
              </span>
            </div>
            
            <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <span className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary italic">
                designer
              </span>
            </div>
            
            <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              Motion Designer & Creative Director crafting compelling visual stories through animation and film
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
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

          {/* Right - Portrait Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-secondary border border-border">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=faces"
                  alt="Dushyant Garg - Motion Designer"
                  className="w-full h-full object-cover"
                />
                {/* Green gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-2xl opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
