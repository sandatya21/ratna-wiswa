import React, { useRef, useState } from "react";
import "../styles/music.css";

const MusicButton = ({ play }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  React.useEffect(() => {
    if (play) {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {});
    }
  }, [play]);

  const toggle = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="../assets/tri.mp3" />
      <button className="music-btn" onClick={toggle}>
        {playing ? "⏸" : "▶"}
      </button>
    </>
  );
};

export default MusicButton;
