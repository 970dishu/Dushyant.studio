import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Video from Lovable Cloud storage
const VIDEO_URL = "https://irsbtrpdbggqjfirabmw.supabase.co/storage/v1/object/public/video/call.mp4";
// Thumbnail for video poster
const THUMBNAIL_URL = "https://irsbtrpdbggqjfirabmw.supabase.co/storage/v1/object/public/video/call.mp4#t=0.1";

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
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const nameRef = useRef<HTMLDivElement>(null);

  // Scroll-based animation for the name
  const { scrollY } = useScroll();
  
  // Transform the name's Y position as user scrolls (moves up toward navbar)
  const nameY = useTransform(scrollY, [0, 200], [0, -150]);
  // Scale down as it approaches the navbar
  const nameScale = useTransform(scrollY, [0, 200], [1, 0.3]);
  // Fade out as it "transfers" to the navbar version
  const nameOpacity = useTransform(scrollY, [0, 100, 200], [0.8, 0.4, 0]);

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
      <section className="hidden md:block w-full">
        {/* Title Area - Top Third */}
        <div className="h-[60vh] flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            {/* Name above title - moves up on scroll to merge with navbar */}
            <motion.p 
              ref={nameRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ 
                y: nameY, 
                scale: nameScale,
                opacity: nameOpacity,
              }}
              className="font-cursive text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 lg:mb-6 will-change-transform"
            >
              Dushyant
            </motion.p>
            
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl lg:text-9xl xl:text-[10rem] font-bold text-foreground leading-none whitespace-nowrap flex items-baseline justify-center gap-4 lg:gap-6"
            >
              <span 
                className="font-cursive text-primary italic"
                style={{
                  textShadow: "0 0 40px hsl(var(--primary) / 0.3)"
                }}
              >
                Creative
              </span>
              <span className="font-barrio uppercase tracking-wide">
                Director
              </span>
            </motion.h1>

            <p className="text-muted-foreground text-base lg:text-lg mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Crafting visual stories through motion
            </p>
          </motion.div>
        </div>

        {/* Videos Container with Independent Scroll */}
        <div className="relative h-[40vh]">
          {/* Fade overlay at top */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable video grid */}
          <div
            ref={videoContainerRef}
            className="h-full overflow-y-auto px-8 lg:px-16 xl:px-24 py-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
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
                    poster={THUMBNAIL_URL}
                    preload="metadata"
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Fade overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden w-full">
        {/* Title Area */}
        <div className="h-[30vh] flex items-center justify-center pt-16">
          <div className="text-center px-6">
            {/* Name above title */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-cursive text-2xl text-foreground/80 mb-2"
            >
              Dushyant
            </motion.p>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl font-bold text-foreground leading-none whitespace-nowrap flex items-baseline justify-center gap-3"
            >
              <span 
                className="font-cursive text-primary italic"
                style={{
                  textShadow: "0 0 30px hsl(var(--primary) / 0.3)"
                }}
              >
                Creative
              </span>
              <span className="font-barrio uppercase tracking-wide text-4xl">
                Director
              </span>
            </motion.h1>

            <p className="text-muted-foreground text-sm mt-4">
              Crafting visual stories through motion
            </p>
          </div>
        </div>

        {/* Videos Container with Independent Scroll */}
        <div className="relative h-[70vh]">
          {/* Fade overlay at top */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable video grid */}
          <div 
            className="h-full overflow-y-auto px-4 py-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
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
                    poster={THUMBNAIL_URL}
                    preload="metadata"
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
          
          {/* Fade overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </div>
      </section>
    </>
  );
};

export default Hero;
