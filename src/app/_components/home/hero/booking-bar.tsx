"use client";

import { ArrowRight, X } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  buildBookingUrl,
  getBookingDefaults,
  normalizeCheckout,
  type Destination,
} from "./booking-data";
import { BookingFields } from "./booking-fields";

export function BookingBar() {
  const [destination, setDestination] = useState<Destination>("Canggu");
  const [dates, setDates] = useState(getBookingDefaults);
  const [adults, setAdults] = useState(2);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const destinationRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      destinationRef.current?.focus();
    });
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileOpen]);

  function handleCheckinChange(checkin: string) {
    setDates(({ checkout }) => ({
      checkin,
      checkout: normalizeCheckout(checkin, checkout),
    }));
  }

  function handleCheckoutChange(checkout: string) {
    setDates(({ checkin }) => ({
      checkin,
      checkout: normalizeCheckout(checkin, checkout),
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const bookingUrl = buildBookingUrl({
      destination,
      checkin: dates.checkin,
      checkout: dates.checkout,
      adults,
    });
    const bookingWindow = window.open(bookingUrl, "_blank");

    if (bookingWindow) {
      bookingWindow.opener = null;
    } else {
      window.location.assign(bookingUrl);
    }

    setIsMobileOpen(false);
  }

  const fieldProps = {
    destination,
    checkin: dates.checkin,
    checkout: dates.checkout,
    adults,
    minimumCheckin: getBookingDefaults().checkin,
    onDestinationChange: setDestination,
    onCheckinChange: handleCheckinChange,
    onCheckoutChange: handleCheckoutChange,
    onAdultsChange: setAdults,
  };

  return (
    <>
      <form
        className="absolute right-[6.7%] bottom-[13.1%] left-[6.7%] z-30 grid min-h-[118px] grid-cols-[23fr_21fr_21fr_17fr_18fr] items-center rounded-[10px] border border-white/18 bg-[rgba(21,23,19,.92)] py-[18px] pr-6 pl-10 shadow-[0_16px_50px_rgba(0,0,0,.18)] backdrop-blur-[8px] max-[1100px]:right-[4%] max-[1100px]:left-[4%] max-[1100px]:grid-cols-2 max-[1100px]:gap-y-4 max-[1100px]:pl-7 max-md:hidden"
        aria-label="Find a stay"
        onSubmit={handleSubmit}
      >
        <BookingFields {...fieldProps} variant="desktop" />
        <button
          className="ml-6 flex min-h-[62px] w-[calc(100%-24px)] items-center justify-center gap-4 rounded-sm border-0 bg-[#e06a0b] text-xs font-medium uppercase tracking-[.12em] text-[#f8f7f3] transition-[background-color,transform] duration-220 hover:bg-[#c95c07] active:translate-y-px"
          type="submit"
        >
          Find a Stay
          <ArrowRight aria-hidden="true" className="size-5" />
        </button>
      </form>

      <button
        className="absolute right-[22px] bottom-24 left-[22px] z-30 hidden min-h-14 items-center justify-center gap-3 rounded-sm bg-[#e06a0b] text-xs font-medium uppercase tracking-[.13em] text-white max-md:flex"
        type="button"
        aria-haspopup="dialog"
        onClick={() => setIsMobileOpen(true)}
      >
        Check Availability
        <ArrowRight aria-hidden="true" className="size-5" />
      </button>

      {isMobileOpen && (
        <div className="fixed inset-0 z-[140] md:hidden">
          <div
            className="absolute inset-0 bg-black/65"
            aria-hidden="true"
            onClick={() => setIsMobileOpen(false)}
          />
          <section
            className="absolute inset-x-0 bottom-0 max-h-[calc(100dvh-24px)] overflow-y-auto rounded-t-[18px] border-t border-white/15 bg-[#151713] px-[22px] pt-6 pb-8 text-white shadow-[0_-24px_70px_rgba(0,0,0,.38)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-booking-title"
          >
            <header className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[.22em] text-white/55">
                  Direct Booking
                </p>
                <h2
                  id="mobile-booking-title"
                  className="mt-2 font-serif text-[2rem] leading-none"
                >
                  Find Your Stay
                </h2>
              </div>
              <button
                className="grid size-11 place-items-center rounded-full border border-white/25"
                type="button"
                aria-label="Close booking form"
                onClick={() => setIsMobileOpen(false)}
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </header>

            <form className="mt-6" onSubmit={handleSubmit}>
              <BookingFields
                {...fieldProps}
                variant="mobile"
                destinationRef={destinationRef}
              />
              <button
                className="mt-7 flex min-h-14 w-full items-center justify-center gap-3 rounded-sm bg-[#e06a0b] text-xs font-medium uppercase tracking-[.13em] text-white"
                type="submit"
              >
                Find a Stay
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
