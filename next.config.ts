import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "inivie.com",
        pathname: "/inivie_assets/img/logomedia/**",
      },
    ],
  },
};

export default nextConfig;
