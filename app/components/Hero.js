"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Sparkles,
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
    position: "top-[10%] left-[20%] -translate-x-1/2 -translate-y-1/2 sm:top-[0%] sm:left-[10%]",
  },
  {
    title: "Behavioral Mastery",
    text: "Develop emotional intelligence and adaptive habits.",
    icon: Users,
    position: "top-[14%] right-[18%] translate-x-1/2 -translate-y-1/2 sm:top-[9%] sm:right-[10%]",
  },
  {
    title: "Org Development",
    text: "Align teams, optimize systems, and scale impact.",
    icon: TrendingUp,
    position: "bottom-[10%] left-[20%] -translate-x-1/2 translate-y-1/2 sm:bottom-[0%] sm:left-[10%]",
  },
  {
    title: "High Performance",
    text: "Sustain excellence through resilience and focus.",
    icon: ShieldCheck,
    position: "bottom-[12%] right-[20%] translate-x-1/2 translate-y-1/2 sm:bottom-[3%] sm:right-[15%]",
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
              className="group flex items-center justify-center gap-2 rounded-full bg-white text-black px-10 py-4 font-bold transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
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
          className="relative mt-8 flex w-full items-center justify-center overflow-hidden px-2 sm:overflow-visible sm:px-0 lg:mt-0"
        >
          <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[550px]">

            <motion.div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-white/[0.05]"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* ORBIT CARDS — each is a semantically described article */}
            {orbitCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={index}
                  aria-label={`${card.title}: ${card.text}`}
                  className={`absolute z-30 w-[128px] rounded-2xl border border-white/10 bg-[#030812]/95 p-2.5 backdrop-blur-xl shadow-2xl sm:w-[170px] sm:p-4 md:w-52 ${card.position}`}
                  animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0], x: [0, index % 2 === 0 ? 3 : -3, 0] }}
                  transition={{ duration: 12 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="rounded-xl bg-teal-500/10 p-1.5 text-teal-400 ring-1 ring-teal-500/20 shrink-0 sm:p-2" aria-hidden="true">
                      <Icon size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold leading-tight text-white sm:text-sm">{card.title}</p>
                      <p className="mt-1 text-[8px] leading-snug text-gray-400 sm:text-[10px]">{card.text}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            {/* CENTRAL CARD */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative flex aspect-[4/5] w-[58%] flex-col justify-center overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.07] to-transparent p-3 shadow-3xl backdrop-blur-3xl sm:w-[70%] sm:p-10 md:rounded-[3rem]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <p className="inline-flex w-fit rounded-full bg-teal-500/10 px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-teal-400 border border-teal-500/20">
                  Leadership
                </p>

                <h2 className="mt-2 text-[12px] font-bold leading-tight tracking-tight sm:mt-4 sm:text-2xl md:text-4xl">
                  Presence that <br /> moves people.
                </h2>

                <p className="mt-1 text-[9px] font-light leading-relaxed text-gray-400 sm:mt-2 sm:text-sm">
                  Premium coaching.
                </p>

                {/* CORE PILLARS — semantic list */}
                <ul aria-label="Core coaching pillars" className="mt-2 space-y-1.5 list-none p-0 sm:space-y-4 md:mt-4">
                  {corePillars.map((item, i) => {
                    const PIcon = item.icon;
                    return (
                      <li key={i} className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] p-1.5 sm:rounded-xl sm:p-3">
                        <div aria-hidden="true" className="p-1 rounded-md bg-teal-500/10 text-teal-400 shrink-0">
                          <PIcon size={10} className="sm:w-3.5 sm:h-3.5" />
                        </div>
                        <span className="truncate text-[7px] font-medium text-gray-200 sm:text-xs">{item.label}</span>
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
