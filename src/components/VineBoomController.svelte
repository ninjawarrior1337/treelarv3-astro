<script lang="ts">
import {Howl, Howler} from "howler"
import { onDestroy, onMount } from "svelte";

let boom;
let selectedInterval = 0;
let booming = false
let currentTimeout: number;

const randomN = (n: number) => {
    return Math.floor(Math.random()*n)
}

const playBoom = () => {
    if(!boom) {
        boom = new Howl({
            src: ["/assets/boom/boom.mp3"],
            html5:true
        })
    }
    boom.play()
}

const toggleBooming = () => {
    if(booming) {
        removeTimeout()
    } else {
        registerTimeout()
    }
}

const registerTimeout = () => {
    currentTimeout = window.setTimeout(() => {
        playBoom()
        registerTimeout()
    }, randomN(selectedInterval)*1000)
    booming = true
}

const removeTimeout = () => {
    window.clearTimeout(currentTimeout)
    booming = false
}

$: {
    selectedInterval;
    if(booming) {
        removeTimeout()
        registerTimeout()
    }
}


onDestroy(() => {
    removeTimeout()
})
</script>

<div class="grid w-screen h-screen place-items-center content-center space-y-4">
    <button class="bg-treelar text-4xl rounded p-2" on:click={playBoom}>
        Boom Now
    </button>
    <div></div>
    <span>Boom Interval (Boom at most every N seconds)</span>
    <input class="bg-gray-800 border-2 rounded p-2" placeholder="Boom Interval" type="number" bind:value={selectedInterval}/>
    <button class="bg-muse text-5xl rounded p-4" on:click={toggleBooming}>
        {#if booming}
            Stop Booming
        {:else}
            Start Booming
        {/if}
    </button>
</div>