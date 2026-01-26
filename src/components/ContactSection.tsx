import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import dushyantPortrait from "@/assets/dushyant-portrait.png";
import waveHand from "@/assets/wave-hand.png";

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
  const [showWave, setShowWave] = useState(false);

  // Toggle between "Hi" text and wave hand image
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Portrait with Hi Badge */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Portrait Image */}
              <div className="relative w-[280px] md:w-[350px] lg:w-[420px] aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                <img
                  src={dushyantPortrait}
                  alt="Dushyant Garg"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Hi/Wave Badge - positioned at bottom left, overlapping */}
              <div 
                className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                {showWave ? (
                  <img 
                    src={waveHand} 
                    alt="Wave" 
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain animate-wave"
                  />
                ) : (
                  <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                    Hi
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:pt-4">
            {/* Heading */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] uppercase italic">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-lg">
              Let's build something impactful together—whether it's your brand, your website, or your next big idea.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-secondary border-0 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Smith"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-secondary border-0 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="johnsmith@gmail.com"
                    required
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <label htmlFor="service" className="block text-sm font-medium text-primary mb-3">
                  Service Needed ?
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-5 py-4 bg-secondary border-0 rounded-full text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <span className={formData.service ? "text-foreground" : "text-muted-foreground"}>
                    {formData.service || "Select..."}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-secondary border border-border rounded-2xl shadow-lg overflow-hidden">
                    {serviceOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, service: option });
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-5 py-3 text-left text-foreground hover:bg-background hover:text-primary transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-3">
                  What Can I Help You...
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 bg-secondary border-0 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Hello, I'd like to enquire about..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="group relative px-12 py-4 bg-transparent text-primary font-heading text-xl uppercase tracking-wider rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <span>Submit</span>
                  {/* Toggle indicator */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full border-2 border-primary bg-transparent"></div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
