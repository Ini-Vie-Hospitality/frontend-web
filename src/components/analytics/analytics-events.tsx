"use client";

import { useEffect } from "react";

type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  href?: string;
  section?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent({ action, category, label, href, section }: AnalyticsEvent) {
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    link_url: href,
    section_id: section,
  });
}

function textLabel(element: HTMLElement) {
  return (
    element.getAttribute("aria-label")?.trim() ||
    element.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) ||
    undefined
  );
}

function sectionId(element: HTMLElement) {
  return element.closest("section[id]")?.getAttribute("id") || undefined;
}

function clickEvent(element: HTMLElement): AnalyticsEvent {
  const href = element instanceof HTMLAnchorElement ? element.href : undefined;
  const label = textLabel(element);
  const section = sectionId(element);
  const target = `${label || "interaction"} ${href || ""}`.toLowerCase();

  if (target.includes("book") || section === "booking") {
    return { action: "booking_click", category: "booking", label, href, section };
  }

  if (section === "membership" || target.includes("membership")) {
    return { action: "membership_click", category: "membership", label, href, section };
  }

  if (section === "offers" || target.includes("offer")) {
    return { action: "offer_click", category: "offers", label, href, section };
  }

  if (
    element instanceof HTMLAnchorElement &&
    /^https?:/i.test(element.href) &&
    new URL(element.href).origin !== window.location.origin
  ) {
    return { action: "outbound_click", category: "navigation", label, href, section };
  }

  return { action: "interaction_click", category: "interaction", label, href, section };
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest("a, button, [role='button']");
      if (!(interactive instanceof HTMLElement)) return;

      sendEvent(clickEvent(interactive));
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      const label = form.getAttribute("aria-label") || form.id || undefined;
      const isBooking = label?.toLowerCase().includes("stay") || Boolean(form.closest("#hero"));

      sendEvent({
        action: isBooking ? "booking_submit" : "form_submit",
        category: isBooking ? "booking" : "form",
        label,
        section: sectionId(form),
      });
    }

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, []);

  return null;
}