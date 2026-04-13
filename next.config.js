/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath и assetPrefix при необходимости
};

module.exports = nextConfig;