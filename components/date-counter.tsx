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
    <div className="flex flex-col items-center justify-center h-[25vh] bg-fondo2">
      {/* <div className="relative text-center text-[#a27d6b] p-4 inline-block border border-[#a27d6b] rounded-lg"> */}
      <div className="relative text-center text-[#a27d6b] p-4 rounded-lg">  
        <div className="absolute top-[-22px] left-1/2 transform -translate-x-1/2 bg-fondo2 px-2">
          <h2 className="font-parisienne text-title text-2xl m-0">Faltan</h2>
        </div>
        <div className="flex justify-center gap-6 mt-0">
          <div className="flex flex-col items-center mx-2">
            <span className="text-3xl font-poiretOne">{timeLeft.days}</span>
            <span className="text-sm font-poiretOne text-texto">Días</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-3xl font-poiretOne">{timeLeft.hours}</span>
            <span className="text-sm font-poiretOne text-texto">Hrs</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-3xl font-poiretOne">{timeLeft.minutes}</span>
            <span className="text-sm font-poiretOne text-texto">Mins</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-3xl font-poiretOne">{timeLeft.seconds}</span>
            <span className="text-sm font-poiretOne text-texto">Segs</span>
          </div>
        </div>
      </div>
      <h2 className="text-title text-xl font-parisienne">Viernes 25 de Octubre 2024</h2>
    </div>
  );
};

export default DateCounter;
