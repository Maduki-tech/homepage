export function HeroBackground() {
    return (
        <>
            {/* Base gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-white via-violet-50/50 to-indigo-50 dark:from-[#04040f] dark:via-[#0a0520] dark:to-[#120830]" />

            {/* Glowing orbs for depth */}
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-700/20" />
            <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-600/15" />
            <div className="absolute bottom-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-800/20" />

            {/* Perspective grid */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[55%]"
                style={{ perspective: "400px", perspectiveOrigin: "50% 0%" }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        transform: "rotateX(55deg)",
                        transformOrigin: "top center",
                        width: "100%",
                        height: "160%",
                    }}
                />
            </div>

            {/* Fade out the grid toward the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white to-transparent dark:from-[#04040f]" />

            {/* Horizon glow line */}
            <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent dark:via-violet-500/60" style={{ top: "50%" }} />
            <div className="absolute left-0 right-0 h-8 bg-linear-to-b from-violet-400/10 to-transparent dark:from-violet-500/15" style={{ top: "50%" }} />
        </>
    );
}
