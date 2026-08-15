import { ImageResponse } from "next/og";

export const alt = "RR DESIGN — Website & Automation";
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
          background: "#0A0A0A",
          color: "#FFFFFF",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, opacity: 0.55 }}>@rrdesign.az · Bakı</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            RR DESIGN
          </div>
          <div style={{ fontSize: 32, opacity: 0.8 }}>Website & Automation</div>
        </div>
      </div>
    ),
    size,
  );
}
