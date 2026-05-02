"use client";

import { useEffect, useState } from "react";
import PremiumCountdown from "./premiumcountdown";
import RevealAnimation from "./revealanimation";

const REVEAL_DATE = "2026-05-02T15:55:00";

export default function RevealGate({ children }) {
  const [phase, setPhase] = useState("countdown");

  useEffect(() => {
    const target = new Date(REVEAL_DATE).getTime();
    const now = Date.now();
    const delay = target - now;

    if (delay <= 0) {
      setPhase("revealed");
      return;
    }

    const timer = setTimeout(() => {
      startReveal();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const startReveal = () => {
    // ⏳ 1s pause at 00:00
    setTimeout(() => {
      setPhase("revealing");

      // 🌊 2s crossfade duration
      setTimeout(() => {
        setPhase("revealed");
      }, 2000);

    }, 1000);
  };

  return (
    <div className="relative">

      {/* 🌐 WEBSITE (always mounted, fades IN) */}
      <div
        className={`
          transition-all duration-[2000ms] ease-out
          ${phase === "revealed"
            ? "opacity-100 blur-0 scale-100"
            : "opacity-0 blur-[6px] scale-[1.015]"}
        `}
      >
        {children}
      </div>

      {/* ⏳ COUNTDOWN OVERLAY (fades OUT) */}
      <div
        className={`
          fixed inset-0 z-[9999]
          transition-opacity duration-[2000ms] ease-in-out
          ${phase === "revealing" || phase === "revealed"
            ? "opacity-0 pointer-events-none"
            : "opacity-100"}
        `}
      >
        <PremiumCountdown targetDate={REVEAL_DATE} />
      </div>

      {/* ✨ GLOW PULSE DURING TRANSITION */}
      {phase === "revealing" && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-teal-400/5 to-orange-400/5 animate-glowPulse" />
        </div>
      )}

      {/* 🎉 CONFETTI AFTER FADE */}
      {phase === "revealed" && <DelayedConfetti />}

    </div>
  );
}

/* =========================
   🎉 CONFETTI DELAY HELPER
========================= */

function DelayedConfetti() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 250); // slight delay after fade
    return () => clearTimeout(t);
  }, []);

  return show ? <RevealAnimation /> : null;
}