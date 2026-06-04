"use client";

const PROJECTS = [
  {
    idx: "01",
    file: "interpreter/",
    title: "Tree-walking Interpreter",
    desc: "A small dynamically-typed language built from scratch — hand-written lexer, Pratt parser, AST, and a tree-walking evaluator with closures, first-class functions and a REPL.",
    tags: ["Go", "Pratt parsing", "AST", "REPL"],
    source: "#",
    demo: "#",
    demoLabel: "write-up",
  },
  {
    idx: "02",
    file: "chip8-emulator/",
    title: "CHIP-8 Emulator",
    desc: "A compact CHIP-8 virtual machine in C with SDL2 rendering — full opcode set, accurate timers, configurable clock speed, and keypad remapping. Runs the classic ROMs flawlessly.",
    tags: ["C", "SDL2", "Emulation", "Bytecode"],
    source: "#",
    demo: "#",
    demoLabel: "demo",
  },
  {
    idx: "03",
    file: "nvim-cpp-headers/",
    title: "Neovim C++ Header Plugin",
    desc: "A Lua plugin that automates C++ header workflows — generates matching .hpp/.cpp pairs, include guards and namespaces, and jumps between declaration and definition.",
    tags: ["Lua", "Neovim API", "C++", "Tooling"],
    source: "#",
    demo: "#",
    demoLabel: "install",
  },
] as const;

const GITHUB_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

const ARROW_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        paddingBlock: "clamp(64px,10vh,120px)",
        scrollMarginTop: "calc(var(--header-h) + 18px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 clamp(20px,5vw,52px)" }}>
        {/* Section head */}
        <div className="reveal" style={{ marginBottom: "clamp(28px,4vw,46px)" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
              color: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55em",
              margin: "0 0 1.1rem",
            }}
          >
            <span style={{ width: 18, height: 1, background: "var(--accent-line)", display: "inline-block" }} />
            <span style={{ color: "var(--text-dim)" }}>02</span>
            {" — selected work"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(1.7rem,3.6vw,2.6rem)",
              letterSpacing: "-0.02em",
              margin: 0,
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            <span style={{ color: "var(--good)", fontFamily: "var(--font-mono)", fontWeight: 500, marginRight: "0.4em", fontSize: "0.78em" }}>$</span>
            ls ~/projects
          </h2>
        </div>

        {/* Grid */}
        <div className="projects-grid-layout">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.idx} project={p} delay={i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 920px) {
          .projects-grid-layout { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 760px) {
          .projects-grid-layout { grid-template-columns: 1fr; }
        }
      `}</style>
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
      className={`reveal project-card`}
      data-d={delay > 0 ? String(delay) : undefined}
      style={{
        background: "var(--bg-elev)",
        border: "1px solid var(--border-col)",
        borderRadius: 15,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform .28s cubic-bezier(.22,1,.36,1), border-color .28s ease, box-shadow .28s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = "var(--accent-line)";
        el.style.boxShadow = "var(--sh-card)";
        const dot = el.querySelector<HTMLElement>(".live-dot");
        if (dot) dot.style.background = "var(--good)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "";
        el.style.borderColor = "var(--border-col)";
        el.style.boxShadow = "";
        const dot = el.querySelector<HTMLElement>(".live-dot");
        if (dot) dot.style.background = "var(--border-col)";
      }}
    >
      {/* Titlebar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "11px 14px",
          borderBottom: "1px solid var(--border-soft-col)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.74rem",
          color: "var(--text-dim)",
          background: "var(--bg-elev-2)",
        }}
      >
        <span className="live-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-col)", display: "block", transition: "background .28s" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-col)", display: "block" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-col)", display: "block" }} />
        <span style={{ marginLeft: "auto", color: "var(--text-muted)" }}>{p.file}</span>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", gap: 13, flex: 1 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent)" }}>{p.idx}</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.22rem", letterSpacing: "-0.015em", margin: 0, lineHeight: 1.2, color: "var(--text)" }}>
          {p.title}
        </h3>
        <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.93rem", flex: 1 }}>{p.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 2 }}>
          {p.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-line)",
                padding: "3px 9px",
                borderRadius: 6,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 6, paddingTop: 14, borderTop: "1px solid var(--border-soft-col)" }}>
          <a
            href={p.source}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.45em", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {GITHUB_ICON} source
          </a>
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.45em", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {ARROW_ICON} {p.demoLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
