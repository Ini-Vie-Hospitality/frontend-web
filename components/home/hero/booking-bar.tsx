import { CalendarDays, ChevronDown, MapPin, UserRound } from "lucide-react";

type FieldProps = {
  label: string;
  value: string;
  icon: "pin" | "calendar" | "user";
};

const icons = { pin: MapPin, calendar: CalendarDays, user: UserRound };

function BookingField({ label, value, icon }: FieldProps) {
  const Icon = icons[icon];

  return (
    <div className="min-w-0 border-r border-white/12 px-[clamp(20px,2.1vw,40px)] first:pl-0 max-[1100px]:min-h-[52px] max-[1100px]:even:border-r-0">
      <span className="mb-[17px] block text-[11px] font-medium uppercase tracking-[.08em] text-soft-white/65">{label}</span>
      <strong className="flex items-center gap-[13px] whitespace-nowrap text-[17px] font-normal text-soft-white">
        <Icon aria-hidden="true" className="size-[21px] shrink-0" strokeWidth={1.5} />
        {value}
        <ChevronDown aria-hidden="true" className="ml-auto size-[17px] text-[#9b978e]" />
      </strong>
    </div>
  );
}

export function BookingBar({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="absolute right-[6.7%] bottom-[13.1%] left-[6.7%] z-30 grid min-h-[118px] grid-cols-[23fr_21fr_21fr_17fr_18fr] items-center rounded-[10px] border border-white/18 bg-[rgba(21,23,19,.92)] py-[18px] pr-6 pl-10 shadow-[0_16px_50px_rgba(0,0,0,.18)] backdrop-blur-[8px] max-[1100px]:right-[4%] max-[1100px]:left-[4%] max-[1100px]:grid-cols-2 max-[1100px]:gap-y-4 max-[1100px]:pl-7 max-md:hidden" aria-label="Find a stay">
      <BookingField label="Where" value="Canggu" icon="pin" />
      <BookingField label="Check In" value="21 Aug 2026" icon="calendar" />
      <BookingField label="Check Out" value="22 Aug 2026" icon="calendar" />
      <BookingField label="Guests" value="2 Guests" icon="user" />
      <button className="ml-6 min-h-[62px] w-[calc(100%-24px)] rounded-sm border-0 bg-[#e06a0b] text-xs font-medium uppercase tracking-[.12em] text-[#f8f7f3] transition-[background-color,transform] duration-220 hover:bg-[#c95c07] active:translate-y-px" type="button" onClick={onRequest}>Find a Stay <span className="ml-4 text-[22px]" aria-hidden="true">→</span></button>
    </div>
  );
}
