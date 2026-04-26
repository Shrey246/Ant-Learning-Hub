"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const trustSignals = [
  "Leadership clarity for professionals",
  "Mindset + Toolset = Skillset",
  "Coaching for Leaders, individuals and Institutions",
];

const stats = [
  { value: "24+", label: "Years guiding growth" },
  { value: "10X", label: "Sharper leadership outcomes" },
  { value: "360°", label: "Personal + team transformation" },
];

const orbitCardsDesktop = [
  {
    title: "1:1 Coaching",
    text: "Personalised sessions for clarity, growth, and direction.",
    icon: Target,
    orbitX: "calc(-1.34 * var(--orbit-offset))",
    orbitY: "calc(-1 * var(--orbit-offset))",
  },
  {
    title: "Student Development",
    text: "Build confidence, focus, and life skills early.",
    icon: Users,
    orbitX: "calc(1.35 * var(--orbit-offset))",
    orbitY: "calc(-1 * var(--orbit-offset))",
  },
  {
    title: "Teacher Training",
    text: "Empower educators with modern skills and mindset.",
    icon: TrendingUp,
    orbitX: "calc(-1.35 * var(--orbit-offset))",
    orbitY: "var(--orbit-offset)",
  },
  {
    title: "Corporate Training",
    text: "Stronger teams. Better performance.",
    icon: ShieldCheck,
    orbitX: "calc(1.35 * var(--orbit-offset))",
    orbitY: "var(--orbit-offset)",
  },
];

const orbitCardsMobile = [
  {
    title: "1:1 Coaching",
    text: "Personalised sessions for clarity, growth, and direction.",
    icon: Target,
    orbitX: "calc(-2.22 * var(--orbit-offset))", // ⬅️ pushed more left
    orbitY: "calc(-1.5 * var(--orbit-offset))",
  },
  {
    title: "Student Development",
    text: "Build confidence, focus, and life skills early.",
    icon: Users,
    orbitX: "calc(2.0 * var(--orbit-offset))", // ➡️ pushed more right
    orbitY: "calc(-2 * var(--orbit-offset))",
  },
  {
    title: "Teacher Training",
    text: "Empower educators with modern skills and mindset.",
    icon: TrendingUp,
    orbitX: "calc(-2.1 * var(--orbit-offset))", // ⬅️ more left
    orbitY: "calc(2.0 * var(--orbit-offset))",
  },
  {
    title: "Corporate Training",
    text: "Stronger teams. Better performance.",
    icon: ShieldCheck,
    orbitX: "calc(2.2 * var(--orbit-offset))", // ➡️ more right
    orbitY: "calc(1 * var(--orbit-offset))",
  },
];



const corePillars = [
  { label: "Lead with clarity", icon: Target },
  { label: "Communicate better", icon: Users },
  { label: "Handle pressure", icon: ShieldCheck },
  { label: "⁠Leadership Through Scuba", icon: Anchor },
];

export default function Hero() {
  const [isDesktopOrbit, setIsDesktopOrbit] = useState(() =>
    typeof window === "undefined" ? true : window.innerWidth >= 640
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const updateOrbitMode = (event) => {
      setIsDesktopOrbit(event.matches);
    };

    setIsDesktopOrbit(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateOrbitMode);
      return () => mediaQuery.removeEventListener("change", updateOrbitMode);
    }

    mediaQuery.addListener(updateOrbitMode);
    return () => mediaQuery.removeListener(updateOrbitMode);
  }, []);

  const activeOrbitCards = isDesktopOrbit ? orbitCardsDesktop : orbitCardsMobile;

  return (
    <section
      aria-label="Leadership coaching — lead with clarity, inspire with purpose"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#030812] pt-20 pb-10 text-white md:pt-32 lg:pt-28 lg:pb-0"
    >
      {/* BACKGROUND ELEMENTS — decorative, hidden from assistive tech */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div aria-hidden="true" className="hero-noise absolute inset-0 opacity-20 pointer-events-none" />

      <motion.div
        aria-hidden="true"
        className="absolute -left-10 top-20 h-64 w-64 md:h-96 md:w-96 rounded-full bg-teal-500/10 blur-[100px] md:blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl items-center px-4 sm:px-6 md:px-16 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8 xl:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:items-start lg:text-left">


          {/* Subheading / meta description mirror */}
        <div className="relative mt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs font-Large tracking-[0.18em] text-teal-400 sm:gap-2 sm:text-base sm:tracking-[0.3em] md:text-lg lg:justify-start">
          
          <span className="relative text-teal-400 font-semibold">
            <b>A</b>spire
            <span className="absolute inset-0 blur-md bg-teal-400/20 opacity-50"></span>
          </span>

          <span className="h-[2px] w-6 bg-gradient-to-r from-gray-500 to-teal-400 sm:w-10" />

          <span className="relative text-teal-400 font-semibold">
            <b>N</b>urture
            <span className="absolute inset-0 blur-md bg-teal-400/20 opacity-50"></span>
          </span>

          <span className="h-[2px] w-6 bg-gradient-to-r from-teal-400 to-orange-400 sm:w-10" />

          <span className="relative text-teal-400 font-semibold">
            <b>T</b>ransform
            <span className="absolute inset-0 blur-md bg-teal-400/20 opacity-50"></span>
          </span>

        </div>

          {/* Primary heading — critical for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-[1.08] md:text-6xl lg:text-7xl lg:leading-[1.1]"
          >
            Lead with clarity.{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Inspire with purpose.
            </span>
          </motion.h1>


          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
          >
            <Link
              href="/programs"
              aria-label="Explore leadership coaching programs"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 font-bold text-black shadow-xl transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              Explore Programs
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              aria-label="Meet the leadership coach"
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 font-bold backdrop-blur-md transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              <Play size={16} aria-hidden="true" className="text-orange-400" fill="currentColor" />
              Meet the Coach
            </Link>
          </motion.div>

          {/* Trust signals — semantic list */}
          <ul
            aria-label="Why choose this coaching"
            className="mt-3 flex flex-col items-center space-y-1.5 list-none p-0 lg:items-start"
          >
            {trustSignals.map((signal, i) => (
              <li key={i} className="flex items-center gap-3 text-[11px] sm:text-sm text-gray-400 text-left w-full max-w-md lg:max-w-none">
                <CheckCircle2 size={16} aria-hidden="true" className="text-teal-500 shrink-0" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>

          {/* Stats — semantic description list */}
          <dl className="mx-auto mt-3 grid max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
            {stats.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center lg:text-left">
                <dt className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 order-2">{item.label}</dt>
                <dd className="text-2xl font-bold text-white tracking-tight order-1">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT COLUMN: ORBIT VISUAL — labelled as decorative illustration */}
<div
  role="img"
  aria-label="Visual overview of coaching pillars: Strategic Leadership, Behavioral Mastery, Org Development, and High Performance"
  className="relative mt-8 flex w-full items-center justify-center px-2 sm:px-0 lg:mt-0"
>
  <div
    className="relative aspect-square w-full max-w-[20rem] [--orbit-offset:clamp(3.75rem,13vw,4.75rem)] sm:max-w-[28rem] sm:[--orbit-offset:clamp(6.75rem,19vw,9.5rem)] lg:max-w-[34rem]"
  >
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 rounded-full border border-white/[0.05]"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />

    {activeOrbitCards.map((card, index) => {
      const Icon = card.icon;
      return (
        <div
          key={index}
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% + ${card.orbitX}), calc(-50% + ${card.orbitY}))`,
          }}
          className="absolute z-30"
        >
          <motion.article
            aria-label={`${card.title}: ${card.text}`}
            className="w-[5.5rem] rounded-2xl border border-white/10 bg-[#030812]/95 shadow-2xl backdrop-blur-xl sm:w-[7.5rem] lg:w-[8.5rem]"
            animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0], x: [0, index % 2 === 0 ? 2 : -2, 0] }}
            transition={{ duration: 12 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          >
            <div className="p-1.5 sm:p-3">
              <div className="flex flex-col gap-1 sm:gap-2">
                <div
                  className="shrink-0 self-start rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20"
                  style={{ display: "inline-flex" }}
                  aria-hidden="true"
                >
                  <span className="inline-flex rounded-xl p-1 sm:p-2">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </div>
                <div>
                  <p className="text-[0.66rem] font-bold leading-tight text-white sm:text-[0.82rem] lg:text-[0.88rem]">
                    {card.title}
                  </p>
                  <p className="mt-0.5 text-[0.56rem] leading-snug text-gray-400 sm:mt-1 sm:text-[0.68rem] lg:text-[0.72rem]">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      );
    })}

{/* CENTRAL CARD */}
<div className="absolute inset-0 flex items-center justify-center">
  <motion.div
    className="relative z-20 flex w-[min(11.25rem,44vw)] flex-col overflow-hidden rounded-[1.25rem] border border-white/15 bg-gradient-to-br from-white/[0.07] to-transparent p-2.5 shadow-3xl backdrop-blur-3xl sm:w-[min(13.75rem,40vw)] sm:p-4 lg:w-[min(15.5rem,34vw)]"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* top glow line */}
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
    />

    {/* tag */}
    <p className="inline-flex w-fit rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 text-[8px] uppercase tracking-[0.15em] text-teal-400 sm:px-2.5 sm:py-1 sm:text-[0.68rem]">
      Leadership programs
    </p>

    {/* heading */}
    <h2 className="mt-2 text-[0.82rem] font-bold leading-[1.2] tracking-tight sm:mt-2.5 sm:text-base lg:text-[1.05rem]">
      Practical coaching to <br /> lead,communicate and perform.
    </h2>

    {/* subtext */}
    <p className="mt-1 text-[0.62rem] font-light text-gray-400 sm:mt-1.5 sm:text-xs">
      Premium coaching.
    </p>

    {/* LIST */}
    <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
      {corePillars.map((item, i) => {
        const PIcon = item.icon;
        return (
          <li
            key={i}
            className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.04] px-2 py-1.5 sm:gap-2 sm:px-2.5 sm:py-1.5"
          >
            <div className="shrink-0 rounded-md bg-teal-500/10 text-teal-400 p-1 sm:p-1.5">
              <PIcon size={12} />
            </div>

            {/* ✅ IMPORTANT FIX */}
            <span className="text-[0.66rem] sm:text-xs text-gray-200 leading-snug">
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  </motion.div>
</div>
  </div>
</div>

      </div>
    </section>
  );
}
