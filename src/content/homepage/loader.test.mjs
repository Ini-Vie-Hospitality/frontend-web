import assert from "node:assert/strict";
import test from "node:test";
import { loadHomepageData, normalizeHomepageData } from "./loader.ts";
import { fallbackHomepageData } from "./fallback.ts";

test("loadHomepageData returns the complete editable non-Hero homepage contract", async () => {
  const data = await loadHomepageData();

  assert.ok(data.navbar.logo.src && data.navbar.desktopLinks.length);
  assert.ok(data.navbar.mobile.links.length);
  assert.ok(data.navbar.mobile.eyebrow && data.navbar.mobile.closeLabel);
  assert.equal(data.ourStory.blocks.length, 4);
  assert.equal(data.specialOffers.items.length, 3);
  assert.ok(data.brandIntroduction.images.every((image) => image.alt));
  assert.ok(data.featuredProperties.items.every((item) => item.href));
  assert.ok(data.culinary.items.every((item) => item.href));
  assert.ok(data.wellness.items.every((item) => item.href));
  assert.ok(data.membership.benefits.every((item) => item.icon));
  assert.ok(data.whatsNew.items.every((item) => item.href));
  assert.ok(data.featuredIn.items.every((item) => item.alt));
  assert.ok(data.faq.items.every((item) => item.question && item.answer));
  assert.ok(data.footer.contacts.every((item) => item.actions.every((action) => action.href)));
  assert.ok(data.footer.socials.every((item) => item.href && item.icon));
});

test("loadHomepageData fetches direct JSON with server cache options", async () => {
  const payload = structuredClone(fallbackHomepageData);
  payload.brandIntroduction.quote = "From CMS";
  let request;
  const data = await loadHomepageData({
    apiUrl: "https://cms.example.com/",
    fetch: async (...args) => {
      request = args;
      return Response.json(payload);
    },
  });

  assert.equal(data.brandIntroduction.quote, "From CMS");
  assert.equal(request[0], "https://cms.example.com/api/homepage");
  assert.equal(request[1].headers.Accept, "application/json");
  assert.deepEqual(request[1].next, { revalidate: 300 });
  assert.ok(request[1].signal instanceof AbortSignal);
});

test("loadHomepageData fetches draft content without cache", async () => {
  let request;
  await loadHomepageData({
    apiUrl: "https://cms.example.com",
    mode: "draft",
    previewSecret: "preview-secret",
    fetch: async (...args) => {
      request = args;
      return Response.json(fallbackHomepageData);
    },
  });

  assert.equal(request[0], "https://cms.example.com/api/homepage/preview");
  assert.equal(request[1].headers.Authorization, "Bearer preview-secret");
  assert.equal(request[1].cache, "no-store");
  assert.equal(request[1].next, undefined);
});

test("loadHomepageData accepts a data envelope", async () => {
  const payload = structuredClone(fallbackHomepageData);
  payload.brandIntroduction.quote = "Enveloped CMS";
  const data = await loadHomepageData({
    apiUrl: "https://cms.example.com",
    fetch: async () => Response.json({ data: payload }),
  });

  assert.equal(data.brandIntroduction.quote, "Enveloped CMS");
});

test("loadHomepageData falls back for missing env, non-OK, and network errors", async () => {
  const unavailable = [
    {},
    { apiUrl: "https://cms.example.com", fetch: async () => new Response(null, { status: 503 }) },
    { apiUrl: "https://cms.example.com", fetch: async () => { throw new Error("offline"); } },
  ];

  for (const dependencies of unavailable) {
    assert.deepEqual(await loadHomepageData(dependencies), fallbackHomepageData);
  }
});

test("loadHomepageData falls back for malformed payloads", async () => {
  for (const payload of [null, [], "invalid", { data: null }]) {
    const data = await loadHomepageData({
      apiUrl: "https://cms.example.com",
      fetch: async () => Response.json(payload),
    });
    assert.deepEqual(data, fallbackHomepageData);
  }
});

test("loadHomepageData logs fallback reasons only in production", async () => {
  const messages = [];
  const logger = (message) => messages.push(message);

  await loadHomepageData({ environment: "production", logger });
  await loadHomepageData({ apiUrl: "https://cms.example.com", environment: "production", logger, fetch: async () => new Response(null, { status: 502 }) });
  await loadHomepageData({ apiUrl: "https://cms.example.com", environment: "production", logger, fetch: async () => { throw new Error("offline"); } });
  await loadHomepageData({ apiUrl: "https://cms.example.com", environment: "production", logger, fetch: async () => Response.json([]) });
  await loadHomepageData({ environment: "development", logger });

  assert.deepEqual(messages, [
    "Homepage CMS fallback: CMS_API_URL is missing",
    "Homepage CMS fallback: HTTP 502",
    "Homepage CMS fallback: request failed",
    "Homepage CMS fallback: invalid payload",
  ]);
});

test("normalizeHomepageData accepts backend story blocks and numeric ID strings", () => {
  const input = structuredClone(fallbackHomepageData);
  input.ourStory.blocks = Object.fromEntries(input.ourStory.blocks.map((block, index) => [index, block]));
  input.featuredProperties.items[0].id = "41";
  input.wellness.items[0].id = "52";

  const data = normalizeHomepageData(input);

  assert.equal(data.ourStory.blocks.length, 4);
  assert.equal(data.ourStory.blocks[0].title, fallbackHomepageData.ourStory.blocks[0].title);
  assert.equal(data.featuredProperties.items[0].id, 41);
  assert.equal(data.wellness.items[0].id, 52);
});

test("normalizeHomepageData safely hides unknown and partial nested input", () => {
  for (const input of [null, {}, { navbar: {} }, { navbar: { mobile: null } }, { footer: null }, { culinary: "invalid" }]) {
    assert.doesNotThrow(() => normalizeHomepageData(input));
    const data = normalizeHomepageData(input);
    assert.equal(data.navbar, null);
    assert.equal(data.culinary, null);
    assert.equal(data.footer, null);
  }
});

test("successful CMS response preserves unpublished nulls without fallback resurrection", async () => {
  const payload = Object.fromEntries(Object.keys(fallbackHomepageData).map((key) => [key, null]));
  payload.faq = { title: "Malformed published FAQ" };

  const data = await loadHomepageData({ apiUrl: "https://cms.example.com", fetch: async () => Response.json(payload) });

  assert.equal(data.navbar, null);
  assert.equal(data.footer, null);
  assert.equal(data.membership, null);
  assert.equal(data.faq, null);
});

test("brand images expose one editable source and alt only", async () => {
  const data = await loadHomepageData();
  assert.ok(data.brandIntroduction.images.every((image) => image.src && image.alt));
  assert.ok(data.brandIntroduction.images.every((image) => !("mobileSrc" in image)));
});

test("normalizeHomepageData falls back malformed fixed slots and empties malformed collections", () => {
  const input = structuredClone(fallbackHomepageData);
  input.ourStory.blocks.length = 1;
  input.specialOffers.items.length = 2;
  input.featuredProperties.items = null;
  input.navbar.desktopLinks = "invalid";
  input.navbar.mobile.links = null;

  const data = normalizeHomepageData(input);

  assert.equal(data.ourStory, null);
  assert.equal(data.specialOffers, null);
  assert.equal(data.featuredProperties, null);
  assert.equal(data.navbar, null);
});

test("collection data accepts empty arrays without changing fixed slot counts", async () => {
  const data = await loadHomepageData();

  data.featuredProperties.items.length = 0;
  data.culinary.items.length = 0;
  data.wellness.items.length = 0;
  data.whatsNew.items.length = 0;

  assert.deepEqual(data.featuredProperties.items, []);
  assert.equal(data.ourStory.blocks.length, 4);
  assert.equal(data.specialOffers.items.length, 3);
});
