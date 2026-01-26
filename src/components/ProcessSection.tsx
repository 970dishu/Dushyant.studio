const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your vision, brand, and goals through in-depth consultation."
  },
  {
    number: "02", 
    title: "Concept",
    description: "Developing creative direction and storyboards that align with your objectives."
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting detailed motion design with meticulous attention to timing and flow."
  },
  {
    number: "04",
    title: "Deliver",
    description: "Final refinements and delivery in all required formats and specifications."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-body text-primary tracking-[0.3em] uppercase mb-4 block">
            How I Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-heading font-bold text-border group-hover:text-primary transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;