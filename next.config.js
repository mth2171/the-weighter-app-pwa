/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `http://localhost:8000/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_PRODUCT_URL}/:path*`,
      },
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_OPENAPI_URL}/:path*`,
      },
    ];
  },
});

module.exports = nextConfig;
