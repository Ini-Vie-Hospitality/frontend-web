import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const layout = await readFile(
  new URL("../../app/layout.tsx", import.meta.url),
  "utf8",
);
const tag = await readFile(
  new URL("./google-analytics.tsx", import.meta.url),
  "utf8",
);
const events = await readFile(
  new URL("./analytics-events.tsx", import.meta.url),
  "utf8",
);

test("loads the configured GA4 tag globally", () => {
  assert.match(tag, /G-L96SY2E2FF/);
  assert.match(tag, /googletagmanager\.com\/gtag\/js/);
  assert.match(tag, /gtag\('config'/);
  assert.match(layout, /<GoogleAnalytics \/>/);
});

test("tracks booking, membership, offer, outbound, and form interactions", () => {
  for (const eventName of [
    "booking_click",
    "booking_submit",
    "membership_click",
    "offer_click",
    "outbound_click",
    "form_submit",
  ]) {
    assert.match(events, new RegExp(eventName));
  }
  assert.match(events, /document\.addEventListener\("click"/);
  assert.match(events, /document\.addEventListener\("submit"/);
  assert.match(events, /window\.gtag\?\.\("event"/);
});
