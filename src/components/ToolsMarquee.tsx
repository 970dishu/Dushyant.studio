import { Sparkles, Paintbrush } from "lucide-react";

const tools = [
  "After Effects",
  "Illustrator", 
  "Premiere Pro",
  "Photoshop",
  "Lightroom",
  "Adobe Animate",
  "Character Animator",
  "Blender",
  "AutoCAD",
  "Fusion 360",
  "Tinkercad",
  "Framer",
  "Figma",
  "DaVinci Resolve",
];

// Decorative elements to intersperse
const DecorativeElement = ({ type }: { type: "adobe" | "brush" | "sparkle" }) => {
  if (type === "adobe") {
    return (
      <div className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-current text-muted-foreground">
          <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zm-6.71 0H0L6.89.001h3.71l-3.344 22.623zm9.322-22.623h7.422L17.855 22.624h-3.709l2.432-22.623z"/>
        </svg>
      </div>
    );
  }
  if (type === "brush") {
    return (
      <div className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center opacity-40">
        <Paintbrush className="w-7 h-7 md:w-9 md:h-9 text-muted-foreground" strokeWidth={1.5} />
      </div>
    );
  }
  return (
    <div className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center opacity-40">
      <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-muted-foreground" strokeWidth={1.5} />
    </div>
  );
};

const ToolsMarquee = () => {
  // Create items with decorative elements interspersed
  const createMarqueeItems = () => {
    const items: { type: "tool" | "decor"; value: string; decorType?: "adobe" | "brush" | "sparkle" }[] = [];
    const decorTypes: ("adobe" | "brush" | "sparkle")[] = ["sparkle", "adobe", "brush"];
    
    tools.forEach((tool, index) => {
      items.push({ type: "tool", value: tool });
      // Add decorative element after every 3rd tool
      if ((index + 1) % 3 === 0) {
        items.push({ type: "decor", value: "", decorType: decorTypes[Math.floor(index / 3) % 3] });
      }
    });
    
    return items;
  };

  const marqueeItems = createMarqueeItems();
  // Triple for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

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
        <div className="flex animate-marquee">
          {duplicatedItems.map((item, index) => (
            item.type === "tool" ? (
              <span
                key={`${item.value}-${index}`}
                className="flex-shrink-0 px-6 md:px-10 text-xl md:text-3xl font-medium text-muted-foreground/70 hover:text-primary transition-colors duration-300 cursor-default whitespace-nowrap"
              >
                {item.value}
              </span>
            ) : (
              <DecorativeElement key={`decor-${index}`} type={item.decorType!} />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
