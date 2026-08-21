import { CalendarDays, ChevronDown, MapPin, UserRound } from "lucide-react";

type FieldProps = {
  label: string;
  value: string;
  icon: "pin" | "calendar" | "user";
};

const icons = {
  pin: MapPin,
  calendar: CalendarDays,
  user: UserRound,
};

function BookingField({ label, value, icon }: FieldProps) {
  const Icon = icons[icon];

  return (
    <div className="booking-field">
      <span>{label}</span>
      <strong>
        <Icon aria-hidden="true" />
        {value}
        <ChevronDown aria-hidden="true" className="booking-chevron" />
      </strong>
    </div>
  );
}

export function BookingBar({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="booking-bar" aria-label="Find a stay">
      <BookingField label="Where" value="Canggu" icon="pin" />
      <BookingField label="Check In" value="21 Aug 2026" icon="calendar" />
      <BookingField label="Check Out" value="22 Aug 2026" icon="calendar" />
      <BookingField label="Guests" value="2 Guests" icon="user" />
      <button
        className="button button-primary booking-button"
        type="button"
        onClick={onRequest}
      >
        Find a Stay
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
