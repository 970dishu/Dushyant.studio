import { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    number: "1",
    title: "Motion Design",
    description: "Bringing static visuals to life through dynamic animations that captivate and engage audiences.",
    details: [
      "2D & 3D motion graphics for brands and products",
      "Logo animations and brand intro sequences",
      "Explainer videos that simplify complex ideas",
      "Social media animations optimized for each platform",
      "UI/UX micro-interactions and transitions",
      "Title sequences and kinetic typography",
    ],
  },
  {
    number: "2",
    title: "Film Editing",
    description: "Crafting compelling narratives through precise editing, pacing, and visual storytelling techniques.",
    details: [
      "Narrative film editing with emotional impact",
      "Commercial and promotional video editing",
      "Documentary storytelling and structure",
      "Color grading for cinematic looks",
      "Sound design and audio mixing",
      "Multi-camera editing and live event coverage",
    ],
  },
  {
    number: "3",
    title: "Creative Direction",
    description: "Leading visual projects from concept to completion with a unified creative vision.",
    details: [
      "Visual concept development and ideation",
      "Brand visual identity and guidelines",
      "Art direction for campaigns and shoots",
      "Creative strategy and consulting",
      "Team collaboration and project oversight",
      "Client presentation and pitch development",
    ],
  },
  {
    number: "4",
    title: "Storywriting",
    description: "Developing compelling narratives that connect with audiences on an emotional level.",
    details: [
      "Script development for films and commercials",
      "Storyboarding and visual pre-production",
      "Narrative structure and plot design",
      "Brand storytelling and messaging",
      "Character development and dialogue",
      "Concept writing for campaigns",
    ],
  },
];

const ServicesSection = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (serviceNumber: string) => {
    setOpenService(openService === serviceNumber ? null : serviceNumber);
  };

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
            As a motion designer and creative director, I bring stories to life through compelling visuals and seamless animations. Click on each service to learn more.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-background rounded-2xl border border-border overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleService(service.number)}
                className="w-full px-8 py-6 md:py-8 flex items-center justify-between text-left hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl md:text-5xl font-heading font-medium text-primary/40">
                    {service.number}.
                  </span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mt-1 hidden md:block">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openService === service.number ? "rotate-180" : ""
                  }`} 
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openService === service.number ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 pt-2">
                  {/* Mobile description */}
                  <p className="text-muted-foreground text-sm mb-6 md:hidden">
                    {service.description}
                  </p>
                  
                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground text-sm md:text-base">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
