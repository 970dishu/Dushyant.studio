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
    const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:dushyantdishugarg@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left - Portrait with Hi Badge */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Portrait Image */}
              <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={dushyantPortrait}
                  alt="Dushyant Garg"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Hi/Wave Badge - positioned at bottom left, overlapping */}
              <div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg"
              >
                {showWave ? (
                  <img 
                    src={waveHand} 
                    alt="Wave" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain animate-wave"
                  />
                ) : (
                  <span className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                    Hi
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-[1.1] uppercase italic text-center lg:text-left">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Let's build something impactful together—whether it's your brand, your website, or your next big idea.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-primary mb-2 sm:mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border-0 rounded-full text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Dushyant Garg"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-primary mb-2 sm:mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border-0 rounded-full text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="dushyantdishugarg@gmail.com"
                    required
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-primary mb-2 sm:mb-3">
                  Service Needed ?
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border-0 rounded-full text-left text-sm sm:text-base flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <span className={formData.service ? "text-foreground" : "text-muted-foreground"}>
                    {formData.service || "Select..."}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
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
                        className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-left text-sm sm:text-base text-foreground hover:bg-background hover:text-primary transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-primary mb-2 sm:mb-3">
                  What Can I Help You...
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border-0 rounded-2xl text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Hello, I'd like to enquire about..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-start pt-2 md:pt-4">
                <button
                  type="submit"
                  className="group relative px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-transparent text-primary font-heading text-base sm:text-lg md:text-xl uppercase tracking-wider rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <span>Submit</span>
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
