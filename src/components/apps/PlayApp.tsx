"use client";

import { useEffect, useRef } from "react";

interface PlayAppProps {
    onImmersiveChange?: (immersive: boolean) => void;
}

/**
 * PlayApp — Embeds the self-contained "Orbital Defense" canvas game.
 * The game lives in public/orbital-defense.html and is loaded in a
 * sandboxed iframe so it has no runtime dependencies on React/Three.js.
 */
export default function PlayApp({ onImmersiveChange }: PlayAppProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Signal immersive mode whenever the Play window is mounted
    useEffect(() => {
        onImmersiveChange?.(false); // Keep the chrome visible — game is embedded
        return () => onImmersiveChange?.(false);
    }, [onImmersiveChange]);

    return (
        <div className="w-full h-full flex flex-col bg-[#06050f] overflow-hidden">
            {/* Label strip */}
            <div className="shrink-0 px-6 py-3 border-b border-[rgba(0,200,255,0.12)] flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#00eeff]">
                    Orbital Defense
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">
                    — Mini Game
                </span>
            </div>

            {/* Game iframe — fills all remaining space */}
            <iframe
                ref={iframeRef}
                src="./orbital-defense.html"
                title="Orbital Defense Game"
                className="flex-1 w-full border-none"
                style={{ background: "#06050f" }}
                // allow pointer and touch events within the sandboxed doc
                sandbox="allow-scripts allow-same-origin"
            />
        </div>
    );
}
