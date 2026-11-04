import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Portfolio work is shown at 90; 75 stays available as the default.
    qualities: [75, 90],
  },
  poweredByHeader: false,
};

export default nextConfig;
