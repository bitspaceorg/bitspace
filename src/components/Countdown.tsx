"use client";

import { useEffect, useState } from "react";

interface TCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [countdown, setCountdown] = useState<TCountdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const OpeningDate = new Date("Mar 28, 2024 00:01:00").getTime();
    const timer = setTimeout(() => {
      const currDate = new Date().getTime();
      const difference = OpeningDate - currDate;

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        ),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <section className="flex items-center justify-center space-x-5 w-full px-5">
      <h1 className="text-4xl lg:text-5xl w-full text-center">
        {countdown.days < 10 ? `0${countdown.days}` : countdown.days}
      </h1>
      <h1 className="text-4xl lg:text-5xl w-full text-center">
        {countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}
      </h1>

      <h1 className="text-4xl lg:text-5xl w-full text-center">
        {countdown.minutes < 10 ?
          `0${countdown.minutes}`
          : countdown.minutes}
      </h1>

      <h1 className="text-4xl lg:text-5xl w-full text-center">
        {countdown.seconds < 10 ?
          `0${countdown.seconds}`
          : countdown.seconds}
      </h1>
    </section>
  );
}
