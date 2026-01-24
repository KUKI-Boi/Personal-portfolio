"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
    const sphereRef = useRef<THREE.Mesh>(null);
    const { mouse } = useThree();

    useFrame((state) => {
        if (sphereRef.current) {
            // Subtle parallax following mouse
            const targetX = mouse.x * 0.5;
            const targetY = mouse.y * 0.5;

            sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, targetX, 0.05);
            sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, targetY, 0.05);

            // Continuous rotation
            sphereRef.current.rotation.z += 0.002;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#4fc3f7" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#b39ddb" />

            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.2}>
                    <MeshDistortMaterial
                        color="#141622"
                        speed={3}
                        distort={0.4}
                        radius={1}
                        roughness={0.1}
                        metalness={0.9}
                        emissive="#1e293b"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.8}
                    />
                </Sphere>
            </Float>

            <mesh scale={2.3} rotation={[Math.PI / 4, 0, 0]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#4fc3f7"
                    wireframe
                    transparent
                    opacity={0.05}
                />
            </mesh>
        </>
    );
}

/**
 * Hero3D component
 * Lightweight 3D scene providing a premium reactive backdrop.
 */
export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none translate-y-[-5%] scale-110 md:scale-100">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                    <Scene />
                    <Environment preset="night" />
                </Suspense>
            </Canvas>
        </div>
    );
}
