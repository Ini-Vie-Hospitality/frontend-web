"use client";

import {
  CalendarDays,
  Check,
  ChevronDown,
  MapPin,
  UserRound,
} from "lucide-react";
import {
  type FocusEvent,
  type KeyboardEvent,
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  addDaysToIsoDate,
  destinations,
  guestOptions,
  type Destination,
} from "./booking-data";

type BookingFieldsProps = {
  destination: Destination;
  checkin: string;
  checkout: string;
  adults: number;
  minimumCheckin: string;
  variant: "desktop" | "mobile";
  destinationRef?: RefObject<HTMLButtonElement | null>;
  onDestinationChange: (destination: Destination) => void;
  onCheckinChange: (checkin: string) => void;
  onCheckoutChange: (checkout: string) => void;
  onAdultsChange: (adults: number) => void;
};

type SelectOption<Value extends string | number> = {
  value: Value;
  label: string;
};

type BookingSelectProps<Value extends string | number> = {
  label: string;
  value: Value;
  displayValue: string;
  icon: typeof MapPin;
  options: SelectOption<Value>[];
  variant: BookingFieldsProps["variant"];
  triggerRef?: RefObject<HTMLButtonElement | null>;
  align?: "left" | "right";
  mobilePlacement?: "top" | "bottom";
  onChange: (value: Value) => void;
};

type DateFieldProps = {
  label: string;
  value: string;
  minimum: string;
  variant: BookingFieldsProps["variant"];
  onChange: (value: string) => void;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function formatDisplayDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  return dateFormatter.format(new Date(year, month - 1, day));
}

function getFieldClass(variant: BookingFieldsProps["variant"]) {
  return variant === "desktop"
    ? "relative min-w-0 border-r border-white/12 px-[clamp(20px,2.1vw,40px)] first:pl-0"
    : "relative min-h-[82px] border-b border-white/12 py-4";
}

const fieldLabelClass =
  "mb-[17px] block text-[11px] font-medium uppercase tracking-[.08em] text-soft-white/65";

const triggerClass =
  "group flex w-full items-center gap-[13px] border-0 bg-transparent p-0 text-left text-[17px] font-normal text-soft-white outline-none focus-visible:ring-2 focus-visible:ring-[#e06a0b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#151713]";

function BookingSelect<Value extends string | number>({
  label,
  value,
  displayValue,
  icon: Icon,
  options,
  variant,
  triggerRef,
  align = "left",
  mobilePlacement = "bottom",
  onChange,
}: BookingSelectProps<Value>) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const internalTriggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const listboxId = useId();
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );
  const activeTriggerRef = triggerRef ?? internalTriggerRef;

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isOpen]);

  function openList(focusIndex = selectedIndex) {
    setIsOpen(true);
    window.requestAnimationFrame(() => {
      optionRefs.current[focusIndex]?.focus();
    });
  }

  function closeList(returnFocus = false) {
    setIsOpen(false);
    if (returnFocus) {
      window.requestAnimationFrame(() => activeTriggerRef.current?.focus());
    }
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openList(event.key === "ArrowUp" ? options.length - 1 : selectedIndex);
    }
  }

  function handleOptionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    optionIndex: number,
  ) {
    let nextIndex = optionIndex;

    if (event.key === "ArrowDown") nextIndex = (optionIndex + 1) % options.length;
    if (event.key === "ArrowUp") {
      nextIndex = (optionIndex - 1 + options.length) % options.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = options.length - 1;
    if (event.key === "Escape") {
      event.preventDefault();
      closeList(true);
      return;
    }

    if (nextIndex !== optionIndex) {
      event.preventDefault();
      optionRefs.current[nextIndex]?.focus();
    }
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  }

  const placementClass =
    variant === "desktop" || mobilePlacement === "top"
      ? "bottom-[calc(100%+10px)]"
      : "top-[calc(100%+14px)]";
  const alignmentClass = align === "right" ? "right-0" : "left-0";

  return (
    <div
      ref={rootRef}
      className={getFieldClass(variant)}
      onBlur={handleBlur}
    >
      <span className={fieldLabelClass}>{label}</span>
      <button
        ref={activeTriggerRef}
        className={triggerClass}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={() => (isOpen ? closeList() : openList())}
        onKeyDown={handleTriggerKeyDown}
      >
        <Icon
          aria-hidden="true"
          className="size-[21px] shrink-0"
          strokeWidth={1.5}
        />
        <span className="min-w-0 flex-1 truncate">{displayValue}</span>
        <ChevronDown
          aria-hidden="true"
          className={`size-[17px] shrink-0 text-[#9b978e] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          id={listboxId}
          className={`absolute ${placementClass} ${alignmentClass} z-[170] max-h-72 min-w-full w-max max-w-[min(320px,calc(100vw-44px))] overflow-y-auto border border-white/15 bg-[#171914] p-1.5 text-white shadow-[0_22px_55px_rgba(0,0,0,.45)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
          role="listbox"
          aria-label={label}
        >
          {options.map((option, optionIndex) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                ref={(element) => {
                  optionRefs.current[optionIndex] = element;
                }}
                className={`flex min-h-11 w-full items-center justify-between gap-6 px-4 text-left text-sm transition-colors outline-none focus:bg-white/10 ${isSelected ? "text-[#f08a36]" : "text-white/82 hover:bg-white/[.07]"}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  closeList(true);
                }}
                onKeyDown={(event) =>
                  handleOptionKeyDown(event, optionIndex)
                }
              >
                <span>{option.label}</span>
                {isSelected && (
                  <Check aria-hidden="true" className="size-4" strokeWidth={1.5} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DateField({
  label,
  value,
  minimum,
  variant,
  onChange,
}: DateFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openDatePicker() {
    const input = inputRef.current;
    if (!input) return;

    try {
      if (typeof input.showPicker === "function") {
        input.showPicker();
        return;
      }
    } catch {
      input.focus();
    }

    input.focus();
    input.click();
  }

  return (
    <div className={getFieldClass(variant)}>
      <span className={fieldLabelClass}>{label}</span>
      <button
        className={triggerClass}
        type="button"
        aria-label={`${label}: ${formatDisplayDate(value)}`}
        onClick={openDatePicker}
      >
        <CalendarDays
          aria-hidden="true"
          className="size-[21px] shrink-0"
          strokeWidth={1.5}
        />
        <span className="min-w-0 flex-1 truncate">
          {formatDisplayDate(value)}
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-[17px] shrink-0 text-[#9b978e]"
        />
      </button>
      <input
        ref={inputRef}
        className="pointer-events-none absolute bottom-0 left-0 size-px opacity-0"
        type="date"
        tabIndex={-1}
        aria-label={label}
        min={minimum}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export function BookingFields({
  destination,
  checkin,
  checkout,
  adults,
  minimumCheckin,
  variant,
  destinationRef,
  onDestinationChange,
  onCheckinChange,
  onCheckoutChange,
  onAdultsChange,
}: BookingFieldsProps) {
  const destinationOptions = destinations.map((option) => ({
    value: option,
    label: `${option}, Bali`,
  }));
  const guests = guestOptions.map((option) => ({
    value: option,
    label: `${option} ${option === 1 ? "Guest" : "Guests"}`,
  }));

  return (
    <>
      <BookingSelect
        label="Where"
        value={destination}
        displayValue={`${destination}, Bali`}
        icon={MapPin}
        options={destinationOptions}
        variant={variant}
        triggerRef={destinationRef}
        onChange={onDestinationChange}
      />

      <DateField
        label="Check In"
        value={checkin}
        minimum={minimumCheckin}
        variant={variant}
        onChange={onCheckinChange}
      />

      <DateField
        label="Check Out"
        value={checkout}
        minimum={addDaysToIsoDate(checkin, 1)}
        variant={variant}
        onChange={onCheckoutChange}
      />

      <BookingSelect
        label="Guests"
        value={adults}
        displayValue={`${adults} ${adults === 1 ? "Guest" : "Guests"}`}
        icon={UserRound}
        options={guests}
        variant={variant}
        align="right"
        mobilePlacement="top"
        onChange={onAdultsChange}
      />
    </>
  );
}
