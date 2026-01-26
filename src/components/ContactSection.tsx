import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="text-xs font-body text-primary tracking-[0.3em] uppercase mb-6 block">
            Get in Touch
          </span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-8">
            Let's create
            <br />
            something <span className="text-primary">amazing</span>
          </h2>
          
          <p className="text-base md:text-lg font-body text-muted-foreground max-w-xl mb-10">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life through motion.
          </p>

          {/* CTA */}
          <a
            href="mailto:hello@dushyant.design"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-body font-medium bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <span>hello@dushyant.design</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-border">
            {["LinkedIn", "Twitter", "Dribbble", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;