/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['yts.mx'],
    // unoptimized: true,
  },
}

module.exports = nextConfig
