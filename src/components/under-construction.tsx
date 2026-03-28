import { HeroBackground } from "~/components/hero-background";

export function UnderConstruction({ page }: { page: string }) {
  return (
    <section className="relative h-full overflow-hidden bg-white dark:bg-[#04040f]">
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center">
        <p className="text-md font-light tracking-[0.4em] text-violet-500 uppercase dark:text-violet-400">
          coming soon
        </p>
        <h1 className="text-7xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
          Under Construction
        </h1>
        <p className="text-xl font-light text-violet-600 md:text-2xl dark:text-violet-200">
          {page}
        </p>
        <p className="mt-2 max-w-sm text-sm font-light text-gray-400 italic md:text-base dark:text-white/50">
          This page is being built. Check back soon.
        </p>
      </div>
    </section>
  );
}
