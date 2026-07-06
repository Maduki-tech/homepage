import "~/styles/globals.css";

import { type Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "~/components/theme-provider";
import { Navbar } from "~/components/navbar";
import { ScrollReveal } from "~/components/scroll-reveal";

const SITE_URL = "https://www.davidschlueter.com";
const SITE_NAME = "David Schlüter";
const TITLE = "David Schlüter – Backend Developer";
const DESCRIPTION =
    "Backend developer obsessed with performance. I build low-latency services, interpreters, emulators, and IoT backends in Go, Rust, and Java. Based in Germany, open to interesting backend problems.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: DESCRIPTION,
    keywords: [
        "backend developer",
        "Go developer",
        "Rust developer",
        "Java developer",
        "performance engineering",
        "low-latency systems",
        "IoT backend",
        "interpreter",
        "emulator",
        "systems programming",
        "David Schlüter",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: "/og",
                width: 1200,
                height: 630,
                alt: TITLE,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        creator: "@madukitech",
        images: ["/og"],
    },
    alternates: {
        canonical: SITE_URL,
    },
    icons: [
        { rel: "icon", url: "/icons8-terminal-16.png", sizes: "16x16" },
        { rel: "icon", url: "/favicon.ico" },
    ],
};

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: SITE_NAME,
            url: SITE_URL,
            jobTitle: "Backend Developer",
            description: DESCRIPTION,
            knowsAbout: [
                "Go",
                "Rust",
                "Java",
                "Backend Development",
                "Low-latency Systems",
                "IoT",
                "Interpreters",
                "Emulators",
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Docker",
            ],
            sameAs: [
                "https://github.com/Maduki-tech",
                "https://www.linkedin.com/in/david-schlüter",
            ],
            worksFor: {
                "@type": "Organization",
                name: "Wacker Neuson SE",
            },
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            description: DESCRIPTION,
            author: { "@id": `${SITE_URL}/#person` },
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            data-theme="dark"
            className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme="dark"
                    enableSystem={false}
                >
                    <Navbar />
                    <ScrollReveal />
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
