"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedNumber({ value }) {
  return (
    <div className="relative w-16 h-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full text-center text-3xl font-bold text-teal-400"
        >
          {String(value).padStart(2, "0")}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Countdown({ targetDate, onComplete }) {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate) - new Date();

      if (diff <= 0) {
        setTime({ h: 0, m: 0, s: 0 });

        clearInterval(interval); // 🔥 STOP LOOP

        if (onComplete) onComplete(); // 🔥 TRIGGER REVEAL

        return;
      }

      setTime({
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#030812]">
      <h1 className="text-white mb-6 text-xl tracking-widest">
        WEBSITE REVEAL IN
      </h1>

      <div className="flex gap-6">
        <AnimatedNumber value={time.h} />
        <AnimatedNumber value={time.m} />
        <AnimatedNumber value={time.s} />
      </div>
    </div>
  );
}