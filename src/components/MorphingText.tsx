import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// Each char has a unique id so framer-motion can track and animate its position
const directorChars = [
  { id: "D", char: "D" },
  { id: "I", char: "I" },
  { id: "R2", char: "R" },
  { id: "E", char: "E" },
  { id: "C", char: "C" },
  { id: "T", char: "T" },
  { id: "O", char: "O" },
  { id: "R7", char: "R" },
];

const editorChars = [
  { id: "E", char: "E" },
  { id: "D", char: "D" },
  { id: "I", char: "I" },
  { id: "T", char: "T" },
  { id: "O", char: "O" },
  { id: "R7", char: "R" },
];

const MorphingText = ({ className }: { className?: string }) => {
  const [isDirector, setIsDirector] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDirector((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const chars = isDirector ? directorChars : editorChars;

  return (
    <LayoutGroup>
      <motion.span
        className={`inline-flex ${className ?? ""}`}
        layout
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="popLayout">
          {chars.map((item) => (
            <motion.span
              key={item.id}
              layoutId={item.id}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.3 } }}
              transition={{
                layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.3 },
                filter: { duration: 0.3 },
              }}
              className="inline-block"
            >
              {item.char}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.span>
    </LayoutGroup>
  );
};

export default MorphingText;
