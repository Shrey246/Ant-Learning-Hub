"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, ShieldCheck, ArrowRight, Zap, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative bg-[#030812] text-white overflow-hidden pt-32 md:pt-40">
        
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

        {/* --- BIO HERO SECTION --- */}
        <section className="relative mx-auto grid max-w-7xl gap-16 px-4 py-12 md:grid-cols-2 items-center sm:px-6 md:px-10">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:max-w-[500px]"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-teal-500/10 via-transparent to-orange-500/10 blur-2xl opacity-40" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <Image
                src="/coach.png"
                alt="Praveen John Purushotham"
                width={600}
                height={700}
                className="w-full object-cover"
              />
            </div>

            {/* FLOATING EXPERIENCE CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 md:-right-8 z-20 p-6 rounded-3xl backdrop-blur-2xl border border-white/10 bg-white/[0.05] shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <p className="text-4xl font-bold text-teal-300 drop-shadow-md">24+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-teal-400 mb-6">
              <Sparkles size={12} />
              The Coach
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Praveen John Purushotham
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed font-light">
              A leadership coach focused on helping individuals and teams move
              from confusion to clarity, and from intention to action.
            </p>

            <p className="mt-6 text-base text-gray-400 leading-relaxed font-light border-l-2 border-teal-500/30 pl-6 italic">
              &quot;With 15+ years of experience, his approach blends emotional
              intelligence, behavioral insight, and practical frameworks to
              create real, lasting transformation.&quot;
            </p>
          </motion.div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { value: "15+", label: "Years Experience", icon: <Briefcase size={20}/> },
              { value: "1000+", label: "People Guided", icon: <Users size={20}/> },
              { value: "360°", label: "Holistic Coaching", icon: <Zap size={20}/> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative glass rounded-3xl p-8 text-center border border-white/5 bg-white/[0.02]"
              >
                <div className="mx-auto w-fit p-3 rounded-2xl bg-teal-500/10 text-teal-400 mb-4 ring-1 ring-teal-500/20">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-gray-500 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Journey of Growth</h2>
            <div className="mt-4 w-12 h-1 bg-teal-500 mx-auto rounded-full opacity-50" />
          </div>

          <div className="relative">
            {/* CENTRAL LINE */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal-500/50 via-white/10 to-transparent" />

            {[
              "Started leadership training journey",
              "Worked with Fortune 500 professionals",
              "Architected behavioral coaching frameworks",
              "Empowered 1000+ individuals worldwide",
              "Focused on holistic transformation",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-16 flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* DOT */}
                <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#030812] border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </div>

                {/* CARD */}
                <div className="ml-10 md:ml-0 md:w-1/2 px-4 md:px-12">
                  <div className="glass p-6 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-xl hover:bg-white/[0.06] transition-colors duration-500">
                    <p className="text-gray-300 font-light leading-relaxed">{item}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FOCUS AREAS GRID --- */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Key Focus Areas</h2>
            <p className="mt-4 text-gray-500">Mastering the pillars of organizational excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Leadership Development", icon: <Target size={18}/> },
              { title: "Emotional Intelligence", icon: <Zap size={18}/> },
              { title: "Organizational Design", icon: <Briefcase size={18}/> },
              { title: "Confidence Building", icon: <ShieldCheck size={18}/> },
              { title: "Strategic Career Direction", icon: <GraduationCap size={18}/> },
              { title: "Decision Making", icon: <Zap size={18}/> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 glass p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-teal-500/30 transition-all duration-500"
              >
                <div className="text-teal-400">{item.icon}</div>
                <span className="text-sm font-medium tracking-wide text-gray-200">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="mx-auto max-w-4xl px-4 py-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] p-12 md:p-20 overflow-hidden backdrop-blur-2xl border border-white/10 bg-white/[0.02] shadow-3xl"
          >
             <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Start Your <br /> <span className="text-teal-400">Growth Journey</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 font-light max-w-xl mx-auto">
              Real change begins with awareness and the right high-impact guidance.
            </p>
            <div className="mt-10">
              <Link
                href="/Contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-10 py-4 font-bold transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Book a Session
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
}
