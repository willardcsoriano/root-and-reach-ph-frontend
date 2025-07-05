// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The 'remotePatterns' property is the recommended way to configure external image hosts.
    // It's more secure and flexible than the deprecated 'domains' property.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;