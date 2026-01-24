import { AppId, APPS } from "./Desktop";

interface TaskbarProps {
    openApps: AppId[];
    activeApp: AppId | null;
    onAppClick: (id: AppId) => void;
}

/**
 * Taskbar component
 * Bottom navigation bar for the desktop.
 * Shows open apps and system controls.
 */
export default function Taskbar({ openApps, activeApp, onAppClick }: TaskbarProps) {
    return (
        <div className="h-12 w-full bg-zinc-900/80 backdrop-blur-xl border-t border-white/10 flex items-center px-4 justify-between relative z-[999]">
            <div className="flex items-center gap-4">
                {/* Start Button */}
                <button
                    aria-label="Start Menu"
                    className="w-8 h-8 rounded bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white/20"
                >
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                        <div className="bg-zinc-400 rounded-sm" />
                        <div className="bg-zinc-400 rounded-sm" />
                        <div className="bg-zinc-400 rounded-sm" />
                        <div className="bg-zinc-400 rounded-sm" />
                    </div>
                </button>

                {/* Separator */}
                <div className="h-6 w-px bg-white/10" />

                {/* Open Apps */}
                <div className="flex items-center gap-1">
                    {openApps.map((appId) => {
                        const app = APPS.find(a => a.id === appId);
                        if (!app) return null;

                        const isActive = activeApp === appId;

                        return (
                            <button
                                key={appId}
                                onClick={() => onAppClick(appId)}
                                aria-label={`Switch to ${app.label}`}
                                className={`
                  relative w-10 h-10 rounded-lg flex items-center justify-center transition-all group outline-none
                  ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}
                  focus-visible:ring-1 focus-visible:ring-white/20
                `}
                            >
                                <div className={`text-zinc-400 group-hover:text-zinc-200 ${isActive ? 'text-zinc-100 scale-90' : ''}`}>
                                    {app.icon}
                                </div>

                                {isActive && (
                                    <div className="absolute bottom-1 w-1 h-1 bg-zinc-100 rounded-full" />
                                )}
                            </button>
                        );
                    })}
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
