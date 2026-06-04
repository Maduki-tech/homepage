"use client";

import { HeroSection } from "~/components/sections/hero";
import { ProjectsSection } from "~/components/sections/projects";
import { AboutSection } from "~/components/sections/about";
import { WorkSection } from "~/components/sections/work";
import { ContactSection } from "~/components/sections/contact";

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: "linear-gradient(90deg, transparent, var(--border-col), transparent)",
        maxWidth: 1140,
        marginInline: "auto",
        marginLeft: "clamp(20px,5vw,52px)",
        marginRight: "clamp(20px,5vw,52px)",
      }}
    />
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <AboutSection />
      <Divider />
      <WorkSection />
      <Divider />
      <ContactSection />
      <footer
        style={{
          borderTop: "1px solid var(--border-col)",
          paddingBlock: 34,
          marginTop: 30,
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,52px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "0.92rem",
              color: "var(--text)",
            }}
          >
            <span
              style={{
                display: "inline-grid",
                placeItems: "center",
                width: 28,
                height: 28,
                borderRadius: 7,
                background: "var(--accent)",
                color: "var(--accent-ink)",
                fontSize: "0.8rem",
                marginRight: "0.5em",
              }}
            >
              ~/
            </span>
            David Schlüter
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-dim)",
            }}
          >
            © {new Date().getFullYear()} — built in the terminal, shipped with care
          </span>
          <a
            href="#home"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5em",
              border: "1px solid var(--border-col)",
              padding: "8px 14px",
              borderRadius: 9,
              transition: "color .2s, border-color .2s, background .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent-line)";
              e.currentTarget.style.background = "var(--accent-soft)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--border-col)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            cd ~
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
