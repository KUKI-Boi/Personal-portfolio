"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// We need to disable SSR for this component or at least the import,
// but since it's "use client" and we require it inside useEffect, it should be fine.

interface VantaBackgroundProps {
    theme: 'dark' | 'light';
}

export default function VantaBackground({ theme }: VantaBackgroundProps) {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let effect: any = null;

        const initVanta = async () => {
            if (!vantaEffect && vantaRef.current) {
                try {
                    // Dynamically import to avoid SSR issues with window/document
                    // @ts-expect-error - vanta lacks type definitions
                    const RINGS = (await import('vanta/dist/vanta.rings.min')).default;
                    effect = RINGS({
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
                        backgroundColor: theme === 'dark' ? 0x1B1F4A : 0xF8F9FD,
                        color: theme === 'dark' ? 0xF4A261 : 0x1B1F4A,
                        backgroundAlpha: 1.0,
                    });
                    setVantaEffect(effect);
                } catch (error) {
                    console.error("Vanta initialization failed:", error);
                }
            }
        };

        initVanta();

        return () => {
            if (effect) effect.destroy();
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [theme]); // Re-initialize when theme changes to update colors

    return (
        <div 
            ref={vantaRef} 
            className="absolute inset-0 z-0 pointer-events-none" 
            style={{ width: '100%', height: '100%' }}
        />
    );
}
