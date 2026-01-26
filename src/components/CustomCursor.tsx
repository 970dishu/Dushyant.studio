import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomCursorProps {
  isVisible: boolean;
  containerRef: React.RefObject<HTMLElement>;
}

const CustomCursor = ({ isVisible, containerRef }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInContainer, setIsInContainer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInside = 
          e.clientX >= rect.left && 
          e.clientX <= rect.right && 
          e.clientY >= rect.top && 
          e.clientY <= rect.bottom;
        
        setIsInContainer(isInside);
        
        if (isInside) {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return (
    <AnimatePresence>
      {isVisible && isInContainer && (
        <motion.div
          className="fixed pointer-events-none z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: position.x - 40,
            y: position.y - 40,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading text-sm font-medium tracking-wider">
              VIEW
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
