import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Video from Lovable Cloud storage
const VIDEO_URL = "https://irsbtrpdbggqjfirabmw.supabase.co/storage/v1/object/public/video/call.mp4";
// Thumbnail for video poster
const THUMBNAIL_URL = "https://irsbtrpdbggqjfirabmw.supabase.co/storage/v1/object/public/video/call.mp4#t=0.1";

// Video projects data with client and subtitle
const videoProjects = [
  {
    id: 1,
    client: "SPOTIFY",
    subtitle: "WRAPPED 2024",
  },
  {
    id: 2,
    client: "NIKE",
    subtitle: "AIR MAX DAY",
  },
  {
    id: 3,
    client: "APPLE",
    subtitle: "SHOT ON IPHONE",
  },
  {
    id: 4,
    client: "SAMSUNG",
    subtitle: "GALAXY UNPACKED",
  },
  {
    id: 5,
    client: "COLDPLAY",
    subtitle: "MOON MUSIC",
  },
  {
    id: 6,
    client: "ADIDAS",
    subtitle: "IMPOSSIBLE IS NOTHING",
  },
  {
    id: 7,
    client: "PUMA",
    subtitle: "FOREVER FASTER",
  },
  {
    id: 8,
    client: "RED BULL",
    subtitle: "GIVES YOU WINGS",
  },
  {
    id: 9,
    client: "ZARA",
    subtitle: "FALL COLLECTION",
  },
  {
    id: 10,
    client: "H&M",
    subtitle: "CONSCIOUS",
  },
  {
    id: 11,
    client: "GUCCI",
    subtitle: "ANCORA",
  },
  {
    id: 12,
    client: "LOUIS VUITTON",
    subtitle: "HORIZONS",
  },
];
const Hero = () => {
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);
  const [fullscreenVideoId, setFullscreenVideoId] = useState<number | null>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{
    [key: number]: HTMLVideoElement | null;
  }>({});

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
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-50 bg-background cursor-pointer"
            onClick={handleFullscreenClose}
          >
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section - Desktop/Tablet */}
      <section className="hidden md:block w-full">
        {/* Title Area - Top Third */}
        <div className="h-[40vh] flex items-center justify-center relative pt-20 pb-2">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="text-center my-0"
          >
            <motion.h1
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-bold text-foreground leading-none whitespace-nowrap flex items-baseline justify-center gap-6"
              style={{
                fontSize: "clamp(4.5rem, 8vw, 10rem)",
              }}
            >
              <span
                className="font-cursive text-primary italic"
                style={{
                  textShadow: "0 0 40px hsl(var(--primary) / 0.3)",
                }}
              >
                Creative
              </span>
              <span className="font-barrio uppercase tracking-wide">Director</span>
            </motion.h1>

            {/* Tagline and signature on the same line */}
            <div className="flex items-center justify-between w-full max-w-4xl mx-auto mt-8 px-4">
              <p
                className="text-muted-foreground opacity-0 animate-fade-up"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                  fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
                }}
              >
                Crafting visual stories through motion
              </p>

              <motion.p
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 0.6,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="font-cursive text-foreground/60"
                style={{
                  fontSize: "clamp(1.25rem, 1.8vw, 1.875rem)",
                }}
              >
                — Dushyant
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Videos Container with Independent Scroll */}
        <div className="relative h-[60vh]">
          {/* Fade overlay at top */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

          {/* Scrollable video grid */}
          <div
            ref={videoContainerRef}
            className="h-full overflow-y-auto px-8 lg:px-16 xl:px-24 pt-4 pb-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-10">
              {videoProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="cursor-pointer group"
                  onMouseEnter={() => handleVideoHover(project.id)}
                  onMouseLeave={handleVideoLeave}
                  onClick={() => handleVideoClick(project.id)}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.05,
                    duration: 0.5,
                  }}
                >
                  {/* Header with serial number, client and subtitle */}
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-muted-foreground text-sm font-mono">[{project.id}]</span>
                    <div>
                      <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
                        {project.client}
                      </h3>
                      <p className="text-muted-foreground text-xs font-mono tracking-wider">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Video */}
                  <div className="relative aspect-video rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <video
                      ref={(el) => {
                        videoRefs.current[project.id] = el;
                      }}
                      src={VIDEO_URL}
                      poster={THUMBNAIL_URL}
                      preload="metadata"
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
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
          <div className="px-4">
            <motion.h1
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl font-bold text-foreground leading-none whitespace-nowrap flex items-baseline justify-center gap-3"
            >
              <span
                className="font-cursive text-primary italic"
                style={{
                  textShadow: "0 0 30px hsl(var(--primary) / 0.3)",
                }}
              >
                Creative
              </span>
              <span className="font-barrio uppercase tracking-wide text-4xl">Director</span>
            </motion.h1>

            {/* Tagline and signature on the same line */}
            <div className="flex items-center justify-between w-full mt-4 px-2">
              <p className="text-muted-foreground text-xs">Crafting visual stories through motion</p>

              <motion.p
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
                className="font-cursive text-sm text-foreground/60"
              >
                — Dushyant
              </motion.p>
            </div>
          </div>
        </div>

        {/* Videos Container with Independent Scroll */}
        <div className="relative h-[70vh]">
          {/* Fade overlay at top */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

          {/* Scrollable video grid */}
          <div
            className="h-full overflow-y-auto px-4 py-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="grid grid-cols-1 gap-6">
              {videoProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="cursor-pointer"
                  onClick={() => handleVideoClick(project.id)}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  {/* Header with serial number, client and subtitle */}
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-muted-foreground text-xs font-mono">[{project.id}]</span>
                    <div>
                      <h3 className="text-foreground text-xs font-semibold tracking-wide uppercase">
                        {project.client}
                      </h3>
                      <p className="text-muted-foreground text-[10px] font-mono tracking-wider">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Video */}
                  <div className="relative aspect-video rounded-lg overflow-hidden">
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
                  </div>
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
