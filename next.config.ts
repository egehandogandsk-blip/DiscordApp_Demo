import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io"
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
