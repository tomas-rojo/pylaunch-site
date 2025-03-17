/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static export to GitHub Pages
    basePath: '/pylaunch-site',
    assetPrefix: '/pylaunch-site/',
    images: {
      unoptimized: true, // Disable optimization for static export
    },
  };

export default nextConfig;
