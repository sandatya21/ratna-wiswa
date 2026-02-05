import React, { useState } from "react";
import "../styles/gallery.css";

import bg1 from "../assets/img1.jpg";
import bg2 from "../assets/img2.jpg";
import bg3 from "../assets/img3.jpg";
import bg4 from "../assets/img5.jpg";
import bg5 from "../assets/img6.jpg";
import bg6 from "../assets/img7.jpg";

const images = [bg1, bg2, bg3, bg4, bg5, bg6];

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="gallery">
      <h2>Galeri</h2>

      <div className="grid">
        {images.map((img, index) => (
          <div key={index} className="item" onClick={() => setActiveImg(img)}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* FULLSCREEN POPUP */}
      {activeImg && (
        <div className="lightbox" onClick={() => setActiveImg(null)}>
          <span className="close">×</span>
          <img src={activeImg} alt="preview" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
