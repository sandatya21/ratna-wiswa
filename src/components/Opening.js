import React from "react";
import { motion } from "framer-motion";
import "../styles/opening.css";

const Opening = ({ onOpen }) => {
  const params = new URLSearchParams(window.location.search);

  // Ambil nama dari URL ?u=
  let guest = params.get("u");

  // Decode spasi %20 dll
  guest = guest ? decodeURIComponent(guest) : null;

  return (
    <motion.section className="opening" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p>Kepada Yth.</p>
      <h2>{guest || "Tamu Undangan"}</h2>
      <button onClick={onOpen}>Buka Undangan</button>
    </motion.section>
  );
};

export default Opening;
