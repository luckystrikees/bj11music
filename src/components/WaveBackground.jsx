import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function WaveBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "rgba(34, 211, 238, 0.15)", // Tweaked to match your cyan theme better
      progressColor: "rgba(34, 211, 238, 0.4)",
      barWidth: 3,
      barGap: 3,
      height: 160, // Made it slightly taller
      interact: false,
      cursorWidth: 0,
    });

    // Note: In a production environment, you might want to use a shorter, 
    // highly compressed audio file here to save user bandwidth!
    wavesurfer.load(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );

    // Auto-play the visualizer (muted) so it's always moving
    wavesurfer.on('ready', () => {
      wavesurfer.setVolume(0); 
      wavesurfer.play();
    });

    return () => wavesurfer.destroy();
  },[]);

  return (
    <div
      ref={containerRef}
      // Added z-10 and pointer-events-none so it doesn't block clicks on the player
      className="absolute bottom-0 left-0 right-0 opacity-60 z-10 pointer-events-none mix-blend-screen"
    />
  );
}
