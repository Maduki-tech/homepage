const JOBS = [
    {
        now: true,
        title: "Backend Developer, IoT",
        company: "Wacker Neuson SE",
        when: "2023 – Present",
        desc: "Building the backend services behind the company's connected-machine platform — ingesting and processing telemetry at scale, with a focus on throughput, reliability and clean service boundaries.",
    },
    {
        now: false,
        title: "Freelance Web Developer",
        company: "David Schlüter",
        when: "2022 – 2024",
        desc: "Designed and shipped full-stack web applications for clients — from database modelling and API design through to deployment, balancing pragmatism with maintainable architecture.",
    },
    {
        now: false,
        title: "Software Developer",
        company: "Divcon Consulting GmbH",
        when: "2019 – 2023",
        desc: "Delivered software across a range of client projects, developing the cross-stack versatility and performance instincts that shape how I build today.",
    },
] as const;

export function WorkSection() {
    return (
        <section
            id="work"
            className="relative scroll-mt-[calc(var(--header-h)+18px)] py-[clamp(64px,10vh,120px)]"
        >
            <div className="mx-auto max-w-7xl px-[clamp(20px,5vw,52px)]">
                {/* Section head */}
                <div className="reveal mb-[clamp(28px,4vw,46px)]">
                    <p className="mb-[1.1rem] inline-flex items-center gap-[0.55em] font-mono text-[0.78rem] tracking-[0.04em] text-[var(--accent)]">
                        <span className="inline-block h-px w-[18px] bg-[var(--accent-line)]" />
                        <span className="text-[var(--text-dim)]">04</span>
                        {" — experience"}
                    </p>
                    <h2 className="font-display m-0 text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-[var(--text)]">
                        <span className="mr-[0.4em] font-mono text-[0.78em] font-medium text-[var(--good)]">
                            $
                        </span>
                        git log --oneline
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative max-w-[760px]">
                    {/* Vertical line */}
                    <div className="absolute top-[8px] bottom-[8px] left-[7px] w-[2px] bg-[linear-gradient(var(--border-col),transparent)]" />
                    {JOBS.map((job, i) => (
                        <div
                            key={job.company}
                            className={`reveal relative pl-[40px] ${i < JOBS.length - 1 ? "pb-[30px]" : ""}`}
                            data-d={i > 0 ? String(i) : undefined}
                        >
                            {/* Node */}
                            <div
                                className={`absolute top-[5px] left-0 grid h-[16px] w-[16px] place-items-center rounded-full border-2 bg-[var(--bg)] ${job.now ? "border-[var(--accent)]" : "border-[var(--border-col)]"}`}
                            >
                                <span
                                    className={`block h-[6px] w-[6px] rounded-full ${job.now ? "bg-[var(--accent)] shadow-[0_0_0_4px_var(--accent-soft)]" : "bg-[var(--text-dim)]"}`}
                                />
                            </div>

                            {/* Content */}
                            <div className="mb-[6px] flex flex-wrap items-baseline justify-between gap-[16px]">
                                <h3 className="font-display m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-[var(--text)]">
                                    {job.title}{" "}
                                    <span className="font-semibold text-[var(--accent)]">
                                        · {job.company}
                                    </span>
                                    {job.now && (
                                        <span className="ml-[8px] rounded-[20px] border border-[color-mix(in_srgb,var(--good)_40%,transparent)] bg-[color-mix(in_srgb,var(--good)_12%,transparent)] px-[7px] py-[2px] font-mono text-[0.66rem] tracking-[0.03em] text-[var(--good)]">
                                            now
                                        </span>
                                    )}
                                </h3>
                                <span className="font-mono text-[0.78rem] whitespace-nowrap text-[var(--text-dim)]">
                                    {job.when}
                                </span>
                            </div>
                            <p className="m-0 max-w-[62ch] text-[0.95rem] text-[var(--text-muted)]">
                                {job.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
