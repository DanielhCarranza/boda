"use client";

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const DateCounter: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center font-sans text-brown-700">
      <h2 className="text-2xl mb-2">Faltan</h2>
      <div className="flex justify-center border-2 border-brown-700 rounded-lg p-5">
        <div className="flex flex-col items-center mx-2">
          <span className="text-4xl">{timeLeft.days}</span>
          <span className="text-sm">Días</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-4xl">{timeLeft.hours}</span>
          <span className="text-sm">Hrs</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-4xl">{timeLeft.minutes}</span>
          <span className="text-sm">Mins</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-4xl">{timeLeft.seconds}</span>
          <span className="text-sm">Segs</span>
        </div>
      </div>
    </div>
  );
};

export default DateCounter;
