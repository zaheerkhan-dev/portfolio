"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import * as THREE from "three";

export default function Starfield() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}

function Stars(props: Record<string, unknown>) {
    const ref = useRef<THREE.Points>(null);

    // Generate 4000 stars in a sphere of radius 1.2
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sphere = random.inSphere(new Float32Array(4000 * 3), { radius: 1.2 }) as any;

    useFrame((state, delta) => {
        if (ref.current) {
            // Auto-Move Animation (Matches final-preview-v2.html)
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
