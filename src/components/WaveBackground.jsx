import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function WaveBackground() {

  const containerRef = useRef(null);

  useEffect(() => {

    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "rgba(155,231,216,0.2)",
      progressColor: "rgba(155,231,216,0.5)",
      barWidth: 2,
      barGap: 2,
      height: 120,
      interact: false,
      cursorWidth: 0
    });

    wavesurfer.load(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );

    return () => wavesurfer.destroy();

  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 right-0 opacity-40"
    />
  );
}
