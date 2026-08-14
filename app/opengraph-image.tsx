import { ImageResponse } from "next/og";

export const alt = "RR Design — Website & Automation · Baku";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141210",
          color: "#f3eee4",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              background: "#c44512",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            RR
          </div>
          <div style={{ fontSize: 22, opacity: 0.55 }}>@rrdesign.az</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>
            Website & Automation
          </div>
          <div style={{ fontSize: 28, opacity: 0.72, maxWidth: 780 }}>
            Niş saytları və Instagram DM avtomatlaşdırması — Bakı
          </div>
        </div>
      </div>
    ),
    size,
  );
}
