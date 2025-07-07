// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "placehold.co",
      "images.pexels.com",
      "randomuser.me",
      "source.unsplash.com",
      "cdn.britannica.com",
    ],
  },
  // Remove the entire webpack override block—it’s no longer needed
};

export default nextConfig;
