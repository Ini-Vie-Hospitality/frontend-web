import { ArrowDown, Volume2, VolumeX } from "lucide-react";

type HeroControlsProps = {
  muted: boolean;
  onToggleMute: () => void;
};

export function HeroControls({ muted, onToggleMute }: HeroControlsProps) {
  const SoundIcon = muted ? VolumeX : Volume2;

  return (
    <div className="absolute right-[4%] bottom-[3.8%] left-[3.7%] z-30 flex items-center max-[1100px]:bottom-[2.5%] max-md:right-[22px] max-md:bottom-7 max-md:left-[22px] max-md:justify-between">
      <button className="grid size-[50px] cursor-pointer place-items-center rounded-full border border-white/65 bg-[rgba(10,12,10,.12)] max-md:size-[46px]" type="button" aria-label={muted ? "Turn sound on" : "Mute video"} onClick={onToggleMute}>
        <SoundIcon aria-hidden="true" className="size-6" strokeWidth={1.5} />
      </button>
      <div className="ml-[8.5%] flex items-center gap-[30px] text-sm tracking-[.12em] max-md:m-0">
        <span>01 / 04</span>
        <i className="block h-px w-[180px] bg-[linear-gradient(90deg,#e06a0b_22%,rgba(255,255,255,.28)_22%)] max-md:hidden" />
      </div>
      <a className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs uppercase tracking-[.28em] max-md:hidden" href="#stays">
        Scroll To Discover
        <ArrowDown aria-hidden="true" className="size-[15px] animate-[scroll-arrow_2.3s_ease-in-out_infinite]" strokeWidth={1.25} />
      </a>
    </div>
  );
}
