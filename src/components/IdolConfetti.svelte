<script lang="ts">
import confetti from "canvas-confetti";
import { onMount } from "svelte";

export let colors: string[]

const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

onMount(() => {
    window.setInterval(() => {
        if(colors) {
            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: 500,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.5
                },
                colors: colors,
                shapes: ["square", "circle"],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
            })
        }
    }, 10)
})
</script>