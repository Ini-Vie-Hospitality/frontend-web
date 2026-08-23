import assert from "node:assert/strict";
import { faqs } from "./faqs.ts";

const expectedQuestions = [
  "What Is Ini Vie Hospitality?",
  "Where Are Ini Vie Hospitality Properties Located?",
  "How Can I Get The Best Rate When Booking?",
  "Does Ini Vie Hospitality Offer Romantic Packages For Honeymoons And Anniversaries?",
  "Does Ini Vie Hospitality Provide Airport Transfer Services?",
  "Do All Villas And Resorts Have Private Pools?",
  "Are Floating Breakfasts, Flower Decorations, And Romantic Dinners Available?",
  "Can Outside Guests Visit Ini Vie Hospitality Restaurants And Beach Clubs?",
  "Are In-Villa Spa Treatments Available?",
];

assert.equal(faqs.length, 9);
assert.deepEqual(
  faqs.map(({ question }) => question),
  expectedQuestions,
);
assert.match(faqs[0].answer, /Bali-based hospitality management company/i);
assert.match(faqs[2].answer, /official Ini Vie Hospitality website/i);
assert.match(faqs[8].answer, /Spa treatments/i);

console.log("official faq data: ok");
