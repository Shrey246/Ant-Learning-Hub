"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "praveen@antlearninghub.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#030812] text-white">

      {/* ATMOSPHERIC BACKGROUND GLOWS */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* TOP BORDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-10">

        {/* MAIN GRID */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              ANT Learning Hub
            </h2>

            <p className="mt-3 text-gray-400 max-w-sm leading-relaxed font-light">
              Helping individuals and organizations move from confusion to
              clarity, and from intention to meaningful growth.
            </p>

            {/* MINI CTA */}
            <Link
              href="/Contact"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
            >
              Start your journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Explore
            </h3>

            <ul className="space-y-2 text-gray-400">
              {['Home', 'About', 'Programs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 transition-colors duration-300 hover:bg-teal-500/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Connect
            </h3>

            <div className="space-y-2 text-gray-400">
              <p
                onClick={handleCopy}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative"
              >
                {email}

                {copied && (
                  <span className="absolute -top-5 left-0 text-xs text-teal-400">
                    Copied!
                  </span>
                )}
              </p>
              <p className="hover:text-white transition-colors duration-300 cursor-default">
                +91 9110661178
              </p>
            </div>

            {/* TRUST LINE */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500 tracking-wide">
                Responses within 24–48 hours
              </p>
              <p className="text-xs text-gray-500 tracking-wide mt-1">
                Personal consultation guaranteed
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ANT Learning Hub. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
