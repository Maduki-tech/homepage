"use client";

import { HeroSection } from "~/components/sections/hero";
import { ProjectsSection } from "~/components/sections/projects";
import { AboutSection } from "~/components/sections/about";
import { WorkSection } from "~/components/sections/work";
import { ContactSection } from "~/components/sections/contact";

function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-col)] to-transparent max-w-[1140px] mx-[clamp(20px,5vw,52px)]" />
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
      <footer className="border-t border-[var(--border-col)] py-[34px] mt-[30px]">
        <div className="max-w-[1140px] mx-auto px-[clamp(20px,5vw,52px)] flex justify-between items-center gap-[18px] flex-wrap">
          <span className="font-mono font-bold text-[0.92rem] text-[var(--text)]">
            <span className="inline-grid place-items-center w-[28px] h-[28px] rounded-[7px] bg-[var(--accent)] text-[var(--accent-ink)] text-[0.8rem] mr-[0.5em]">
              ~/
            </span>
            David Schlüter
          </span>
          <span className="font-mono text-[0.78rem] text-[var(--text-dim)]">
            © {new Date().getFullYear()} — built in the terminal, shipped with care
          </span>
          <a
            href="#home"
            className="font-mono text-[0.8rem] text-[var(--text-muted)] inline-flex items-center gap-[0.5em] border border-[var(--border-col)] px-[14px] py-[8px] rounded-[9px] transition-[color,border-color,background] duration-200 hover:text-[var(--accent)] hover:border-[var(--accent-line)] hover:bg-[var(--accent-soft)]"
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
