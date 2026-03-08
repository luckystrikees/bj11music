import { useState, useRef, useEffect } from "react";
import logo from "./assets/bj11.png";

const sessions = [
  {
    title: "Sesión Atardecer de Domingo",
    length: "1:04:32",
    platform: "SoundCloud",
    artwork: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Mix Balcón de Medianoche",
    length: "58:21",
    platform: "Mixcloud",
    artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Deriva Nocturna",
    length: "1:12:10",
    platform: "YouTube",
    artwork: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const photos = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491",
];

export default function DJLanding() {
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const playSession = (session) => {
    setCurrent(session);
    setPlaying(true);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.play();
  }, [current]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-[#0E0E0E] text-[#EDEDED] min-h-screen font-sans">

      {/* Navegación */}
      <header className="fixed top-0 left-0 right-0 backdrop-blur bg-black/40 z-20">
        <div className="max-w-6xl mx-auto flex justify-between p-5">
          <div className="font-semibold tracking-widest">B.J11</div>

          <nav className="space-x-6 text-sm">
            <a href="#sessions" className="hover:text-[#9BE7D8]">Sesiones</a>
            <a href="#photos" className="hover:text-[#9BE7D8]">Fotos</a>
            <a href="#about" className="hover:text-[#9BE7D8]">Sobre mí</a>
            <a href="#contact" className="hover:text-[#9BE7D8]">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#9BE7D8] via-transparent to-[#F2C6FF] animate-[pulse_6s_ease-in-out_infinite]" />

        <div className="relative flex justify-center mb-8">

          {/* glow behind logo */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <img
            src={logo}
            alt="B.J11 DJ"
            className="
              relative
              w-64 md:w-80 lg:w-96
              drop-shadow-[0_0_35px_rgba(34,211,238,0.45)]
              transition-transform duration-700
              hover:scale-105
            "
          />

        </div>

        <p className="text-[#8C8C8C] mb-6">Ambient / Chill House</p>  

          <a
            href="https://soundcloud.com/fernando-castillo-jimenez/manu-rosas-b2b-bj11-hot-sauce-private-session?si=c42176721a6541c1a6a331f92cfb11e8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#171717] border border-[#9BE7D8]/40 rounded-full hover:shadow-[0_0_20px_rgba(155,231,216,0.4)] transition"
          >
            Reproducir última sesión
          </a>
        </div>
      </section>

      {/* Sesiones */}
      <section id="sessions" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl mb-10">Sesiones recientes</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sessions.map((s, i) => (
            <div
              key={i}
              className="bg-[#171717] rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(155,231,216,0.15)] transition"
            >
              <img
                src={s.artwork}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="mb-2">{s.title}</h3>

                <p className="text-sm text-[#8C8C8C] mb-4">
                  {s.length} • {s.platform}
                </p>

                <button
                  onClick={() => playSession(s)}
                  className="text-sm px-4 py-2 border border-[#9BE7D8]/40 rounded-full hover:bg-[#9BE7D8]/10"
                >
                  Reproducir
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fotos */}
      <section id="photos" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl mb-10">Ambiente</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={p}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sobre mí */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <img
          src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd53"
          className="rounded-xl w-full object-cover"
        />

        <div>
          <h2 className="text-3xl mb-6">Sobre mí</h2>

          <p className="text-[#8C8C8C] leading-relaxed">
            Mezclando pads cálidos, grooves lentos y texturas melódicas,
            B.J11 crea sets diseñados para tardes tranquilas y sesiones
            al amanecer. Cada mezcla explora el deep house, ambient house
            y ritmos downtempo grabados en vivo.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="text-center pb-24">
        <h2 className="text-3xl mb-6">Reservas</h2>

        <a
          href="mailto:info@bj11music.com"
          className="text-[#9BE7D8] hover:drop-shadow-[0_0_10px_rgba(155,231,216,0.6)]"
        >
          email@domain.com
        </a>
      </section>

      {/* Reproductor */}
      {current && (
        <div className="fixed bottom-6 right-6 bg-[#171717]/80 backdrop-blur p-4 rounded-xl w-80 shadow-lg">
          <div className="text-sm mb-2">{current.title}</div>

          <div className="flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="px-4 py-2 border border-[#9BE7D8]/40 rounded-full"
            >
              {playing ? "Pausa" : "Reproducir"}
            </button>

            <span className="text-xs text-[#8C8C8C]">
              {current.platform}
            </span>
          </div>

          <audio ref={audioRef} src={current.audio} />
        </div>
      )}

      {/* Footer */}
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
