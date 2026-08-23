import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

let bookingData;

try {
  bookingData = await import("./booking-data.ts");
} catch {
  assert.fail("booking data and utilities must exist");
}

const {
  buildBookingUrl,
  destinationCodes,
  formatBookingDate,
  getBookingDefaults,
  normalizeCheckout,
} = bookingData;
const bookingSource = await readFile(
  new URL("./booking-bar.tsx", import.meta.url),
  "utf8",
);
const fieldsSource = await readFile(
  new URL("./booking-fields.tsx", import.meta.url),
  "utf8",
);
const combinedBookingSource = `${bookingSource}\n${fieldsSource}`;
const heroSource = await readFile(
  new URL("./hero.tsx", import.meta.url),
  "utf8",
);

assert.deepEqual(destinationCodes, {
  Canggu: "5267",
  Jimbaran: "5269",
  Karangasem: "5273",
  Legian: "5271",
  Sanur: "5268",
  Seminyak: "5265",
  Ubud: "5266",
  Uluwatu: "5274",
  "Tanah Lot": "5270",
});
assert.deepEqual(getBookingDefaults(new Date(2026, 7, 23, 12)), {
  checkin: "2026-08-23",
  checkout: "2026-08-24",
});
assert.equal(formatBookingDate("2026-08-23"), "08-23-2026");
assert.equal(
  normalizeCheckout("2026-08-23", "2026-08-23"),
  "2026-08-24",
);

const bookingUrl = new URL(
  buildBookingUrl({
    destination: "Ubud",
    checkin: "2026-08-23",
    checkout: "2026-08-25",
    adults: 4,
  }),
);

assert.equal(bookingUrl.origin, "https://booking.inivie.com");
assert.equal(bookingUrl.pathname, "/en/destination");
assert.equal(bookingUrl.searchParams.get("city"), "5266");
assert.equal(bookingUrl.searchParams.get("checkin"), "08-23-2026");
assert.equal(bookingUrl.searchParams.get("checkout"), "08-25-2026");
assert.equal(bookingUrl.searchParams.get("adults"), "4");
assert.equal(
  bookingUrl.searchParams.get("uid"),
  "MTMxMzE3ODc0ODQzODk3NzNfX2FscmNzY3JlZXQ=",
);
assert.equal(bookingUrl.searchParams.has("_gl"), false);
assert.equal(bookingUrl.searchParams.has("_ga"), false);

assert.match(bookingSource, /Check Availability/);
assert.match(bookingSource, /role="dialog"/);
assert.match(combinedBookingSource, /type="date"/);
assert.match(fieldsSource, /showPicker/);
assert.match(fieldsSource, /aria-haspopup="listbox"/);
assert.match(fieldsSource, /role="listbox"/);
assert.match(fieldsSource, /event\.key === "Escape"/);
assert.doesNotMatch(fieldsSource, /<select/);
assert.match(bookingSource, /window\.open/);
assert.doesNotMatch(heroSource, /requestBooking/);
assert.match(heroSource, /<BookingBar \/>/);

console.log("hero booking flow: ok");
