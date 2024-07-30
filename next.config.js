/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    optimizePackageImports: ["@opensea/ui-kit"],
  },
};

module.exports = nextConfig;
