import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-body text-primary tracking-widest uppercase mb-4 block">
            .say hello
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-8">
            Let's create something
            <br />
            <span className="text-primary">amazing</span> together
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-12">
            I'm currently available for freelance projects and exciting collaborations. 
            If you have a project in mind, let's talk!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@motion.design"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium uppercase tracking-wider bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
              <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mt-16">
            {["Behance", "Dribbble", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary link-underline transition-colors duration-300"
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
