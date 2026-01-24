import { ReactNode } from "react";

interface AppIconProps {
    label: string;
    icon: ReactNode;
    onClick?: () => void;
}

/**
 * AppIcon component
 * Visual shortcut on the desktop to launch applications/windows.
 */
export default function AppIcon({ label, icon, onClick }: AppIconProps) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center gap-2 aspect-square cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all group outline-none focus-visible:bg-white/10"
        >
            <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/20 shadow-lg group-hover:shadow-zinc-900/50 transition-all text-zinc-400 group-hover:text-zinc-100">
                {icon}
            </div>
            <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 text-center truncate w-full transition-colors">
                {label}
            </span>
        </button>
    );
}
