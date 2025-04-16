import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['drive.google.com', 'firebasestorage.googleapis.com'], // Add external domains here
  },
};

export default nextConfig;
