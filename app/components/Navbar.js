"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link
            href="/Contact"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-white text-black px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Book Session
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
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
                <Link
                  href="/Contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white text-black py-4 font-bold"
                >
                  Book Session
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}