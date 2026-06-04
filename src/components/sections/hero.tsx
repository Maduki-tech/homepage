"use client";

import { useEffect, useRef } from "react";

type ScriptStep =
    | { type: true; cmd: string; keepCursor?: boolean }
    | { type?: never; out: string };

const SCRIPT: ScriptStep[] = [
    { type: true, cmd: "whoami" },
    {
        out: '<span style="color:var(--term-muted)">David Schlüter – backend developer, performance-focused</span>',
    },
    { type: true, cmd: "cat focus.txt" },
    {
        out: '<span style="color:var(--term-blue)">low-latency services</span> · <span style="color:var(--term-yellow)">throughput</span> · <span style="color:var(--term-pink)">clean systems</span>',
    },
    { type: true, cmd: "ls ~/projects" },
    {
        out: '<span style="color:var(--term-blue)">interpreter/</span>   <span style="color:var(--term-blue)">chip8-emulator/</span>   <span style="color:var(--term-blue)">nvim-cpp-headers/</span>',
    },
    { type: true, cmd: "echo $STATUS" },
    {
        out: '<span style="color:var(--term-green)">✓</span> <span style="color:var(--term-muted)">open to interesting backend problems</span>',
    },
    { type: true, cmd: "", keepCursor: true },
];

function promptHTML(cmd: string) {
    return `<span style="color:var(--term-green)">david@dev</span><span style="color:var(--term-muted)">:</span><span style="color:#4d8dff">~</span><span style="color:var(--term-muted)">$</span> <span style="color:var(--term-text)">${cmd}</span>`;
}

export function TerminalHero() {
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const body = bodyRef.current;
        if (!body) return;
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        function makeLine() {
            const el = document.createElement("div");
            el.style.cssText =
                "white-space:pre-wrap;word-break:break-word;line-height:1.85";
            body!.appendChild(el);
            return el;
        }

        const cursor = `<span style="display:inline-block;width:9px;height:1.05em;background:var(--term-green);vertical-align:-2px;margin-left:2px" class="cursor-blink"></span>`;

        if (reduceMotion) {
            SCRIPT.forEach((s) => {
                const el = makeLine();
                if (s.type) {
                    el.innerHTML =
                        promptHTML(s.cmd) + (s.keepCursor ? " " + cursor : "");
                } else {
                    el.innerHTML = s.out;
                }
            });
            return;
        }

        let i = 0;
        let cancelled = false;
        const timers: ReturnType<typeof setTimeout>[] = [];

        function runStep() {
            if (cancelled || i >= SCRIPT.length) return;
            const s = SCRIPT[i]!;
            const el = makeLine();

            if (s.type) {
                const cmd = s.cmd;
                const keepCursor = s.keepCursor ?? false;
                let c = 0;
                const base = `<span style="color:var(--term-green)">david@dev</span><span style="color:var(--term-muted)">:</span><span style="color:#4d8dff">~</span><span style="color:var(--term-muted)">$</span> `;
                function typeChar() {
                    if (cancelled) return;
                    el.innerHTML =
                        base +
                        `<span style="color:var(--term-text)">${cmd.slice(0, c)}</span>` +
                        cursor;
                    if (c < cmd.length) {
                        c++;
                        timers.push(setTimeout(typeChar, 42));
                    } else {
                        if (keepCursor) {
                            i++;
                            return;
                        }
                        el.innerHTML =
                            base +
                            `<span style="color:var(--term-text)">${cmd}</span>`;
                        i++;
                        timers.push(setTimeout(runStep, 360));
                    }
                }
                typeChar();
            } else {
                el.innerHTML = s.out ?? "";
                i++;
                timers.push(setTimeout(runStep, 360));
            }
        }

        timers.push(setTimeout(runStep, 520));
        return () => {
            cancelled = true;
            timers.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="relative overflow-hidden rounded-[14px] border border-[var(--term-border)] bg-[var(--term-bg)] font-mono shadow-[var(--sh),0_0_0_1px_rgba(255,255,255,.02)_inset]">
            {/* Terminal titlebar */}
            <div className="flex items-center gap-2 border-b border-(--term-border) bg-(--term-head) px-[15px] py-[11px]">
                <span className="block h-2.75 w-2.75 rounded-full bg-[#ff5f57]" />
                <span className="block h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
                <span className="block h-[11px] w-[11px] rounded-full bg-[#28c840]" />
                <span className="ml-[8px] text-[0.76rem] tracking-[0.02em] text-[var(--term-muted)]">
                    david@dev:{" "}
                    <span className="text-[var(--term-blue)]">~</span> — zsh
                </span>
            </div>
            {/* Terminal body */}
            <div
                ref={bodyRef}
                className="min-h-[288px] px-[18px] pt-[18px] pb-[22px] text-[0.86rem] leading-[1.85]"
            />
        </div>
    );
}

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative scroll-mt-[calc(var(--header-h)+18px)] pt-[calc(var(--header-h)+clamp(40px,9vh,96px))] pb-[clamp(60px,10vh,110px)]"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-[clamp(30px,5vw,64px)] px-[clamp(20px,5vw,52px)] lg:grid-cols-[1.05fr_0.95fr]">
                {/* Left */}
                <div>
                    <span className="reveal in border-border mb-6.5 inline-flex items-center gap-[0.6em] rounded-[30px] border bg-(--bg-elev) px-[13px] py-[6px] font-mono text-[0.8rem] text-[var(--text-muted)]">
                        <span className="block h-1.75 w-1.75 animate-[pulse_2.4s_ease-in-out_infinite] rounded-full bg-[var(--good)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--good)_28%,transparent)]" />
                        Available for backend work
                    </span>

                    <h1
                        className="reveal in font-display mb-[22px] text-[clamp(2.5rem,6.4vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-[var(--text)]"
                        data-d="1"
                    >
                        Backend developer
                        <br />
                        obsessed with
                        <br />
                        <span className="bg-[linear-gradient(110deg,var(--accent),color-mix(in_srgb,var(--accent)_55%,#a78bfa))] bg-clip-text text-transparent">
                            performance.
                        </span>
                    </h1>

                    <p
                        className="reveal in mb-[30px] max-w-[38ch] text-[clamp(1.05rem,1.5vw,1.22rem)] text-[var(--text-muted)]"
                        data-d="2"
                    >
                        I&apos;m{" "}
                        <b className="font-semibold text-[var(--text)]">
                            David Schlüter
                        </b>{" "}
                        — I build fast, reliable systems and the low-level
                        tooling around them. Interpreters, emulators, IoT
                        backends.
                    </p>

                    <div
                        className="reveal in flex flex-wrap items-center gap-[13px]"
                        data-d="3"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-[0.55em] rounded-[11px] border border-transparent bg-[var(--accent)] px-[20px] py-[12px] font-mono text-[0.88rem] font-medium whitespace-nowrap text-[var(--accent-ink)] shadow-[0_10px_26px_-12px_var(--accent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_30px_-12px_var(--accent)]"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 17l6-6-6-6M12 19h8" />
                            </svg>
                            projects --list
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-[0.55em] rounded-[11px] border border-[var(--border-col)] bg-transparent px-[20px] py-[12px] font-mono text-[0.88rem] font-medium whitespace-nowrap text-[var(--text)] transition-[transform,border-color,background,color] duration-200 hover:-translate-y-[2px] hover:border-[var(--accent-line)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 4h16v16H4z" />
                                <path d="M4 7l8 6 8-6" />
                            </svg>
                            get in touch
                        </a>
                    </div>

                    <div
                        className="reveal in mt-[38px] flex flex-wrap gap-[26px]"
                        data-d="3"
                    >
                        <div className="flex flex-col gap-[2px]">
                            <b className="font-display text-[1.5rem] font-semibold tracking-[-0.02em]">
                                6+
                            </b>
                            <span className="font-mono text-[0.74rem] tracking-[0.05em] text-[var(--text-dim)] uppercase">
                                years building
                            </span>
                        </div>
                        <div className="w-px bg-[var(--border-col)]" />
                        <div className="flex flex-col gap-[2px]">
                            <b className="font-display text-[1.5rem] font-semibold tracking-[-0.02em]">
                                Java · Go · Rust
                            </b>
                            <span className="font-mono text-[0.74rem] tracking-[0.05em] text-[var(--text-dim)] uppercase">
                                core stack
                            </span>
                        </div>
                        <div className="w-px bg-[var(--border-col)]" />
                        <div className="flex flex-col gap-[2px]">
                            <b className="font-display text-[1.5rem] font-semibold tracking-[-0.02em]">
                                IoT
                            </b>
                            <span className="font-mono text-[0.74rem] tracking-[0.05em] text-[var(--text-dim)] uppercase">
                                now @ Wacker Neuson
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right – terminal */}
                <div className="reveal in" data-d="2">
                    <TerminalHero />
                </div>
            </div>
        </section>
    );
}
