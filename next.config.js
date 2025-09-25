/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs']
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com']
  }
}

module.exports = nextConfig
