import type { ReactElement } from "react";

export function renderKKIcon({
  fontSize,
  borderRadius,
}: {
  fontSize: number;
  borderRadius: number;
}): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        borderRadius: `${borderRadius}px`,
        fontSize: `${fontSize}px`,
        fontWeight: 700,
        color: "#FFFFFF",
        letterSpacing: "-0.03em",
      }}
    >
      KK
    </div>
  );
}
