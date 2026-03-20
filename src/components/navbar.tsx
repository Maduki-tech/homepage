"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";


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
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
                <div className="mr-auto">
                </div>
                <div className="flex items-center space-x-20 mx-auto">
                    <NavButton href="/blog">Blog</NavButton>
                    <NavButton href="/projects">Projects</NavButton>
                    <Link href="/" className="mx-8 flex shrink-0 items-center">
                        <span className="font-semibold text-lg">Portfolio</span>
                    </Link>
                    <NavButton href="/about">About Me</NavButton>
                    <NavButton href="/contact">Contact</NavButton>
                </div>
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}

function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Button variant="ghost" asChild>
            <Link
                className="text-xl"
                href={href}>
                {children}
            </Link>
        </Button>
    );
}
