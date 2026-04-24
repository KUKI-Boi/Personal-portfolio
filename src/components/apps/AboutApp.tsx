"use client";

import { Download, Mail, Palette, Gamepad2, Heart, Camera } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/** Animate a number counting up from 0 → target when in view */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1200;
        const step = 16;
        const inc = target / (duration / step);
        const timer = setInterval(() => {
            start += inc;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, step);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const STAT_ITEMS = [
    { label: "Projects Built",   value: 12, suffix: "+" },
    { label: "Technologies",     value: 15, suffix: "+" },
    { label: "Coffee Consumed",  value: 0,  suffix: "∞" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0 }
} as const;

/**
 * AboutApp component — upgraded with stat cards, blockquote, and stagger animations.
 */
export default function AboutApp() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="pb-32 space-y-10 md:space-y-14"
        >
            {/* Intro */}
            <motion.div variants={item} className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--foreground)]">
                        Hey, I&apos;m Likith!
                    </h2>
                    <p className="text-xl md:text-2xl font-black text-[var(--foreground)] leading-tight">
                        Electrical &amp; Electronics Engineering student
                    </p>
                    <p className="text-lg md:text-xl font-black text-[var(--muted)] italic">
                        who&apos;s interested in electronics, systems, and software integration
                    </p>
                </div>

                <p className="text-[var(--muted)] text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
                    Thanks for taking the time to explore my portfolio. I enjoy building and understanding
                    systems where{" "}
                    <span className="text-[var(--foreground)] font-black">
                        electrical engineering meets modern technology
                    </span>
                    , and this space reflects my journey, skills, and projects.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                    <button className="px-8 py-3 cosmic-glass cosmic-button text-[10px] font-black uppercase tracking-widest rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(244,162,97,0.2)]">
                        <Download size={14} className="relative z-10" />
                        <span className="relative z-10">Download CV</span>
                    </button>
                    <a
                        href="mailto:likithkumarbm@gmail.com"
                        className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-xs font-black flex items-center gap-2 border-b border-transparent hover:border-[var(--accent)] pb-0.5"
                    >
                        <Mail size={16} /> likithkumarbm@gmail.com
                    </a>
                </div>
            </motion.div>

            {/* Stat Cards */}
            <motion.div variants={item} className="grid grid-cols-3 gap-4">
                {STAT_ITEMS.map(({ label, value, suffix }) => (
                    <div key={label} className="stat-card p-5 flex flex-col items-center gap-2 text-center">
                        <span className="text-3xl md:text-4xl font-black text-[var(--foreground)]">
                            {value === 0
                                ? <span>∞</span>
                                : <CountUp target={value} suffix={suffix} />
                            }
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)]/60">{label}</span>
                    </div>
                ))}
            </motion.div>

            <div className="section-divider" />

            {/* Beyond */}
            <motion.div variants={item} className="space-y-6 pb-32">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-[var(--foreground)]">Beyond</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: <Palette size={20} />, title: "Drawing",      desc: "Expressing creativity through sketches" },
                        { icon: <Gamepad2 size={20} />, title: "Gaming",      desc: "Competing and exploring with friends" },
                        { icon: <Heart size={20} />,    title: "Animal Lover", desc: "Passionate about wildlife and pets" },
                        { icon: <Camera size={20} />,   title: "Photography", desc: "Capturing moments and perspectives" },
                    ].map((it, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.04 }}
                            className="flex items-center gap-4 group cosmic-glass p-4 rounded-3xl transition-all duration-300"
                        >
                            <div className="p-3 bg-[var(--card)]/50 rounded-2xl text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors relative z-10">
                                {it.icon}
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-black text-[var(--foreground)] text-sm">{it.title}</h4>
                                <p className="text-xs text-[var(--muted)]">{it.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
