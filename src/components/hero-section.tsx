import { HeroBackground } from "~/components/hero-background";

export function HeroSection() {
    return (
        <section className="relative h-full overflow-hidden bg-white dark:bg-[#04040f]">
            <HeroBackground />

            {/* Text content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center">
                <p className="text-xs font-light uppercase tracking-[0.4em] text-violet-500 dark:text-violet-400">
                    Welcome to my portfolio
                </p>
                <h1 className="text-7xl font-bold tracking-tight text-gray-900 dark:text-white md:text-8xl">
                    David Schlueter
                </h1>
                <p className="text-xl font-light text-violet-600 dark:text-violet-200 md:text-2xl">
                    Backend Engineer & Software Developer
                </p>
                <p className="mt-2 max-w-sm text-sm font-light italic text-gray-400 dark:text-white/50 md:text-base">
                    &ldquo;Building digital experiences that matter&rdquo;
                </p>
            </div>
        </section>
    );
}
