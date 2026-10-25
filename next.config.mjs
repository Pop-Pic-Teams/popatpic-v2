/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  typescript: {
    ignoreBuildErrors: false,
  },
  allowedDevOrigins: [
    'localhost:3000',
    '*.run.app',
    'ais-dev-6l6tpfp6uefevy45nclqy6-201549880920.asia-southeast1.run.app',
    'ais-pre-6l6tpfp6uefevy45nclqy6-201549880920.asia-southeast1.run.app',
  ],
};

export default nextConfig;
