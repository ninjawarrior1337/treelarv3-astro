import ToriiGate from "~icons/fa6-solid/torii-gate"
import FaBrain from "~icons/fa6-solid/brain"
import FaHome from "~icons/fa/home"

import { useState } from "react"
import { useSpring, animated, config } from "@react-spring/web"

type BottomNavButtonProps = {
    onClick: () => void
}

function BottomNavButton(props: BottomNavButtonProps) {
    return (
        <button
            onClick={() => props.onClick()}
            className="fixed bottom-5 right-5 w-16 h-16 focus:outline-none bg-gradient-to-tr to-aqours from-muse rounded shadow text-center lg:hidden text-5xl border-2 origin-bottom-right text-white"
        >
            <span className="font-light text-center">=</span>
        </button>
    )
}

export default function BottomNavigation() {
    const [navOpen, setNavOpen] = useState(import.meta.env.DEV)
    const [showLinks, setShowLinks] = useState(navOpen)

    const { width, height, opacity } = useSpring({
        width: navOpen ? "16rem" : "4rem",
        height: navOpen ? "16rem" : "4rem",
        opacity: navOpen ? 1 : 0,
        progress: navOpen ? 100 : 0,
        config: config.stiff,
        onChange: (r, s, p) => {
            if(s.get().progress as number > 10) {
                setShowLinks(true)
            } else {
                setShowLinks(false)
            }
        }
    })

    const toggleNav = () => {
        setNavOpen(n => !n)
    }

    return (
        <animated.div
            onClick={toggleNav}
            style={{ width, height }}
            className="w-64 h-64 focus:outline-none shadow-xl fixed lg:hidden bottom-5 right-5 grid grid-cols-3 grid-rows-3 gap-2 bg-gradient-to-tr via-treelar to-treelar from-muse p-2 rounded origin-bottom-right text-white"
        >
            {
                showLinks ? (
                    <>
                        <animated.a
                            href="/"
                            style={{ opacity }}
                            className="row-span-2 bg-black grid place-items-center content-center"
                        >
                            <FaHome className="text-3xl"></FaHome>
                            <span>Home</span>
                        </animated.a>
                        <animated.a
                            href="/projects"
                            style={{ opacity }}
                            className="row-span-2 bg-black grid place-items-center content-center"
                        >
                            <FaBrain className="text-2xl"></FaBrain>
                            <span>Projects</span>
                        </animated.a>
                        <animated.button style={{ opacity }} className="row-span-1 bg-black text-3xl">
                            <img className="p-2 h-full" alt="logo" src="/logo/logo2020.svg" />
                        </animated.button>
                        <animated.div style={{ opacity }} className="row-span-2 bg-black"></animated.div>
                        <animated.a
                            style={{ opacity }}
                            target="_blank"
                            href="https://anilist.co/user/Treelar"
                            className="col-span-2 bg-black grid grid-cols-2 justify-items-center items-center"
                        >
                            <ToriiGate className="text-2xl"></ToriiGate>
                            <span>Anime</span>
                        </animated.a>
                    </>
                ) : null
            }
        </animated.div>
    )
}