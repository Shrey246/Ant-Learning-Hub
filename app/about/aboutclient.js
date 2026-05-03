"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, ShieldCheck, Speech, ArrowRight, Zap, GraduationCap, Briefcase, Award, Gavel } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";



export default function AboutPage() {
  return (
    <>
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>

      <main className="relative bg-[#030812] text-white overflow-hidden pt-24 md:pt-32">
        
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

        {/* --- BIO HERO SECTION --- */}
        <section className="relative mx-auto grid max-w-7xl gap-8 px-4 py-5 md:grid-cols-2 items-center sm:px-6 md:px-10">
          
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-teal-400 mb-3">
              <Sparkles size={12} />
              The Coach
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Praveen John Purushotham
            </h1>
           <div className="mt-2 md:mt-2 space-y-2 md:space-y-2">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light max-w-lg mx-auto md:mx-0">
  Praveen John Purushotham, an ICF and NLP-certified coach, believes that true personal and professional growth begins with the right{" "}
  
  <span className="font-semibold text-white">Mindset</span> to{" "}
  <span className="font-semibold text-teal-400">Aspire</span>. 
  
  Through his Training Programs and coaching, he helps individuals{" "}
  
  <span className="font-semibold text-teal-400">Nurture</span> their journey by equipping them with the right{" "}
  
  <span className="font-semibold text-white">Toolset</span>, and guiding them in building a strong{" "}
  
  <span className="font-semibold text-white">Skillset</span> — empowering them to{" "}
  
  <span className="font-semibold text-teal-400">Transform</span> to their highest Potential.
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

          </motion.div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-4">
            {[
              { value: "24+", label: "Years Experience", icon: <Briefcase size={20}/> },
              { value: "10,000+", label: "People Guided", icon: <Users size={20}/> },
              { value: "360°", label: "Holistic Coaching", icon: <Zap size={20}/> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative glass rounded-3xl p-5 text-center border border-white/5 bg-white/[0.02]"
              >
                <div className="mx-auto w-fit p-3 rounded-2xl bg-teal-500/10 text-teal-400 mb-2 ring-1 ring-teal-500/20">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-gray-500 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- EXPERTISE SECTION (ADDED, NOTHING ELSE TOUCHED) --- */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Expertise You Can Trust</h2>
            <div className="mt-2 w-12 h-1 bg-teal-500 mx-auto rounded-full opacity-50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ICF-ACC Certified Holistic Coach",
                desc: "Enabling balance, purpose, and personal growth through globally recognised coaching standards.",
              },
              {
                title: "NLP Practitioner (Diploma)",
                desc: "Helping individuals break unhelpful patterns, improve communication, and reframe limiting beliefs.",
              },
              {
                title: "Certified Leadership & Behavioural Trainer",
                desc: "Empowering leaders and teams using proven methodologies and psychometric tools.",
              },
              {
                title: "Organisational Development Coach",
                desc: "Driving workplace transformation through improved leadership, culture, and team effectiveness.",
              },
              {
                title: "PADI Certified Dive Master",
                desc: "Bringing discipline, situational awareness, and calm decision-making from high-pressure environments into leadership and life coaching.",
              },
              {
                title: "Emergency First Response (EFR) Instructor",
                desc: "Equipping individuals and organisations with essential life-saving and emergency response skills.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Journey of Growth</h2>
            <div className="mt-2 w-12 h-1 bg-teal-500 mx-auto rounded-full opacity-50" />
          </div>

          <div className="relative">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal-500/50 via-white/10 to-transparent" />

            {[
              "Started leadership training journey",
              "Worked with Fortune 500 professionals",
              "Architected behavioral coaching frameworks",
              "Empowered 10,000+ individuals worldwide",
              "Focused on holistic transformation",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-6 flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#030812] border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </div>

                <div className="ml-10 md:ml-0 md:w-1/2 px-4 md:px-12">
                  <div className="glass p-4 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-xl hover:bg-white/[0.06] transition-colors duration-500">
                    <p className="text-gray-300 font-light leading-relaxed">{item}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FOCUS AREAS GRID --- */}
        {/* (UNCHANGED, continues...) */}
        {/* --- FOCUS AREAS GRID --- */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Key Focus Areas</h2>
            <p className="mt-2 text-gray-500">Mastering the pillars of organizational excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Leadership Development", icon: < Speech size={18}/> },
              { title: "Emotional Intelligence", icon: <Zap size={18}/> },
              { title: "Organizational Design", icon: <Briefcase size={18}/> },
              { title: "Confidence Building", icon: <ShieldCheck size={18}/> },
              { title: "Strategic Career Direction", icon: <GraduationCap size={18}/> },
              { title: "Decision Making", icon: <Gavel size={18}/> },
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
        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] p-8 md:p-8 overflow-hidden backdrop-blur-2xl border border-white/10 bg-white/[0.02] shadow-3xl"
          >
             <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Start Your <br /> <span className="text-teal-400">Growth Journey</span>
            </h2>
            <p className="mt-2 text-lg text-gray-400 font-light max-w-xl mx-auto">
              Real change begins with awareness and the right high-impact guidance.
            </p>
            <div className="mt-4">
              <Link
                href="/?book=true"
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
