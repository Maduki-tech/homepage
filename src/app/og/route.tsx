import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#0d0f14",
                    fontFamily: "monospace",
                    padding: "60px",
                    position: "relative",
                }}
            >
                {/* Grid pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(74,158,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Top accent line */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background:
                            "linear-gradient(90deg, transparent, #4a9eff, transparent)",
                    }}
                />

                {/* Terminal window */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid rgba(74,158,255,0.2)",
                        borderRadius: "14px",
                        overflow: "hidden",
                        flex: 1,
                    }}
                >
                    {/* Title bar */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 18px",
                            backgroundColor: "#161921",
                            borderBottom: "1px solid rgba(74,158,255,0.15)",
                        }}
                    >
                        <div
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                backgroundColor: "#ff5f57",
                            }}
                        />
                        <div
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                backgroundColor: "#febc2e",
                            }}
                        />
                        <div
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                backgroundColor: "#28c840",
                            }}
                        />
                        <span
                            style={{
                                marginLeft: 12,
                                color: "#6b7280",
                                fontSize: 13,
                            }}
                        >
                            david@dev: ~ — zsh
                        </span>
                    </div>

                    {/* Terminal body */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "36px 40px",
                            gap: "12px",
                            flex: 1,
                            backgroundColor: "#0d0f14",
                        }}
                    >
                        <div
                            style={{ display: "flex", gap: 6, fontSize: 16 }}
                        >
                            <span style={{ color: "#28c840" }}>david@dev</span>
                            <span style={{ color: "#6b7280" }}>:~$</span>
                            <span style={{ color: "#e2e8f0" }}>whoami</span>
                        </div>
                        <div style={{ color: "#9ca3af", fontSize: 16 }}>
                            David Schlüter — backend developer, performance-focused
                        </div>

                        <div
                            style={{
                                display: "flex",
                                gap: 6,
                                fontSize: 16,
                                marginTop: 8,
                            }}
                        >
                            <span style={{ color: "#28c840" }}>david@dev</span>
                            <span style={{ color: "#6b7280" }}>:~$</span>
                            <span style={{ color: "#e2e8f0" }}>
                                cat focus.txt
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: 16,
                                fontSize: 16,
                                flexWrap: "wrap",
                            }}
                        >
                            <span style={{ color: "#4a9eff" }}>
                                low-latency services
                            </span>
                            <span style={{ color: "#9ca3af" }}>·</span>
                            <span style={{ color: "#eab308" }}>throughput</span>
                            <span style={{ color: "#9ca3af" }}>·</span>
                            <span style={{ color: "#f472b6" }}>
                                clean systems
                            </span>
                        </div>

                        {/* Big name */}
                        <div
                            style={{
                                marginTop: "auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 52,
                                    fontWeight: 700,
                                    color: "#f1f5f9",
                                    letterSpacing: "-2px",
                                    lineHeight: 1,
                                }}
                            >
                                David Schlüter
                            </div>
                            <div
                                style={{
                                    fontSize: 22,
                                    color: "#4a9eff",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                Backend Developer · Go · Rust · Java
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
