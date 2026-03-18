"use client";

import { Download, Mail, Palette, Gamepad2, Heart, Camera } from "lucide-react";

/**
 * AboutApp component
 * Updated with personalized bio, journey, and hobbies.
 */
export default function AboutApp() {
    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Intro Section */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--foreground)]">Hey, I&apos;m Likith!</h2>
                    <p className="text-xl md:text-2xl font-black text-[var(--foreground)] leading-tight">
                        Electrical & Electronics Engineering student
                    </p>
                    <p className="text-lg md:text-xl font-black text-[var(--muted)] italic">
                        who&apos;s interested in electronics, systems, and software integration
                    </p>
                </div>

                <p className="text-[var(--muted)] text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
                    Thanks for taking the time to explore my portfolio. I enjoy building and understanding systems where <span className="text-[var(--foreground)] font-black">electrical engineering meets modern technology</span>, and this space reflects my journey, skills, and projects.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                    <button className="px-8 py-3 cosmic-glass cosmic-button text-[10px] font-black uppercase tracking-widest rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(244,162,97,0.2)]">
                        <Download size={14} className="relative z-10" /> <span className="relative z-10">Download CV</span>
                    </button>
                    <a href="mailto:likithkumarbm@gmail.com" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-xs font-black flex items-center gap-2 border-b border-transparent hover:border-[var(--accent)] pb-0.5">
                        <Mail size={16} /> likithkumarbm@gmail.com
                    </a>
                </div>
            </div>

            {/* My Journey Section */}
            <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-[var(--foreground)]">My Journey</h3>
                <div className="border-l-2 border-[var(--muted)]/20 pl-8 space-y-6 text-[var(--muted)] font-medium leading-relaxed max-w-4xl">
                    <p>
                        I am currently pursuing my <span className="text-[var(--foreground)] font-black">B.Tech in Electrical and Electronics Engineering (EEE)</span>, driven by a strong curiosity for how systems work at both the hardware and logical levels. My academic journey has given me a solid foundation in <span className="text-[var(--foreground)] font-black">electrical systems, electronics, and problem-solving</span>.
                    </p>
                    <p>
                        Alongside my core EEE studies, I actively explore <span className="text-[var(--foreground)] font-black">computer science and software development</span>, focusing on <span className="text-[var(--foreground)] font-black">programming.</span>
                    </p>
                    <p>
                        I enjoy learning technologies that challenge conventional thinking and help me build efficient, real-world solutions at the intersection of <span className="text-[var(--foreground)] font-black">electronics and software</span>.
                    </p>
                </div>
            </div>

            {/* Beyond Code Section */}
            <div className="space-y-8 pb-12">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-[var(--foreground)]">Beyond Code</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: <Palette size={20} />, title: "Drawing", desc: "Expressing creativity through sketches" },
                        { icon: <Gamepad2 size={20} />, title: "Gaming", desc: "Competing and exploring with friends" },
                        { icon: <Heart size={20} />, title: "Animal Lover", desc: "Passionate about wildlife and pets" },
                        { icon: <Camera size={20} />, title: "Photography", desc: "Capturing moments and perspectives" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cosmic-glass p-4 rounded-3xl transition-all duration-300 hover:scale-105">
                            <div className="p-3 bg-[var(--card)]/50 rounded-2xl text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors relative z-10">
                                {item.icon}
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-black text-[var(--foreground)] text-sm">{item.title}</h4>
                                <p className="text-xs text-[var(--muted)]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
