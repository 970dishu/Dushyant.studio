import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Director", "Editor"];

const MorphingText = ({ className }: { className?: string }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | "auto">("auto");
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[wordIndex];

  // Measure the new word width after render
  useEffect(() => {
    if (measureRef.current) {
      setContainerWidth(measureRef.current.offsetWidth);
    }
  }, [wordIndex]);

  return (
    <span className={`relative inline-flex ${className ?? ""}`}>
      {/* Hidden measurer */}
      <span
        ref={measureRef}
        className="absolute invisible whitespace-nowrap"
        aria-hidden="true"
      >
        {currentWord.split("").map((char, i) => (
          <span key={i} className="inline-block">{char}</span>
        ))}
      </span>

      {/* Animated container with smooth width */}
      <motion.span
        ref={containerRef}
        className="inline-flex overflow-hidden"
        animate={{ width: containerWidth }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="popLayout">
          {currentWord.split("").map((char, i) => (
            <motion.span
              key={`${wordIndex}-${i}`}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0, position: "absolute" }}
              transition={{
                duration: 0.3,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.span>
    </span>
  );
};

export default MorphingText;
