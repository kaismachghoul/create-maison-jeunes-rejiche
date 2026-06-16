import { ImageResponse } from "next/og";

export const alt = "Maison des Jeunes de Rejiche — Là où la mer rencontre l'imagination";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(120% 120% at 25% 15%, #1C7FA8 0%, #0E5A78 42%, #08293b 100%)",
          color: "#F4EEE3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(244,238,227,0.78)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>Rejiche</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Mahdia</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Tunisie</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1.02, letterSpacing: -2 }}>
            Là où la mer
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: -2,
              fontStyle: "italic",
              color: "#E7D6BC",
            }}
          >
            rencontre l'imagination
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "rgba(244,238,227,0.85)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>Maison des Jeunes de Rejiche</span>
          <span style={{ color: "#C2643D", letterSpacing: 4 }}>DAR CHABAB · 1963</span>
        </div>
      </div>
    ),
    size
  );
}
