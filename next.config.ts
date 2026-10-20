import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/books-1", destination: "/", permanent: true },
      { source: "/speaking", destination: "/", permanent: true },
      { source: "/news", destination: "/", permanent: true },
      { source: "/worksheets", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
