import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Loader from "../Loader";

const Earth = () => {
    return (
        <mesh>
            <Sphere args={[1, 32, 32]} scale={2.5}>
                <MeshDistortMaterial
                    color="#4d54a5"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                />
            </Sphere>
            <ambientLight intensity={0.5} />
        </mesh>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <directionalLight position={[-4, 3, 6]} intensity={1} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default EarthCanvas;
