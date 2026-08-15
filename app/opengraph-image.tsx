import { ImageResponse } from "next/og";

export const alt =
  "RR DESIGN Bakı — sayt hazırlanması, sahə website və DM Bot";
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
          background: "#F3EEE4",
          color: "#141210",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, color: "#C44512", fontWeight: 600 }}>
          Website & Automation & AI · Bakı
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 0.95,
            }}
          >
            Sayt. DM Bot. Nəticə.
          </div>
          <div style={{ fontSize: 28, color: "#6F675C", marginTop: 16 }}>
            RR DESIGN · sayt hazırlanması Bakı
          </div>
        </div>
      </div>
    ),
    size,
  );
}
