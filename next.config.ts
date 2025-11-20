import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
      throw new Error('API_URL environment variable is not defined');
    }

    return [
      {
        source: '/backend/:path*',
        destination: `${apiUrl}/:path*`,
      }
    ]
  },
};

export default nextConfig;
