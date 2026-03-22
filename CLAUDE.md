# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal homepage/portfolio built with Next.js 15 App Router, Tailwind CSS v4, and shadcn UI components. It features a clean, modern design with light/dark mode support and is structured for easy maintenance and scalability.

Goal is make sure, that the Website is not scrolling. Each page should be clean and short. 

### Home Section

- Hero with name, title, and brief intro
- Links to resume, GitHub, LinkedIn

### Blog Section

- List of blog posts with title, date, and short excerpt
- Blogs should be written in markdown with frontmatter for metadata (title, date, description)
- I want it to be in a grid list, with a nice image from the metadata from the post. If you click on the post, it should open the full blog post in a new page, with the content rendered from markdown.

### Projects Section

- Card components with Image of the project, title, and short description
- if you press on them, they will turn around and show more details about the project, like technologies used, challenges faced, and a link to the live demo or GitHub repo.
- Projects are displayed in a responsive grid layout that adjusts to different screen sizes.

### About Me Section

- A brief bio with background, skills, and interests
- A profile picture and contact information
- My Work Experience, Education and Skills
- A section with my hobbies and interests, to give a more personal touch.

### Contact Section

- A simple contact form with fields for name, email, and message
- A submit button that sends the message to my email (using a service like Formspree
- Links to social media profiles (GitHub, LinkedIn, Twitter)



## Commands

```bash
bun dev          # Start dev server (Turbo)
bun build        # Production build
bun lint         # Run ESLint
bun lint:fix     # Auto-fix lint issues
bun check        # Lint + TypeScript type check
bun typecheck    # TypeScript check only
bun format:write # Apply Prettier formatting
```

## Architecture

Next.js 15 App Router personal homepage/portfolio, bootstrapped with create-t3-app.

**Path alias:** `~/` maps to `src/`

**Key directories:**
- `src/app/` — App Router pages and root layout
- `src/components/ui/` — shadcn/Radix UI primitives (generated via shadcn CLI)
- `src/components/` — feature components (navbar, sections, etc.)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/styles/globals.css` — Tailwind v4 entry point with CSS custom properties (oklch, light/dark)
- `src/env.js` — Environment variable validation via `@t3-oss/env-nextjs` + Zod

**Layout structure:** Root layout (`src/app/layout.tsx`) wraps everything in `ThemeProvider` (next-themes) and renders a sticky `Navbar` above page content inside a full-height flex column.

**Styling:** Tailwind CSS v4 with shadcn (radix-nova style, neutral base, CSS variables). Component variants use `class-variance-authority`. Always use the `cn()` utility when merging class names.

**Components:** shadcn components live in `src/components/ui/` and should not be manually edited — regenerate via `bunx shadcn add <component>`. Feature components go directly in `src/components/`.

**Dark mode:** Managed by `ThemeProvider` at the layout level; CSS variables toggle automatically. Use Tailwind's `dark:` variant for custom overrides.
