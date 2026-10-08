import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#050505",
          color: "#f5f5f7",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6e6e73",
          }}
        >
          {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: "-0.05em",
              lineHeight: 0.95,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 760,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#a1a1a6",
            }}
          >
            {profile.headline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
