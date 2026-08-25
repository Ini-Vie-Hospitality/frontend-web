import assert from "node:assert/strict";
import test from "node:test";
import nextConfig, { cmsMediaPattern } from "../../../next.config.ts";

test("cmsMediaPattern restricts CMS images to storage with origin port", () => {
  assert.deepEqual(cmsMediaPattern("http://cms.example.com:8080/admin"), [
    {
      protocol: "http",
      hostname: "cms.example.com",
      port: "8080",
      pathname: "/storage/**",
    },
  ]);
});

test("cmsMediaPattern rejects missing and unsafe protocols", () => {
  assert.deepEqual(cmsMediaPattern(undefined), []);
  assert.deepEqual(cmsMediaPattern("file:///tmp/media"), []);
});

test("final image config permits Laravel storage in local development", () => {
  for (const hostname of ["localhost", "127.0.0.1"]) {
    assert.ok(
      nextConfig.images?.remotePatterns?.some(
        (pattern) =>
          !(pattern instanceof URL) &&
          pattern.protocol === "http" &&
          pattern.hostname === hostname &&
          pattern.port === "8000" &&
          pattern.pathname === "/storage/**",
      ),
    );
  }
  assert.equal(nextConfig.images?.dangerouslyAllowLocalIP, true);
});

test("final image config permits every remote homepage media origin", () => {
  const expectedPatterns = [
    ["inivie.com", "/inivie_assets/img/**"],
    ["backend.inivie.com", "/storage/**"],
    ["blog.inivie.com", "/wp-content/uploads/**"],
  ];

  for (const [hostname, pathname] of expectedPatterns) {
    assert.ok(
      nextConfig.images?.remotePatterns?.some(
        (pattern) =>
          !(pattern instanceof URL) &&
          pattern.protocol === "https" &&
          pattern.hostname === hostname &&
          pattern.pathname === pathname,
      ),
    );
  }
});

test("CSP allows both local CMS origins", async () => {
  const headers = await nextConfig.headers();
  const policy = headers[0].headers.find(
    (header) => header.key === "Content-Security-Policy",
  ).value;
  assert.match(policy, /http:\/\/localhost:8000/);
  assert.match(policy, /http:\/\/127\.0\.0\.1:8000/);
});
