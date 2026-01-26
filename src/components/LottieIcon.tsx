import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieIconProps {
  jsonUrl: string;
  playing?: boolean;
  loop?: boolean;
  speed?: number;
  direction?: 1 | -1;
  className?: string;
}

export const LottieIcon = ({
  jsonUrl,
  playing = true,
  loop = true,
  speed = 1,
  direction = 1,
  className = "",
}: LottieIconProps) => {
  const lottieRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<AnimationItem | null>(null);

  useEffect(() => {
    if (jsonUrl && lottieRef.current) {
      if (animation) {
        animation.destroy();
      }

      const newAnimation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: loop,
        autoplay: playing,
        path: jsonUrl,
      });

      newAnimation.setSpeed(speed);
      newAnimation.setDirection(direction);
      setAnimation(newAnimation);

      return () => {
        newAnimation.destroy();
      };
    }
  }, [jsonUrl, playing, loop, speed, direction]);

  return <div ref={lottieRef} className={className} style={{ width: "100%", height: "100%" }} />;
};

export default LottieIcon;
