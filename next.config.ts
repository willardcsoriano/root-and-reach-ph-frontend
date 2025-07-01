// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'source.unsplash.com',
      'cdn.britannica.com',   // add this line
      // add more hostnames here as needed
    ],
    // or, for fine-grained control:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'cdn.britannica.com', port: '', pathname: '/**' },
    //   { protocol: 'https', hostname: 'randomuser.me',     port: '', pathname: '/api/portraits/**' },
    //   { protocol: 'https', hostname: 'source.unsplash.com', port: '', pathname: '/**' },
    // ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
