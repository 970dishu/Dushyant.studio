const steps = [
  {
    number: "01",
    title: "Define",
    description: "We discuss your vision, goals, and requirements to understand exactly what you need."
  },
  {
    number: "02", 
    title: "Create",
    description: "I craft your motion design with attention to every detail, ensuring it matches your brand."
  },
  {
    number: "03",
    title: "Deliver",
    description: "Receive your polished animation files, ready for use across all platforms."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-body text-muted-foreground tracking-[0.3em] uppercase mb-4 block">
            Design process
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Process
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Crafting bold visuals that inspire and elevate brands with thought process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-background border border-border rounded-2xl group hover:border-primary transition-colors duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: "forwards" }}
            >
              <span className="text-6xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-4 mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Book a Free Call
          </a>
          <a
            href="#work"
            className="px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
