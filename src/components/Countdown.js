import React, { useEffect, useState } from "react";
import '../styles/countdown.css';

const Countdown = ({ targetDate }) => {
  const countDownDate = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <section className="countdown">
      <div className="box">{timeLeft.days}<span>Hari</span></div>
      <div className="box">{timeLeft.hours}<span>Jam</span></div>
      <div className="box">{timeLeft.minutes}<span>Menit</span></div>
      <div className="box">{timeLeft.seconds}<span>Detik</span></div>
    </section>
  );
};

export default Countdown;