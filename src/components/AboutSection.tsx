const skills = [
  "After Effects",
  "Cinema 4D",
  "Blender",
  "Premiere Pro",
  "Illustrator",
  "Figma",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-body text-primary tracking-widest uppercase mb-4 block">
              .about me
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Bringing ideas to life
              <br />
              <span className="text-primary">frame by frame</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body">
              <p>
                I'm a motion designer with a passion for creating compelling visual narratives. 
                With expertise spanning 2D and 3D animation, I transform static concepts into 
                dynamic experiences that captivate and communicate.
              </p>
              <p>
                My approach combines technical precision with creative intuition, ensuring 
                every project not only meets objectives but exceeds expectations. Whether 
                it's brand animations, explainer videos, or experimental art pieces, I bring 
                dedication and artistry to every frame.
              </p>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-8">
              Tools & Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-5 py-3 text-sm font-body bg-background border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default opacity-0 animate-scale-in"
                  style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <span className="text-3xl md:text-4xl font-heading font-bold text-primary">5+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-heading font-bold text-primary">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-heading font-bold text-primary">30+</span>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
