import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Video from Lovable Cloud storage
const VIDEO_URL = "https://irsbtrpdbggqjfirabmw.supabase.co/storage/v1/object/public/video/call.mp4";

// Video projects data
const videoProjects = [
  { id: 1, title: "Brand Identity Motion" },
  { id: 2, title: "Product Launch Film" },
  { id: 3, title: "Social Media Campaign" },
  { id: 4, title: "App Onboarding Flow" },
  { id: 5, title: "Music Video Direction" },
  { id: 6, title: "Corporate Explainer" },
  { id: 7, title: "Event Title Sequence" },
  { id: 8, title: "Retail Campaign" },
];

const Hero = () => {
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  // Play/pause videos on hover
  useEffect(() => {
    // Pause all videos first
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play the hovered video
    if (hoveredVideoId !== null && videoRefs.current[hoveredVideoId]) {
      videoRefs.current[hoveredVideoId]?.play();
    }
  }, [hoveredVideoId]);

  // Prevent body scroll when video is fullscreen
  useEffect(() => {
    if (hoveredVideoId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hoveredVideoId]);

  const handleVideoHover = (id: number) => {
    setHoveredVideoId(id);
  };

  const handleVideoLeave = () => {
    setHoveredVideoId(null);
  };

  return (
    <>
      {/* Fullscreen Video Overlay */}
      <AnimatePresence>
        {hoveredVideoId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background"
            onMouseLeave={handleVideoLeave}
          >
            <video
              src={VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section - Desktop/Tablet */}
      <section className="hidden md:flex h-screen w-full overflow-hidden">
        {/* Left Side - Cycling Text */}
        <div className="w-1/2 h-full flex items-center justify-center px-8 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-left"
          >
            <p className="text-foreground text-sm uppercase tracking-[0.25em] font-medium mb-4 opacity-0 animate-fade-up ml-1" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Dushyant
            </p>
            
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground uppercase tracking-tighter leading-none"
            >
              {"Creative Director".split(" ").map((word, i) => (
                <motion.span 
                  key={i} 
                  className="block"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <p className="text-muted-foreground text-base lg:text-lg mt-8 max-w-md opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Crafting visual stories through motion,<br />
              one frame at a time.
            </p>

            <div className="mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <span className="text-muted-foreground text-sm">Hover a video to preview →</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Video Thumbnails Column */}
        <div className="w-1/2 h-full relative">
          {/* Scrollable Video Column */}
          <div
            ref={scrollContainerRef}
            className="h-full overflow-y-auto py-8 px-4"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="space-y-4">
              {videoProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                  onMouseEnter={() => handleVideoHover(project.id)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Video Thumbnail */}
                  <video
                    ref={(el) => { videoRefs.current[project.id] = el; }}
                    src={VIDEO_URL}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
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
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl font-bold text-foreground uppercase tracking-tighter leading-none"
          >
            {"Creative Director".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                className="block"
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

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
                className="relative flex-shrink-0 w-[320px] aspect-video rounded-xl overflow-hidden"
                whileTap={{ scale: 0.98 }}
              >
                <video
                  src={VIDEO_URL}
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-heading text-sm text-foreground font-bold uppercase tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
