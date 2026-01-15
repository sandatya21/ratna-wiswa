import React from 'react';
import { motion } from 'framer-motion';
import '../styles/opening.css';

const Opening = ({ onOpen }) => {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("u");

  return (
    <motion.section className="opening"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p>Kepada Yth.</p>
      <h2>{guest || "Tamu Undangan"}</h2>
      <button onClick={onOpen}>Buka Undangan</button>
    </motion.section>
  );
};

export default Opening;