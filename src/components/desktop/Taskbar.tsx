/**
 * Taskbar component
 * Bottom navigation bar for the desktop.
 * Shows open apps and system controls.
 */
export default function Taskbar() {
    return (
        <div className="h-12 w-full bg-zinc-900/80 backdrop-blur-xl border-t border-white/10 flex items-center px-4 justify-between relative z-50">
            <div className="flex items-center gap-4">
                {/* Start Button */}
                <div className="w-8 h-8 rounded bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer">
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                        <div className="bg-zinc-400 rounded-sm" />
                        <div className="bg-zinc-400 rounded-sm" />
                        <div className="bg-zinc-400 rounded-sm" />
                        <div className="bg-zinc-400 rounded-sm" />
                    </div>
                </div>

                {/* Separator */}
                <div className="h-6 w-px bg-white/10" />

                {/* Pinned Apps */}
                <div className="flex items-center gap-1">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer" />
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer" />
                </div>
            </div>

            {/* Right Side: System Tray */}
            <div className="flex items-center gap-4 text-[10px] font-medium text-zinc-400">
                <div className="flex items-center gap-2">
                    <span>ENG</span>
                    <div className="w-4 h-4 rounded border border-zinc-700 flex items-center justify-center">?</div>
                </div>
                <div className="flex flex-col items-end leading-none">
                    <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <span>{new Date().toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' })}</span>
                </div>
            </div>
        </div>
    );
}
