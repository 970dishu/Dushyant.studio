import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const services = [
  {
    id: "motion",
    title: "Motion Design",
    description: "Bringing static visuals to life through dynamic animations that captivate and engage audiences.",
    image: project1,
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
    id: "editing",
    title: "Film Editing",
    description: "Crafting compelling narratives through precise editing, pacing, and visual storytelling techniques.",
    image: project2,
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
    id: "direction",
    title: "Creative Direction",
    description: "Leading visual projects from concept to completion with a unified creative vision.",
    image: project3,
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
    id: "storywriting",
    title: "Storywriting",
    description: "Developing compelling narratives that connect with audiences on an emotional level.",
    image: project4,
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

const ServiceItem = ({
  service,
  isOpen,
  onToggle,
  onHover,
  onLeave,
}: {
  service: typeof services[0];
  isOpen: boolean;
  onToggle: () => void;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      className="border-b border-border/50 group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left transition-colors duration-300"
      >
        <div className="flex items-center gap-4 md:gap-8">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300"
          >
            {isOpen ? (
              <Minus className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            ) : (
              <Plus className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            )}
          </motion.div>
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 md:pl-20">
              <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl">
                {service.description}
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {service.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm md:text-base">
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesSection = () => {
  const [openService, setOpenService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const activeImage = services.find(
    (s) => s.id === (hoveredService || openService)
  )?.image;

  const toggleService = (serviceId: string) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="min-h-screen py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <p className="text-sm text-primary uppercase tracking-wider mb-4">
                Services
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1]">
                What can I<br />
                <span className="text-primary">do for you</span>?
              </h2>
            </div>

            {/* Accordion */}
            <div>
              {services.map((service) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isOpen={openService === service.id}
                  onToggle={() => toggleService(service.id)}
                  onHover={() => setHoveredService(service.id)}
                  onLeave={() => setHoveredService(null)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Hover Image */}
          <div className="hidden lg:block sticky top-32">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary"
            >
              <AnimatePresence mode="wait">
                {activeImage ? (
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt="Service preview"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="text-muted-foreground text-lg">
                      Hover a service
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
