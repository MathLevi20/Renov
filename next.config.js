/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    formats: ["image/webp"],
  },
   experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
