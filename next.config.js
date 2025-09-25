/** @type {import('next').NextConfig} */
// This config is Vercel-ready. 
// 'serverComponentsExternalPackages' is experimental—ensure your Next.js version supports it on Vercel.
// The 'images.domains' entry is correctly set for remote images.

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Optional: Uncomment if you want to force Vercel's default output
  // output: 'standalone',
};

module.exports = nextConfig;
