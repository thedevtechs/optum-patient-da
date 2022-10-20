/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['optum-prcm.tcdapps.com'],
    unoptimized: true
  },
  trailingSlash: true,
  fallback: false
}
module.exports = nextConfig
