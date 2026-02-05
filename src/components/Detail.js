import React from "react";
import "../styles/detail.css";
import bg from "../assets/herofix.jpg";

const Detail = () => (
  <>
    {/* SECTION 1: PROFIL ANAK */}
    <section className="detail profile-section">
      <div className="profile-card">
        <img src={bg} alt="Agung Ayu Ratna" className="profile-img" />
        <h3 className="script-name">Anak Agung Ayu Ratna W. W.</h3>
        <p className="subtitle">PUTRI DARI PASANGAN</p>
        <p className="parents">
          Anak Agung Gede Agung Bimantara Putra <br />& Anak Agung Sandatya Widhiyanti
        </p>
      </div>
    </section>

    {/* SECTION 2: TEMPAT & WAKTU */}
    <section className="detail time-section">
      <h2>Tempat dan Waktu</h2>

      <p className="opening-text">
        <b>Om Swastyastu</b>
      </p>

      <p className="desc">Atas asung kertha wara nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha Esa, kami bermaksud menyelenggarakan Upacara Manusa Yadnya 1 Oton putri kami.</p>

      <div className="divider" />

      <div className="info-item">
        <span>📅</span>
        <p>Selasa, 24 Februari 2026</p>
      </div>

      <div className="info-item">
        <span>🕰️</span>
        <p>10:00 WITA</p>
      </div>

      <div className="info-item">
        <span>🗺️</span>
        <p>Puri Kaleran Koripan Klungkung</p>
      </div>

      <a className="btn" href="https://maps.app.goo.gl/GZ9Fcmk4478y5yga9" target="_blank" rel="noreferrer">
        Lokasi
      </a>

      <div className="divider" />
      <p className="desc">Atas kehadiran dan doa restunya, kami sekeluarga menghaturkan terima kasih.</p>
      <p className="opening-text">
        <b>Om Shanti Shanti Shanti Om</b>
      </p>
    </section>
  </>
);

export default Detail;
