import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import CustomCursor from "./CustomCursor";

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  return (
    <section id="work" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm text-primary uppercase tracking-wider mb-4">
              Selected Work
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg">
            A showcase of my best motion design, film editing, and creative direction work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <CustomCursor 
                isVisible={hoveredProject === project.id}
                containerRef={{ current: projectRefs.current[project.id] } as React.RefObject<HTMLElement>}
              />
              <div
                ref={(el) => projectRefs.current[project.id] = el}
                onClick={() => navigate(`/project/${project.slug}`)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group block bg-background rounded-2xl overflow-hidden card-hover border border-border cursor-none"
              >
                {/* Image/Video Placeholder */}
                <div className="image-zoom aspect-video bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Green gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <span className="text-xs text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
