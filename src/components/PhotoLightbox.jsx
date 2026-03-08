import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PhotoLightbox({ photos }) {

  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">

        {photos.map((p, i) => (
          <img
            key={i}
            src={p}
            onClick={() => setIndex(i)}
            className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
          />
        ))}

      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map(p => ({ src: p }))}
        index={index}
      />
    </>
  );
}
