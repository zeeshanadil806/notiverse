import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disable ESLint during build  
  eslint: {
    ignoreDuringBuilds: false,
  }
}

export default nextConfig;