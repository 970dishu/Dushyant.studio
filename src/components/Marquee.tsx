const logos = [
  "FRAMER", "WEBFLOW", "FIGMA", "SKETCH", "ADOBE", "NOTION"
];

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden border-y border-border/20 py-8 bg-background">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, setIndex) => (
          logos.map((logo, i) => (
            <div 
              key={`${setIndex}-${i}`}
              className="mx-12 flex items-center"
            >
              <span className="text-sm md:text-base font-body text-muted-foreground/50 tracking-widest uppercase">
                {logo}
              </span>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Marquee;
