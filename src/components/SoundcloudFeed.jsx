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
      .then((res) => res.text())
      .then((str) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");

        // Get items (skipping the first one if it's channel info)
        const items = Array.from(xml.querySelectorAll("item")).slice(1, 7);

        const parsed = items.map((item) => {
          // Extract the iTunes image artwork from the RSS feed
          const itunesImage = item.getElementsByTagName("itunes:image")[0];
          const artwork = itunesImage ? itunesImage.getAttribute("href") : null;

          return {
            title: item.querySelector("title")?.textContent,
            link: item.querySelector("link")?.textContent,
            artwork: artwork,
          };
        });

        setTracks(parsed);
      })
      .catch((err) => console.error("Error fetching feed:", err));
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {tracks.map((track, i) => (
          <div
            key={i}
            onClick={() => setActive(track)}
            className="bg-[#171717] rounded-xl overflow-hidden cursor-pointer group transition hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
          >
            <div className="relative">
              {/* Show actual track artwork if available, otherwise fallback to gradient */}
              {track.artwork ? (
                <img
                  src={track.artwork}
                  alt={track.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
              )}

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-14 h-14 rounded-full border border-white/80 flex items-center justify-center text-white text-xl backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  ▶
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-sm font-medium text-gray-100 line-clamp-2">
                {track.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Player */}
      {active && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
          <div className="bg-[#111] border border-white/10 rounded-xl max-w-xl w-full p-6 relative shadow-2xl">
            <button
