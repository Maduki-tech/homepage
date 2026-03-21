import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { HeroBackground } from "~/components/hero-background";

const socialLinks = [
    { href: "https://github.com/your-handle", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/your-handle", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/your-handle", icon: Twitter, label: "X" },
];

export function HeroSection() {
    return (
        <section className="relative h-full overflow-hidden bg-white dark:bg-[#04040f]">
            <HeroBackground />

            {/* Text content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center">
                <p className="text-md font-semibold uppercase tracking-[0.35em] text-violet-600 dark:text-violet-400">
                    Welcome to my portfolio
                </p>
                <h1 className="text-6xl font-bold tracking-tight text-gray-900 md:text-7xl dark:text-white dark:[text-shadow:0_2px_40px_rgba(0,0,0,0.8)]">
                    David Schlueter
                </h1>
                <p className="text-lg font-light tracking-wide text-gray-500 md:text-xl dark:text-white/75">
                    Backend Engineer & Software Developer
                </p>
                <p className="mt-1 max-w-xs text-md font-normal tracking-wide border-b-2 border-indigo-500 text-gray-400 
                    md:text-sm dark:text-white/75
                    ">
                    &ldquo;Building digital experiences that matter&rdquo;
                </p>
            </div>

            {/* Social links — pinned to the bottom */}
            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-6">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-gray-400 transition-colors hover:text-violet-600 dark:text-white/70 dark:hover:text-indigo-300"
                    >
                        <Icon className="size-8" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
