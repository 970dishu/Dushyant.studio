import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { image: project1, title: "Liquid Forms" },
  { image: project2, title: "Type in Motion" },
  { image: project3, title: "Golden Flow" },
  { image: project4, title: "Neon Grid" },
  { image: project1, title: "Abstract Waves" },
  { image: project2, title: "Dynamic Shapes" },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-sm font-body text-foreground uppercase tracking-widest">
                    View Casestudy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
