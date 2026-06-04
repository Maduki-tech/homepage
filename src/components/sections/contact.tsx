"use client";

import { type FormEvent, useRef, useState } from "react";

const CONTACT_EMAIL = "d.schlueter1011@gmail.com";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [hint, setHint] = useState("→ opens your mail client");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const name = (form.querySelector<HTMLInputElement>("#cf-name")?.value ?? "").trim();
    const from = (form.querySelector<HTMLInputElement>("#cf-email")?.value ?? "").trim();
    const msg = (form.querySelector<HTMLTextAreaElement>("#cf-msg")?.value ?? "").trim();
    const subject = encodeURIComponent(`Portfolio contact – ${name || "Hello"}`);
    const body = encodeURIComponent(`${msg}\n\n– ${name}${from ? `\n${from}` : ""}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setHint("✓ opening your mail client");
  }

  return (
    <section
      id="contact"
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
          gridTemplateColumns: "1fr 1.05fr",
          gap: "clamp(34px,5vw,68px)",
          alignItems: "start",
        }}
        className="contact-grid"
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
            <span style={{ color: "var(--text-dim)" }}>05</span>
            {" — contact"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(1.8rem,3.4vw,2.5rem)",
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            Let&apos;s build
            <br />
            something fast.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "42ch", margin: "0 0 28px" }}>
            Got a backend problem worth solving, a role to fill, or just want to talk shop about
            interpreters? Drop me a line.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.92rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6em",
              color: "var(--text)",
              borderBottom: "1px dashed var(--accent-line)",
              paddingBottom: 3,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16v16H4z" /><path d="M4 7l8 6 8-6" />
            </svg>
            {CONTACT_EMAIL}
          </a>

          {/* Socials */}
          <div style={{ display: "flex", gap: 11, marginTop: 30 }}>
            {[
              {
                href: "https://github.com/Maduki-tech",
                label: "GitHub",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "LinkedIn",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "X",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  border: "1px solid var(--border-col)",
                  background: "var(--bg-elev)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--text-muted)",
                  transition: "color .22s, border-color .22s, background .22s, transform .22s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent-line)";
                  e.currentTarget.style.background = "var(--accent-soft)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border-col)";
                  e.currentTarget.style.background = "var(--bg-elev)";
                  e.currentTarget.style.transform = "";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div
          className="reveal"
          data-d="1"
          style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--border-col)",
            borderRadius: 16,
            padding: 8,
            boxShadow: "var(--sh-card)",
          }}
        >
          {/* Card titlebar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "11px 13px 12px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-dim)",
              borderBottom: "1px solid var(--border-soft-col)",
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57", display: "block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e", display: "block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840", display: "block" }} />
            <span style={{ marginLeft: 6 }}>new-message.txt</span>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            style={{ padding: "20px 18px 18px", display: "flex", flexDirection: "column", gap: 16 }}
          >
            <Field id="cf-name" label="name" type="text" placeholder="ada lovelace" autoComplete="name" />
            <Field id="cf-email" label="email" type="email" placeholder="you@domain.dev" autoComplete="email" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <label
                htmlFor="cf-msg"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}
              >
                message <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                id="cf-msg"
                name="message"
                required
                placeholder="tell me about the problem you're solving"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  background: "var(--bg-elev-2)",
                  border: "1px solid var(--border-col)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  resize: "vertical",
                  minHeight: 118,
                  outline: "none",
                  transition: "border-color .2s, background .2s, box-shadow .2s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "var(--bg)";
                  e.currentTarget.style.boxShadow = "0 0 0 4px var(--accent-soft)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-col)";
                  e.currentTarget.style.background = "var(--bg-elev-2)";
                  e.currentTarget.style.boxShadow = "";
                }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
              <button
                type="submit"
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
                  cursor: "pointer",
                  transition: "transform .15s, box-shadow .25s",
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
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                send message
              </button>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-dim)" }}>
                {hint}
              </span>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <label htmlFor={id} style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
        {label} <span style={{ color: "var(--accent)" }}>*</span>
      </label>
      <input
        id={id}
        name={id.replace("cf-", "")}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.95rem",
          color: "var(--text)",
          background: "var(--bg-elev-2)",
          border: "1px solid var(--border-col)",
          borderRadius: 10,
          padding: "12px 14px",
          outline: "none",
          transition: "border-color .2s, background .2s, box-shadow .2s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.background = "var(--bg)";
          e.currentTarget.style.boxShadow = "0 0 0 4px var(--accent-soft)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--border-col)";
          e.currentTarget.style.background = "var(--bg-elev-2)";
          e.currentTarget.style.boxShadow = "";
        }}
      />
    </div>
  );
}
