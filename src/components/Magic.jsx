import React, { useEffect } from "react";
import { useState } from "react";

const Magic = ({ initialMinutes = 24 }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("countdown-end-time");
    let endTime;

    if (savedEndTime) {
      endTime = new Date(parseInt(savedEndTime, 10));
    } else {
      endTime = new Date();
      endTime.setHours(endTime.getHours() + initialMinutes);
      localStorage.setItem("countdown-end-time", endTime.getTime());
    }

    const updateTimer = () => {
      const now = new Date();
      const difference = endTime - now;
      setTimeLeft(Math.max(Math.floor(difference / 1000), 0));

      if (difference <= 0) {
        localStorage.removeItem("countdown-end-time");
      }
    };

    updateTimer(); // сразу обновить
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [initialMinutes]);
  const hour = Math.floor(timeLeft / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeLeft % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  return (
    <div className="bg-[url('/bg-magic.png')] h-[640px] bg-cover bg-center">
      <div className='bg-gradient-to-b from-[rgba(162,89,255,0)] to-[#A259FF] h-full'>
        <div className='container flex  justify-between items-end h-full px-[115px] pb-[60px]'>
          <div className='flex gap-10  flex-col items-start'>
            <span className='flex gap-3 text-white w-[151px] rounded-3xl px-3 py-4 bg-[#3B3B3B]'>
              <img src='../public/img-m.svg' alt='' />
              Shroomie
            </span>
            <h2 className='font-semibold text-5xl text-white'>
              Magic Mashrooms
            </h2>
            <button className='text-black hover:bg-black hover:text-white active:bg-black/70 flex items-center gap-3 bg-white rounded px-[50px] py-[19px] font-semibold rounded-3xl'>
              <span className='fas fa-eye'></span>
              See NFT
            </button>
          </div>
          <div className='flex items-center justify-center backdrop-blur-md bg-[#3B3B3B80] rounded-lg px-8 py-4'>
            <div className='text-[38px]/[120%]  font-[700] text-white    '>
              {hour}
              <span>:</span>
              {minutes}
              <span>:</span>
              {seconds}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magic;
