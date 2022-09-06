import { useCallback, useEffect, useRef } from "react";
import * as confetti from "canvas-confetti"

export default function IdolConfetti() {
    const confettiRef = useRef<confetti.CreateTypes>()
    const randomInRange = useCallback((min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }, [])

    useEffect(() => {
        let interval;
        if(confettiRef.current) {
            interval = setInterval(() => {
                confetti({
                    particleCount: 1,
                    startVelocity: 0,
                    ticks: 500,
                    origin: {
                        x: Math.random(),
                        y: Math.random() - 0.5
                    },
                    colors: ["#3399ff"],
                    shapes: ["square", "circle"],
                    gravity: randomInRange(0.4, 0.6),
                    scalar: randomInRange(0.4, 1),
                    drift: randomInRange(-0.4, 0.4)
                })
            }, 10)
        }

        return () => {
            clearInterval(interval)
        }
    }, [])

    
    return (
        <></>
    )
}