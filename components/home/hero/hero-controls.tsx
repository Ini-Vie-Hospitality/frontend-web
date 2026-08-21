import { ArrowDown, Volume2, VolumeX } from "lucide-react";

type HeroControlsProps = { muted: boolean; onToggleMute: () => void };

export function HeroControls({ muted, onToggleMute }: HeroControlsProps) {
  const SoundIcon = muted ? VolumeX : Volume2;
  return <div className="absolute right-[4%] bottom-[3.8%] left-[3.7%] z-30 flex items-center max-md:right-5.5 max-md:bottom-7 max-md:left-5.5 max-md:justify-between"><button className="grid size-12.5 place-items-center rounded-full border border-white/65 bg-[#0a0c0a]/12 transition hover:bg-white/10 max-md:size-11.5" type="button" aria-label={muted ? "Turn sound on" : "Mute video"} onClick={onToggleMute}><SoundIcon aria-hidden="true" className="size-6 stroke-[1.5]" /></button><div className="ml-[8.5%] flex items-center gap-7 text-sm tracking-[.12em] max-md:m-0"><span>01 / 04</span><i className="block h-px w-45 bg-[linear-gradient(90deg,var(--color-orange)_22%,rgba(255,255,255,.28)_22%)] max-md:hidden" /></div><a className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs uppercase tracking-[.28em] max-md:hidden" href="#stays">Scroll To Discover <ArrowDown aria-hidden="true" className="size-3.5 animate-[scroll-arrow_2.3s_ease-in-out_infinite]" /></a></div>;
}
