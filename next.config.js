/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
