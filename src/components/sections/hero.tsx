"use client";

import { useEffect, useRef } from "react";

type ScriptStep =
  | { type: true; cmd: string; keepCursor?: boolean }
  | { type?: never; out: string };

const SCRIPT: ScriptStep[] = [
  { type: true, cmd: "whoami" },
  { out: '<span style="color:var(--term-muted)">David Schlüter – backend developer, performance-focused</span>' },
  { type: true, cmd: "cat focus.txt" },
  { out: '<span style="color:var(--term-blue)">low-latency services</span> · <span style="color:var(--term-yellow)">throughput</span> · <span style="color:var(--term-pink)">clean systems</span>' },
  { type: true, cmd: "ls ~/projects" },
  { out: '<span style="color:var(--term-blue)">interpreter/</span>   <span style="color:var(--term-blue)">chip8-emulator/</span>   <span style="color:var(--term-blue)">nvim-cpp-headers/</span>' },
  { type: true, cmd: "echo $STATUS" },
  { out: '<span style="color:var(--term-green)">✓</span> <span style="color:var(--term-muted)">open to interesting backend problems</span>' },
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
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function makeLine() {
      const el = document.createElement("div");
      el.style.cssText = "white-space:pre-wrap;word-break:break-word;line-height:1.85";
      body!.appendChild(el);
      return el;
    }

    const cursor = `<span style="display:inline-block;width:9px;height:1.05em;background:var(--term-green);vertical-align:-2px;margin-left:2px" class="cursor-blink"></span>`;

    if (reduceMotion) {
      SCRIPT.forEach((s) => {
        const el = makeLine();
        if (s.type) {
          el.innerHTML = promptHTML(s.cmd) + (s.keepCursor ? " " + cursor : "");
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
          el.innerHTML = base + `<span style="color:var(--term-text)">${cmd.slice(0, c)}</span>` + cursor;
          if (c < cmd.length) {
            c++;
            timers.push(setTimeout(typeChar, 42));
          } else {
            if (keepCursor) { i++; return; }
            el.innerHTML = base + `<span style="color:var(--term-text)">${cmd}</span>`;
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
    <div
      style={{
        background: "var(--term-bg)",
        border: "1px solid var(--term-border)",
        borderRadius: 14,
        boxShadow: "var(--sh), 0 0 0 1px rgba(255,255,255,.02) inset",
        overflow: "hidden",
        fontFamily: "var(--font-mono)",
        position: "relative",
      }}
    >
      {/* Terminal titlebar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "11px 15px",
          background: "var(--term-head)",
          borderBottom: "1px solid var(--term-border)",
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e", display: "block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", display: "block" }} />
        <span
          style={{
            marginLeft: 8,
            fontSize: "0.76rem",
            color: "var(--term-muted)",
            letterSpacing: "0.02em",
          }}
        >
          david@dev: <span style={{ color: "var(--term-blue)" }}>~</span> — zsh
        </span>
      </div>
      {/* Terminal body */}
      <div
        ref={bodyRef}
        style={{
          padding: "18px 18px 22px",
          fontSize: "0.86rem",
          lineHeight: 1.85,
          minHeight: 288,
        }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "calc(var(--header-h) + clamp(40px,9vh,96px))",
        paddingBottom: "clamp(60px,10vh,110px)",
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
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "clamp(30px,5vw,64px)",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div>
          <span
            className="reveal in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6em",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              border: "1px solid var(--border-col)",
              background: "var(--bg-elev)",
              padding: "6px 13px",
              borderRadius: 30,
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--good)",
                boxShadow: "0 0 0 3px color-mix(in srgb, var(--good) 28%, transparent)",
                animation: "pulse 2.4s ease-in-out infinite",
                display: "block",
              }}
            />
            Available for backend work
          </span>

          <h1
            className="reveal in"
            data-d="1"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(2.5rem,6.4vw,4.4rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "0 0 22px",
              color: "var(--text)",
            }}
          >
            Backend developer
            <br />
            obsessed with
            <br />
            <span
              style={{
                background: "linear-gradient(110deg, var(--accent), color-mix(in srgb, var(--accent) 55%, #a78bfa))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              performance.
            </span>
          </h1>

          <p
            className="reveal in"
            data-d="2"
            style={{
              fontSize: "clamp(1.05rem,1.5vw,1.22rem)",
              color: "var(--text-muted)",
              maxWidth: "38ch",
              margin: "0 0 30px",
            }}
          >
            I&apos;m <b style={{ color: "var(--text)", fontWeight: 600 }}>David Schlüter</b> — I build fast,
            reliable systems and the low-level tooling around them. Interpreters, emulators, IoT
            backends.
          </p>

          <div
            className="reveal in"
            data-d="3"
            style={{ display: "flex", flexWrap: "wrap", gap: 13, alignItems: "center" }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55em",
                fontFamily: "var(--font-mono)",
                fontSize: "0.88rem",
                fontWeight: 500,
                padding: "12px 20px",
                borderRadius: 11,
                border: "1px solid transparent",
                background: "var(--accent)",
                color: "var(--accent-ink)",
                boxShadow: "0 10px 26px -12px var(--accent)",
                transition: "transform .15s, box-shadow .25s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 16px 30px -12px var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 10px 26px -12px var(--accent)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 17l6-6-6-6M12 19h8" />
              </svg>
              projects --list
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55em",
                fontFamily: "var(--font-mono)",
                fontSize: "0.88rem",
                fontWeight: 500,
                padding: "12px 20px",
                borderRadius: 11,
                border: "1px solid var(--border-col)",
                background: "transparent",
                color: "var(--text)",
                transition: "transform .15s, border-color .2s, background .2s, color .2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-line)";
                e.currentTarget.style.background = "var(--accent-soft)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-col)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.transform = "";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" /><path d="M4 7l8 6 8-6" />
              </svg>
              get in touch
            </a>
          </div>

          <div
            className="reveal in"
            data-d="3"
            style={{ display: "flex", gap: 26, marginTop: 38, flexWrap: "wrap" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <b style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>6+</b>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em" }}>years building</span>
            </div>
            <div style={{ width: 1, background: "var(--border-col)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <b style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Go · Rust</b>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em" }}>core stack</span>
            </div>
            <div style={{ width: 1, background: "var(--border-col)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <b style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>IoT</b>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em" }}>now @ Wacker Neuson</span>
            </div>
          </div>
        </div>

        {/* Right – terminal */}
        <div className="reveal in" data-d="2">
          <TerminalHero />
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 430px) {
          .hero-cta { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </section>
  );
}
