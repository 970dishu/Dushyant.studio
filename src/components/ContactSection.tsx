import { useState } from "react";
import { ChevronDown } from "lucide-react";

const serviceOptions = [
  "Motion Design",
  "Film Editing",
  "Creative Direction",
  "Storywriting",
  "Other",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="text-sm text-primary uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-[1.1]">
              Let's Create Something <span className="text-primary">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-md">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life through motion.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:hello@dushyantgarg.com"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                hello@dushyantgarg.com
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Needed?
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-lg text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <span className={formData.service ? "text-foreground" : "text-muted-foreground"}>
                    {formData.service || "Select a service"}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                    {serviceOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, service: option });
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Describe your project, goals, and timeline..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
