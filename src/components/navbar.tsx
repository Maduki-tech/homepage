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
  if (!mounted) return <div style={{ width: 38, height: 38 }} />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: 38,
        height: 38,
        borderRadius: 10,
        border: "1px solid var(--border-col)",
        background: "var(--bg-elev)",
        color: "var(--text-muted)",
        display: "grid",
        placeItems: "center",
        transition: "color .2s, border-color .2s, background .2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const t = e.currentTarget;
        t.style.color = "var(--text)";
        t.style.borderColor = "var(--accent-line)";
        t.style.background = "var(--accent-soft)";
      }}
      onMouseLeave={(e) => {
        const t = e.currentTarget;
        t.style.color = "var(--text-muted)";
        t.style.borderColor = "var(--border-col)";
        t.style.background = "var(--bg-elev)";
      }}
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "var(--header-h)",
          display: "flex",
          alignItems: "center",
          background: headerBg,
          backdropFilter: "blur(14px) saturate(140%)",
          WebkitBackdropFilter: "blur(14px) saturate(140%)",
          borderBottom: `1px solid ${scrolled ? "var(--border-col)" : "transparent"}`,
          transition: "border-color .3s ease, background .3s ease",
        }}
      >
        <nav
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,52px)",
            display: "flex",
            alignItems: "center",
            gap: 18,
            width: "100%",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            aria-label="David Schlüter – home"
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "1.02rem",
              display: "flex",
              alignItems: "center",
              gap: "0.55em",
              letterSpacing: "-0.01em",
              color: "var(--text)",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                display: "grid",
                placeItems: "center",
                background: "var(--accent)",
                color: "var(--accent-ink)",
                fontSize: "0.92rem",
                boxShadow: "0 0 0 1px var(--accent-line), 0 6px 16px -6px var(--accent)",
                flexShrink: 0,
              }}
            >
              ~/
            </span>
            <span>
              schlueter
              <span className="cursor-blink" style={{ color: "var(--accent)" }}>_</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginLeft: "auto",
            }}
            className="nav-links-desktop"
          >
            {NAV_LINKS.map((link) => {
              const active = isHomePage && activeSection === link.section;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: active ? "var(--accent)" : "var(--text-muted)",
                    padding: "8px 13px",
                    borderRadius: 8,
                    position: "relative",
                    transition: "color .2s, background .2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "var(--accent-soft)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        left: 13,
                        right: 13,
                        bottom: 3,
                        height: 2,
                        background: "var(--accent)",
                        borderRadius: 2,
                        display: "block",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 6 }}>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="menu-btn-mobile"
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                border: "1px solid var(--border-col)",
                background: "var(--bg-elev)",
                color: "var(--text)",
                display: "none",
                placeItems: "center",
                cursor: "pointer",
              }}
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
        style={{
          position: "fixed",
          top: "var(--header-h)",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "var(--bg-elev)",
          borderBottom: "1px solid var(--border-col)",
          padding: "14px clamp(20px,5vw,52px) 20px",
          flexDirection: "column",
          gap: 4,
          display: mobileOpen ? "flex" : "none",
        }}
      >
        {NAV_LINKS.map((link) => {
          const active = isHomePage && activeSection === link.section;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                color: active ? "var(--accent)" : "var(--text-muted)",
                padding: "11px 8px",
                borderRadius: 8,
                background: active ? "var(--accent-soft)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 760px) {
          .nav-links-desktop { display: none !important; }
          .menu-btn-mobile { display: grid !important; }
        }
      `}</style>
    </>
  );
}
