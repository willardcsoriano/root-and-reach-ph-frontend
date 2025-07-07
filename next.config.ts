// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // 1) Use remotePatterns instead of the deprecated domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**", // allow any path/query
      },
    ],
    // 2) Opt into SVG optimization (be cautious of XSS!)
    dangerouslyAllowSVG: true,
    // 3) (Recommended) Add a CSP for SVG to limit risk
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Remove the entire webpack override block—it’s no longer needed
};

export default nextConfig;
