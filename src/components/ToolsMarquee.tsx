import { Sparkles, Paintbrush, MousePointer2, PenTool } from "lucide-react";

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

// Icon components for variety
const icons = [
  // Adobe Logo
  () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current">
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zm-6.71 0H0L6.89.001h3.71l-3.344 22.623zm9.322-22.623h7.422L17.855 22.624h-3.709l2.432-22.623z"/>
    </svg>
  ),
  // Brush
  () => <Paintbrush className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
  // Cursor
  () => <MousePointer2 className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
  // Pen Tool
  () => <PenTool className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
  // Sparkle
  () => <Sparkles className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  // Create items with icon after each tool
  const createMarqueeItems = () => {
    const items: JSX.Element[] = [];
    
    tools.forEach((tool, index) => {
      // Add tool name
      items.push(
        <span
          key={`tool-${index}`}
          className="flex-shrink-0 px-4 md:px-6 text-lg md:text-2xl font-medium text-muted-foreground/60 hover:text-primary transition-colors duration-300 cursor-default whitespace-nowrap"
        >
          {tool}
        </span>
      );
      
      // Add icon after each tool
      const IconComponent = icons[index % icons.length];
      items.push(
        <span
          key={`icon-${index}`}
          className="flex-shrink-0 px-3 md:px-4 flex items-center justify-center text-muted-foreground/30"
        >
          <IconComponent />
        </span>
      );
    });
    
    return items;
  };

  const marqueeItems = createMarqueeItems();
  // Double for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="flex overflow-hidden">
      <div 
        className={`flex items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {duplicatedItems}
      </div>
    </div>
  );
};

const ToolsMarquee = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden border-y border-border/30">
      <div className="container-wide mb-6">
        <p className="text-sm text-muted-foreground uppercase tracking-wider text-center">
          Tools & Software I Use
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative space-y-4 md:space-y-6">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Row 1 - scrolls left */}
        <MarqueeRow />
        
        {/* Row 2 - scrolls right */}
        <MarqueeRow reverse />
      </div>
    </section>
  );
};

export default ToolsMarquee;
