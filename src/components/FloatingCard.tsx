import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroImage from "@/assets/hero-motion.jpg";
import dushyantPortrait from "@/assets/dushyant-portrait.png";

const FloatingCard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll();

  // Smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // X position - left in hero, right in services, left in about
  const xPercent = useTransform(
    smoothProgress,
    [0, 0.15, 0.25, 0.35, 0.45, 0.55],
    [0, 0, 55, 55, 0, 0]
  );

  // Y position - follows scroll with offset adjustments
  const yOffset = useTransform(
    smoothProgress,
    [0, 0.15, 0.25, 0.35, 0.45, 0.55],
    ["0vh", "0vh", "5vh", "5vh", "0vh", "0vh"]
  );

  // 3D Rotation on Y axis - flips when transitioning
  const rotateY = useTransform(
    smoothProgress,
    [0, 0.15, 0.20, 0.25, 0.35, 0.40, 0.45, 0.55],
    [0, 0, 90, 180, 180, 90, 0, 0]
  );

  // Subtle rotation on X axis for depth
  const rotateX = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6],
    [0, 3, -3, 0]
  );

  // Scale pulsing
  const scale = useTransform(
    smoothProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    [1, 0.95, 1.02, 0.98, 1.02, 1]
  );

  // Overall opacity
  const opacity = useTransform(
    smoothProgress,
    [0, 0.02, 0.6, 0.65],
    [0, 1, 1, 0]
  );

  if (isMobile) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-y-1/2"
        style={{
          x: useTransform(xPercent, (v) => `calc(-50% + ${v}vw - ${v * 0.5}vw)`),
          y: yOffset,
          rotateY,
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card Container */}
        <div className="relative w-64 h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-[26rem] xl:w-[22rem] xl:h-[30rem]">
          
          {/* Front Face */}
          <motion.div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src={dushyantPortrait}
              alt="Dushyant - Motion Designer"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
            
            {/* Badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-primary/90 backdrop-blur-sm rounded-xl px-4 py-3">
                <p className="text-primary-foreground font-heading text-lg font-medium">
                  Dushyant
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Motion Designer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Back Face */}
          <motion.div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-primary"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img
              src={heroImage}
              alt="Creative Work"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="text-primary-foreground/60 text-sm uppercase tracking-widest mb-4">
                Available for
              </span>
              <h3 className="text-primary-foreground font-heading text-3xl md:text-4xl font-bold mb-4">
                Creative<br />Projects
              </h3>
              <div className="w-16 h-[2px] bg-primary-foreground/40 mb-4" />
              <p className="text-primary-foreground/70 text-sm max-w-[200px]">
                Motion Design • Film Editing • Creative Direction
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingCard;
