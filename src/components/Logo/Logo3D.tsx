import { Environment, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { PropsWithChildren, Suspense, useEffect, useState } from "react"
import { useIsServer } from "src/utils/hooks"
import { Model } from "./LogoModel"

export default function Logo3D() {
    const isServer = useIsServer()
    return (
        !isServer ? <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={1} position={[-1, 1.75, 1]}></directionalLight>
            <PerspectiveCamera makeDefault position={[12, 10, 40]} />
            <Suspense fallback={null}>
                <Model></Model>
            </Suspense>
        </Canvas> : <div/>
    )
}