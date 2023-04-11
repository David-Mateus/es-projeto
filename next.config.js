/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['assets.acme.com']
  },
  
}

module.exports = nextConfig