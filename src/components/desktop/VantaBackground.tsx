"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// We need to disable SSR for this component or at least the import,
// but since it's "use client" and we require it inside useEffect, it should be fine.

interface VantaBackgroundProps {
    theme: 'dark' | 'light';
}

export default function VantaBackground({ theme }: VantaBackgroundProps) {
    const vantaEffect = useRef<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    // Initialize or update the Vanta effect
    useEffect(() => {
        const initVanta = async () => {
            if (!vantaEffect.current && vantaRef.current) {
                try {
                    // Dynamically import to avoid SSR issues with window/document
                    // @ts-expect-error - vanta lacks type definitions
                    const RINGS = (await import('vanta/dist/vanta.rings.min')).default;
                    vantaEffect.current = RINGS({
                        el: vantaRef.current,
                        THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        // Customize colors based on theme if desired
                        backgroundColor: theme === 'dark' ? 0x111111 : 0xffffff,
                        color: theme === 'dark' ? 0x888888 : 0x333333,
                    });
                } catch (error) {
                    console.error("Vanta initialization failed:", error);
                }
            }
        };

        if (vantaEffect.current) {
            vantaEffect.current.setOptions({
                backgroundColor: theme === 'dark' ? 0x111111 : 0xffffff,
                color: theme === 'dark' ? 0x888888 : 0x333333,
            });
        } else {
            initVanta();
        }
    }, [theme]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div 
            ref={vantaRef} 
            className="absolute inset-0 z-0 pointer-events-none" 
            style={{ width: '100%', height: '100%' }}
        />
    );
}
