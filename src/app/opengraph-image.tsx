import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Razan Dradjat — Cybersecurity Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d0d0f",
          color: "#ffffff",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#3b82f6", fontSize: 30, marginBottom: 28 }}>
          {">_ razandradjat"}
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
          Razan <span style={{ color: "#3b82f6", marginLeft: 24 }}>Dradjat</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#a8a29e", marginTop: 24 }}>
          Penetration Testing · Network &amp; IoT Security
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#78716c", marginTop: 48 }}>
          Informatics · Telkom University
        </div>
      </div>
    ),
    { ...size }
  );
}
