import { useEffect, useState } from "react";

export default function SoundcloudSessions() {

  const [tracks, setTracks] = useState([]);

  useEffect(() => {

    const url =
      "https://api.allorigins.win/raw?url=" +
      encodeURIComponent(
        "https://soundcloud.com/fernando-castillo-jimenez"
      );

    fetch(url)
      .then(r => r.text())
      .then(() => {
        setTracks([
          {
            title: "Hot Sauce Private Session",
            url: "https://soundcloud.com/fernando-castillo-jimenez/manu-rosas-b2b-bj11-hot-sauce-private-session"
          }
        ]);
      });

  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {tracks.map((t, i) => (
        <iframe
          key={i}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(t.url)}&color=%239be7d8`}
        />
      ))}

    </div>
  );
}
