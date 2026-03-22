import StarField from "./starfield";

export function HeroBackground() {
    return (
        <>
            {/* Base gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-white via-page-light-tint/50 to-page-light-deep dark:from-page-dark dark:via-page-dark-mid dark:to-page-dark-deep" />

            {/* Star field */}
            <StarField />

            {/* Glowing orbs for depth */}
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-brand/10 blur-3xl dark:bg-brand/20" />
            <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-brand/10 blur-3xl dark:bg-brand/15" />
            <div className="absolute bottom-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl dark:bg-brand/20" />

            {/* Perspective grid */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[55%]"
                style={{ perspective: "400px", perspectiveOrigin: "50% 0%" }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(color-mix(in oklch, var(--color-brand) 15%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--color-brand) 15%, transparent) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        transform: "rotateX(55deg)",
                        transformOrigin: "top center",
                        width: "100%",
                        height: "160%",
                    }}
                />
            </div>

            {/* Fade out the grid toward the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white to-transparent dark:from-page-dark" />

            {/* Horizon glow line */}
            <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent dark:via-brand/60" style={{ top: "50%" }} />
            <div className="absolute left-0 right-0 h-8 bg-linear-to-b from-brand/10 to-transparent dark:from-brand/15" style={{ top: "50%" }} />

            {/* Dark mode: subtle vignette to clear the center text area */}
            <div className="absolute inset-0 hidden dark:block" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(4,4,15,0.55) 0%, transparent 100%)" }} />
        </>
    );
}
