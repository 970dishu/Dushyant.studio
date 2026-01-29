
const tools = [
  { name: "After Effects", logo: "https://simpleicons.org/icons/adobeaftereffects.svg" },
  { name: "Illustrator", logo: "https://simpleicons.org/icons/adobeillustrator.svg" },
  { name: "Premiere Pro", logo: "https://simpleicons.org/icons/adobepremierepro.svg" },
  { name: "Photoshop", logo: "https://simpleicons.org/icons/adobephotoshop.svg" },
  { name: "Lightroom", logo: "https://simpleicons.org/icons/adobelightroom.svg" },
  { name: "Adobe Animate", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Adobe_Animate_CC_icon_%282020%29.svg" },
  { name: "Character Animator", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Character_Animator_CC_icon.svg" },
  { name: "Blender", logo: "https://simpleicons.org/icons/blender.svg" },
  { name: "AutoCAD", logo: "https://simpleicons.org/icons/autodesk.svg" },
  { name: "Fusion 360", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Autodesk_Fusion_360_icon.svg" },
  { name: "Tinkercad", logo: "https://simpleicons.org/icons/tinkercad.svg" },
  { name: "Framer", logo: "https://simpleicons.org/icons/framer.svg" },
  { name: "Figma", logo: "https://simpleicons.org/icons/figma.svg" },
  { name: "DaVinci Resolve", logo: "https://simpleicons.org/icons/davinciresolve.svg" },
];

const ToolsMarquee = () => {
  // Triple the array for seamless infinite loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="py-16 md:py-24 overflow-hidden border-y border-border/30">
      <div className="container-wide mb-8">
        <p className="text-sm text-muted-foreground uppercase tracking-wider text-center">
          Tools & Software I Use
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Track - CSS animation for truly seamless loop */}
        <div className="flex animate-marquee">
          {duplicatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex flex-col items-center gap-3 flex-shrink-0 group px-8 md:px-12"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground whitespace-nowrap transition-colors duration-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
