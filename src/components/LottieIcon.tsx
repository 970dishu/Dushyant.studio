import { useEffect, useRef } from "react"
import lottie, { AnimationItem } from "lottie-web"

interface LottieIconProps {
  jsonUrl: string
  playing?: boolean
  loop?: boolean
  speed?: number
  direction?: boolean
  className?: string
}

const LottieIcon = ({
  jsonUrl,
  playing = true,
  loop = true,
  speed = 1,
  direction = true,
  className = "",
}: LottieIconProps) => {
  const lottieRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (jsonUrl && lottieRef.current) {
      if (animationRef.current) {
        animationRef.current.destroy()
      }

      const newAnimation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: loop,
        autoplay: playing,
        path: jsonUrl,
      })

      newAnimation.setSpeed(speed)
      newAnimation.setDirection(direction ? 1 : -1)
      animationRef.current = newAnimation
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [jsonUrl, playing, loop, speed, direction])

  return <div ref={lottieRef} className={className} style={{ width: "100%", height: "100%" }} />
}

export default LottieIcon
