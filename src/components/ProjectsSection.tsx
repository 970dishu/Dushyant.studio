import { Play } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Motion Design",
    title: "Project Coming Soon",
    description: "Your motion design project will be showcased here.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    isVideo: true,
  },
  {
    id: 2,
    category: "Film Editing",
    title: "Project Coming Soon",
    description: "Your film editing project will be showcased here.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    isVideo: true,
  },
  {
    id: 3,
    category: "Creative Direction",
    title: "Project Coming Soon",
    description: "Your creative direction project will be showcased here.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    isVideo: true,
  },
  {
    id: 4,
    category: "Storywriting",
    title: "Project Coming Soon",
    description: "Your storywriting project will be showcased here.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    isVideo: true,
  },
];

const ProjectsSection = () => {
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
            <div
              key={project.id}
              className="group block bg-background rounded-2xl overflow-hidden card-hover border border-border cursor-pointer"
            >
              {/* Image/Video Placeholder */}
              <div className="image-zoom aspect-video bg-muted relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Play button overlay */}
                {project.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
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
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
