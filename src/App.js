import React, { useState } from "react";
import Opening from "./components/Opening";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Detail from "./components/Detail";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import MusicButton from "./components/MusicButton";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && <Opening onOpen={() => setOpen(true)} />}
      {open && (
        <>
          <MusicButton play={open} />
          <Hero />
          <Countdown targetDate="2026-02-24T08:00:00" />
          <Detail />
          <Gallery />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
