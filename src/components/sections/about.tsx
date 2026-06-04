"use client";

const STACK = [
    {
        label: "Languages",
        chips: ["Java", "Go", "Rust", "Lua", "TypeScript", "Python"],
    },
    {
        label: "Backend & Data",
        chips: ["PostgreSQL", "Redis", "MQTT", "Kafka", "MSSQL", "Service Bus"],
    },
    {
        label: "Infra & Tooling",
        chips: [
            "Docker",
            "Linux",
            "CI/CD",
            "Profiling",
            "Neovim",
            "Azure Function",
        ],
    },
] as const;

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative scroll-mt-[calc(var(--header-h)+18px)] py-[clamp(64px,10vh,120px)]"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-[clamp(34px,5vw,72px)] px-[clamp(20px,5vw,52px)] lg:grid-cols-[1.4fr_1fr]">
                {/* Copy */}
                <div className="reveal">
                    <p className="mb-[1.1rem] inline-flex items-center gap-[0.55em] font-mono text-[0.78rem] tracking-[0.04em] text-(--accent)">
                        <span className="inline-block h-px w-4.5 bg-(--accent-line)" />
                        <span className="text-(--text-dim)">03</span>
                        {" — about"}
                    </p>
                    <h2 className="font-display mb-5.5 text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-(--text)">
                        whoami
                    </h2>
                    <p className="font-display mb-[1.1em] max-w-[54ch] text-[1.18rem] leading-[1.45] font-medium tracking-[-0.01em] text-[var(--text)]">
                        I care about the layers most people scroll past — the
                        parser, the allocator, the hot loop, the millisecond you
                        didn&apos;t know you were spending.
                    </p>
                    <p className="mb-[1.1em] max-w-[54ch] text-[1.04rem] text-(--text-muted)">
                        Currently a{" "}
                        <b className="font-semibold text-(--text)">
                            Backend Developer for IoT
                        </b>{" "}
                        at Wacker Neuson, building the services that move
                        telemetry from machines in the field to the people who
                        depend on it. Before that, years of consulting and
                        freelance work shipping production systems across very
                        different stacks.
                    </p>
                    <p className="max-w-[54ch] text-[1.04rem] text-(--text-muted)">
                        Outside of work I live in the terminal — writing
                        interpreters, emulators and Neovim plugins to understand
                        how the tools I rely on actually work under the hood.
                    </p>
                </div>

                {/* Stack card */}
                <div
                    className="reveal border-border rounded-[15px] border bg-(--bg-elev) p-[22px] font-mono shadow-[var(--sh-card)]"
                    data-d="1"
                >
                    <div className="mb-[16px] flex items-center gap-[0.5em] text-[0.78rem] text-[var(--text-dim)]">
                        <span className="text-[var(--good)]">$</span> cat
                        ~/.stack
                    </div>
                    {STACK.map((group) => (
                        <div key={group.label} className="mb-[16px]">
                            <div className="mb-[9px] text-[0.72rem] tracking-[0.06em] text-[var(--accent)] uppercase">
                                {group.label}
                            </div>
                            <div className="flex flex-wrap gap-[7px]">
                                {group.chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="cursor-default rounded-[7px] border border-[var(--border-col)] bg-[var(--bg-elev-2)] px-[10px] py-[4px] text-[0.78rem] text-[var(--text)] transition-[border-color,color,transform] duration-200 hover:-translate-y-[2px] hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
