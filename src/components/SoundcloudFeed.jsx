import { useEffect, useState } from "react";

export default function SoundcloudFeed() {
const [tracks, setTracks] = useState([]);
const [active, setActive] = useState(null);

useEffect(() => {

const feed =
  "https://api.allorigins.win/raw?url=" +
  encodeURIComponent(
    "https://feeds.soundcloud.com/users/soundcloud:users:113724148/sounds.rss"
  );

fetch(feed)
  .then(res => res.text())
  .then(str => {

    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "text/xml");

    const items = Array.from(xml.querySelectorAll("item")).slice(1, 7);

    const parsed = items.map(item => ({
      title: item.querySelector("title")?.textContent,
      link: item.querySelector("link")?.textContent
    }));

    setTracks(parsed);

  });

}, []);

return (
<> <div className="grid md:grid-cols-3 gap-8">

    {tracks.map((track, i) => (

      <div
        key={i}
        onClick={() => setActive(track)}
        className="bg-[#171717] rounded-xl overflow-hidden cursor-pointer group transition hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
      >

        <div className="relative">

          <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

            <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white text-xl">
              ▶
            </div>

          </div>

        </div>

        <div className="p-5">
          <h3 className="text-sm">{track.title}</h3>
        </div>

      </div>

    ))}

  </div>

  {active && (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#111] rounded-xl max-w-xl w-full p-6 relative">

        <button
          onClick={() => setActive(null)}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          ✕
        </button>

        <h3 className="mb-4 text-lg">{active.title}</h3>

        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(active.link)}&color=%239be7d8`}
        ></iframe>

      </div>

    </div>

  )}
</>


);
}
