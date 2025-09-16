import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // kalau pakai <Image />
  },
  /* config options here */
    basePath: '/NAMA_REPO',
    assetPrefix: '/NAMA_REPO/',
};

export default nextConfig;
