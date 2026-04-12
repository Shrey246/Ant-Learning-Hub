"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#030812] text-white px-4 pt-16 pb-8 md:pt-28 md:pb-10 sm:px-6 md:px-10">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-teal-500/10 blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative mx-auto max-w-4xl text-center"
      >
        {/* FIXED: Reduced mobile padding (px-6 py-10) to give text room to breathe */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] px-6 py-10 md:pt-20 md:px-20 md:pb-40 overflow-hidden backdrop-blur-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] text-teal-400/80 font-medium"
          >
            Limited Availability • Master Your Narrative
          </motion.p>

          <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.15]">
            Ready to design your <br className="hidden sm:block" /> 
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              next major breakthrough?
            </span>
          </h2>

          <p className="mx-auto mt-6 md:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-light">
            This is more than coaching—it’s a high-impact partnership designed 
            to architect clarity and fuel sustainable leadership growth.
          </p>

          <div className="mt-8 md:mt-12">
            <Link
              href="/Contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3.5 md:px-10 md:py-5 text-sm md:text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto justify-center"
            >Book a Conversation
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 md:mt-16 flex flex-col items-center gap-2">
            <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">
              Personally reviewed • Confidentiality Guaranteed
            </p>
            <div className="w-8 md:w-12 h-[1px] bg-white/10" />
            <p className="text-[8px] md:text-[10px] text-gray-600 uppercase tracking-widest">
              Response within 24–48 hours
            </p>
          </div>

          <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-40 h-40 md:w-60 md:h-60 bg-teal-500/5 blur-[50px] md:blur-[80px] rounded-full pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}