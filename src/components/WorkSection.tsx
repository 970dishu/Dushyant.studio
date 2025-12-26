import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Liquid Forms",
    category: "3D Animation",
    year: "2024",
  },
  {
    image: project2,
    title: "Type in Motion",
    category: "Kinetic Typography",
    year: "2024",
  },
  {
    image: project3,
    title: "Golden Flow",
    category: "Product Viz",
    year: "2023",
  },
  {
    image: project4,
    title: "Neon Grid",
    category: "Motion Graphics",
    year: "2023",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-body text-primary tracking-widest uppercase mb-4 block">
              .selected work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              Featured
              <br />
              Projects
            </h2>
          </div>
          <p className="text-muted-foreground font-body max-w-md">
            A curated selection of motion design projects showcasing creativity, 
            technical skill, and visual storytelling.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              category={project.category}
              year={project.year}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
