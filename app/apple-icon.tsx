import { ImageResponse } from "next/og";
import { renderKKIcon } from "@/lib/icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    renderKKIcon({ fontSize: 100, borderRadius: 32 }),
    { ...size }
  );
}
