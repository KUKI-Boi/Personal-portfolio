"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface PixelatedEyesProps {
    imageSrc: string;
    pixelSize?: number;
    theme?: 'dark' | 'light';
}

/**
 * PixelatedEyes component (Updated for Split Theme)
 * Uses Canvas for pixelation and handles split background images.
 */
export default function PixelatedEyes({ imageSrc, pixelSize = 8 }: PixelatedEyesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const tempCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(null);

    // Mouse tracking for depth effect
    const mouseX = useSpring(0, { stiffness: 60, damping: 30 });
    const mouseY = useSpring(0, { stiffness: 60, damping: 30 });

    // Map mouse position to subtle translations (Follow effect)
    const translateX = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
    const translateY = useTransform(mouseY, [-0.5, 0.5], [15, -15]);

    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            // If we already have an image, do a quick fade if desired, 
            // but the user wants "fast", so we'll just swap instantly once loaded.
            setCurrentImage(img);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [imageSrc, mouseX, mouseY]);

    useEffect(() => {
        if (!currentImage || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        if (!tempCanvasRef.current) {
            tempCanvasRef.current = document.createElement("canvas");
        }
        const tempCanvas = tempCanvasRef.current;
        const tempCtx = tempCanvas.getContext("2d");
        if (!tempCtx) return;

        const render = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }

            // Calculate source dimensions to "cover" the canvas
            const imgRatio = currentImage.width / currentImage.height;
            const canvasRatio = w / h;
            let sx, sy, sw, sh;

            if (imgRatio > canvasRatio) {
                sh = currentImage.height;
                sw = currentImage.height * canvasRatio;
                sx = (currentImage.width - sw) / 2;
                sy = 0;
            } else {
                sw = currentImage.width;
                sh = currentImage.width / canvasRatio;
                sx = 0;
                sy = (currentImage.height - sh) / 2;
            }

            const smallW = Math.ceil(w / pixelSize);
            const smallH = Math.ceil(h / pixelSize);

            if (tempCanvas.width !== smallW || tempCanvas.height !== smallH) {
                tempCanvas.width = smallW;
                tempCanvas.height = smallH;
            }

            tempCtx.imageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;

            // Draw to small canvas
            tempCtx.drawImage(currentImage, sx, sy, sw, sh, 0, 0, smallW, smallH);

            // Draw back to main canvas (scaled up)
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(tempCanvas, 0, 0, smallW, smallH, 0, 0, w, h);

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animationId);
    }, [currentImage, pixelSize]);

    return (
        <motion.div
            style={{ x: translateX, y: translateY, scale: 1.15 }}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden origin-center"
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover opacity-70 filter brightness-[0.8] contrast-[1.2]"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/40 mix-blend-multiply" />
        </motion.div>
    );
}
