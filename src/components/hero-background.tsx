const STARS: [number, number, number, number, number][] = [
    // [x%, y%, size(px), delay(s), duration(s)]
    // Row 1 – y: 2–10
    [3, 4, 1, 0.0, 3.0], [8, 7, 2, 1.2, 4.0], [15, 3, 1, 2.1, 2.5], [22, 9, 2, 0.5, 3.5],
    [28, 5, 1, 1.8, 4.0], [35, 8, 2, 3.2, 3.0], [42, 3, 1, 0.9, 2.0], [50, 6, 2, 2.5, 4.5],
    [58, 4, 1, 1.1, 3.0], [65, 9, 2, 3.7, 2.5], [72, 2, 1, 0.3, 4.0], [80, 7, 2, 2.0, 3.5],
    [88, 5, 1, 1.5, 2.0], [95, 3, 2, 3.0, 4.0],
    // Row 2 – y: 11–20
    [2, 14, 1, 1.3, 3.5], [10, 18, 2, 2.8, 4.0], [18, 12, 1, 0.6, 2.5], [25, 16, 2, 3.5, 3.0],
    [33, 13, 1, 1.9, 4.5], [40, 19, 2, 0.2, 2.0], [47, 15, 1, 2.3, 3.5], [55, 11, 2, 1.6, 4.0],
    [62, 17, 1, 3.1, 2.5], [70, 14, 2, 0.8, 3.0], [78, 19, 1, 2.6, 4.5], [85, 12, 2, 1.4, 2.0],
    [92, 16, 1, 3.3, 3.5], [97, 18, 2, 0.1, 4.0],
    // Row 3 – y: 21–30
    [4, 24, 1, 2.2, 3.0], [11, 28, 2, 0.4, 4.5], [19, 22, 1, 3.6, 2.5], [27, 27, 2, 1.7, 3.5],
    [34, 23, 1, 0.9, 4.0], [41, 29, 2, 2.4, 2.0], [48, 25, 1, 1.2, 3.0], [56, 21, 2, 3.8, 4.5],
    [63, 28, 1, 0.7, 2.5], [71, 24, 2, 2.9, 3.0], [79, 26, 1, 1.5, 4.0], [87, 22, 2, 3.4, 2.5],
    [94, 29, 1, 0.3, 3.5],
    // Row 4 – y: 31–40
    [6, 34, 2, 1.8, 4.0], [14, 39, 1, 3.2, 2.5], [21, 33, 2, 0.6, 3.0], [29, 37, 1, 2.7, 4.5],
    [36, 32, 2, 1.1, 2.0], [43, 38, 1, 3.6, 3.5], [51, 35, 2, 0.4, 4.0], [59, 31, 1, 2.1, 2.5],
    [66, 39, 2, 1.5, 3.0], [74, 33, 1, 3.9, 4.5], [82, 36, 2, 0.8, 2.0], [90, 32, 1, 2.3, 3.5],
    [96, 38, 2, 1.6, 4.0],
    // Row 5 – y: 41–48
    [1, 44, 1, 3.1, 3.0], [9, 47, 2, 0.5, 4.0], [17, 42, 1, 2.0, 2.5], [26, 46, 2, 1.3, 3.5],
    [38, 43, 1, 3.7, 4.5], [45, 48, 2, 0.9, 2.0], [53, 45, 1, 2.6, 3.0], [61, 42, 2, 1.8, 4.0],
    [68, 47, 1, 3.4, 2.5], [76, 44, 2, 0.2, 3.5], [83, 46, 1, 2.8, 4.0], [91, 43, 2, 1.0, 2.0],
    [98, 45, 1, 3.5, 3.0],
];

// [left%, top%, length(px), delay(s), period(s)]
const SHOOTING_STARS: [number, number, number, number, number][] = [
    [10, 8, 160, 1.0, 9.0],
    [35, 5, 120, 4.5, 12.0],
    [60, 12, 180, 7.0, 10.0],
    [80, 4, 140, 2.5, 14.0],
];

function StarField() {
    return (
        <>
            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.15; transform: scale(1); }
                    50% { opacity: 0.9; transform: scale(1.4); }
                }
                @keyframes shoot {
                    0%   { opacity: 0;   transform: translate(0, 0) rotate(215deg); }
                    5%   { opacity: 1; }
                    20%  { opacity: 0;   transform: translate(310px, 220px) rotate(215deg); }
                    100% { opacity: 0;   transform: translate(310px, 220px) rotate(215deg); }
                }
            `}</style>

            {/* Twinkling stars – only visible in dark mode */}
            {STARS.map(([x, y, size, delay, duration], i) => (
                <div
                    key={i}
                    className="absolute hidden rounded-full bg-white dark:block"
                    style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        width: size,
                        height: size,
                        animation: `twinkle ${duration}s ${delay}s infinite ease-in-out`,
                    }}
                />
            ))}

            {/* Shooting stars – only visible in dark mode */}
            {SHOOTING_STARS.map(([left, top, length, delay, period], i) => (
                <div
                    key={`shoot-${i}`}
                    className="absolute hidden dark:block"
                    style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        width: length,
                        height: 1.5,
                        background: "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
                        // background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,25 -5,255,0.95) 100%)",
                        borderRadius: 2,
                        opacity: 0,
                        animation: `shoot ${period}s ${delay}s infinite ease-in`,
                    }}
                />
            ))}
        </>
    );
}

export function HeroBackground() {
    return (
        <>
            {/* Base gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-white via-violet-50/50 to-indigo-50 dark:from-[#04040f] dark:via-[#0a0520] dark:to-[#120830]" />

            {/* Star field */}
            <StarField />

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

            {/* Dark mode: subtle vignette to clear the center text area */}
            <div className="absolute inset-0 hidden dark:block" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(4,4,15,0.55) 0%, transparent 100%)" }} />
        </>
    );
}
