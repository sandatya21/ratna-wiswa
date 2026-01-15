import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => (
  <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <p className="subtitle">Undangan Acara 1 Oton</p>
    <h1 className="hello">Gunggek Ratna</h1>
    <span>24 Februari 2026</span>
    <div className="scroll-indicator">
      <span></span>
      <span></span>
    </div>
  </motion.section>
);

export default Hero;
