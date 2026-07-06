import { HeroSection } from "~/components/sections/hero";
import { ProjectsSection } from "~/components/sections/projects";
import { AboutSection } from "~/components/sections/about";
import { WorkSection } from "~/components/sections/work";
import { ContactSection } from "~/components/sections/contact";

function Divider() {
    return (
        <div className="mx-[clamp(20px,5vw,52px)] h-px max-w-[1140px] bg-gradient-to-r from-transparent via-[var(--border-col)] to-transparent" />
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
            <footer className="mt-[30px] border-t border-[var(--border-col)] py-[34px]">
                <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-[18px] px-[clamp(20px,5vw,52px)]">
                    <span className="font-mono text-[0.92rem] font-bold text-[var(--text)]">
                        <span className="mr-[0.5em] inline-grid h-[28px] w-[28px] place-items-center rounded-[7px] bg-[var(--accent)] text-[0.8rem] text-[var(--accent-ink)]">
                            ~/
                        </span>
                        David Schlüter
                    </span>
                    <span className="font-mono text-[0.78rem] text-[var(--text-dim)]">
                        © {new Date().getFullYear()} — built in the terminal,
                        shipped with care
                    </span>
                    <a
                        href="#home"
                        className="inline-flex items-center gap-[0.5em] rounded-[9px] border border-[var(--border-col)] px-[14px] py-[8px] font-mono text-[0.8rem] text-[var(--text-muted)] transition-[color,border-color,background] duration-200 hover:border-[var(--accent-line)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                    >
                        cd ~
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </a>
                </div>
            </footer>
        </main>
    );
}
