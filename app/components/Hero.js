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
  "Mindset shifts that drive action",
  "Coaching for teams, founders, and students",
];

const stats = [
  { value: "24+", label: "Years guiding growth" },
  { value: "3X", label: "Sharper leadership outcomes" },
  { value: "360°", label: "Personal + team transformation" },
];

const orbitCards = [
  {
    title: "Strategic Leadership",
    text: "Navigate complexity and drive visionary change.",
    icon: Target,
    // FINAL FIX: Pushed way up and left to clear the center text
    position: "left-[-20px] top-[-24px] sm:left-0 sm:top-6 lg:-left-28 lg:top-2",
  },
  {
    title: "Behavioral Mastery",
    text: "Develop emotional intelligence and adaptive habits.",
    icon: Users,
    // FINAL FIX: Pushed way up and right
    position: "right-[-20px] top-[-24px] sm:right-0 sm:top-4 lg:-right-10 lg:top-10",
  },
  {
    title: "Org Development",
    text: "Align teams, optimize systems, and scale impact.",
    icon: TrendingUp,
    // FINAL FIX: Pushed way down and left
    position: "bottom-[-28px] left-[-20px] sm:bottom-10 sm:left-4 lg:-bottom-12 lg:-left-12",
  },
  {
    title: "High Performance",
    text: "Sustain excellence through resilience and focus.",
    icon: ShieldCheck,
    // FINAL FIX: Pushed way down and right
    position: "bottom-[-28px] right-[-20px] sm:bottom-10 sm:right-4 lg:-bottom-12 lg:-right-8",
  },
];

const corePillars = [
  { label: "Lead with purpose", icon: Target },
  { label: "Communicate with impact", icon: Users },
  { label: "Perform under pressure", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030812] text-white flex items-center pt-28 pb-20 md:pt-40 lg:pt-32 lg:pb-0">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="hero-noise absolute inset-0 opacity-20 pointer-events-none" />
      
      <motion.div
        className="absolute -left-10 top-20 h-64 w-64 md:h-96 md:w-96 rounded-full bg-teal-500/10 blur-[100px] md:blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex mx-auto lg:mx-0 w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] text-teal-400 backdrop-blur-md"
          >
            <Sparkles size={14} /> Leadership coaching for your next level
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Lead with clarity. <br className="hidden sm:block" />
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Inspire with presence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 mx-auto lg:mx-0 max-w-lg lg:max-w-xl text-base sm:text-lg text-gray-400 font-light leading-relaxed"
          >
            Transform ambition into grounded leadership with coaching that strengthens mindset, communication, and action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <Link href="/programs" className="group flex items-center justify-center gap-2 rounded-full bg-white text-black px-10 py-4 font-bold transition-all hover:scale-105 shadow-xl w-full sm:w-auto">
              Explore Programs <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 font-bold backdrop-blur-md transition-all hover:bg-white/10 w-full sm:w-auto">
              <Play size={16} className="text-orange-400" fill="currentColor" /> Meet the Coach
            </Link>
          </motion.div>

          {/* TRUST SIGNALS */}
          <div className="mt-10 space-y-3 flex flex-col items-center lg:items-start">
            {trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-3 text-[11px] sm:text-sm text-gray-400 text-left w-full max-w-md lg:max-w-none">
                <CheckCircle2 size={16} className="text-teal-500 shrink-0" /> <span>{signal}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:max-w-none lg:mx-0">
            {stats.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center lg:text-left">
                <div className="text-2xl font-bold text-white tracking-tight">{item.value}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: ORBIT VISUAL --- */}
        <div className="relative mt-24 lg:mt-0 flex items-center justify-center w-full overflow-visible">
          
          {/* FINAL CONTAINER WIDTH ADJUSTMENT */}
          <div className="relative w-full max-w-[350px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[550px] aspect-square">
            
            <motion.div className="absolute inset-0 rounded-full border border-white/[0.05]" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />

            {/* ORBIT CARDS */}
            {orbitCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  className={`absolute z-30 w-[150px] sm:w-[170px] md:w-52 rounded-2xl border border-white/10 bg-[#030812]/95 p-3 sm:p-4 backdrop-blur-xl shadow-2xl ${card.position}`}
                  animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0], x: [0, index % 2 === 0 ? 3 : -3, 0] }}
                  transition={{ duration: 12 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20 shrink-0">
                      <Icon size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] sm:text-sm font-bold text-white leading-tight">{card.title}</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 leading-snug mt-1">{card.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CENTRAL CARD - FINAL SCALE FIX */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-[52%] sm:w-[70%] aspect-[4/5] rounded-[2rem] md:rounded-[3rem] border border-white/15 bg-gradient-to-br from-white/[0.07] to-transparent p-4 sm:p-10 shadow-3xl backdrop-blur-3xl overflow-hidden flex flex-col justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                <div className="inline-flex w-fit rounded-full bg-teal-500/10 px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-teal-400 border border-teal-500/20">
                  Leadership
                </div>

                <h3 className="mt-2 sm:mt-4 text-[13px] sm:text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                  Presence that <br /> moves people.
                </h3>
                
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm text-gray-400 leading-relaxed font-light">
                  Premium coaching.
                </p>

                {/* CORE PILLARS */}
                <div className="mt-4 md:mt-10 space-y-1.5 sm:space-y-4">
                  {corePillars.map((item, i) => {
                    const PIcon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-1.5 p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="p-1 rounded-md bg-teal-500/10 text-teal-400 shrink-0">
                          <PIcon size={10} className="sm:w-3.5 sm:h-3.5" />
                        </div>
                        <span className="text-[8px] sm:text-xs font-medium text-gray-200 truncate">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}