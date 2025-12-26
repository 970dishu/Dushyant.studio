import { ArrowUpRight } from "lucide-react";

const skills = [
  "Motion Design",
  "3D Animation",
  "VFX",
  "After Effects",
  "Cinema 4D",
  "Blender",
];

const experience = [
  { company: "Freelance", role: "Motion Designer", period: "Currently" },
  { company: "Studio X", role: "Senior Animator", period: "2022-24" },
  { company: "Creative Co", role: "Motion Artist", period: "2020-22" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-all duration-300 mb-8"
            >
              Book a Free Call
              <ArrowUpRight size={16} />
            </a>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Meet the Creator
            </h2>
            
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              I'm a passionate Motion Designer specializing in crafting bold visual experiences and animations that captivate and inspire, blending creativity with strategy to elevate brands.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-xs font-body bg-card border border-border rounded-full text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-border">
                  <div>
                    <p className="font-body text-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-card border border-border rounded-2xl">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">5+</span>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="text-center p-8 bg-card border border-border rounded-2xl">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">50+</span>
                <p className="text-sm text-muted-foreground mt-2">Projects Done</p>
              </div>
              <div className="text-center p-8 bg-card border border-border rounded-2xl">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">30+</span>
                <p className="text-sm text-muted-foreground mt-2">Happy Clients</p>
              </div>
              <div className="text-center p-8 bg-card border border-border rounded-2xl">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">100%</span>
                <p className="text-sm text-muted-foreground mt-2">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
