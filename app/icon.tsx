import { ImageResponse } from "next/og";
import { renderKKIcon } from "@/lib/icon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    renderKKIcon({ fontSize: 18, borderRadius: 6 }),
    { ...size }
  );
}
