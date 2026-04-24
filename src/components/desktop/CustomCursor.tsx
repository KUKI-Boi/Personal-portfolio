"use client";

import { useEffect, useRef } from "react";

/**
 * CustomCursor — Simple instant dot cursor.
 * Hidden on touch/mobile devices via CSS media query.
 */
export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        const onMove = (e: MouseEvent) => {
            // Dot follows instantly
            dot.style.left = `${e.clientX}px`;
            dot.style.top  = `${e.clientY}px`;
        };

        window.addEventListener("mousemove", onMove);

        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
    );
}
