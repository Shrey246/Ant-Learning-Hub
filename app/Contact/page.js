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