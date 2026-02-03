import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder video data - replace with actual videos later
const videoProjects = [
  {
    id: 1,
    title: "Brand Identity Motion",
    thumbnail: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=400&h=600&fit=crop",
    client: "TechStart Inc.",
    year: "2024",
    role: "Motion Designer",
    tools: "After Effects, Cinema 4D",
    problem: "The brand lacked dynamic visual identity for digital platforms.",
    solution: "Created a cohesive motion language with animated logo, transitions, and UI animations.",
  },
  {
    id: 2,
    title: "Product Launch Film",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop",
    client: "Nova Electronics",
    year: "2024",
    role: "Creative Director",
    tools: "Premiere Pro, After Effects",
    problem: "New product launch needed impactful visual storytelling.",
    solution: "Directed a cinematic product film highlighting key features through dynamic motion.",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
    client: "FreshBite Foods",
    year: "2024",
    role: "Motion Designer",
    tools: "After Effects, Illustrator",
    problem: "Brand needed scroll-stopping content for social platforms.",
    solution: "Designed vibrant, snappy animations optimized for Instagram and TikTok.",
  },
  {
    id: 4,
    title: "App Onboarding Flow",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop",
    client: "FinFlow App",
    year: "2023",
    role: "UI Motion Designer",
    tools: "After Effects, Lottie",
    problem: "Complex app features needed intuitive visual explanation.",
    solution: "Created micro-interactions and onboarding animations for seamless UX.",
  },
  {
    id: 5,
    title: "Music Video Direction",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    client: "Indie Artist",
    year: "2023",
    role: "Creative Director",
    tools: "Premiere Pro, DaVinci Resolve",
    problem: "Artist needed visual identity for debut single.",
    solution: "Directed a visually striking music video blending live action with motion graphics.",
  },
  {
    id: 6,
    title: "Corporate Explainer",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
    client: "Global Logistics Co.",
    year: "2023",
    role: "Motion Designer",
    tools: "After Effects, Figma",
    problem: "Complex B2B services needed clear visual communication.",
    solution: "Produced engaging explainer video simplifying service offerings.",
  },
  {
    id: 7,
    title: "Event Title Sequence",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop",
    client: "Design Conference",
    year: "2023",
    role: "Motion Designer",
    tools: "After Effects, Cinema 4D",
    problem: "Annual conference needed memorable opening sequence.",
    solution: "Crafted dynamic title sequence with 3D elements and kinetic typography.",
  },
  {
    id: 8,
    title: "Retail Campaign",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
    client: "Luxe Fashion",
    year: "2022",
    role: "Creative Director",
    tools: "Premiere Pro, After Effects",
    problem: "Seasonal campaign needed premium visual treatment.",
    solution: "Directed high-end campaign films for multi-platform distribution.",
  },
];

const titles = ["Motion Designer", "Creative Director"];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<typeof videoProjects[0] | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof videoProjects[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Cycling text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Prevent body scroll when project is selected
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleProjectHover = (project: typeof videoProjects[0]) => {
    if (!selectedProject) {
      setHoveredProject(project);
    }
  };

  const handleProjectLeave = () => {
    if (!selectedProject) {
      setHoveredProject(null);
    }
  };

  const handleProjectClick = (project: typeof videoProjects[0]) => {
    setSelectedProject(project);
    setHoveredProject(null);
  };

  const handleCloseSelected = () => {
    setSelectedProject(null);
  };

  const activeProject = selectedProject || hoveredProject;

  return (
    <>
      {/* Main Hero Section - Desktop/Tablet */}
      <section className="hidden md:flex h-screen w-full overflow-hidden">
        {/* Left Side - Cycling Text or Project Details */}
        <div className="w-1/2 h-full flex items-center justify-center px-8 lg:px-16 relative">
          <AnimatePresence mode="wait">
            {activeProject ? (
              // Project Details View
              <motion.div
                key="project-details"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-lg"
              >
                {selectedProject && (
                  <button
                    onClick={handleCloseSelected}
                    className="mb-8 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest flex items-center gap-2"
                  >
                    <span>←</span> Back
                  </button>
                )}
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground uppercase tracking-tighter mb-8"
                >
                  {activeProject.title}
                </motion.h2>

                <div className="space-y-6">
                  {[
                    { label: "Client", value: activeProject.client },
                    { label: "Year", value: activeProject.year },
                    { label: "Role", value: activeProject.role },
                    { label: "Tools", value: activeProject.tools },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      className="border-b border-border pb-4"
                    >
                      <span className="text-muted-foreground text-xs uppercase tracking-widest block mb-1">
                        {item.label}
                      </span>
                      <span className="text-foreground text-lg">{item.value}</span>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <span className="text-muted-foreground text-xs uppercase tracking-widest block mb-2">
                      Problem
                    </span>
                    <p className="text-foreground/80 text-base leading-relaxed">
                      {activeProject.problem}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <span className="text-muted-foreground text-xs uppercase tracking-widest block mb-2">
                      Solution
                    </span>
                    <p className="text-foreground/80 text-base leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              // Cycling Text View
              <motion.div
                key="cycling-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-left"
              >
                <p className="text-foreground text-sm uppercase tracking-[0.25em] font-medium mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                  Dushyant
                </p>
                
                <div className="relative h-[120px] lg:h-[160px] xl:h-[200px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={currentTitleIndex}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="font-heading text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground uppercase tracking-tighter leading-none"
                    >
                      {titles[currentTitleIndex].split(" ").map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </motion.h1>
                  </AnimatePresence>
                </div>

                <p className="text-muted-foreground text-base lg:text-lg mt-8 max-w-md opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                  Crafting visual stories through motion,<br />
                  one frame at a time.
                </p>

                <div className="mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                  <span className="text-muted-foreground text-sm">Hover a project to explore →</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side - Video Thumbnails Column */}
        <div className="w-1/2 h-full relative">
          <AnimatePresence>
            {activeProject && (
              // Fullscreen Video Overlay
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-20"
                onClick={selectedProject ? handleCloseSelected : undefined}
              >
                <div className="w-full h-full bg-card flex items-center justify-center">
                  {/* Video placeholder - replace with actual video */}
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={activeProject.thumbnail}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[20px] border-l-primary border-y-[12px] border-y-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scrollable Video Column */}
          <div
            ref={scrollContainerRef}
            className={`h-full overflow-y-auto py-8 px-4 transition-opacity duration-300 ${
              activeProject ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="space-y-4">
              {videoProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                  onMouseEnter={() => handleProjectHover(project)}
                  onMouseLeave={handleProjectLeave}
                  onClick={() => handleProjectClick(project)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Thumbnail */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary-foreground border-y-[7px] border-y-transparent ml-1" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-heading text-lg text-foreground font-bold uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.client}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout - Simplified */}
      <section className="md:hidden min-h-screen flex flex-col pt-20 pb-8">
        {/* Cycling Text */}
        <div className="px-6 py-8">
          <p className="text-foreground text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Dushyant
          </p>
          
          <div className="relative h-[80px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTitleIndex}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-3xl font-bold text-foreground uppercase tracking-tighter leading-none"
              >
                {titles[currentTitleIndex].split(" ").map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-muted-foreground text-sm mt-4">
            Crafting visual stories through motion
          </p>
        </div>

        {/* Video Grid - Horizontal Scroll on Mobile */}
        <div className="flex-1 overflow-x-auto px-6 pb-8">
          <div className="flex gap-4 h-full">
            {videoProjects.map((project) => (
              <motion.div
                key={project.id}
                className="relative flex-shrink-0 w-[280px] aspect-[4/3] rounded-xl overflow-hidden"
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-heading text-sm text-foreground font-bold uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{project.client}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Project Modal Overlay for Mobile */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <button
                onClick={handleCloseSelected}
                className="mb-6 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest flex items-center gap-2"
              >
                <span>←</span> Back
              </button>
              
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground uppercase tracking-tighter mb-6">
                {selectedProject.title}
              </h2>

              <div className="space-y-4">
                {[
                  { label: "Client", value: selectedProject.client },
                  { label: "Year", value: selectedProject.year },
                  { label: "Role", value: selectedProject.role },
                  { label: "Tools", value: selectedProject.tools },
                ].map((item) => (
                  <div key={item.label} className="border-b border-border pb-3">
                    <span className="text-muted-foreground text-xs uppercase tracking-widest block mb-1">
                      {item.label}
                    </span>
                    <span className="text-foreground">{item.value}</span>
                  </div>
                ))}

                <div className="pt-2">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest block mb-2">
                    Problem
                  </span>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <span className="text-muted-foreground text-xs uppercase tracking-widest block mb-2">
                    Solution
                  </span>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
