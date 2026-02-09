import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C4616C",
          borderRadius: "6px",
          fontSize: "18px",
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
        }}
      >
        KK
      </div>
    ),
    { ...size }
  );
}
