const tools = [
  "After Effects",
  "Cinema 4D",
  "Figma",
  "Blender",
  "Premiere Pro",
  "Lottie",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <span className="text-xs font-body text-primary tracking-[0.3em] uppercase mb-6 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-8">
              Creating motion that
              <br />
              <span className="text-primary">captivates</span> & inspires
            </h2>
            
            <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed mb-6">
              I'm a Senior Motion Designer with 5+ years of experience crafting compelling visual stories through animation and motion design.
            </p>
            
            <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed mb-10">
              My work spans UX animation, brand motion, and experimental projects—always pushing the boundaries of what's possible in motion design.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Right Content - Tools */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-body text-muted-foreground tracking-[0.3em] uppercase mb-8 block">
              Tools & Technologies
            </span>
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div 
                  key={tool}
                  className="flex items-center justify-between py-4 border-b border-border group cursor-default"
                >
                  <span className="text-lg md:text-xl font-heading font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {tool}
                  </span>
                  <span className="text-sm font-body text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;