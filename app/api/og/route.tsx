import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const MAX_TITLE_LENGTH = 200;

function sanitizeTitle(raw: string | null): string | null {
  if (!raw) return null;
  // Strip control chars, cap length to prevent abuse of the public endpoint.
  // eslint-disable-next-line no-control-regex
  return raw.replace(/[\x00-\x1F\x7F]/g, "").slice(0, MAX_TITLE_LENGTH);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const title = sanitizeTitle(searchParams.get("title"));

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            padding: "60px 80px",
            position: "relative",
          }}
        >
          {/* Dashed accent bar at top */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "6px",
              backgroundColor: "#000000",
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: title ? "36px" : "48px",
              fontWeight: 700,
              color: "#000000",
              letterSpacing: "0.15em",
              lineHeight: 1.1,
              textTransform: "uppercase" as const,
            }}
          >
            Kaven Kim
          </div>

          {/* Title or subtitle */}
          <div
            style={{
              fontSize: title ? "56px" : "32px",
              fontWeight: title ? 700 : 400,
              color: title ? "#000000" : "#666666",
              marginTop: title ? "20px" : "12px",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              maxWidth: "900px",
            }}
          >
            {title || "Product Manager. Growth Marketer. Builder."}
          </div>

          {/* Domain */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "60px",
              fontSize: "20px",
              color: "#8C91FA",
              fontWeight: 500,
            }}
          >
            kavenkim.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          // The image for a given title never changes; cache hard at the edge.
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
    );
  } catch (error) {
    console.error("OG image generation failed:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
