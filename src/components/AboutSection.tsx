import { useEffect, useState, useRef } from "react";

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
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 150, suffix: "+", label: "Completed Projects" },
  { value: 50, suffix: "+", label: "Clients Worldwide" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              About Me
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-[1.2]">
              Hi, I'm Duncan — a digital designer and Framer developer passionate about crafting meaningful and impactful digital experiences.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              With over 8 years of experience in the design industry, I've had the privilege of working with startups, established brands, and everything in between. My approach combines strategic thinking with creative execution to deliver designs that not only look beautiful but also drive results.
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
                  <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground">
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
      </div>
    </section>
  );
};

export default AboutSection;
