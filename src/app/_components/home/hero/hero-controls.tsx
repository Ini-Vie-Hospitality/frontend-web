import { Volume2, VolumeX } from "lucide-react";

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
    </div>
  );
}
