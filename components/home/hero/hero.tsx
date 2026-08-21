"use client";

import { useRef, useState } from "react";
import { BookingBar } from "./booking-bar";
import { HeroContent } from "./hero-content";
import { HeroControls } from "./hero-controls";
import { HeroMedia } from "./hero-media";

export function Hero() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggleMute() {
    const video = videoRef.current ?? document.querySelector<HTMLVideoElement>(".hero-media video");
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function requestBooking() {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }

  return <section id="hero" className="relative isolate min-h-[max(100svh,780px)] overflow-hidden bg-[#0e100e] max-md:min-h-svh" aria-labelledby="hero-title">
    <HeroMedia />
    <HeroContent onBookingRequest={requestBooking} />
    <BookingBar onRequest={requestBooking} />
    <HeroControls muted={muted} onToggleMute={toggleMute} />
  </section>;
}
