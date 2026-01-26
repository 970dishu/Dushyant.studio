import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Graphic Design",
    title: "Summer Vibes Festival Campaign",
    description: "Created promotional materials for the \"Summer Vibes Festival,\" including posters, flyers, and social media graphics.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    category: "Branding",
    title: "Coral Spiral Abstract",
    description: "A visually striking 3D abstract artwork featuring a coral-colored spiral form with smooth, flowing curves.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "ShopEase Redesign Sprint",
    description: "Redesigned the \"ShopEase\" e-commerce app to enhance user experience with simplified navigation.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    category: "Branding",
    title: "Black Geometric Prisms",
    description: "A collection of sharp, angular black prisms showcasing a modern approach to digital 3D geometric composition.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c09?w=800&h=600&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Featured Projects
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Selected Work
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg">
            These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href="#"
              className="group block bg-background rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="image-zoom aspect-[4/3] bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </span>
                <div className="flex items-start justify-between gap-4 mt-3">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium border border-border text-foreground rounded-full hover:bg-background transition-colors duration-300"
          >
            Browse All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
