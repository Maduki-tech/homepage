"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog";

type Job = {
    title: string;
    company: string;
    period: string;
    description: string;
    details: {
        responsibilities: string[];
        technologies: string[];
        achievements: string[];
    };
};

// Newest on top
const workExperience: Job[] = [
    {
        title: "Backend Developer IoT",
        company: "Wacker Neuson SE",
        period: "2023 – Present",
        description:
            "Building an IoT platform for construction equipment, enabling real-time monitoring and predictive maintenance.",
        details: {
            responsibilities: [
                "Led the Migration of ofer 150.000 machines.",
                "Building the process to handle over 20.000 messages per minute.",
                "Assessed and implemented ISO standards and EU regulations for data security and privacy.",
            ],
            technologies: ["Azure", "Azure SQL", "Java", "Python"],
            achievements: [
                "Improved performance of message processing by 70% through optimized data pipelines and efficient resource management.",
                "Successfully lead the migration of over 150,000 machines to the new IoT platform, ensuring minimal downtime and seamless integration.",
            ],
        },
    },
    {
        title: "Freelance Webdeveloper",
        company: "David Schlueter",
        period: "2022 – 2024",
        description:
            "Building Homepages and WebApps for small businesses and private customers.",
        details: {
            responsibilities: [
                "Building and designing the Projects from scratch.",
                "Responsible for the whole stack, from the database to the frontend.",
                "Deploying and maintaining the projects on Vercel and Google Cloud.",
            ],
            technologies: [
                "Google Cloud",
                "NextJS",
                "Prisma",
                "PostgreSQL",
                "Vercel",
                "Docker",
                "Google APIs",
            ],
            achievements: [
                "Successfully launched multiple websites and web applications for small businesses, resulting in increased online presence and customer engagement.",
                "Implemented efficient deployment pipelines using Vercel and Google Cloud, reducing deployment time by 50% and ensuring high availability.",
            ],
        },
    },
    {
        title: "Software Developer",
        company: "Divcon Consulting GmbH",
        period: "2019 – 2023",
        description:
            "Worked on a Consturction site planning platform, responsible for backend development and infrastructure.",
        details: {
            responsibilities: [
                "Building UI Components with SAPUI5.",
                "Implementing REST APIs and integrating with SAP backend systems.",
                "Building Mobile App Clone from existing SAPUI5 WebApp with Kotlin Multiplatform.",
            ],
            technologies: [
                "SAPUI5",
                "JavaScript",
                "Osapiens HUB",
                "ABAP",
                "SAP",
                "Kotlin",
            ],
            achievements: [
                "MVP of a mobile app clone of an existing SAPUI5 web application using Kotlin Multiplatform, enabling cross-platform access and improving user experience.",
                "Learned and implemented SAPUI5 for frontend development, successfully integrating with SAP backend systems and delivering a seamless user experience.",
            ],
        },
    },
];

const education = [
    {
        degree: "IT specialist training",
        institution: "Berfuliche-Schulen-Bretten",
        period: "2019 - 2022",
    },
];

const skills: Record<string, { name: string; href?: string }[]> = {
    Languages: [
        { name: "Java", href: "https://www.java.com" },
        { name: "Go", href: "https://go.dev" },
        { name: "TypeScript", href: "https://www.typescriptlang.org" },
        { name: "Python", href: "https://www.python.org" },
    ],
    Databases: [
        { name: "PostgreSQL", href: "https://www.postgresql.org" },
        { name: "Redis", href: "https://redis.io" },
        { name: "SQLite", href: "https://www.sqlite.org" },
        { name: "MongoDB", href: "https://www.mongodb.com" },
        { name: "MySQL", href: "https://www.mysql.com" },
    ],
    Tools: [
        { name: "Neovim", href: "https://neovim.io" },
        { name: "Docker", href: "https://www.docker.com" },
        { name: "Git", href: "https://git-scm.com" },
        { name: "Linux", href: "https://www.kernel.org" },
        {
            name: "Azure DevOps",
            href: "https://azure.microsoft.com/en-us/services/devops/",
        },
    ],
    Cloud: [
        { name: "Azure", href: "https://azure.microsoft.com" },
        { name: "Google Cloud", href: "https://cloud.google.com" },
        { name: "Vercel", href: "https://vercel.com" },
    ],
};

const hobbies = [
    {
        name: "Neovim & Tooling",
        description: "Obsessing over configs and keybindings.",
    },
    {
        name: "Micro SaaS",
        description: "Small products that solve real problems.",
    },
    {
        name: "Performance Eng.",
        description: "Profiling and squeezing every bit of speed.",
    },
    { name: "Biking", description: "Taking a great break in the fresh air" },
];

export default function AboutPage() {
    const [selected, setSelected] = useState<Job | null>(null);

    return (
        <main className="dark:bg-page-dark relative min-h-full overflow-y-auto bg-white md:h-full md:overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 px-4 py-6 md:h-full md:px-8">
                {/* ── Hero strip ─────────────────────────────────────────── */}
                <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 md:flex-row md:items-center md:gap-6 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center gap-4">
                        <div className="size-14 shrink-0 rounded-full bg-gray-200 ring-2 ring-gray-300 dark:bg-white/15 dark:ring-white/20" />
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                Your Name
                            </h1>
                            <p className="text-brand text-sm">
                                Backend Developer &amp; Neovim Enthusiast
                            </p>
                        </div>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-gray-500 md:mx-6 md:border-l md:border-gray-200 md:pl-6 dark:text-white/55 dark:md:border-white/10">
                        Passionate backend developer with a love for performance
                        engineering and Neovim. Currently exploring Micro SaaS —
                        building small, focused products that solve real
                        problems.
                    </p>
                    <div className="flex items-center justify-between md:flex-col md:items-end md:gap-2">
                        <div className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-white/40">
                            <MapPin className="size-4" />
                            <span>Karlsruhe, Germany</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/Maduki-tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-brand dark:hover:text-brand text-gray-400 transition-colors dark:text-white/40"
                            >
                                <Github className="size-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/david-schlueter98/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-brand dark:hover:text-brand text-gray-400 transition-colors dark:text-white/40"
                            >
                                <Linkedin className="size-5" />
                            </a>
                            <a
                                href="mailto:d.schlueter1011@gmail.com"
                                className="hover:text-brand dark:hover:text-brand text-gray-400 transition-colors dark:text-white/40"
                            >
                                <Mail className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Main two-column layout ──────────────────────────────── */}
                <div className="grid grid-cols-1 gap-4 md:min-h-0 md:flex-1 md:grid-cols-5">
                    {/* ── Left: Work Experience ──────────────────────────────── */}
                    <div className="col-span-1 flex flex-col gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 md:col-span-3 dark:border-white/10 dark:bg-white/5">
                        <h2 className="text-brand text-xs font-semibold tracking-widest uppercase">
                            Work Experience
                        </h2>
                        <div className="flex flex-col gap-3">
                            {workExperience.map((job) => (
                                <button
                                    key={job.title + job.company}
                                    onClick={() => setSelected(job)}
                                    className="group w-full cursor-pointer rounded-xl border border-gray-200 bg-white/80 p-5 text-left transition-all hover:border-gray-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="group-hover:text-brand font-semibold text-gray-900 transition-colors dark:text-white">
                                                {job.title}
                                            </div>
                                            <div className="text-brand mt-0.5 text-sm font-medium">
                                                {job.company}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-white/10 dark:text-white/50">
                                                {job.period}
                                            </span>
                                            <span className="text-xs text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-white/40">
                                                View details →
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-white/55">
                                        {job.description}
                                    </p>
                                </button>
                            ))}
                        </div>

                        {/* Quick stats */}
                        <div className="mt-auto grid grid-cols-3 gap-3">
                            {[
                                { label: "Years Experience", value: "4+" },
                                { label: "Projects Shipped", value: "20+" },
                                { label: "Coffees", value: "∞" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-center dark:border-white/10 dark:bg-white/5"
                                >
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {stat.value}
                                    </div>
                                    <div className="mt-0.5 text-xs text-gray-500 dark:text-white/40">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Education + Skills + Hobbies ───────────────── */}
                    <div className="col-span-1 flex flex-col gap-3 overflow-hidden md:col-span-2">
                        {/* Education */}
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 dark:border-white/10 dark:bg-white/5">
                            <h2 className="text-brand mb-3 text-xs font-semibold tracking-widest uppercase">
                                Education
                            </h2>
                            {education.map((edu) => (
                                <div
                                    key={edu.degree}
                                    className="rounded-xl border border-gray-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">
                                                {edu.degree}
                                            </div>
                                            <div className="mt-0.5 text-sm text-gray-500 dark:text-white/50">
                                                {edu.institution}
                                            </div>
                                        </div>
                                        <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-white/10 dark:text-white/50">
                                            {edu.period}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 dark:border-white/10 dark:bg-white/5">
                            <h2 className="text-brand mb-3 text-xs font-semibold tracking-widest uppercase">
                                Skills
                            </h2>
                            <div className="flex flex-col gap-2.5">
                                {Object.entries(skills).map(
                                    ([category, items]) => (
                                        <div
                                            key={category}
                                            className="flex flex-wrap items-center gap-2"
                                        >
                                            <span className="w-20 shrink-0 text-xs text-gray-400 dark:text-white/40">
                                                {category}
                                            </span>
                                            {items.map((skill) =>
                                                skill.href ? (
                                                    <a
                                                        key={skill.name}
                                                        href={skill.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 transition-all hover:bg-gray-200 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15"
                                                    >
                                                        {skill.name}
                                                    </a>
                                                ) : (
                                                    <span
                                                        key={skill.name}
                                                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-white/60"
                                                    >
                                                        {skill.name}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Hobbies */}
                        <div className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 dark:border-white/10 dark:bg-white/5">
                            <h2 className="text-brand mb-3 text-xs font-semibold tracking-widest uppercase">
                                Interests
                            </h2>
                            <div className="grid grid-cols-2 gap-2">
                                {hobbies.map((hobby) => (
                                    <div
                                        key={hobby.name}
                                        className="rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 dark:border-white/10 dark:bg-white/5"
                                    >
                                        <div className="text-sm font-medium text-gray-800 dark:text-white">
                                            {hobby.name}
                                        </div>
                                        <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-white/45">
                                            {hobby.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Job detail dialog ────────────────────────────────────── */}
            <Dialog
                open={!!selected}
                onOpenChange={(open) => !open && setSelected(null)}
            >
                <DialogContent className="flex max-h-[90dvh] w-full flex-col gap-0 overflow-hidden p-0">
                    {selected && (
                        <>
                            {/* Sticky header */}
                            <DialogHeader className="shrink-0 border-b border-gray-200 px-5 py-4 dark:border-white/10">
                                <DialogTitle className="text-lg">
                                    {selected.title}
                                </DialogTitle>
                                <div className="flex items-center justify-between">
                                    <span className="text-brand text-sm font-medium">
                                        {selected.company}
                                    </span>
                                    <span className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-500 dark:bg-white/10 dark:text-white/50">
                                        {selected.period}
                                    </span>
                                </div>
                            </DialogHeader>

                            {/* Scrollable body */}
                            <div className="flex-1 overflow-y-auto px-5 py-4">
                                <div className="flex flex-col gap-5">
                                    {/* Responsibilities */}
                                    <div>
                                        <h3 className="text-brand mb-2 text-xs font-semibold tracking-widest uppercase">
                                            Responsibilities
                                        </h3>
                                        <ul className="flex flex-col gap-1.5">
                                            {selected.details.responsibilities.map(
                                                (r) => (
                                                    <li
                                                        key={r}
                                                        className="flex gap-2 text-sm text-gray-600 dark:text-white/70"
                                                    >
                                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-white/40" />
                                                        {r}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <h3 className="text-brand mb-2 text-xs font-semibold tracking-widest uppercase">
                                            Achievements
                                        </h3>
                                        <ul className="flex flex-col gap-1.5">
                                            {selected.details.achievements.map(
                                                (a) => (
                                                    <li
                                                        key={a}
                                                        className="flex gap-2 text-sm text-gray-600 dark:text-white/70"
                                                    >
                                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-white/40" />
                                                        {a}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h3 className="text-brand mb-2 text-xs font-semibold tracking-widest uppercase">
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selected.details.technologies.map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-white/60"
                                                    >
                                                        {tech}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </main>
    );
}
