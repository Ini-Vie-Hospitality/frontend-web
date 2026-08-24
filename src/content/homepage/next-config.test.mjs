import assert from "node:assert/strict";
import test from "node:test";
import { cmsMediaPattern } from "../../../next.config.ts";

test("cmsMediaPattern restricts CMS images to storage with origin port", () => {
  assert.deepEqual(cmsMediaPattern("http://cms.example.com:8080/admin"), [{
    protocol: "http",
    hostname: "cms.example.com",
    port: "8080",
    pathname: "/storage/**",
  }]);
});

test("cmsMediaPattern rejects missing and unsafe protocols", () => {
  assert.deepEqual(cmsMediaPattern(undefined), []);
  assert.deepEqual(cmsMediaPattern("file:///tmp/media"), []);
});
