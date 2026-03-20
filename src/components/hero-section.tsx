export function HeroSection() {
    return (
        <section className="relative h-full overflow-hidden bg-[#04040f]">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-[#04040f] via-[#0a0520] to-[#120830]" />

            {/* Glowing orbs for depth */}
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-violet-700/20 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
            <div className="absolute bottom-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-800/20 blur-3xl" />

            {/* Perspective grid — the main 3D art element */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[55%]"
                style={{ perspective: "400px", perspectiveOrigin: "50% 0%" }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(139, 92, 246, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.25) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        transform: "rotateX(55deg)",
                        transformOrigin: "top center",
                        width: "100%",
                        height: "160%",
                    }}
                />
            </div>

            {/* Fade out the grid toward the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#04040f] to-transparent" />

            {/* Horizon glow line */}
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" style={{ top: "55%" }} />
            <div className="absolute left-0 right-0 h-8 bg-gradient-to-b from-violet-500/15 to-transparent" style={{ top: "55%" }} />

            {/* Text content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center">
                <p className="text-xs font-light uppercase tracking-[0.4em] text-violet-400">
                    welcome
                </p>
                <h1 className="text-7xl font-bold tracking-tight text-white md:text-8xl">
                    Your Name
                </h1>
                <p className="text-xl font-light text-violet-200 md:text-2xl">
                    Full Stack Developer
                </p>
                <p className="mt-2 max-w-sm text-sm font-light italic text-white/50 md:text-base">
                    &ldquo;Building digital experiences that matter&rdquo;
                </p>
            </div>
        </section>
    );
}
