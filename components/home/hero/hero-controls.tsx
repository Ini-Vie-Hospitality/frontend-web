import { ArrowDown, Volume2, VolumeX } from "lucide-react";

type HeroControlsProps = {
  muted: boolean;
  onToggleMute: () => void;
};

export function HeroControls({ muted, onToggleMute }: HeroControlsProps) {
  const SoundIcon = muted ? VolumeX : Volume2;

  return (
    <div className="hero-utilities">
      <button
        className="sound-button"
        type="button"
        aria-label={muted ? "Turn sound on" : "Mute video"}
        onClick={onToggleMute}
      >
        <SoundIcon aria-hidden="true" />
      </button>
      <div className="slide-indicator" aria-label="Slide 1 of 4">
        <span>01 / 04</span>
        <i />
      </div>
      <a className="scroll-indicator" href="#stays">
        Scroll To Discover
        <ArrowDown aria-hidden="true" />
      </a>
    </div>
  );
}
