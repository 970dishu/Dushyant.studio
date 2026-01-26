import { useState, useEffect } from "react";
import dushyantPortrait from "@/assets/dushyant-portrait.png";

const HiBadge = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const [showWave, setShowWave] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16 xl:w-20 xl:h-20",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-xl xl:text-2xl",
  };

  const emojiSizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-3xl xl:text-4xl",
  };

  return (
    <div className={`${sizeClasses[size]} bg-primary rounded-full flex items-center justify-center overflow-hidden`}>
      <div className="relative w-full h-full flex items-center justify-center">
        <span
          className={`absolute text-primary-foreground font-body font-medium ${textSizes[size]} transition-all duration-500 ${
            showWave ? "opacity-0 scale-75 rotate-12" : "opacity-100 scale-100 rotate-0"
          }`}
        >
          Hi
        </span>
        <span
          className={`absolute ${emojiSizes[size]} transition-all duration-500 ${
            showWave ? "opacity-100 scale-100 rotate-0 animate-wave" : "opacity-0 scale-75 -rotate-12"
          }`}
        >
          👋
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
        
        {/* Mobile Layout - Centered vertical stack */}
        <div className="flex flex-col items-center text-center md:hidden">
          <p className="text-foreground text-xs uppercase tracking-[0.25em] font-medium opacity-0 animate-fade-up mb-2" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Dushyant
          </p>
          <h1 className="font-heading text-5xl font-bold text-foreground uppercase tracking-tighter leading-[0.85] opacity-0 animate-fade-up mb-4" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Motion
          </h1>
          
          {/* Portrait with Hi badge */}
          <div className="relative opacity-0 animate-fade-up mb-4" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-44">
              <img
                src={dushyantPortrait}
                alt="Dushyant - Motion Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3">
              <HiBadge size="sm" />
            </div>
          </div>
          
          <h1 className="font-heading text-5xl font-bold text-foreground uppercase tracking-tighter leading-[0.85] opacity-0 animate-fade-up mt-4" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Designer
          </h1>
          <p className="text-muted-foreground text-sm mt-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            I'm a motion designer and a creative director
          </p>
        </div>

        {/* Tablet Layout - Stacked with left alignment */}
        <div className="hidden md:flex lg:hidden flex-col">
          {/* Top: Name + MOTION left aligned */}
          <div className="text-left mb-6">
            <p className="text-foreground text-sm uppercase tracking-[0.25em] font-medium opacity-0 animate-fade-up mb-2" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Dushyant
            </p>
            <h1 className="font-heading text-7xl font-bold text-foreground uppercase tracking-tighter leading-[0.85] opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Motion
            </h1>
          </div>
          
          {/* Center: Portrait centered with Hi badge */}
          <div className="flex justify-center my-8">
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-56">
                <img
                  src={dushyantPortrait}
                  alt="Dushyant - Motion Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4">
                <HiBadge size="md" />
              </div>
            </div>
          </div>
          
          {/* Bottom: DESIGNER + description right aligned */}
          <div className="text-right mt-6">
            <h1 className="font-heading text-7xl font-bold text-foreground uppercase tracking-tighter leading-[0.85] opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Designer
            </h1>
            <p className="text-muted-foreground text-base mt-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              I'm a motion designer and a<br />creative director
            </p>
          </div>
        </div>

        {/* Desktop Layout - Three column flex */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left Column - Name above MOTION */}
          <div className="flex-1 flex flex-col items-start justify-center pr-8">
            <p className="text-foreground text-sm uppercase tracking-[0.25em] font-medium opacity-0 animate-fade-up mb-2 ml-2" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Dushyant
            </p>
            <h1 className="font-heading text-[7rem] xl:text-[9rem] 2xl:text-[11rem] font-bold text-foreground uppercase tracking-tighter leading-[0.85] opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Motion
            </h1>
          </div>

          {/* Center - Portrait Image with Hi badge */}
          <div className="flex-shrink-0 flex items-center justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-64 xl:w-72 2xl:w-80">
                <img
                  src={dushyantPortrait}
                  alt="Dushyant - Motion Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5">
                <HiBadge size="lg" />
              </div>
            </div>
          </div>

          {/* Right Column - DESIGNER above description */}
          <div className="flex-1 flex flex-col items-end justify-center pl-8">
            <h1 className="font-heading text-[7rem] xl:text-[9rem] 2xl:text-[11rem] font-bold text-foreground uppercase tracking-tighter leading-[0.85] opacity-0 animate-fade-up text-right" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Designer
            </h1>
            <p className="text-muted-foreground text-base xl:text-lg text-right mt-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              I'm a motion designer and<br />a creative director
            </p>
          </div>
        </div>

        {/* CTA Button - Below the main layout */}
        <div className="flex justify-center mt-12 md:mt-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-white hover:text-background transition-colors duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
