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
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden">
      <motion.div className="container-wide" style={{ y }}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="text-sm text-primary uppercase tracking-wider mb-4">
              About Me
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-[1.2]">
              Hi, I'm Dushyant — a motion designer and creative director passionate about bringing stories to life through animation.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              With over 3 years of experience in motion design and film editing, I specialize in creating compelling visual narratives that captivate audiences and elevate brands.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              From concept to final delivery, I handle every aspect of the creative process — storywriting, direction, animation, and editing — ensuring a cohesive vision throughout.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 pb-8 border-b border-border last:border-0 last:pb-0"
                >
                  <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-primary">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
