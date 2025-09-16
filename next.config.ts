import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // kalau pakai <Image />
  },
  /* config options here */
    basePath: '/inspiratia-desktop',
    assetPrefix: '/inspiratia-desktop/',
};

export default nextConfig;
