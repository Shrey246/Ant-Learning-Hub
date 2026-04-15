"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#030812] text-white px-4 py-8 sm:py-12 sm:px-6 md:px-10">
      
      <div className="absolute top-1/4 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-500/10 blur-[100px] md:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500/5 blur-[100px] md:blur-[130px] rounded-full pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl gap-8 md:gap-8 lg:gap-10 md:grid-cols-2 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md lg:max-w-[520px]"
        >
          <div className="absolute -inset-2 md:-inset-3 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-tr from-teal-500/10 via-transparent to-orange-500/10 blur-xl md:blur-2xl opacity-50" />
          
          <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <Image
              src="/coach.png"
              alt="Coach Praveen John Purushotham"
              width={600}
              height={700}
              className="w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-3 right-0 md:bottom-4 md:-right-6 z-20 min-w-[140px] md:min-w-[180px] p-3 md:p-4 rounded-2xl md:rounded-3xl backdrop-blur-2xl border border-white/10 bg-[#030812]/80 md:bg-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <p className="text-4xl font-bold text-teal-300 drop-shadow-md">24+</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Years Experience</p>
          </motion.div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative text-center md:text-left mt-4 md:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-teal-400 mb-3 md:mb-4">
            <Sparkles size={12} />
            The Partnership
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Transforming growth <br className="hidden md:block" /> into clarity
          </h2>

          <div className="mt-4 md:mt-5 space-y-3 md:space-y-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light max-w-lg mx-auto md:mx-0">
              Praveen John Purushotham is an ICF and NLP certified coach who believes that meaningful growth begins
              with awareness and is sustained through conscious action.
            </p>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light max-w-lg mx-auto md:mx-0">
              A seasoned professional with 24 years of industry experience, including 16 years dedicated to
              Leadership and Behavioural Training excellence.
            </p>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
              With a background in leadership, behavioural training, and organisational development,
              Praveen helps individuals navigate challenges, manage emotions, and build confidence with
              clarity. His programs & coaching style is supportive, non-judgmental, and deeply practical — helping clients
              move from confusion to direction, and from intention to execution.
            </p>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light max-w-lg mx-auto md:mx-0">
              Whether working with professionals, leaders, or students, Praveen’s focus remains the same:
              enabling people to grow into their best selves, personally and professionally.
            </p>
          </div>

          <motion.div className="mt-5 md:mt-6">
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white text-black px-8 py-3.5 md:py-4 font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] w-full sm:w-auto"
            >
              Learn More
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}