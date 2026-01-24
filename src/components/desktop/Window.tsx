/**
 * Window component
 * Generic container for content that can be moved and resized.
 */
export default function Window() {
    return (
        <div className="absolute top-20 left-20 w-[600px] h-[400px] bg-zinc-900 border border-white/10 rounded-lg shadow-2xl flex flex-col pointer-events-auto">
            {/* Window Header / Title Bar */}
            <div className="h-10 bg-zinc-800/50 flex items-center justify-between px-3 cursor-move border-b border-white/5 rounded-t-lg">
                <span className="text-xs font-medium text-zinc-400">Window Title</span>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 overflow-auto p-4 text-zinc-300">
                Window content goes here.
            </div>
        </div>
    );
}
