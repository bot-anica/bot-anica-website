import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  assetPrefix: process.env.API_URL?.replace(/\/$/, ""),
  async rewrites() {
    const apiUrl = process.env.API_URL?.replace(/\/$/, "");
    if (!apiUrl) {
      throw new Error("API_URL environment variable is not defined");
    }

    return [
      {
        source: "/backend/:path*",
        destination: `${apiUrl}/:path*`,
      },
      {
        source: "/_next/static/:path*",
        destination: `${apiUrl}/_next/static/:path*`,
      },
      {
        source: "/:path*",
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  output: "standalone",
};

export default nextConfig;