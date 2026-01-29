import { motion } from "framer-motion";

const tools = [
  { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
  { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Premiere Pro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Lightroom", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" },
  { name: "Adobe Animate", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Adobe_Animate_CC_icon_%282020%29.svg" },
  { name: "Character Animator", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Character_Animator_CC_icon.svg" },
  { name: "Blender", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
  { name: "AutoCAD", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/AutoCAD_logo.svg" },
  { name: "Fusion 360", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Autodesk_Fusion_360_icon.svg" },
  { name: "Tinkercad", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tinkercad-logo.svg" },
  { name: "Framer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Blackmagic Camera", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg" },
  { name: "DaVinci Resolve", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg" },
];

const ToolsMarquee = () => {
  // Double the array for seamless loop
  const duplicatedTools = [...tools, ...tools];

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
        
        {/* Scrolling Track */}
        <motion.div
          className="flex gap-16 md:gap-24"
          animate={{
            x: [0, -50 * tools.length * 6],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex flex-col items-center gap-3 flex-shrink-0 group"
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
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
