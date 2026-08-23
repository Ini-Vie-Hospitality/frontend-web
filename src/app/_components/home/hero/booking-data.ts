export const destinationCodes = {
  Canggu: "5267",
  Jimbaran: "5269",
  Karangasem: "5273",
  Legian: "5271",
  Sanur: "5268",
  Seminyak: "5265",
  Ubud: "5266",
  Uluwatu: "5274",
  "Tanah Lot": "5270",
} as const;

export type Destination = keyof typeof destinationCodes;

export const destinations = Object.keys(destinationCodes) as Destination[];
export const guestOptions = Array.from({ length: 10 }, (_, index) => index + 1);

const bookingBaseUrl = "https://booking.inivie.com/en/destination";
const bookingUid = "MTMxMzE3ODc0ODQzODk3NzNfX2FscmNzY3JlZXQ=";

type BookingSelection = {
  destination: Destination;
  checkin: string;
  checkout: string;
  adults: number;
};

function toLocalIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function addDaysToIsoDate(value: string, days: number) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day + days);

  return toLocalIsoDate(date);
}

export function getBookingDefaults(now = new Date()) {
  const checkin = toLocalIsoDate(now);

  return {
    checkin,
    checkout: addDaysToIsoDate(checkin, 1),
  };
}

export function formatBookingDate(value: string) {
  const [year, month, day] = value.split("-");

  return `${month}-${day}-${year}`;
}

export function normalizeCheckout(checkin: string, checkout: string) {
  return checkout > checkin ? checkout : addDaysToIsoDate(checkin, 1);
}

export function buildBookingUrl({
  destination,
  checkin,
  checkout,
  adults,
}: BookingSelection) {
  const params = new URLSearchParams({
    uid: bookingUid,
    city: destinationCodes[destination],
    utm_source: "",
    utm_source_session_id: "",
    checkin: formatBookingDate(checkin),
    checkout: formatBookingDate(normalizeCheckout(checkin, checkout)),
    adults: String(Math.min(10, Math.max(1, Math.trunc(adults)))),
    offer_code: "",
  });

  return `${bookingBaseUrl}?${params.toString()}`;
}
