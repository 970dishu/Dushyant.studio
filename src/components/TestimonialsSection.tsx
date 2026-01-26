const testimonials = [
  {
    quote: "Dushyant's motion design elevated our product to a whole new level. His attention to detail and creative vision is unmatched.",
    name: "Alex Chen",
    role: "Product Lead, TechFlow"
  },
  {
    quote: "Working with Dushyant was seamless. He understood our brand instantly and delivered animations that perfectly captured our essence.",
    name: "Sarah Miller",
    role: "Creative Director, Nomad Studio"
  },
  {
    quote: "The micro-interactions he designed transformed our user experience. Our engagement metrics improved by 40%.",
    name: "James Wilson",
    role: "CEO, StartupXYZ"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-body text-primary tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            Kind Words
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group"
            >
              <p className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-sm font-heading font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm font-body text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;