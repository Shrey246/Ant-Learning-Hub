"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">

      {/* BOX */}
      <div className="
        relative 
        w-16 h-16 
        sm:w-20 sm:h-20 
        md:w-24 md:h-24 
        rounded-xl sm:rounded-2xl 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        shadow-[0_0_20px_rgba(20,184,166,0.12)] sm:shadow-[0_0_30px_rgba(20,184,166,0.15)]
        overflow-hidden
      ">
        
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-orange-500/10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              absolute inset-0 
              flex items-center justify-center 
              font-bold
              text-2xl 
              sm:text-3xl 
              md:text-4xl
            "
          >
            <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              {String(value).padStart(2, "0")}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LABEL */}
      <span className="
        mt-2 sm:mt-3 
        text-[10px] sm:text-xs 
        tracking-[0.2em] sm:tracking-[0.3em] 
        text-gray-400
      ">
        {label}
      </span>
    </div>
  );
}

export default function PremiumCountdown({ targetDate }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate) - new Date();

      if (diff <= 0) {
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }

      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="
      min-h-screen 
      flex flex-col items-center justify-center 
      px-4 sm:px-6
      bg-[#030812] 
      relative overflow-hidden
    ">

      {/* Background glow */}
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-teal-500/10 blur-[80px] sm:blur-[120px] rounded-full top-[-80px] left-[-80px]" />
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-orange-500/10 blur-[80px] sm:blur-[120px] rounded-full bottom-[-80px] right-[-80px]" />

      {/* Heading */}
      <h1 className="
        text-white 
        text-xs sm:text-sm 
        tracking-[0.3em] sm:tracking-[0.4em] 
        mb-6 sm:mb-10 
        text-center
      ">
        WE’RE LAUNCHING SOON
      </h1>

      {/* Timer */}
      <div className="
        flex 
        flex-wrap 
        justify-center 
        gap-4 sm:gap-6
      ">
        <TimeBox value={time.d} label="DAYS" />
        <TimeBox value={time.h} label="HOURS" />
        <TimeBox value={time.m} label="MINUTES" />
        <TimeBox value={time.s} label="SECONDS" />
      </div>
    </div>
  );
}