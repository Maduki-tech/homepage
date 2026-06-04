import "~/styles/globals.css";

import { type Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { Navbar } from "~/components/navbar";
import { ScrollReveal } from "~/components/scroll-reveal";

export const metadata: Metadata = {
    title: "David Schlüter – Backend Developer",
    description:
        "David Schlüter – backend developer focused on performance. Interpreters, emulators, and developer tooling.",
    icons: [{ rel: "icon", url: "/icons8-terminal-16.png" }],
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
            </body>
        </html>
    );
}
