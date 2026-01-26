import { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import { addPropertyControls, ControlType } from "framer"

export function Lottie_Icon(props) {
    const {
        jsonFile,
        playing,
        loop,
        speed,
        direction,
        color1,
        color2,
        outlineColor,
    } = props
    const lottieRef = useRef(null)
    const [animation, setAnimation] = useState(null)

    useEffect(() => {
        if (jsonFile && lottieRef.current) {
            if (animation) {
                animation.destroy() // Clean up previous animation
            }

            const newAnimation = lottie.loadAnimation({
                container: lottieRef.current,
                renderer: "svg",
                loop: loop,
                autoplay: playing,
                path: jsonFile, // URL or local path to JSON
            })

            newAnimation.setSpeed(speed)
            newAnimation.setDirection(direction ? 1 : -1) // Normal or reverse
            setAnimation(newAnimation)

            // Apply custom colors
            newAnimation.addEventListener("DOMLoaded", () => {
                applyColorStyles(newAnimation, color1, color2, outlineColor)
            })
        }
    }, [
        jsonFile,
        playing,
        loop,
        speed,
        direction,
        color1,
        color2,
        outlineColor,
    ])

    const applyColorStyles = (
        animationInstance,
        fillColor1,
        fillColor2,
        strokeColor
    ) => {
        const svgElements =
            animationInstance.wrapper.getElementsByTagName("path")
        if (svgElements.length > 0) {
            // Apply fill colors to the first two paths
            if (fillColor1) svgElements[0].setAttribute("fill", fillColor1)
            if (fillColor2) svgElements[1].setAttribute("fill", fillColor2)

            // Apply stroke color (outline) to all paths
            for (let i = 0; i < svgElements.length; i++) {
                if (strokeColor)
                    svgElements[i].setAttribute("stroke", strokeColor)
            }
        }
    }

    return <div ref={lottieRef} style={{ width: "100%", height: "100%" }} />
}

// Define property controls for Framer
addPropertyControls(Lottie_Icon, {
    jsonFile: {
        type: ControlType.File,
        title: "Lottie JSON",
        allowedFileTypes: ["json"],
    },
    playing: {
        type: ControlType.Boolean,
        title: "Playing",
        defaultValue: true,
    },
    loop: {
        type: ControlType.Boolean,
        title: "Loop",
        defaultValue: true,
    },
    speed: {
        type: ControlType.Number,
        title: "Speed",
        defaultValue: 1,
        min: 0.5,
        max: 3,
        step: 0.1,
    },
    direction: {
        type: ControlType.Boolean,
        title: "Direction",
        defaultValue: true,
        enabledTitle: "Normal",
        disabledTitle: "Reverse",
    },
    color1: {
        type: ControlType.Color,
        title: "Primary Color",
    },
    color2: {
        type: ControlType.Color,
        title: "Secondary Color",
    },
    outlineColor: {
        type: ControlType.Color,
        title: "Outline Color",
    },
})
