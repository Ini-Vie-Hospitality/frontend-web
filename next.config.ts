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

const localCmsPatterns: RemotePattern[] = ["localhost", "127.0.0.1"].map((hostname) => ({
  protocol: "http",
  hostname,
  port: "8000",
  pathname: "/storage/**",
}));

const dynamicCmsPatterns = cmsMediaPattern().filter((pattern) =>
  pattern instanceof URL
  || !localCmsPatterns.some((localPattern) =>
    pattern.protocol === localPattern.protocol
    && pattern.hostname === localPattern.hostname
    && pattern.port === localPattern.port
    && pattern.pathname === localPattern.pathname
  )
);

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: [
      ...localCmsPatterns,
      ...dynamicCmsPatterns,
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "inivie.com",
        pathname: "/inivie_assets/img/**",
      },
      {
        protocol: "https",
        hostname: "backend.inivie.com",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "blog.inivie.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
