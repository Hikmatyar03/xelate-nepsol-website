import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images from public/ are handled natively; add remote domains here if needed
    remotePatterns: [],
  },
};

export default nextConfig;
