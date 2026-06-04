"use client";

import { type FormEvent, useRef, useState } from "react";

const CONTACT_EMAIL = "d.schlueter1011@gmail.com";

export function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [hint, setHint] = useState("→ opens your mail client");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;
        const name = (
            form.querySelector<HTMLInputElement>("#cf-name")?.value ?? ""
        ).trim();
        const from = (
            form.querySelector<HTMLInputElement>("#cf-email")?.value ?? ""
        ).trim();
        const msg = (
            form.querySelector<HTMLTextAreaElement>("#cf-msg")?.value ?? ""
        ).trim();
        const subject = encodeURIComponent(
            `Portfolio contact – ${name || "Hello"}`,
        );
        const body = encodeURIComponent(
            `${msg}\n\n– ${name}${from ? `\n${from}` : ""}`,
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setHint("✓ opening your mail client");
    }

    return (
        <section
            id="contact"
            className="relative scroll-mt-[calc(var(--header-h)+18px)] py-[clamp(64px,10vh,120px)]"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-[clamp(34px,5vw,68px)] px-[clamp(20px,5vw,52px)] lg:grid-cols-[1fr_1.05fr]">
                {/* Copy */}
                <div className="reveal">
                    <p className="mb-[1.1rem] inline-flex items-center gap-[0.55em] font-mono text-[0.78rem] tracking-[0.04em] text-[var(--accent)]">
                        <span className="inline-block h-px w-[18px] bg-[var(--accent-line)]" />
                        <span className="text-[var(--text-dim)]">05</span>
                        {" — contact"}
                    </p>
                    <h2 className="font-display mb-[16px] text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-[var(--text)]">
                        Let&apos;s build
                        <br />
                        something fast.
                    </h2>
                    <p className="mb-[28px] max-w-[42ch] text-[1.05rem] text-[var(--text-muted)]">
                        Got a backend problem worth solving, a role to fill, or
                        just want to talk shop about interpreters? Drop me a
                        line.
                    </p>
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-[0.6em] pb-[3px] font-mono text-[0.92rem] text-[var(--text)] transition-colors duration-200 [border-bottom:1px_dashed_var(--accent-line)] hover:text-[var(--accent)]"
                    >
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 4h16v16H4z" />
                            <path d="M4 7l8 6 8-6" />
                        </svg>
                        {CONTACT_EMAIL}
                    </a>

                    {/* Socials */}
                    <div className="mt-[30px] flex gap-[11px]">
                        {[
                            {
                                href: "https://github.com/Maduki-tech",
                                label: "GitHub",
                                icon: (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
                                    </svg>
                                ),
                            },
                            {
                                href: "#",
                                label: "LinkedIn",
                                icon: (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                                    </svg>
                                ),
                            },
                            {
                                href: "#",
                                label: "X",
                                icon: (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64z" />
                                    </svg>
                                ),
                            },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="grid h-[44px] w-[44px] place-items-center rounded-[11px] border border-[var(--border-col)] bg-[var(--bg-elev)] text-[var(--text-muted)] transition-[color,border-color,background,transform] duration-[220ms] hover:-translate-y-[3px] hover:border-[var(--accent-line)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Form card */}
                <div
                    className="reveal rounded-[16px] border border-[var(--border-col)] bg-[var(--bg-elev)] p-[8px] shadow-[var(--sh-card)]"
                    data-d="1"
                >
                    {/* Card titlebar */}
                    <div className="flex items-center gap-[7px] border-b border-[var(--border-soft-col)] px-[13px] pt-[11px] pb-[12px] font-mono text-[0.75rem] text-[var(--text-dim)]">
                        <span className="block h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
                        <span className="block h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
                        <span className="block h-[9px] w-[9px] rounded-full bg-[#28c840]" />
                        <span className="ml-[6px]">new-message.txt</span>
                    </div>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        noValidate
                        className="flex flex-col gap-[16px] px-[18px] pt-[20px] pb-[18px]"
                    >
                        <Field
                            id="cf-name"
                            label="name"
                            type="text"
                            placeholder="ada lovelace"
                            autoComplete="name"
                        />
                        <Field
                            id="cf-email"
                            label="email"
                            type="email"
                            placeholder="you@domain.dev"
                            autoComplete="email"
                        />
                        <div className="flex flex-col gap-[7px]">
                            <label
                                htmlFor="cf-msg"
                                className="font-mono text-[0.78rem] text-[var(--text-muted)]"
                            >
                                message{" "}
                                <span className="text-[var(--accent)]">*</span>
                            </label>
                            <textarea
                                id="cf-msg"
                                name="message"
                                required
                                placeholder="tell me about the problem you're solving"
                                className="min-h-[118px] resize-y rounded-[10px] border border-[var(--border-col)] bg-[var(--bg-elev-2)] px-[14px] py-[12px] font-sans text-[0.95rem] text-[var(--text)] transition-[border-color,background,box-shadow] duration-200 outline-none focus:border-[var(--accent)] focus:bg-[var(--bg)] focus:shadow-[0_0_0_4px_var(--accent-soft)]"
                            />
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-[14px]">
                            <button
                                type="submit"
                                className="inline-flex cursor-pointer items-center gap-[0.55em] rounded-[11px] border border-transparent bg-[var(--accent)] px-[20px] py-[12px] font-mono text-[0.88rem] font-medium text-[var(--accent-ink)] shadow-[0_10px_26px_-12px_var(--accent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_30px_-12px_var(--accent)]"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                </svg>
                                send message
                            </button>
                            <span className="font-mono text-[0.72rem] text-[var(--text-dim)]">
                                {hint}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

function Field({
    id,
    label,
    type,
    placeholder,
    autoComplete,
}: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    autoComplete?: string;
}) {
    return (
        <div className="flex flex-col gap-[7px]">
            <label
                htmlFor={id}
                className="font-mono text-[0.78rem] text-[var(--text-muted)]"
            >
                {label} <span className="text-[var(--accent)]">*</span>
            </label>
            <input
                id={id}
                name={id.replace("cf-", "")}
                type={type}
                required
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="rounded-[10px] border border-[var(--border-col)] bg-[var(--bg-elev-2)] px-[14px] py-[12px] font-sans text-[0.95rem] text-[var(--text)] transition-[border-color,background,box-shadow] duration-200 outline-none focus:border-[var(--accent)] focus:bg-[var(--bg)] focus:shadow-[0_0_0_4px_var(--accent-soft)]"
            />
        </div>
    );
}
