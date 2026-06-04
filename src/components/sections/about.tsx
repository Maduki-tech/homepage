"use client";

const STACK = [
  { label: "Languages", chips: ["Go", "C", "Rust", "C++", "Lua", "TypeScript"] },
  { label: "Backend & Data", chips: ["PostgreSQL", "Redis", "MQTT", "gRPC", "Kafka"] },
  { label: "Infra & Tooling", chips: ["Docker", "Linux", "CI/CD", "Profiling", "Neovim"] },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        paddingBlock: "clamp(64px,10vh,120px)",
        scrollMarginTop: "calc(var(--header-h) + 18px)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,52px)",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "clamp(34px,5vw,72px)",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Copy */}
        <div className="reveal">
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
            <span style={{ color: "var(--text-dim)" }}>03</span>
            {" — about"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(1.7rem,3.4vw,2.4rem)",
              letterSpacing: "-0.02em",
              margin: "0 0 22px",
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            whoami
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "var(--text)",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: 1.45,
              margin: "0 0 1.1em",
              maxWidth: "54ch",
            }}
          >
            I care about the layers most people scroll past — the parser, the allocator, the hot loop,
            the millisecond you didn&apos;t know you were spending.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.04rem", margin: "0 0 1.1em", maxWidth: "54ch" }}>
            Currently a <b style={{ color: "var(--text)", fontWeight: 600 }}>Backend Developer for IoT</b> at
            Wacker Neuson, building the services that move telemetry from machines in the field to the people
            who depend on it. Before that, years of consulting and freelance work shipping production systems
            across very different stacks.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.04rem", margin: 0, maxWidth: "54ch" }}>
            Outside of work I live in the terminal — writing interpreters, emulators and Neovim plugins to
            understand how the tools I rely on actually work under the hood.
          </p>
        </div>

        {/* Stack card */}
        <div
          className="reveal"
          data-d="1"
          style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--border-col)",
            borderRadius: 15,
            padding: 22,
            fontFamily: "var(--font-mono)",
            boxShadow: "var(--sh-card)",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              color: "var(--text-dim)",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            <span style={{ color: "var(--good)" }}>$</span> cat ~/.stack
          </div>
          {STACK.map((group) => (
            <div key={group.label} style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 9,
                }}
              >
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text)",
                      background: "var(--bg-elev-2)",
                      border: "1px solid var(--border-col)",
                      padding: "4px 10px",
                      borderRadius: 7,
                      transition: "border-color .2s, color .2s, transform .2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-line)";
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-col)";
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.transform = "";
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
