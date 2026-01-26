import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Motion Design",
    description: "Bringing static visuals to life through dynamic animations that captivate and engage audiences.",
    details: [
      "2D & 3D motion graphics",
      "Logo animations",
      "Explainer videos",
      "Social media content",
      "UI/UX micro-interactions",
      "Kinetic typography",
    ],
  },
  {
    number: "02",
    title: "Film Editing",
    description: "Crafting compelling narratives through precise editing, pacing, and visual storytelling techniques.",
    details: [
      "Narrative film editing",
      "Commercial editing",
      "Documentary storytelling",
      "Color grading",
      "Sound design",
      "Multi-camera editing",
    ],
  },
  {
    number: "03",
    title: "Creative Direction",
    description: "Leading visual projects from concept to completion with a unified creative vision.",
    details: [
      "Visual concept development",
      "Brand identity",
      "Art direction",
      "Creative strategy",
      "Team collaboration",
      "Pitch development",
    ],
  },
  {
    number: "04",
    title: "Storywriting",
    description: "Developing compelling narratives that connect with audiences on an emotional level.",
    details: [
      "Script development",
      "Storyboarding",
      "Narrative structure",
      "Brand storytelling",
      "Character development",
      "Concept writing",
    ],
  },
];

const ServiceCard = ({ 
  service, 
  index, 
  isActive,
  onHover 
}: { 
  service: typeof services[0]; 
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}) => {
  return (
    <motion.div
      className="group relative border-b border-border/30 cursor-pointer"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="py-8 md:py-12 lg:py-16 flex items-start md:items-center justify-between gap-6">
        {/* Left: Number + Title */}
        <div className="flex items-baseline gap-4 md:gap-8 flex-1">
          <span className="text-primary/40 font-heading text-lg md:text-xl lg:text-2xl font-medium">
            {service.number}
          </span>
          <div className="flex-1">
            <motion.h3 
              className="font-heading text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground transition-colors duration-300 group-hover:text-primary"
              animate={{ x: isActive ? 20 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
          </div>
        </div>

        {/* Right: Arrow indicator */}
        <motion.div 
          className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full border border-border/50 flex items-center justify-center"
          animate={{ 
            backgroundColor: isActive ? "hsl(var(--primary))" : "transparent",
            borderColor: isActive ? "hsl(var(--primary))" : "hsl(var(--border) / 0.5)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-5 h-5 md:w-6 md:h-6"
            animate={{ 
              rotate: isActive ? 45 : 0,
              stroke: isActive ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))"
            }}
            transition={{ duration: 0.3 }}
          >
            <path 
              d="M7 17L17 7M17 7H7M17 7V17" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Expanded Content */}
      <motion.div
        className="overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="pb-8 md:pb-12 lg:pb-16 pl-8 md:pl-20 lg:pl-24">
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mb-8">
            {service.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {service.details.map((detail, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full border border-border/50 text-sm md:text-base text-foreground/80 hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {detail}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background pointer-events-none"
        style={{ y: backgroundY }}
      />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-16 md:mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-sm text-primary uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What I Do
          </motion.p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground leading-[1.1]">
            Services<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-border/30">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              isActive={activeIndex === index}
              onHover={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
