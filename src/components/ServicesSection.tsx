const services = [
  {
    number: "1",
    title: "Motion Design",
    items: [
      "2D & 3D motion graphics",
      "Logo animations & brand intros",
      "Explainer videos & product demos",
      "Social media animations",
    ],
  },
  {
    number: "2",
    title: "Film Editing",
    items: [
      "Narrative film editing",
      "Commercial & promotional videos",
      "Documentary editing",
      "Color grading & sound design",
    ],
  },
  {
    number: "3",
    title: "Creative Direction",
    items: [
      "Visual concept development",
      "Brand visual identity",
      "Art direction for campaigns",
      "Creative strategy & consulting",
    ],
  },
  {
    number: "4",
    title: "Storywriting",
    items: [
      "Script development",
      "Storyboarding & visualization",
      "Narrative structure design",
      "Brand storytelling",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-sm text-primary uppercase tracking-wider mb-4">
            What I Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Services
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            As a motion designer and creative director, I bring stories to life through compelling visuals and seamless animations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="bg-background rounded-2xl p-8 md:p-10 card-hover border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl md:text-5xl font-heading font-medium text-primary/30">
                  {service.number}.
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground pt-2">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
