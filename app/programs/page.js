"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Users,
  Target,
  Zap,
  ShieldCheck,
  Waves 
} from "lucide-react";

import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const programGroups = [
  {
    title: "For Individuals",
    subtitle: "Personal Leadership & Growth",
    description: "Tailored one-on-one coaching designed to meet your unique needs and professional aspirations.",
    icon: Users,
    glow: "bg-teal-500/25", // Increased intensity
    cardBg: "bg-teal-950/20", // Stronger tint
    iconBg: "bg-teal-500/15",
    iconText: "text-teal-400",
    borderBase: "border-teal-500/20",
    borderHover: "group-hover:border-teal-400/50",
    outcomes: [
      "Career advancement & professional growth",
      "Stress management & emotional resilience",
      "Mindset shifts & belief reframing",
      "Relationship building (personal & professional)",
      "Emotional regulation & self-awareness",
      "Life transitions (career or personal)",
      "Holistic wellness & balance",
    ],
  },
  {
    title: "For Corporates",
    subtitle: "Leadership & Org Excellence",
    description: "Strategic support designed to foster leadership excellence and sustainable organisational growth.",
    icon: Building2,
    glow: "bg-orange-500/25",
    cardBg: "bg-orange-950/20",
    iconBg: "bg-orange-500/15",
    iconText: "text-orange-400",
    borderBase: "border-orange-500/20",
    borderHover: "group-hover:border-orange-400/50",
    outcomes: [
      "Leadership development programs",
      "Behavioural & mindset training",
      "Emotional intelligence at the workplace",
      "Team dynamics & communication enhancement",
      "Change management support",
      "Stress management for high-pressure roles",
      "Organisational culture & performance alignment",
      "Leadership through SCUBA - Signature Program",
    ],
  },
  {
    title: "For Institutes",
    subtitle: "Educational & Student Growth",
    description: "Focused on shaping emotionally intelligent, resilient individuals within academic environments.",
    icon: GraduationCap,
    glow: "bg-blue-500/25",
    cardBg: "bg-blue-950/20",
    iconBg: "bg-blue-500/15",
    iconText: "text-blue-400",
    borderBase: "border-blue-500/20",
    borderHover: "group-hover:border-blue-400/50",
    outcomes: [
      "Student self-awareness & emotional regulation",
      "Leadership foundations for young professionals",
      "Faculty development & behavioural training",
      "Habit building, focus, and discipline workshops",
      "Personal growth bootcamps for students",
      "Emergency First Response (EFR) training",
    ],
  },
];

const highlights = [
  { value: "3", label: "Specialized Tracks" },
  { value: "24+", label: "Years of Expertise" },
  { value: "100%", label: "Custom Frameworks" },
];

const principles = [
  { title: "Clear structure", icon: <Target size={20} />, text: "Every program is shaped with a clear flow." },
  { title: "Applied transformation", icon: <Zap size={20} />, text: "Built to create practical movement." },
  { title: "Human-centered coaching", icon: <ShieldCheck size={20} />, text: "Simple, warm, and professional." },
];

export default function Programs() {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });
  const [toast, setToast] = useState({
  show: false,
  message: "",
  type: "success" // success | error
   });

  useEffect(() => {
    const checkMobile = () => setIsMobile(!window.matchMedia("(hover: hover)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openModal = (title) => {
  setSelectedProgram(title);
  setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
    };

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await addDoc(collection(db, "leads"), {
          type: "program",
          program: selectedProgram,
          ...form,
          createdAt: serverTimestamp()
        });

        setToast({
          show: true,
          message: "Enquiry submitted successfully",
          type: "success"
        });

        setTimeout(() => {
          setToast({ show: false, message: "", type: "success" });
        }, 3000);

        setShowModal(false);
        setForm({
          name: "",
          email: "",
          phone: "",
          profession: "",
        });

      } catch (err) {
        console.error(err);
        setToast({
          show: true,
          message: "Error submitting form",
          type: "error"
        });
        setTimeout(() => {
          setToast({ show: false, message: "", type: "error" });
        }, 3000);
      }
    };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#030812] text-white pt-32 md:pt-44">
        
        {/* --- THE ENHANCED TOP-DOWN ATMOSPHERE --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Top bleed gradient */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-teal-500/15 to-transparent opacity-60" />
            
            {/* Focal Glow Blobs (Increased 5% Intensity & Higher Blur) */}
            <div className="absolute top-[-5%] left-1/4 w-[600px] h-[600px] bg-teal-500/15 blur-[160px] rounded-full" />
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 blur-[160px] rounded-full" />
            <div className="absolute top-1/2 left-[-10%] w-[700px] h-[700px] bg-blue-500/5 blur-[180px] rounded-full opacity-50" />
            
            {/* Architectural Grid with Radial Fade */}
            <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_top,black,transparent)]" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* HERO SECTION */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.4em] text-teal-400 backdrop-blur-md">
              <Sparkles size={14} /> Elite Coaching Tracks
            </div>
            <h1 className="mt-8 text-5xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent leading-[0.95]" style={{ paddingBottom: '12px' }}>
              Coaching <br className="lg:hidden" /> Programs
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
              Architected for high-performance leadership. Move from abstract intention 
              to concrete action through structured behavioural mastery.
            </p>
          </motion.div>

          {/* HIGHLIGHTS */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <h3 className="text-4xl font-bold text-white tracking-tighter">{item.value}</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-bold">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROGRAM CARDS */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
            {programGroups.map((program, index) => {
              const Icon = program.icon;
              const isInactive = !isMobile && active !== null && active !== index;

              return (
                <motion.div
                  key={index}
                  onHoverStart={() => !isMobile && setActive(index)}
                  onHoverEnd={() => !isMobile && setActive(null)}
                  animate={{
                    opacity: isInactive ? 0.4 : 1,
                    scale: isInactive ? 0.97 : 1,
                    y: active === index && !isMobile ? -10 : 0
                  }}
                  className={`relative flex flex-col rounded-[2.8rem] border ${program.borderBase} ${program.cardBg} 
                             p-10 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-3xl 
                             group transition-all duration-700 ${program.borderHover}`}
                >
                  {/* FOCUSED LIGHT LEAK */}
                  <div className={`absolute top-0 left-0 w-48 h-48 ${program.glow} blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-40 group-hover:opacity-100`} />
                  
                  {/* TOP ETCHED EDGE */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <div className={`p-4 rounded-2xl ${program.iconBg} ${program.iconText} border border-white/10 shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={26} />
                    </div>
                  </div>

                  <div className="flex-1 relative z-10">
                    <h3 className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-3 ${program.iconText}`}>
                      {program.subtitle}
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                      {program.title}
                    </h2>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                      {program.description}
                    </p>

                    <div className="my-8 w-full h-[1px] bg-white/10" />

                    <div className="space-y-5">
                      {program.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex gap-4 text-sm font-light text-gray-300 items-start">
                          <CheckCircle2 size={18} className={`${program.iconText} shrink-0 mt-0.5 opacity-80`} />
                          <span className={outcome.includes("SCUBA") ? `font-bold ${program.iconText} flex items-center gap-2` : ""}>
                            {outcome}
                            {outcome.includes("SCUBA") && <Waves size={16} className="animate-pulse" />}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-14 relative z-10">
            <button
              onClick={() => openModal(program.title)}
              className={`group/btn relative inline-flex items-center justify-center w-full rounded-full 
                        bg-white text-black py-5 text-sm font-black transition-all 
                        hover:bg-teal-400 hover:text-black shadow-2xl`}
            >
              Enquire Now
              <ArrowRight size={20} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
            </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* GUIDING PRINCIPLES */}
        <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 md:px-10 border-t border-white/5 bg-black/20">
           <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Guiding Principles</h2>
            <p className="mt-6 text-gray-500 uppercase tracking-widest text-xs font-bold">The Core Behavioral Architecture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {principles.map((p, i) => (
              <div key={i} className="relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
                <div className={`h-12 w-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-8 ring-1 ring-teal-500/30`}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={closeModal} />

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-lg mx-4 rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 shadow-[0_40px_120px_rgba(0,0,0,0.8)] overflow-hidden"
            >

              {/* GLOW BACKGROUND */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-teal-500/20 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

              {/* CLOSE BUTTON */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              {/* HEADER */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-teal-400 mb-3">
                  Program Enquiry
                </p>

                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Enquire for{" "}
                  <span className="text-teal-400">
                    {selectedProgram}
                  </span>
                </h2>

                <p className="text-gray-400 text-sm mt-3">
                  Share your details and we’ll connect with you shortly.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div className="relative">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>

                {/* PHONE */}
                <div className="relative">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>

                {/* PROFESSION */}
                <div className="relative">
                  <input
                    name="profession"
                    value={form.profession}
                    onChange={handleChange}
                    placeholder="Profession (optional)"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>

                {/* SUBMIT */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="relative w-full mt-6 py-5 rounded-full bg-white text-black font-bold tracking-wide shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Enquiry
                    <ArrowRight size={18} />
                  </span>

                  {/* BUTTON GLOW */}
                  <div className="absolute inset-0 bg-teal-400/0 hover:bg-teal-400/20 transition-all duration-300" />
                </motion.button>

              </form>
            </motion.div>
          </div>
        )}



        <Footer />


        {toast.show && (
  <div className="fixed bottom-6 right-6 z-[100]">

    <div
      className={`relative px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex items-center gap-3 transition-all duration-300
      ${toast.type === "success"
        ? "bg-teal-500/10 border-teal-400/30 text-teal-300"
        : "bg-red-500/10 border-red-400/30 text-red-300"
      }`}
    >

      {/* glow */}
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 pointer-events-none 
        ${toast.type === 'success' ? 'bg-teal-500/20' : 'bg-red-500/20'}"
      />

      {/* dot */}
      <div
        className={`w-3 h-3 rounded-full 
        ${toast.type === "success" ? "bg-teal-400" : "bg-red-400"}
        shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
      />

      {/* message */}
      <p className="text-sm font-medium relative z-10">
        {toast.message}
      </p>
    </div>
  </div>
)}
      </main>
    </>
  );
}