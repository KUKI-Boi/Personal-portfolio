"use client";

import { useEffect, useRef } from "react";

/**
 * CustomCursor — A soft glowing aura that follows the default system pointer.
 * The aura has a subtle "organic lag" (lerp) as its unique property.
 */
export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        let rafId: number;
        let mouseX = -100;
        let mouseY = -100;
        let auraX = -100;
        let auraY = -100;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // Unique property: Organic lag/trailing effect
            const lerpFactor = 0.15;
            auraX += (mouseX - auraX) * lerpFactor;
            auraY += (mouseY - auraY) * lerpFactor;

            dot.style.left = `${auraX}px`;
            dot.style.top  = `${auraY}px`;

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
    );
}
