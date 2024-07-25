/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
  env: {
    GEMINI_API_SECRET_KEY: process.env.GEMINI_API_SECRET_KEY,
  },
};

export default nextConfig;
