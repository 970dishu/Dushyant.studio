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

const testimonials = [
  {
    quote: "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
    name: "John Harris",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote: "He took the time to understand our goals and delivered a design that resonated perfectly with our audience.",
    name: "Michael Lee",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote: "Working with Duncan was an absolute pleasure. His attention to detail and creative solutions exceeded our expectations.",
    name: "Sarah Chen",
    role: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
];

const stats = [
  { value: 98, suffix: "%", label: "Satisfaction Rate", description: "I've worked with 50+ happy clients" },
  { value: 200, suffix: "%", label: "Growth", description: "My work helped clients grow their revenue" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            What My Clients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Here's what my clients have shared about their experiences working with me. Their trust and satisfaction motivate me to continue delivering designs that make an impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary rounded-2xl p-8 card-hover"
            >
              <p className="text-foreground text-base md:text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-secondary rounded-2xl p-8 md:p-12"
            >
              <p className="text-muted-foreground text-sm mb-4">{stat.description}</p>
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-6xl md:text-7xl lg:text-8xl font-medium text-foreground">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
