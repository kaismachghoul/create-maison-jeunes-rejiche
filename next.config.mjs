/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Three.js ships ESM; keep transpilation predictable.
  transpilePackages: ["three"],
};

export default nextConfig;
