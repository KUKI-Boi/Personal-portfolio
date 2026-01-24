"use client";

import { GraduationCap, Calendar, BookOpen, MapPin } from "lucide-react";

/**
 * EducationApp component
 * Displays academic background.
 */
export default function EducationApp() {
    return (
        <div className="max-w-2xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-zinc-800/50 border border-white/5 rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
                <div className="p-8 space-y-8">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-zinc-100 italic">Bachelor’s Degree in Engineering</h1>
                            <span className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-xs font-bold text-zinc-500">Current</span>
                        </div>
                        <div className="flex flex-col gap-2 pt-2">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <MapPin size={16} />
                                <span>CHRIST (Deemed to be University)</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Calendar size={16} />
                                <span>2021 – 2025</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 pt-8 border-t border-white/5">
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                <BookOpen size={14} /> Relevant Coursework
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Embedded Systems", "Control Systems", "Web Technologies", "Digital Image Processing", "Microcontrollers & IoT"].map((course) => (
                                    <span key={course} className="px-3 py-1 bg-zinc-900/50 border border-white/5 rounded text-sm text-zinc-400">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest italic">Academic Strengths</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed italic">
                                Specializing in hardware-software co-design with a focus on creating efficient, automated systems for real-world environmental monitoring and control.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
