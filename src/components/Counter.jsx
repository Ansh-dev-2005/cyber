import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2025-03-24") - +new Date();
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
    <div className="w-auto  bg-transparent h-inherit">
      <div className="flex-item relative pl-4 pr-15 flex-1 w-full order-1 flex-col justify-center items-center">
        <div className="countdownTimer px-56 justify-start flex items-center ">
          <div className="timer-countdown text-4xl flex items-center justify-center py-4">
            <div className="text-2xl text-black font-bold">
              Event Starts In
            </div>
            <div className="w-[100px]"></div>
            <div className="timer-countdown-square bg-gradient-to-br from-orange-500 to-yellow-500 w-16 h-16 text-white m-[1px] text-center flex-1  ">
              <div className="timer-countdown-square-number text-center ">
                {" "}
                {timeLeft.days}
              </div>
              <div className="timer-countdown-square-text text-sm opacity-30 block mt-0 bg-black  ">
                Days
              </div>
            </div>
            <div className="timer-countdown-square bg-gradient-to-br from-red-600 via-red-500 to-red-400 w-16 h-16 text-white m-[1px] text-center flex-1  ">
              <div className="timer-countdown-square-number  ">
                {" "}
                {timeLeft.hours}
              </div>
              <div className="timer-countdown-square-text text-sm opacity-30 block mt-0 bg-black  ">
                Hours
              </div>
            </div>
            <div className="timer-countdown-square bg-gradient-to-br from-pink-600 via-pink-600 to-red-600 w-16 h-16 text-white m-[1px] text-center flex-1  ">
              <div className="timer-countdown-square-number ">
                {" "}
                {timeLeft.minutes}
              </div>
              <div className="timer-countdown-square-text text-sm opacity-30 block mt-0 bg-black  ">
                Minutes
              </div>
            </div>
            {/* <div className="timer-countdown-square bg-gradient-to-br from-red-600 via-pink-600 to-red-600 w-16 h-16 text-white m-[1px] text-center flex-1  ">
              <div className="timer-countdown-square-number ">
                {" "}
                {timeLeft.seconds}
              </div>
              <div className="timer-countdown-square-text text-sm opacity-30 block mt-0 bg-black  ">
                Seconds
              </div>
            </div> */}
          </div>
          {/* <div className="flex  mr-0 row-end-1 justify-end justify-center items-center">
            <div className=" text-base text-center font-bold text-black">
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="text */}
      <div className=" flex-item relative pl-4 pr-15 flex-1 w-full flex-col order-2 "></div>
    </div>
  );
};

export default Counter;
