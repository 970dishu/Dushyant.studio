import React from 'react';

const Marquee = () => {
  const text = "MOTION DESIGNER • CREATIVE DIRECTOR • VISUAL ARTIST • ANIMATOR • ";
  
  return (
    <div className="w-full overflow-hidden bg-accent py-4 border-y border-border/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className="text-background font-display text-xl md:text-2xl font-bold tracking-wider mx-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
