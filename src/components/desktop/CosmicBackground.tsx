"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface CosmicBackgroundProps {
    imageSrc: string;
    theme: 'dark' | 'light';
}

export default function CosmicBackground({ imageSrc, theme }: CosmicBackgroundProps) {
    const [mounted, setMounted] = useState(false);

    // Mouse tracking for depth effect
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    // Map mouse position to subtle translations for parallax
    const translateX = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
    const translateY = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);
    const scale = useTransform(mouseY, [-0.5, 0.5], [1.05, 1.1]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timer);
        };
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <motion.div
                style={{
                    translateX,
                    translateY,
                    scale,
                }}
                className="relative w-[110%] h-[110%] left-[-5%] top-[-5%]"
            >
                <motion.img
                    key={imageSrc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    src={imageSrc}
                    alt="Background"
                    className={`w-full h-full object-cover transition-all duration-700 ${theme === 'light'
                        ? 'brightness-[1.1] saturate-[0.8] contrast-[0.9] opacity-40'
                        : 'brightness-[0.7] saturate-[1.2]'
                        }`}
                />
            </motion.div>

            {/* Gradient overlays for depth and legibility */}
            <div className={`absolute inset-0 transition-colors duration-700 ${theme === 'light'
                ? 'bg-gradient-to-b from-white/20 via-transparent to-white/40'
                : 'bg-gradient-to-b from-black/20 via-transparent to-black/60'
                }`} />
        </div>
    );
}
