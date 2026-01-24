import Taskbar from "./Taskbar";
import AppIcon from "./AppIcon";

/**
 * Desktop component
 * Main container for the OS-like interface.
 * Manages the background, centered icon grid, and the bottom taskbar.
 */
export default function Desktop() {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-[#0a0a0a] text-zinc-100 flex flex-col">
            {/* Desktop Background / Wallpaper Area */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50 pointer-events-none" />

            {/* Main Content Area: Centered Grid of Icons */}
            <main className="flex-1 flex items-center justify-center p-8 pb-12 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl w-full">
                    <AppIcon name="About Me" />
                    <AppIcon name="Projects" />
                    <AppIcon name="Skills" />
                    <AppIcon name="Contact" />
                    <AppIcon name="Resume" />
                    <AppIcon name="Experience" />
                    <AppIcon name="Terminal" />
                    <AppIcon name="Settings" />
                </div>
            </main>

            {/* Taskbar */}
            <Taskbar />
        </div>
    );
}
