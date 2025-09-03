/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only ignore during development, not production builds
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Only ignore during development, not production builds  
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Enable static exports if needed for GitHub Pages fallback
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig
