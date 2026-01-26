const services = [
  {
    number: "1",
    title: "UI/UX Design",
    items: [
      "Wireframing and prototyping",
      "User Interface design for web and mobile apps",
      "Usability testing and user feedback analysis",
      "Interaction design and micro-animations",
    ],
  },
  {
    number: "2",
    title: "Graphic Design",
    items: [
      "Logo and brand identity design",
      "Social media graphics and ad creatives",
      "Infographics and data visualization",
      "Custom illustrations and icons",
    ],
  },
  {
    number: "3",
    title: "Web Design",
    items: [
      "Responsive website design",
      "Landing page design and optimization",
      "Webflow development and customization",
      "Website maintenance and updates",
    ],
  },
  {
    number: "4",
    title: "Branding",
    items: [
      "Brand strategy and identity development",
      "Visual style guide creation",
      "Typography and color scheme selection",
      "Brand storytelling and messaging",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            What I Can Do For You
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="bg-background rounded-2xl p-8 md:p-10 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl md:text-5xl font-heading font-medium text-muted-foreground/30">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
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
