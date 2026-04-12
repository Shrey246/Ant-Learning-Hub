"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {

  const [toast, setToast] = useState({
  show: false,
  message: "",
  type: "success"
});

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [showBooking, setShowBooking] = useState(false);

    const [bookingForm, setBookingForm] = useState({
      name: "",
      email: "",
      phone: "",
      profession: "",
      date: "",
      time: ""
    });

    const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
    ];

    const handleBookingChange = (e) => {
  const { name, value } = e.target;

  setBookingForm((prev) => ({
    ...prev,
    [name]: value
  }));
};

const selectTime = (time) => {
  setBookingForm((prev) => ({
    ...prev,
    time: time
  }));
};

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleBookingSubmit = async (e) => {
  e.preventDefault();

  if (!bookingForm.time) {
    setToast({
      show: true,
      message: "Please select a time slot",
      type: "error"
    });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3000);

    return;
  }

  try {
    await addDoc(collection(db, "leads"), {
      type: "session",
      ...bookingForm,
      createdAt: serverTimestamp()
    });

    setToast({
      show: true,
      message: "Session booked successfully",
      type: "success"
    });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3000);

    setBookingForm({
      name: "",
      email: "",
      phone: "",
      profession: "",
      date: "",
      time: ""
    });

    setShowBooking(false);

  } catch (err) {
    console.error(err);

    setToast({
      show: true,
      message: "Something went wrong",
      type: "error"
    });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3000);
  }
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 py-4 ${
        scrolled ? "pt-2" : "pt-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 sm:px-6 
        border transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-[#030812]/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.98]"
            : "bg-transparent border-transparent scale-100"
        }`}
      >
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center transition-transform group-hover:scale-110">
  <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
  
  <Image 
    src="/logo.svg" 
    alt="Ant Learning Hub Logo" 
    width={42} 
    height={42} 
    className="relative z-10"
  />
</div>
          <span className="text-sm font-bold tracking-tight sm:text-lg bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Ant Learning Hub
          </span>
        </Link>

        {/* DESKTOP NAV - With Framer Motion Pill */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-xl backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/10 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <button
            onClick={() => setShowBooking(true)}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-white text-black px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Book Session
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-gray-400 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="rounded-2xl border border-white/10 bg-[#030812]/95 backdrop-blur-2xl p-4 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm transition-colors ${
                      pathname === link.href 
                        ? "bg-white/10 text-white" 
                        : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                        <button
                        onClick={() => setShowBooking(true)}
                        className="group relative inline-flex items-center gap-2 rounded-xl bg-white text-black px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      >
                        Book Session
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {showBooking && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setShowBooking(false)}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-2xl mx-4 rounded-[2rem] border border-white/10 bg-[#030812] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
          >

            {/* CLOSE */}
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-6">Book a Session</h2>

            <form onSubmit={handleBookingSubmit} className="space-y-6">

              {/* INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input name="name" value={bookingForm.name} onChange={handleBookingChange} placeholder="Full Name" required className="inputStyle" />

                <input name="email" value={bookingForm.email} onChange={handleBookingChange} placeholder="Email" required className="inputStyle" />

                <input name="phone" value={bookingForm.phone} onChange={handleBookingChange} placeholder="Phone" required className="inputStyle" />

                <input name="profession" value={bookingForm.profession} onChange={handleBookingChange} placeholder="Profession" className="inputStyle" />

              </div>

              {/* DATE */}
              <input
                type="date"
                name="date"
                value={bookingForm.date}
                onChange={handleBookingChange}
                required
                className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10"
              />

              {/* TIME SLOTS */}
              <div>
                <p className="text-sm text-gray-400 mb-3">Select Time Slot</p>

                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => selectTime(slot)}
                      className={`py-3 rounded-xl border text-sm transition-all
                        ${bookingForm.time === slot
                          ? "bg-teal-400 text-black border-teal-400"
                          : "bg-white/[0.05] border-white/10 text-gray-300 hover:bg-white/[0.1]"
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* SUBMIT */}
              <button className="w-full py-5 rounded-full bg-white text-black font-bold hover:bg-teal-400">
                Confirm Booking
              </button>

            </form>
          </motion.div>
        </div>
      )}

     <style>{`
      .inputStyle {
        width: 100%;
        padding: 16px;
        border-radius: 12px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        color: white;
      }
      `}</style>
{toast.show && (
  <div className="fixed bottom-6 right-6 z-[300]">

    <div
      className={`relative px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex items-center gap-3 transition-all duration-300
      ${toast.type === "success"
        ? "bg-teal-500/10 border-teal-400/30 text-teal-300"
        : "bg-red-500/10 border-red-400/30 text-red-300"
      }`}
    >

      {/* glow */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-40 pointer-events-none"
        style={{
          background:
            toast.type === "success"
              ? "rgba(20,184,166,0.2)"
              : "rgba(239,68,68,0.2)"
        }}
      />

      {/* dot */}
      <div
        className={`w-3 h-3 rounded-full ${
          toast.type === "success" ? "bg-teal-400" : "bg-red-400"
        }`}
      />

      {/* message */}
      <p className="text-sm font-medium relative z-10">
        {toast.message}
      </p>
    </div>
  </div>
)}

    </nav>
  );
}