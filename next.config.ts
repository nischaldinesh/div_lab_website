// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/divlab",
  assetPrefix: "/divlab/",
  images: { unoptimized: true },
  experimental: { optimizeCss: false },

  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
