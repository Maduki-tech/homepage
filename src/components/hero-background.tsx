import StarField from "./starfield";

export function HeroBackground() {
  return (
    <>
      {/* Base gradient */}
      <div className="via-page-light-tint/50 to-page-light-deep dark:from-page-dark dark:via-page-dark-mid dark:to-page-dark-deep absolute inset-0 bg-linear-to-b from-white" />

      {/* Star field */}
      <StarField />

      {/* Glowing orbs for depth */}
      <div className="bg-brand/10 dark:bg-brand/20 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
      <div className="bg-brand/10 dark:bg-brand/15 absolute top-1/3 right-1/4 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-brand/10 dark:bg-brand/20 absolute bottom-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl" />

      {/* Perspective grid */}
      <div
        className="absolute right-0 bottom-0 left-0 h-[55%]"
        style={{ perspective: "400px", perspectiveOrigin: "50% 0%" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in oklch, var(--color-brand) 15%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--color-brand) 15%, transparent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "rotateX(55deg)",
            transformOrigin: "top center",
            width: "100%",
            height: "160%",
          }}
        />
      </div>

      {/* Fade out the grid toward the bottom edge */}
      <div className="dark:from-page-dark absolute right-0 bottom-0 left-0 h-1/3 bg-linear-to-t from-white to-transparent" />

      {/* Horizon glow line */}
      <div
        className="via-brand/40 dark:via-brand/60 absolute right-0 left-0 h-px bg-linear-to-r from-transparent to-transparent"
        style={{ top: "50%" }}
      />
      <div
        className="from-brand/10 dark:from-brand/15 absolute right-0 left-0 h-8 bg-linear-to-b to-transparent"
        style={{ top: "50%" }}
      />

      {/* Dark mode: subtle vignette to clear the center text area */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(4,4,15,0.55) 0%, transparent 100%)",
        }}
      />
    </>
  );
}
