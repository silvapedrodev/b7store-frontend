import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ],
    // Disable image optimization for development; enable it in production
    unoptimized: true
  }
};

export default nextConfig;
