import { useState, useEffect, useRef, useCallback, PointerEvent as ReactPointerEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MorphingText from "./MorphingText";

const VIDEO_URL = "https://irsbtrpdbggqjfirabmw.supabase.co/storage/v1/object/public/video/call.mp4";
const THUMBNAIL_URL = "https://irsbtrpdbggqjfirabmw.supabase.co/storage/v1/object/public/video/call.mp4#t=0.1";

const videoProjects = [
  { id: 1, client: "SPOTIFY", subtitle: "WRAPPED 2024" },
  { id: 2, client: "NIKE", subtitle: "AIR MAX DAY" },
  { id: 3, client: "APPLE", subtitle: "SHOT ON IPHONE" },
  { id: 4, client: "SAMSUNG", subtitle: "GALAXY UNPACKED" },
  { id: 5, client: "COLDPLAY", subtitle: "MOON MUSIC" },
  { id: 6, client: "ADIDAS", subtitle: "IMPOSSIBLE IS NOTHING" },
  { id: 7, client: "PUMA", subtitle: "FOREVER FASTER" },
  { id: 8, client: "RED BULL", subtitle: "GIVES YOU WINGS" },
  { id: 9, client: "ZARA", subtitle: "FALL COLLECTION" },
  { id: 10, client: "H&M", subtitle: "CONSCIOUS" },
  { id: 11, client: "GUCCI", subtitle: "ANCORA" },
  { id: 12, client: "LOUIS VUITTON", subtitle: "HORIZONS" },
];

const Hero = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [fullscreenVideoId, setFullscreenVideoId] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [cardTransforms, setCardTransforms] = useState<{ [key: number]: { rotateY: number; translateZ: number; opacity: number } }>({});
  const isUserScrolling = useRef(true); // false during programmatic scroll
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  // Play active video, pause others
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([idStr, video]) => {
      const id = Number(idStr);
      if (video) {
        if (id === activeId) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeId]);

  // Lock body scroll during fullscreen
  useEffect(() => {
    document.body.style.overflow = fullscreenVideoId !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [fullscreenVideoId]);

  // Compute 3D transforms and optionally detect center card
  const updateCarousel = useCallback((updateActive: boolean) => {
    const container = carouselRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const halfWidth = containerRect.width / 2;
    let closestId: number | null = null;
    let closestDist = Infinity;
    const transforms: typeof cardTransforms = {};

    Object.entries(cardRefs.current).forEach(([idStr, card]) => {
      if (!card) return;
      const id = Number(idStr);
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(cardCenter - centerX);
      if (dist < closestDist) {
        closestDist = dist;
        closestId = id;
      }
      const offset = (cardCenter - centerX) / halfWidth;
      const clampedOffset = Math.max(-1, Math.min(1, offset));
      const rotateY = clampedOffset * -35;
      const translateZ = (1 - Math.abs(clampedOffset)) * 50 - 50;
      const opacity = 1 - Math.abs(clampedOffset) * 0.5;
      transforms[id] = { rotateY, translateZ, opacity };
    });

    setCardTransforms(transforms);
    if (updateActive && closestId !== null && closestId !== activeId) {
      setActiveId(closestId);
    }
  }, [activeId]);

  // Listen for scroll events to detect center card
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => updateCarousel(isUserScrolling.current));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    const timeout = setTimeout(() => updateCarousel(true), 600);
    return () => {
      container.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(timeout);
    };
  }, [updateCarousel]);



  // Drag handlers
  const onPointerDown = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const container = carouselRef.current;
    if (!container) return;
    isDragging.current = true;
    hasDragged.current = false;
    isUserScrolling.current = true;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = container.scrollLeft;
  }, []);

  const onPointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    const container = carouselRef.current;
    if (container) {
      container.scrollLeft = dragScrollLeft.current - dx;
    }
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleCardClick = useCallback((id: number) => {
    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }

    // Prevent auto-detection from overriding during programmatic scroll
    isUserScrolling.current = false;
    setActiveId(id);

    const card = cardRefs.current[id];
    const container = carouselRef.current;
    if (card && container) {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scrollLeft = container.scrollLeft + (cardRect.left - containerRect.left) - (containerRect.width / 2 - cardRect.width / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      // Re-enable auto-detection after scroll completes
      setTimeout(() => { isUserScrolling.current = true; }, 600);
    } else {
      isUserScrolling.current = true;
    }
  }, []);

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
            className="fixed inset-0 z-50 bg-background cursor-pointer flex items-center justify-center"
            onClick={() => setFullscreenVideoId(null)}
          >
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="w-full min-h-screen flex flex-col">
        {/* Title Area */}
        <div className="flex-shrink-0 flex items-center justify-center pt-24 pb-6 md:pt-28 md:pb-10 lg:pt-32 lg:pb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center px-4"
          >
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold text-foreground leading-none whitespace-nowrap flex items-baseline justify-center gap-3 md:gap-6"
              style={{ fontSize: "clamp(3rem, 8vw, 10rem)" }}
            >
              <span
                className="font-cursive text-primary italic"
                style={{ textShadow: "0 0 40px hsl(var(--primary) / 0.3)" }}
              >
                Creative
              </span>
              <MorphingText className="font-barrio uppercase tracking-wide" />
            </motion.h1>

            <div className="flex items-center justify-between w-full max-w-4xl mx-auto mt-4 md:mt-8 px-2 md:px-4">
              <p
                className="text-muted-foreground text-xs md:text-base opacity-0 animate-fade-up"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                Crafting visual stories through motion
              </p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-cursive text-foreground/60 text-sm md:text-xl lg:text-3xl"
              >
                — Dushyant
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Video Carousel */}
        <div className="flex-1 relative flex items-center" style={{ perspective: "1200px" }}>
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={carouselRef}
            className="w-full overflow-x-auto flex items-center gap-4 md:gap-6 px-[20vw] md:px-[25vw] py-4 select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab", touchAction: "pan-y", transformStyle: "preserve-3d" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {videoProjects.map((project, index) => {
              const isActive = activeId === project.id;
              const t = cardTransforms[project.id];
              const rotateY = t?.rotateY ?? 0;
              const translateZ = t?.translateZ ?? 0;
              const cardOpacity = t?.opacity ?? 0.6;

              return (
                <motion.div
                  key={project.id}
                  ref={(el) => { cardRefs.current[project.id] = el; }}
                  className="flex-shrink-0 cursor-pointer group"
                  style={{
                    width: isActive ? "clamp(280px, 45vw, 520px)" : "clamp(220px, 30vw, 380px)",
                    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                    opacity: cardOpacity,
                    transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s ease-out, opacity 0.3s ease-out",
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => handleCardClick(project.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.04, duration: 0.5 }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-2 md:mb-3">
                    <span className="text-muted-foreground text-xs font-mono">[{project.id}]</span>
                    <div>
                      <h3 className="text-foreground text-xs md:text-sm font-semibold tracking-wide uppercase">
                        {project.client}
                      </h3>
                      <p className="text-muted-foreground text-[10px] md:text-xs font-mono tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Video Card */}
                  <motion.div
                    className={`relative aspect-video rounded-lg overflow-hidden ring-1 transition-all duration-500 ${
                      isActive
                        ? "ring-primary/50 shadow-lg shadow-primary/10"
                        : "ring-border/20 hover:ring-border/40"
                    }`}
                    animate={{ scale: isActive ? 1 : 0.95 }}
                    transition={{ duration: 0.4 }}
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

                    {/* Play indicator for non-active cards */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/20">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground/40 flex items-center justify-center group-hover:border-primary/60 group-hover:scale-110 transition-all duration-300">
                          <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-l-foreground/50 border-t-[5px] md:border-t-[6px] border-t-transparent border-b-[5px] md:border-b-[6px] border-b-transparent ml-1 group-hover:border-l-primary/70 transition-colors" />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      className="flex justify-center mt-3"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
