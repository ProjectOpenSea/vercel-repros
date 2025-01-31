/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@opensea/ui-kit"],
  },
};

module.exports = nextConfig;
