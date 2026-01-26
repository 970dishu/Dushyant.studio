import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const stats = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Happy Clients" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-sm text-primary uppercase tracking-wider mb-4">
            About
          </p>
          <motion.h2 
            style={{ y: textY, opacity }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1]"
          >
            My Story
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content - Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-8 leading-[1.2]">
              Hi, I'm Dushyant — a motion designer and creative director passionate about bringing stories to life through animation.
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                With over 3 years of experience in motion design and film editing, I specialize in creating compelling visual narratives that captivate audiences and elevate brands.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                From concept to final delivery, I handle every aspect of the creative process — storywriting, direction, animation, and editing — ensuring a cohesive vision throughout.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                My approach combines technical precision with artistic intuition, crafting experiences that resonate emotionally and leave lasting impressions.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 pb-8 border-b border-border last:border-0 last:pb-0"
                >
                  <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-primary">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
