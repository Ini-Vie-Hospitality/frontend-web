import type { NextConfig } from "next";

type RemotePattern = NonNullable<NonNullable<NextConfig["images"]>["remotePatterns"]>[number];

export function cmsMediaPattern(value = process.env.CMS_MEDIA_HOST ?? process.env.CMS_API_URL): RemotePattern[] {
  if (!value) return [];

  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return [];
    const protocol = url.protocol === "http:" ? "http" : "https";
    return [{ protocol, hostname: url.hostname, port: url.port, pathname: "/storage/**" }];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      ...cmsMediaPattern(),
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
