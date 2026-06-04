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
            <span style={{ color: "var(--text-dim)" }}>04</span>
            {" — experience"}
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
            git log --oneline
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: 760, position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 8,
              bottom: 8,
              width: 2,
              background: "linear-gradient(var(--border-col), transparent)",
            }}
          />
          {JOBS.map((job, i) => (
            <div
              key={job.company}
              className="reveal"
              data-d={i > 0 ? String(i) : undefined}
              style={{ position: "relative", paddingBottom: i < JOBS.length - 1 ? 30 : 0, paddingLeft: 40 }}
            >
              {/* Node */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 5,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: `2px solid ${job.now ? "var(--accent)" : "var(--border-col)"}`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: job.now ? "var(--accent)" : "var(--text-dim)",
                    boxShadow: job.now ? "0 0 0 4px var(--accent-soft)" : undefined,
                    display: "block",
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 6,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    letterSpacing: "-0.01em",
                    margin: 0,
                    color: "var(--text)",
                  }}
                >
                  {job.title}{" "}
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>· {job.company}</span>
                  {job.now && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.66rem",
                        color: "var(--good)",
                        border: "1px solid color-mix(in srgb, var(--good) 40%, transparent)",
                        background: "color-mix(in srgb, var(--good) 12%, transparent)",
                        padding: "2px 7px",
                        borderRadius: 20,
                        marginLeft: 8,
                        letterSpacing: "0.03em",
                      }}
                    >
                      now
                    </span>
                  )}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-dim)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {job.when}
                </span>
              </div>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: "62ch" }}>
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
