"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/#home", label: "./home", section: "home" },
  { href: "/#projects", label: "./projects", section: "projects" },
  { href: "/#about", label: "./about", section: "about" },
  { href: "/#work", label: "./work", section: "work" },
  { href: "/#contact", label: "./contact", section: "contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[38px] h-[38px]" />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-[38px] h-[38px] rounded-[10px] border border-[var(--border-col)] bg-[var(--bg-elev)] text-[var(--text-muted)] grid place-items-center transition-[color,border-color,background] duration-200 cursor-pointer hover:text-[var(--text)] hover:border-[var(--accent-line)] hover:bg-[var(--accent-soft)]"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isHomePage = pathname === "/";
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length || !("IntersectionObserver" in window)) return;
    let current = "home";
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) current = e.target.id; });
        setActiveSection(current);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, [isHomePage]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const headerBg = scrolled
    ? "color-mix(in srgb, var(--bg) 86%, transparent)"
    : "color-mix(in srgb, var(--bg) 72%, transparent)";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] h-[var(--header-h)] flex items-center backdrop-blur-[14px] saturate-150 border-b transition-[border-color,background] duration-300 ${scrolled ? "border-[var(--border-col)]" : "border-transparent"}`}
        style={{ background: headerBg }}
      >
        <nav className="max-w-[1140px] mx-auto px-[clamp(20px,5vw,52px)] flex items-center gap-[18px] w-full">
          {/* Brand */}
          <Link
            href="/"
            aria-label="David Schlüter – home"
            className="font-mono font-bold text-[1.02rem] flex items-center gap-[0.55em] tracking-[-0.01em] text-[var(--text)]"
          >
            <span className="w-[34px] h-[34px] rounded-[9px] grid place-items-center bg-[var(--accent)] text-[var(--accent-ink)] text-[0.92rem] shadow-[0_0_0_1px_var(--accent-line),0_6px_16px_-6px_var(--accent)] shrink-0">
              ~/
            </span>
            <span>
              schlueter
              <span className="cursor-blink text-[var(--accent)]">_</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-[2px] ml-auto">
            {NAV_LINKS.map((link) => {
              const active = isHomePage && activeSection === link.section;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[0.85rem] px-[13px] py-[8px] rounded-[8px] relative transition-[color,background] duration-200 ${
                    active
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--accent-soft)]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-[13px] right-[13px] bottom-[3px] h-[2px] bg-[var(--accent)] rounded-[2px] block" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-[8px] ml-[6px]">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="md:hidden w-[38px] h-[38px] rounded-[10px] border border-[var(--border-col)] bg-[var(--bg-elev)] text-[var(--text)] grid place-items-center cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile nav */}
      <div
        ref={mobileRef}
        id="mobile-nav"
        className={`fixed top-[var(--header-h)] left-0 right-0 z-[99] bg-[var(--bg-elev)] border-b border-[var(--border-col)] px-[clamp(20px,5vw,52px)] pt-[14px] pb-[20px] flex-col gap-[4px] ${mobileOpen ? "flex" : "hidden"}`}
      >
        {NAV_LINKS.map((link) => {
          const active = isHomePage && activeSection === link.section;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-mono text-[1rem] px-[8px] py-[11px] rounded-[8px] ${
                active
                  ? "text-[var(--accent)] bg-[var(--accent-soft)]"
                  : "text-[var(--text-muted)]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
