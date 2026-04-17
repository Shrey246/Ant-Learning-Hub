"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
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
  "Coaching for teams, founders, and students",
];

const stats = [
  { value: "24+", label: "Years guiding growth" },
  { value: "10X", label: "Sharper leadership outcomes" },
  { value: "360°", label: "Personal + team transformation" },
];

const orbitCards = [
  {
    title: "Strategic Leadership",
    text: "Navigate complexity and drive visionary change.",
    icon: Target,
    orbitX: "calc(-1.22 * var(--orbit-offset))",
    orbitY: "calc(-1 * var(--orbit-offset))",
  },
  {
    title: "Behavioral Mastery",
    text: "Develop emotional intelligence and adaptive habits.",
    icon: Users,
    orbitX: "var(--orbit-offset)",
    orbitY: "calc(-1 * var(--orbit-offset))",
  },
  {
    title: "Org Development",
    text: "Align teams, optimize systems, and scale impact.",
    icon: TrendingUp,
    orbitX: "calc(-1.2 * var(--orbit-offset))",
    orbitY: "var(--orbit-offset)",
  },
  {
    title: "High Performance",
    text: "Sustain excellence through resilience and focus.",
    icon: ShieldCheck,
    orbitX: "calc(1.25 * var(--orbit-offset))",
    orbitY: "var(--orbit-offset)",
  },
];



const corePillars = [
  { label: "Lead with purpose", icon: Target },
  { label: "Communicate with impact", icon: Users },
  { label: "Perform under pressure", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section
      aria-label="Leadership coaching — lead with clarity, inspire with presence"
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

      <div className="relative z-10 mx-auto max-w-7xl items-center px-4 sm:px-6 md:px-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">


          {/* Subheading / meta description mirror */}
        <div className="relative mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xs font-Large tracking-[0.18em] text-teal-400 sm:gap-2 sm:text-base sm:tracking-[0.3em] md:text-lg lg:justify-start">
          
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
              Inspire with presence.
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
            className="mt-4 flex flex-col items-center space-y-2 list-none p-0 lg:items-start"
          >
            {trustSignals.map((signal, i) => (
              <li key={i} className="flex items-center gap-3 text-[11px] sm:text-sm text-gray-400 text-left w-full max-w-md lg:max-w-none">
                <CheckCircle2 size={16} aria-hidden="true" className="text-teal-500 shrink-0" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>

          {/* Stats — semantic description list */}
          <dl className="mx-auto mt-4 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
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
  className="relative mt-10 flex w-full items-center justify-center px-2 sm:px-0 lg:mt-0"
>
  <div
    className="relative aspect-square w-full max-w-[26rem] sm:max-w-[34rem] lg:max-w-[42rem]"
    style={{ "--orbit-offset": "clamp(8.5rem, 24vw, 12rem)" }}
  >
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 rounded-full border border-white/[0.05]"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />

    {orbitCards.map((card, index) => {
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
            className="w-[8.25rem] rounded-2xl border border-white/10 bg-[#030812]/95 shadow-2xl backdrop-blur-xl sm:w-[9rem] lg:w-[9.75rem]"
            animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0], x: [0, index % 2 === 0 ? 2 : -2, 0] }}
            transition={{ duration: 12 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          >
            <div className="p-3 sm:p-3.5">
              <div className="flex flex-col gap-2.5">
                <div
                  className="shrink-0 self-start rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20"
                  style={{ display: "inline-flex" }}
                  aria-hidden="true"
                >
                  <span className="inline-flex rounded-xl p-2 sm:p-2.5">
                    <Icon className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight text-white sm:text-[0.95rem]">
                    {card.title}
                  </p>
                  <p className="mt-1.5 text-[0.72rem] leading-snug text-gray-400 sm:text-xs">
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
    className="relative z-20 flex w-[min(15rem,52vw)] flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-white/[0.07] to-transparent p-4 shadow-3xl backdrop-blur-3xl sm:w-[min(16.5rem,46vw)] sm:p-5 lg:w-[min(19rem,42vw)]"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* top glow line */}
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
    />

    {/* tag */}
    <p className="inline-flex w-fit rounded-full border border-teal-500/20 bg-teal-500/10 uppercase tracking-[0.15em] text-teal-400 text-[10px] sm:text-xs px-3 py-1">
      Leadership
    </p>

    {/* heading */}
    <h2 className="mt-3 text-base font-bold leading-[1.2] tracking-tight sm:text-lg">
      Presence that <br /> moves people.
    </h2>

    {/* subtext */}
    <p className="mt-2 text-xs font-light text-gray-400 sm:text-sm">
      Premium coaching.
    </p>

    {/* LIST */}
    <ul className="mt-4 space-y-2.5">
      {corePillars.map((item, i) => {
        const PIcon = item.icon;
        return (
          <li
            key={i}
            className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2"
          >
            <div className="shrink-0 rounded-md bg-teal-500/10 text-teal-400 p-1.5">
              <PIcon size={14} />
            </div>

            {/* ✅ IMPORTANT FIX */}
            <span className="text-xs sm:text-sm text-gray-200 leading-snug">
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
