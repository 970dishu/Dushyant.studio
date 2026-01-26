const items = [
  "MOTION DESIGN",
  "UI ANIMATION",
  "MICRO INTERACTIONS", 
  "3D ANIMATION",
  "BRAND MOTION",
  "UX FLOWS"
];

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden border-y border-border/30 py-6 bg-background">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, setIndex) => (
          items.map((item, i) => (
            <div 
              key={`${setIndex}-${i}`}
              className="mx-8 flex items-center gap-8"
            >
              <span className="text-sm md:text-base font-heading font-medium text-muted-foreground/60 tracking-wide">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Marquee;