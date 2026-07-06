import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "David Schlüter – Backend Developer",
        short_name: "David Schlüter",
        description:
            "Backend developer obsessed with performance. Go, Rust, Java — low-latency services, IoT, and systems tooling.",
        start_url: "/",
        display: "standalone",
        background_color: "#0d0f14",
        theme_color: "#0d0f14",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/icons8-terminal-16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
    };
}
