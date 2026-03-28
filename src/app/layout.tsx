import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { Navbar } from "~/components/navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio and blog",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="flex h-dvh flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="flex-1 overflow-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
