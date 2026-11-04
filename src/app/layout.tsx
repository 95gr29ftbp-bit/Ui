import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/content/site";
import "./globals.css";

const instrument = localFont({
  src: [
    { path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const hanken = localFont({
  src: [
    { path: "../../node_modules/@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2", weight: "100 900", style: "normal" },
    { path: "../../node_modules/@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Tshiamo Motswatswa",
    "digital marketing",
    "social media management",
    "content creation",
    "creative strategy",
    "brand communication",
    "community management",
    "portfolio",
    "South Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    title: `${site.name}: ${site.role}`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.role}`,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" id="top" className={`${instrument.variable} ${hanken.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal,.rise{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
