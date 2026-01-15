import React from "react";
import "../styles/gallery.css";
import bg from "../assets/gekna.jpeg";

const images = [bg, bg, bg, bg, bg, bg]; // Ganti dengan gambar yang ada, atau tambahkan file gallery3.jpg dll.

const Gallery = () => (
  <section className="gallery">
    <h2>Galeri</h2>
    <div className="grid">
      {images.map((img, index) => (
        <div key={index} className="item">
          <img src={img} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
