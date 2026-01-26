import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { 
    image: project1, 
    title: "UX Motion Design",
    category: "Interface Animation",
    description: "Crafting seamless micro-interactions and UI animations that enhance user experience."
  },
  { 
    image: project2, 
    title: "Motion Garage",
    category: "Brand Animation",
    description: "Bold motion design for automotive brands that captures speed and precision."
  },
  { 
    image: project3, 
    title: "Digital Flow",
    category: "Product Animation",
    description: "Fluid animations that bring digital products to life."
  },
  { 
    image: project4, 
    title: "Abstract Series",
    category: "Experimental",
    description: "Exploring the boundaries of motion and abstract visual art."
  },
];

const WorkSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-body text-primary tracking-[0.3em] uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span>View All Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] group cursor-pointer snap-start"
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-body text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="container mx-auto px-6 mt-8 md:hidden">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span>View All Work</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default WorkSection;