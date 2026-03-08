/**********************************************************************
 DJ LANDING PAGE
 File: App.jsx
**********************************************************************/

import { useState, useEffect } from "react";

import logo from "./assets/bj11.png";
import WaveBackground from "./components/WaveBackground";
import PhotoLightbox from "./components/PhotoLightbox";

/**********************************************************************
 DATA — PHOTOS
**********************************************************************/

const photos = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491",
];

/**********************************************************************
 MAIN COMPONENT
**********************************************************************/

export default function DJLanding() {

  const [tracks, setTracks] = useState([]);

  /******************************************************************
   FETCH SOUNDCLOUD RSS FEED
  ******************************************************************/

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

        const items = Array.from(xml.querySelectorAll("item"));

        const parsed = items.map(item => ({
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent
        }));

        setTracks(parsed);

      });

  }, []);

  const latestMix = tracks[0];
  const previousMixes = tracks.slice(1, 7);

  return (
    <div className="bg-[#0E0E0E] text-[#EDEDED] min-h-screen font-sans">

      {/* =========================================================
         NAVIGATION
      ========================================================= */}

      <header className="fixed top-0 left-0 right-0 backdrop-blur bg-black/40 border-b border-white/5 z-20">
        <div className="max-w-6xl mx-auto flex justify-between p-5">

          <div className="font-semibold tracking-widest">
            B.J11
          </div>

          <nav className="space-x-6 text-sm">
            <a href="#sessions" className="hover:text-[#9BE7D8]">Sesiones</a>
            <a href="#photos" className="hover:text-[#9BE7D8]">Fotos</a>
            <a href="#about" className="hover:text-[#9BE7D8]">Sobre mí</a>
            <a href="#contact" className="hover:text-[#9BE7D8]">Contacto</a>
          </nav>

        </div>
      </header>

      {/* =========================================================
         HERO — LATEST MIX
      ========================================================= */}

      <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">

        <WaveBackground />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)]"></div>

        <div className="relative z-10 max-w-xl mx-auto px-6">

          <div className="relative flex justify-center mb-10">

            <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

            <img
              src={logo}
              alt="B.J11 DJ"
              className="relative w-72 md:w-96 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] transition duration-700 hover:scale-[1.02]"
            />

          </div>

          <p className="text-[#8C8C8C] mb-6">
            Ambient / Chill House
          </p>

          {latestMix && (

            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(latestMix.link)}&color=%239be7d8&auto_play=false&show_artwork=true&visual=true`}
            ></iframe>

          )}

        </div>

      </section>

      {/* =========================================================
         SESSIONS
      ========================================================= */}

      <section id="sessions" className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl mb-10">
          Sesiones recientes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {previousMixes.map((track, i) => (

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

      </section>

      {/* =========================================================
         PHOTO GALLERY
      ========================================================= */}

      <section id="photos" className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl mb-10">
          Ambiente
        </h2>

        <PhotoLightbox photos={photos} />

      </section>

      {/* =========================================================
         ABOUT
      ========================================================= */}

      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
      >

        <img
          src="/src/assets/fercho.png"
          className="rounded-xl w-full object-cover"
        />

        <div>

          <h2 className="text-3xl mb-6">
            Sobre mí
          </h2>

          <p className="text-[#8C8C8C] leading-relaxed">
            Mezclando pads cálidos, grooves lentos y texturas melódicas,
            B.J11 crea sets diseñados para tardes tranquilas y sesiones
            al amanecer.
          </p>

        </div>

      </section>

      {/* =========================================================
         CONTACT
      ========================================================= */}

      <section id="contact" className="text-center pb-24">

        <h2 className="text-3xl mb-6">
          Reservas
        </h2>

        <a
          href="mailto:info@bj11music.com"
          className="text-[#9BE7D8] hover:drop-shadow-[0_0_10px_rgba(155,231,216,0.6)]"
        >
          info@bj11music.com
        </a>

      </section>

      {/* =========================================================
         FOOTER
      ========================================================= */}

      <footer className="text-center py-12 text-[#8C8C8C] text-sm">

        <div className="space-x-6 mb-3">
          <a href="#">SoundCloud</a>
          <a href="#">Mixcloud</a>
          <a href="#">Instagram</a>
        </div>

        <div>© 2026 B.J11</div>

      </footer>

    </div>
  );
}
