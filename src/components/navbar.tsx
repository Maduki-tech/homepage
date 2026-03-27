"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="size-9" />;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </Button>
    );
}

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => setMobileOpen(false), [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-7xl items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="shrink-0 font-semibold text-lg text-foreground hover:text-brand transition-colors">
                    Portfolio
                </Link>

                {/* Desktop links — centered */}
                <div className="hidden md:flex flex-1 items-center justify-center gap-2">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Right side: theme toggle + hamburger */}
                <div className="ml-auto flex items-center gap-1">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
                    <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "bg-brand/10 text-brand"
                                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

function NavLink({
    href,
    children,
    active,
}: {
    href: string;
    children: React.ReactNode;
    active: boolean;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "rounded-md px-3 py-2 text-sm font-light transition-colors",
                active
                    ? "bg-brand/10 text-brand"
                    : "hover:bg-accent hover:text-foreground"
            )}
        >
            {children}
        </Link>
    );
}
