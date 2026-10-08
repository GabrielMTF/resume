import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#050505",
          color: "#f5f5f7",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "-0.06em",
        }}
      >
        GM
      </div>
    ),
    { ...size },
  );
}
