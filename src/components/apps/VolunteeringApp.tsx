"use client";

import { Award, Zap, Users } from "lucide-react";

export default function VolunteeringApp() {
    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Volunteering</h2>
                <p className="text-zinc-500 text-sm font-black uppercase tracking-widest max-w-xl mx-auto">
                    Creating meaningful social impact through engineering and education.
                </p>
            </div>

            <div className="p-8 md:p-12 bg-zinc-900/30 border border-white/5 rounded-[40px] space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 text-white/[0.02] group-hover:text-red-500/10 transition-colors pointer-events-none">
                    <Zap size={200} />
                </div>

                <div className="relative z-10 space-y-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-red-500 font-black uppercase tracking-[0.4em] text-[10px]">
                            <Users size={14} /> School Outreach Program
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Sustainable Energy Education</h3>
                        <p className="text-zinc-400 font-black text-sm uppercase tracking-widest">IEEE Student Branch, CHRIST University</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                        {[
                            { title: "Education", text: "Explained renewable energy & solar power in student-friendly modules." },
                            { title: "Interaction", text: "Conducted hands-on sessions and educational games." },
                            { title: "Environment", text: "Created engaging agendas to foster positive learning." },
                            { title: "Leadership", text: "Led logistical planning for technical outreach." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-2">
                                <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">{item.title}</h4>
                                <p className="text-sm text-zinc-400 font-black leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
