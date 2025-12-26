import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "The motion design work exceeded all our expectations. The attention to detail and creative vision transformed our brand completely.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Creative Lead",
    company: "Studio Wave",
    content: "Working with this motion designer was an incredible experience. They understood our vision and delivered beyond what we imagined.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Brand Manager",
    company: "Innovate Inc",
    content: "Professional, creative, and responsive. The animations brought our product to life in ways we never thought possible.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-body text-muted-foreground tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Client Reviews
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-card border border-border rounded-2xl opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.15 * index}s`, animationFillMode: "forwards" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-heading font-bold text-foreground">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-body text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
