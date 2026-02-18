import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const prefixes = ["Direc", "Edi"];
const suffix = "tor";

const MorphingText = ({ className }: { className?: string }) => {
  const [prefixIndex, setPrefixIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | "auto">("auto");
  const measureRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrefixIndex((prev) => (prev + 1) % prefixes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentPrefix = prefixes[prefixIndex];

  useEffect(() => {
    if (measureRef.current) {
      setContainerWidth(measureRef.current.offsetWidth);
    }
  }, [prefixIndex]);

  return (
    <span className={`relative inline-flex ${className ?? ""}`}>
      {/* Hidden measurer for prefix */}
      <span
        ref={measureRef}
        className="absolute invisible whitespace-nowrap"
        aria-hidden="true"
      >
        {currentPrefix.split("").map((char, i) => (
          <span key={i} className="inline-block">{char}</span>
        ))}
      </span>

      {/* Animated prefix with smooth width */}
      <motion.span
        ref={containerRef}
        className="inline-flex overflow-hidden"
        animate={{ width: containerWidth }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="popLayout">
          {currentPrefix.split("").map((char, i) => (
            <motion.span
              key={`${prefixIndex}-${i}`}
              initial={{ y: "110%", opacity: 0, filter: "blur(4px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={{ y: "-110%", opacity: 0, filter: "blur(4px)", position: "absolute" }}
              transition={{
                duration: 0.25,
                delay: i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.span>

      {/* Static suffix */}
      <span>{suffix}</span>
    </span>
  );
};

export default MorphingText;
