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
  const [fullscreenVideoId, setFullscreenVideoId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  // Play/pause videos on hover
  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (hoveredVideoId !== null && videoRefs.current[hoveredVideoId]) {
      videoRefs.current[hoveredVideoId]?.play();
    }
  }, [hoveredVideoId]);

  // Prevent body scroll when video is fullscreen
  useEffect(() => {
    if (fullscreenVideoId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreenVideoId]);

  const handleVideoHover = (id: number) => {
    setHoveredVideoId(id);
  };

  const handleVideoLeave = () => {
    setHoveredVideoId(null);
  };

  const handleVideoClick = (id: number) => {
    setFullscreenVideoId(id);
  };

  const handleFullscreenClose = () => {
    setFullscreenVideoId(null);
  };

  return (
    <>
      {/* Fullscreen Video Overlay */}
      <AnimatePresence>
        {fullscreenVideoId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background cursor-pointer"
            onClick={handleFullscreenClose}
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
      <section className="hidden md:block h-screen w-full relative overflow-hidden">
        {/* Fixed Title Area - Top Third with Fade */}
        <div className="fixed top-0 left-0 right-0 h-[45vh] z-20 pointer-events-none">
          {/* Background with gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background via-70% to-transparent" />
          
          {/* Title Content */}
          <div className="relative h-full flex items-center justify-center pt-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-foreground text-sm uppercase tracking-[0.3em] font-medium mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                Dushyant
              </p>
              
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground uppercase tracking-tighter leading-[0.85]"
              >
                <motion.span 
                  className="block"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Creative
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Director
                </motion.span>
              </motion.h1>

              <p className="text-muted-foreground text-base lg:text-lg mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                Crafting visual stories through motion
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scrollable Videos Container */}
        <div
          ref={scrollContainerRef}
          className="h-screen overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {/* Spacer - pushes videos to start at one-third */}
          <div className="h-[40vh]" />
          
          {/* Video Grid */}
          <div className="px-8 lg:px-16 xl:px-24 pb-16">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {videoProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => handleVideoHover(project.id)}
                  onMouseLeave={handleVideoLeave}
                  onClick={() => handleVideoClick(project.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <video
                    ref={(el) => { videoRefs.current[project.id] = el; }}
                    src={VIDEO_URL}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden min-h-screen flex flex-col relative">
        {/* Fixed Title Area with Fade */}
        <div className="fixed top-0 left-0 right-0 h-[40vh] z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background via-65% to-transparent" />
          
          <div className="relative h-full flex items-center justify-center pt-12">
            <div className="text-center px-6">
              <p className="text-foreground text-xs uppercase tracking-[0.25em] font-medium mb-3">
                Dushyant
              </p>
              
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl font-bold text-foreground uppercase tracking-tighter leading-[0.85]"
              >
                <span className="block">Creative</span>
                <span className="block">Director</span>
              </motion.h1>

              <p className="text-muted-foreground text-sm mt-4">
                Crafting visual stories through motion
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Videos */}
        <div className="min-h-screen overflow-y-auto pt-[35vh] pb-8 px-4">
          <div className="grid grid-cols-2 gap-3">
            {videoProjects.map((project) => (
              <motion.div
                key={project.id}
                className="relative aspect-video rounded-lg overflow-hidden"
                onClick={() => handleVideoClick(project.id)}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
