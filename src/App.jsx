/**********************************************************************
 DJ LANDING PAGE
 File: App.jsx
**********************************************************************/

import { useState } from "react";
import SoundcloudFeed from "./components/SoundcloudFeed";
import WaveBackground from "./components/WaveBackground";
import PhotoLightbox from "./components/PhotoLightbox";

// Import your images here! This fixes the broken image bug.
import header from "./assets/header.png"; 
import fercho from "./assets/fercho.png"; 

/**********************************************************************
 DATA — PHOTOS
**********************************************************************/

const photos =[
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
         HERO
      ========================================================= */}

      <section className="relative h-screen overflow-hidden">
        {/* Header Banner Image as Background */}
        <div className="absolute inset-0 z-0">
          <img src={header} alt="B.J11 DJ Header" className="w-full h-full object-cover object-[70%_center]" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)] z-10"></div>

        {/* Wave Background */}
        <WaveBackground />

        {/* Ambient / Chill House text */}
        <p className="absolute top-28 left-6 md:left-24 text-[#8C8C8C] z-10 text-lg">
          Ambient / Chill House
        </p>

        {/* Interactive SoundCloud Player - Hot Sauce Private Session */}
        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 w-[480px] h-[266px] z-20 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.3)]">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/fernando-castillo-jimenez/manu-rosas-b2b-bj11-hot-sauce-private-session&color=%239be7d8&auto_play=false&show_artwork=true&visual=true"
          ></iframe>
        </div>

      </section>

      {/* =========================================================
         SESSIONS (RADIO)
      ========================================================= */}

      <section id="sessions" className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl mb-10">
          Radio B.J11
        </h2>

        {/* This securely loads the separate file from your components folder! */}
        <SoundcloudFeed />

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
        {/* FIXED: Uses the imported 'fercho' variable instead of a broken path */}
        <img
          src={fercho}
          alt="B.J11 DJ"
          className="rounded-xl w-full object-cover"
        />

        <div>

          <h2 className="text-3xl mb-6">
            Sobre mí
          </h2>

          <p className="text-[#8C8C8C] leading-relaxed">
            Mezclando pads cálidos, grooves lentos y texturas melódicas,
            B.J11 crea sets diseñados para tardes tranquilas y sesiones
            al amanecer. Cada mezcla explora el deep house, ambient house
            y ritmos downtempo grabados en vivo.
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
