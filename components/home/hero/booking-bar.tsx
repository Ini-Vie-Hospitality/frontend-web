import { CalendarDays, ChevronDown, MapPin, UserRound } from "lucide-react";

type FieldProps = { label: string; value: string; icon: "pin" | "calendar" | "user" };
const icons = { pin: MapPin, calendar: CalendarDays, user: UserRound };

function BookingField({ label, value, icon }: FieldProps) {
  const Icon = icons[icon];
  return <div className="min-w-0 border-r border-white/10 px-[clamp(20px,2.1vw,40px)] first:pl-0 max-lg:min-h-13 max-lg:even:border-r-0"><span className="mb-4 block text-[11px] font-medium uppercase tracking-[.08em] text-soft-white/65">{label}</span><strong className="flex items-center gap-3 whitespace-nowrap text-[17px] font-normal text-soft-white"><Icon aria-hidden="true" className="size-5 shrink-0 stroke-[1.5]" />{value}<ChevronDown aria-hidden="true" className="ml-auto size-4.5 text-warm-gray" /></strong></div>;
}

export function BookingBar({ onRequest }: { onRequest: () => void }) {
  return <div className="absolute right-[6.7%] bottom-[13.1%] left-[6.7%] z-30 grid min-h-[118px] grid-cols-[23fr_21fr_21fr_17fr_18fr] items-center rounded-[10px] border border-white/18 bg-[#151713]/92 py-4.5 pr-6 pl-10 shadow-[0_16px_50px_rgba(0,0,0,.18)] backdrop-blur-sm max-lg:right-[4%] max-lg:left-[4%] max-lg:grid-cols-2 max-lg:gap-y-4 max-lg:pl-7 max-md:hidden" aria-label="Find a stay"><BookingField label="Where" value="Canggu" icon="pin" /><BookingField label="Check In" value="21 Aug 2026" icon="calendar" /><BookingField label="Check Out" value="22 Aug 2026" icon="calendar" /><BookingField label="Guests" value="2 Guests" icon="user" /><button className="ml-6 min-h-[62px] w-[calc(100%-24px)] rounded-sm bg-orange text-xs font-medium uppercase tracking-[.12em] text-soft-white transition hover:bg-orange-hover" type="button" onClick={onRequest}>Find a Stay <span className="ml-4 text-[22px]" aria-hidden="true">→</span></button></div>;
}
