"use client";

const PROJECTS = [
    {
        idx: "01",
        file: "interpreter/",
        title: "Tree-walking Interpreter",
        desc: "A small dynamically-typed language built from scratch — hand-written lexer, Pratt parser, AST, and a tree-walking evaluator with closures, first-class functions and a REPL.",
        tags: ["Go", "Pratt parsing", "AST", "REPL"],
        source: "https://github.com/Maduki-tech/interpreter_in_go",
        demo: "#",
        demoLabel: "write-up",
    },
    {
        idx: "02",
        file: "chip8-emulator/",
        title: "CHIP-8 Emulator",
        desc: "A compact CHIP-8 virtual machine in C with SDL2 rendering — full opcode set, accurate timers, configurable clock speed, and keypad remapping. Runs the classic ROMs flawlessly.",
        tags: ["C++", "Emulation", "Bytecode"],
        source: "https://github.com/Maduki-tech/Chip-8",
        demo: "https://github.com/Maduki-tech/Chip-8/blob/main/example.gif",
        demoLabel: "demo",
    },
    {
        idx: "03",
        file: "nvim-cpp-headers/",
        title: "Neovim C++ Header Plugin",
        desc: "A Lua plugin that automates C++ header workflows — generates matching .hpp/.cpp pairs, include guards and namespaces, and jumps between declaration and definition.",
        tags: ["Lua", "Neovim API", "C++", "Tooling"],
        source: "https://github.com/Maduki-tech/header.nvim",
        demo: "https://github.com/Maduki-tech/header.nvim#how-to-run",
        demoLabel: "install",
    },
] as const;

const GITHUB_ICON = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
);

const ARROW_ICON = (
    <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M7 17L17 7M9 7h8v8" />
    </svg>
);

export function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative scroll-mt-[calc(var(--header-h)+18px)] py-[clamp(64px,10vh,120px)]"
        >
            <div className="mx-auto max-w-7xl px-[clamp(20px,5vw,52px)]">
                {/* Section head */}
                <div className="reveal mb-[clamp(28px,4vw,46px)]">
                    <p className="mb-[1.1rem] inline-flex items-center gap-[0.55em] font-mono text-[0.78rem] tracking-[0.04em] text-(--accent)">
                        <span className="inline-block h-px w-4.5 bg-(--accent-line)" />
                        <span className="text-(--text-dim)">02</span>
                        {" — selected work"}
                    </p>
                    <h2 className="font-display m-0 text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-(--text)">
                        <span className="mr-[0.4em] font-mono text-[0.78em] font-medium text-(--good)">
                            $
                        </span>
                        ls ~/projects
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.idx} project={p} delay={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({
    project: p,
    delay,
}: {
    project: (typeof PROJECTS)[number];
    delay: number;
}) {
    return (
        <article
            className="reveal group border-border flex flex-col overflow-hidden rounded-[15px] border bg-(--bg-elev) transition-all duration-280 hover:-translate-y-1.5 hover:border-(--accent-line) hover:shadow-(--sh-card)"
            data-d={delay > 0 ? String(delay) : undefined}
        >
            {/* Titlebar */}
            <div className="flex items-center gap-1.75 border-b border-(--border-soft-col) bg-(--bg-elev-2) px-3.5 py-2.75 font-mono text-[0.74rem] text-(--text-dim)">
                <span className="live-dot bg-border block h-2 w-2 rounded-full transition-[background] duration-280 group-hover:bg-(--good)" />
                <span className="bg-border block h-2 w-2 rounded-full" />
                <span className="bg-border block h-2 w-2 rounded-full" />
                <span className="ml-auto text-(--text-muted)">{p.file}</span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-3.25 px-5 pt-5 pb-5.5">
                <span className="font-mono text-[0.8rem] text-(--accent)">
                    {p.idx}
                </span>
                <h3 className="font-display m-0 text-[1.22rem] leading-[1.2] font-semibold tracking-[-0.015em] text-(--text)">
                    {p.title}
                </h3>
                <p className="m-0 flex-1 text-[0.93rem] text-(--text-muted)">
                    {p.desc}
                </p>
                <div className="mt-0.5 flex flex-wrap gap-1.75">
                    {p.tags.map((t) => (
                        <span
                            key={t}
                            className="rounded-[6px] border border-(--accent-line) bg-(--accent-soft) px-2.25 py-0.75 font-mono text-[0.72rem] text-(--text-muted)"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-1.5 flex gap-4 border-t border-(--border-soft-col) pt-3.5">
                    <a
                        href={p.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[0.45em] font-mono text-[0.8rem] text-(--text-muted) transition-colors duration-200 hover:text-(--accent)"
                    >
                        {GITHUB_ICON} source
                    </a>
                    <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[0.45em] font-mono text-[0.8rem] text-(--text-muted) transition-colors duration-200 hover:text-(--accent)"
                    >
                        {ARROW_ICON} {p.demoLabel}
                    </a>
                </div>
            </div>
        </article>
    );
}
