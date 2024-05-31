import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2024-06-11") - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }, [timeLeft]); 


  return (
    <div className="w-screen  bg-[#d5dce5] ">
      <div className="flex-item relative flex-1 w-full order-1 flex-col  ">

      </div>

      {/* <div className="text */}
      <div className=" flex-item relative pl-4 pr-15 flex-1 w-full flex-col order-2 "></div>
    </div>
  );
};

export default Counter;
