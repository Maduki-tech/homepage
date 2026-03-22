import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const workExperience = [
  {
    title: "Senior Backend Developer",
    company: "Company Name",
    period: "2023 – Present",
    description: "Short description of responsibilities and achievements.",
  },
  {
    title: "Backend Developer",
    company: "Company Name",
    period: "2021 – 2023",
    description: "Short description of responsibilities and achievements.",
  },
];

const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "University Name",
    period: "2017 – 2021",
  },
];

const skills: Record<string, { name: string; href?: string }[]> = {
  Languages: [
    { name: "Go", href: "https://go.dev" },
    { name: "Rust", href: "https://www.rust-lang.org" },
    { name: "TypeScript", href: "https://www.typescriptlang.org" },
    { name: "Python", href: "https://www.python.org" },
  ],
  Databases: [
    { name: "PostgreSQL", href: "https://www.postgresql.org" },
    { name: "Redis", href: "https://redis.io" },
    { name: "SQLite", href: "https://www.sqlite.org" },
  ],
  Tools: [
    { name: "Neovim", href: "https://neovim.io" },
    { name: "Docker", href: "https://www.docker.com" },
    { name: "Git", href: "https://git-scm.com" },
    { name: "Linux" },
  ],
  Cloud: [
    { name: "AWS", href: "https://aws.amazon.com" },
    { name: "Fly.io", href: "https://fly.io" },
    { name: "Cloudflare", href: "https://www.cloudflare.com" },
  ],
};

const hobbies = [
  { name: "Neovim & Tooling", description: "Obsessing over configs and keybindings." },
  { name: "Micro SaaS", description: "Small products that solve real problems." },
  { name: "Performance Eng.", description: "Profiling and squeezing every bit of speed." },
  { name: "Hobby Name", description: "Short description of the hobby." },
];

export default function AboutPage() {
  return (
    <main className="relative h-full overflow-hidden bg-white dark:bg-page-dark">

      {/* Background glows */}
      <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-brand/10 blur-3xl dark:bg-brand/15" />
      <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl dark:bg-brand/10" />

      <div className="relative z-10 flex h-full flex-col gap-4 px-8 py-6">

        {/* ── Hero strip ─────────────────────────────────────────── */}
        <div className="flex items-center gap-6 rounded-2xl border border-brand/20 bg-brand/5 px-6 py-4 dark:bg-brand/10">
          <div className="size-14 shrink-0 rounded-full bg-brand/25 ring-2 ring-brand/50 dark:bg-brand/35" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Your Name</h1>
            <p className="text-sm text-brand">Backend Developer &amp; Neovim Enthusiast</p>
          </div>
          <p className="mx-6 flex-1 border-l border-brand/20 pl-6 text-sm leading-relaxed text-gray-500 dark:text-white/55">
            Passionate backend developer with a love for performance engineering and Neovim.
            Currently exploring Micro SaaS — building small, focused products that solve real problems.
          </p>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-white/40">
              <MapPin className="size-4" />
              <span>City, Country</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-brand dark:text-white/40 dark:hover:text-brand">
                <Github className="size-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-brand dark:text-white/40 dark:hover:text-brand">
                <Linkedin className="size-5" />
              </a>
              <a href="mailto:your@email.com"
                className="text-gray-400 transition-colors hover:text-brand dark:text-white/40 dark:hover:text-brand">
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Main two-column layout ──────────────────────────────── */}
        <div className="grid min-h-0 flex-1 grid-cols-5 gap-4">

          {/* ── Left: Work Experience (wider) ──────────────────────── */}
          <div className="col-span-3 flex flex-col gap-3 overflow-hidden rounded-2xl border border-brand/20 bg-brand/5 p-6 dark:bg-brand/10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">Work Experience</h2>
            <div className="flex flex-col gap-3">
              {workExperience.map((job) => (
                <div key={job.title + job.company}
                  className="rounded-xl border border-brand/15 bg-white/70 p-5 dark:bg-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{job.title}</div>
                      <div className="mt-0.5 text-sm font-medium text-brand">{job.company}</div>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand dark:bg-brand/20">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-white/55">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-auto grid grid-cols-3 gap-3">
              {[
                { label: "Years Experience", value: "4+" },
                { label: "Projects Shipped", value: "20+" },
                { label: "Coffees", value: "∞" },
              ].map((stat) => (
                <div key={stat.label}
                  className="rounded-xl border border-brand/15 bg-white/70 px-4 py-3 text-center dark:bg-white/5">
                  <div className="text-2xl font-bold text-brand">{stat.value}</div>
                  <div className="mt-0.5 text-xs text-gray-500 dark:text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Bio + Education + Skills + Hobbies ─────────── */}
          <div className="col-span-2 flex flex-col gap-3 overflow-hidden">

            {/* Education */}
            <div className="rounded-2xl border border-brand/20 bg-brand/5 px-5 py-4 dark:bg-brand/10">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">Education</h2>
              {education.map((edu) => (
                <div key={edu.degree}
                  className="rounded-xl border border-brand/15 bg-white/70 px-4 py-3 dark:bg-white/5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{edu.degree}</div>
                      <div className="mt-0.5 text-sm text-brand">{edu.institution}</div>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand dark:bg-brand/20">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-brand/20 bg-brand/5 px-5 py-4 dark:bg-brand/10">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">Skills</h2>
              <div className="flex flex-col gap-2.5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="flex flex-wrap items-center gap-2">
                    <span className="w-20 shrink-0 text-xs text-gray-400 dark:text-white/40">{category}</span>
                    {items.map((skill) =>
                      skill.href ? (
                        <a key={skill.name} href={skill.href} target="_blank" rel="noopener noreferrer"
                          className="rounded-full bg-brand/12 px-2.5 py-0.5 text-xs font-medium text-brand transition-all hover:bg-brand hover:text-white hover:shadow-sm dark:bg-brand/22 dark:hover:bg-brand dark:hover:text-white">
                          {skill.name}
                        </a>
                      ) : (
                        <span key={skill.name}
                          className="rounded-full bg-brand/12 px-2.5 py-0.5 text-xs font-medium text-brand dark:bg-brand/22">
                          {skill.name}
                        </span>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="flex-1 rounded-2xl border border-brand/20 bg-brand/5 px-5 py-4 dark:bg-brand/10">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">Interests</h2>
              <div className="grid grid-cols-2 gap-2">
                {hobbies.map((hobby) => (
                  <div key={hobby.name}
                    className="rounded-xl border border-brand/15 bg-white/70 px-3 py-2.5 dark:bg-white/5">
                    <div className="text-sm font-medium text-gray-800 dark:text-white">{hobby.name}</div>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-white/45">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
