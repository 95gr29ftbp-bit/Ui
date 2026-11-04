import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Tshiamo Motswatswa: Creative & Digital Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const dir = join(process.cwd(), "node_modules/@fontsource/instrument-serif/files");
  const [regular, italic] = await Promise.all([
    readFile(join(dir, "instrument-serif-latin-400-normal.woff")),
    readFile(join(dir, "instrument-serif-latin-400-italic.woff")),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f5f0e8", color: "#1e1c19", fontFamily: "Instrument Serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#5c564d", fontFamily: "sans-serif" }}>
          <span>Tshiamo Motswatswa</span>
          <span>Pretoria, South Africa</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 1, letterSpacing: -2 }}>
          <span>How people read the world</span>
          <span style={{ fontStyle: "italic", color: "#8a4e32" }}>is what I design for.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#5c564d", fontFamily: "sans-serif" }}>
          Creative & digital marketing · social media · content · campaigns · design
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: regular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: italic, style: "italic", weight: 400 },
      ],
    },
  );
}
