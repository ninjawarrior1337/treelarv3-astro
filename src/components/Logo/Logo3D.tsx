import { Environment, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { PropsWithChildren, Suspense, useEffect, useState } from "react"
import { Model } from "./LogoModel"

const ClientOnly: React.FC<PropsWithChildren<{}>> = ({children}) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        loaded ? <>{children}</> : null
    )
}

export default function Logo3D() {
    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={1} position={[-1, 1.75, 1]}></directionalLight>
            <PerspectiveCamera makeDefault position={[12, 10, 40]} />
            <Suspense fallback={null}>
                <Model></Model>
            </Suspense>
        </Canvas>
    )
}