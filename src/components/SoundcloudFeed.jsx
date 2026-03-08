import { useEffect, useState } from "react";

export default function SoundcloudFeed() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

    const urls = [
      "https://soundcloud.com/fernando-castillo-jimenez/manu-rosas-b2b-bj11-hot-sauce-private-session"
    ];

    Promise.all(
      urls.map((url) =>
        fetch(
          `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(
            url
          )}`
        ).then((res) => res.json())
      )
    ).then((data) => {
      setTracks(data);
    });

  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {tracks.map((track, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          dangerouslySetInnerHTML={{ __html: track.html }}
        />
      ))}

    </div>
  );
}
