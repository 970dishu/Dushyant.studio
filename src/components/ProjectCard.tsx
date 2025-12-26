import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  year: string;
  index: number;
}

const ProjectCard = ({ image, title, category, year, index }: ProjectCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer opacity-0 animate-fade-up"
      style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
    >
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-body text-primary uppercase tracking-wider">{category}</span>
            <span className="text-xs text-muted-foreground">/ {year}</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            <span>View Project</span>
            <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-colors duration-300" />
    </div>
  );
};

export default ProjectCard;
