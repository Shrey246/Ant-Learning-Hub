"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function RevealAnimation() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return; // 🔥 prevents repeat
    hasFired.current = true;

    // 🎉 LEFT burst
    confetti({
      particleCount: 120,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.6 },
    });

    // 🎉 RIGHT burst
    confetti({
      particleCount: 120,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.6 },
    });
  }, []);

  return null; // 🔥 no UI needed
}