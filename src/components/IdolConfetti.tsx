import { useCallback, useEffect, useRef } from "react";
import confetti from "canvas-confetti"

type ConfettiProps = {
    colors: string[]
}

export default function IdolConfetti(props: ConfettiProps) {

    const randomInRange = useCallback((min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }, [])

    useEffect(() => {
        let interval: number;
        interval = setInterval(() => {
            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: 500,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.5
                },
                colors: props.colors,
                shapes: ["square", "circle"],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
            })
        }, 10)


        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <></>
    )
}