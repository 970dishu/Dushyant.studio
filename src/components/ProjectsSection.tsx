import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalProjects: number;
}

const ProjectCard = ({
  project,
  index,
  totalProjects,
  scrollYProgress,
}: ProjectCardProps & { scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) => {
  const navigate = useNavigate();

  const isLastCard = index === totalProjects - 1;
  const isFirstCard = index === 0;

  // Each card owns an equal scroll segment
  const segmentSize = 1 / totalProjects;
  const start = index * segmentSize;
  const end = start + segmentSize;
  const nextStart = end;
  const nextEnd = nextStart + segmentSize;

  // Y position: incoming slides up from 800 to 0 over its own segment
  const y = useTransform(
    scrollYProgress,
    isFirstCard
      ? [0, 1]
      : [start, start + segmentSize * 0.1, end - segmentSize * 0.1, end],
    isFirstCard
      ? [0, 0]
      : [800, 700, 50, 0]
  );

  // Scale: card is 1.0 when active, recedes to 0.92 when the NEXT card enters
  const scale = useTransform(
    scrollYProgress,
    isLastCard
      ? (isFirstCard ? [0, start, end] : [0, start, end])
      : [0, start, end, nextStart, nextEnd, 1],
    isLastCard
      ? (isFirstCard ? [1, 1, 1] : [0.95, 0.95, 1])
      : [isFirstCard ? 1 : 0.95, isFirstCard ? 1 : 0.95, 1, 1, 0.92, 0.92]
  );

  // Z-index: each successive card stacks higher; incoming card gets boost
  const zIndex = useTransform(scrollYProgress, (v) => {
    if (!isFirstCard && v >= start && v < end) return totalProjects + index;
    return index;
  });

  return (
    <motion.div
      style={{ y, scale, zIndex, willChange: "transform", translateZ: 0 }}
      className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-12"
    >
      <div className="relative w-full max-w-[1600px]">
        <div
          onClick={() => navigate(`/project/${project.slug}`)}
          className="group relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-card cursor-pointer"
          style={{
            boxShadow:
              "0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 10px 30px -10px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-16">
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
              <span className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <span className="text-sm md:text-base text-primary uppercase tracking-widest mb-3">
              {project.category}
            </span>

            <h3 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mb-6">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-muted-foreground">
              <div>
                <span className="text-foreground/50">Client:</span>{" "}
                <span className="text-foreground">{project.client}</span>
              </div>
              <div>
                <span className="text-foreground/50">Year:</span>{" "}
                <span className="text-foreground">{project.year}</span>
              </div>
              <div>
                <span className="text-foreground/50">Role:</span>{" "}
                <span className="text-foreground">{project.role}</span>
              </div>
            </div>
          </div>

          {index === 0 && (
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Scroll
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="relative bg-background">
      {/* Section Header */}
      <div className="section-padding pb-0">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <motion.p
                className="text-sm text-primary uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Selected Work
              </motion.p>
              <motion.h2
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Featured Projects
              </motion.h2>
            </div>
            <motion.p
              className="text-muted-foreground text-base md:text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A showcase of my best motion design, film editing, and creative
              direction work.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll-driven container: tall enough for each card to get a full scroll step */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {/* Sticky viewport that stays pinned while cards swap */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalProjects={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
