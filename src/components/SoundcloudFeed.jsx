import { useEffect, useState } from "react";

export default function SoundcloudFeed() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

    const feed =
      "https://api.allorigins.win/raw?url=" +
      encodeURIComponent(
        "https://feeds.soundcloud.com/users/soundcloud:users:17469059/sounds.rss"
      );

    fetch(feed)
      .then(res => res.text())
      .then(str => {
        const parser = new window.DOMParser();
        const xml = parser.parseFromString(str, "text/xml");

        const items = Array.from(xml.querySelectorAll("item")).slice(1, 7);

        const parsed = items.map(item => ({
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent
        }));

        setTracks(parsed);
      });

  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {tracks.map((track, i) => (

        <iframe
          key={i}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.link)}&color=%239be7d8`}
          className="rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        />

      ))}

    </div>
  );
}
