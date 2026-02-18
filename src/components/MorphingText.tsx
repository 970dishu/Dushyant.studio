import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Director", "Editor"];
const maxLength = Math.max(...words.map((w) => w.length));

const MorphingText = ({ className }: { className?: string }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[wordIndex];

  return (
    <span className={`inline-flex ${className ?? ""}`}>
      {Array.from({ length: maxLength }).map((_, i) => {
        const char = currentWord[i] ?? "";
        return (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ width: char ? undefined : 0 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${wordIndex}-${i}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            </AnimatePresence>
          </span>
        );
      })}
    </span>
  );
};

export default MorphingText;
