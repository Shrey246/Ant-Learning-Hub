"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="relative bg-[#030812] text-white overflow-hidden pt-32 md:pt-44">
        
        {/* ATMOSPHERIC BACKGROUND GLOWS */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

        {/* HERO HEADER */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-teal-400 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} />
            Direct Consultation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent" style={{ paddingBottom: '9px' }}
          >
            Let’s Start Something <br className="hidden md:block" /> Meaningful
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            If you’re ready to bridge the gap between where you are and where you want to be, share your details below. Every inquiry is personally reviewed to ensure a high-impact partnership.
          </motion.p>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="relative z-10 mx-auto max-w-5xl px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Email", value: "coachpraveenjp@gmail.com", icon: <Mail size={18} /> },
              { title: "Phone", value: "+91 98451 21178", icon: <Phone size={18} /> },
              { title: "Location", value: "Bengaluru, India", icon: <MapPin size={18} /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center transition-all duration-500 hover:bg-white/[0.05]"
              >
                {/* TOP SHIMMER */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <div className="mx-auto w-fit p-3 rounded-2xl bg-teal-500/10 text-teal-400 mb-4 ring-1 ring-teal-500/20 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 font-medium">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

 {/* --- WHY CHOOSE + WHO HE WORKS WITH (PREMIUM REDESIGN) --- */}
<section className="relative z-10 bg-[#030812] px-8 py-20">
  <style>{`
    @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
    @keyframes pulseRing { 0%,100% { transform:scale(1); opacity:.15; } 50% { transform:scale(1.08); opacity:.28; } }
    @keyframes floatIn { from { opacity:0; transform:scale(.7) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    @keyframes dotPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(20,184,166,.7); } 50% { box-shadow: 0 0 0 8px rgba(20,184,166,0); } }
    .why-item:hover .why-dot { animation: dotPulse .8s ease infinite; }
    .shimmer-line { background: linear-gradient(90deg, transparent 0%, rgba(20,184,166,.3) 50%, transparent 100%); background-size: 200% 100%; animation: shimmer 2.5s ease infinite; height: 1px; }
    .tag-pill:hover { background: rgba(20,184,166,.18) !important; border-color: rgba(20,184,166,.5) !important; color: #2dd4bf !important; transform: translateY(-3px) scale(1.05); }
    .tag-pill { transition: all .25s cubic-bezier(.34,1.56,.64,1); }
  `}</style>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

    {/* ── LEFT: WHY CHOOSE PRAVEEN ── */}
    <div style={{ animation: "fadeUp .6s ease both" }}>

      <div className="flex items-center gap-2 mb-2">
        <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#14b8a6,transparent)" }} />
        <span className="text-[11px] tracking-widest uppercase font-semibold text-teal-400">Your Coach</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight text-white">
        Why Choose{" "}
        <span style={{ background: "linear-gradient(135deg,#14b8a6,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Praveen
        </span>
      </h2>

      <div className="flex flex-col">
        {[
          { dot: "#14b8a6", shadow: "rgba(20,184,166,.6)", delay: ".1s",
            content: <>Over <strong className="text-white font-bold">15 years</strong> of experience in leadership &amp; behavioural training</> },
          { dot: "#818cf8", shadow: "rgba(129,140,248,.6)", delay: ".2s",
            content: (
              <div className="flex flex-col gap-2">
                <p className="m-0 text-[15px] text-gray-300">Globally recognised certifications</p>
                <div className="flex gap-2 flex-wrap">
                  {["ICF","NLP","PADI"].map(c => (
                    <span key={c} className="text-[11px] font-bold tracking-wide px-2 py-1 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">{c}</span>
                  ))}
                </div>
              </div>
            )},
          { dot: "#f472b6", shadow: "rgba(244,114,182,.6)", delay: ".3s",
            content: <>Proven techniques backed by <strong className="text-white font-bold">psychometric tools</strong></> },
          { dot: "#34d399", shadow: "rgba(52,211,153,.6)", delay: ".4s",
            content: <>Customised strategies — <em className="text-white italic">not one-size-fits-all</em></> },
          { dot: "#60a5fa", shadow: "rgba(96,165,250,.6)", delay: ".5s",
            content: <>Supportive, <strong className="text-white">confidential</strong>, and non-judgmental environment</> },
          { dot: "#fb923c", shadow: "rgba(251,146,60,.6)", delay: ".6s",
            content: <>Strong focus on <strong className="text-white">measurable</strong> and lasting results</> },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="why-item flex gap-4 py-5 border-b border-white/[0.06] last:border-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center pt-1">
              <div className="why-dot w-[10px] h-[10px] rounded-full flex-shrink-0"
                style={{ background: item.dot, boxShadow: `0 0 12px ${item.shadow}` }} />
              <div className="w-px flex-1 mt-1.5 min-h-[24px]"
                style={{ background: `linear-gradient(180deg,${item.dot}66,transparent)` }} />
            </div>
            <div className="text-[15px] text-gray-300 leading-relaxed pt-0.5 flex-1">
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── RIGHT: WHO HE WORKS WITH ── */}
    <div style={{ animation: "fadeUp .6s .2s both" }}>

      <div className="flex items-center gap-2 mb-2">
        <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#818cf8,transparent)" }} />
        <span className="text-[11px] tracking-widest uppercase font-semibold text-indigo-400">Clientele</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight text-white">
        Who He{" "}
        <span style={{ background: "linear-gradient(135deg,#818cf8,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Works With
        </span>
      </h2>

      {/* 2x2 featured cards */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {[
          { emoji: "🏢", color: "#14b8a6", bg: "rgba(20,184,166,.06)", border: "rgba(20,184,166,.2)", pulse: "rgba(20,184,166,.1)", t: "Corporate leaders", s: "& executives", sc: "#7dd3fc", dur: "3s" },
          { emoji: "🧩", color: "#818cf8", bg: "rgba(129,140,248,.06)", border: "rgba(129,140,248,.2)", pulse: "rgba(129,140,248,.1)", t: "HR professionals", s: "& OD teams", sc: "#c4b5fd", dur: "3.4s" },
          { emoji: "🚀", color: "#f472b6", bg: "rgba(244,114,182,.06)", border: "rgba(244,114,182,.2)", pulse: "rgba(244,114,182,.1)", t: "Entrepreneurs", s: "& business owners", sc: "#f9a8d4", dur: "2.8s" },
          { emoji: "👥", color: "#34d399", bg: "rgba(52,211,153,.06)", border: "rgba(52,211,153,.2)", pulse: "rgba(52,211,153,.1)", t: "Managers", s: "& team leaders", sc: "#6ee7b7", dur: "3.2s" },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-5 overflow-hidden"
            style={{ background: c.bg, border: `1px solid ${c.border}` }}
          >
            <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full"
              style={{ background: c.pulse, animation: `pulseRing ${c.dur} ease infinite` }} />
            <div className="text-2xl mb-2">{c.emoji}</div>
            <p className="m-0 text-[13px] font-semibold text-gray-100 leading-snug">
              {c.t}<br />
              <span style={{ color: c.sc }} className="font-normal">{c.s}</span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Shimmer divider */}
      <div className="relative my-5">
        <div className="shimmer-line" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d1117] px-3 text-[11px] text-white/25 tracking-widest uppercase">
          and also
        </span>
      </div>

      {/* Floating pills */}
      <div className="flex flex-wrap gap-2">
        {[
          { text: "Professionals in high-stress roles", dot: "#fb923c" },
          { text: "Individuals seeking transformation", dot: "#818cf8" },
          { text: "Students & young professionals", dot: "#60a5fa" },
          { text: "Organisations investing in people", dot: "#34d399" },
        ].map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07 }}
            viewport={{ once: true }}
            className="tag-pill inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[13px] text-slate-400 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tag.dot }} />
            {tag.text}
          </motion.span>
        ))}
      </div>

    </div>
  </div>
</section>

        {/* FORM SECTION */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          >
            {/* GLASS SHIMMER TOP EDGE */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Book a Conversation</h2>
              <p className="text-gray-500 mt-4 text-sm tracking-wide">
                Serious inquiries only • Response within 24–48 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-4">Growth Goal</label>
                <input
                  type="text"
                  placeholder="e.g., Leadership Clarity, Team Alignment..."
                  className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-4">Context</label>
                <textarea
                  rows="5"
                  placeholder="Share a bit about your current challenges..."
                  className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full mt-6 rounded-full bg-white text-black font-bold px-8 py-5 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-white/10"
              >
                Request a Call
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </form>
          </motion.div>
        </section>

        {/* TRUST SIGNATURE */}
        <section className="text-center pb-24 px-4 opacity-50">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">
            Confidentiality Guaranteed • Elite Personal Review
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}