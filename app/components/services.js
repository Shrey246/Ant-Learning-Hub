"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { User, Building, GraduationCap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Services() {
  const [active, setActive] = useState(null);

  const services = [
    {
      icon: <User size={24} />,
      title: "Individuals",
      points: [
        "Career growth & clarity",
        "Emotional resilience",
        "Mindset transformation",
        "Life transitions",
      ],
    },
    {
      icon: <Building size={24} />,
      title: "Corporates",
      points: [
        "Leadership development",
        "Team communication",
        "Change management",
        "Workplace emotional intelligence",
      ],
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Institutes",
      points: [
        "Student development",
        "Leadership foundations",
        "Faculty training",
        "Habit & growth programs",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="relative bg-[#07111f] text-white overflow-hidden">

        {/* GLOW */}
        <div className="glow-teal top-[-100px] left-[-120px]" />
        <div className="glow-orange bottom-[-100px] right-[-120px]" />

        {/* HERO */}
        <section className="text-center py-10 px-4 max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">
            Coaching Offerings
          </h1>

          <p className="mt-3 text-gray-300">
            Structured programs designed to bring clarity, confidence,
            and meaningful transformation across individuals and teams.
          </p>

        </section>

        {/* CARDS */}
        <section className="max-w-7xl mx-auto px-4 pb-12">

          <div className="grid md:grid-cols-3 gap-4">

            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                onHoverStart={() => setActive(index)}
                onHoverEnd={() => setActive(null)}
                className={`relative rounded-2xl p-5 border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-300
                ${active !== null && active !== index ? "opacity-50 scale-[0.97]" : ""}`}
              >

                {/* ICON */}
                <div className="text-[#9ef7ea] mb-3">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                {/* POINTS */}
                <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#32d6c5]/10 to-transparent rounded-2xl transition pointer-events-none" />

              </motion.div>
            ))}

          </div>

        </section>

        {/* WHY SECTION */}
        <section className="max-w-6xl mx-auto px-4 pb-12 text-center">

          <h2 className="text-3xl font-semibold">
            Why These Programs Work
          </h2>

          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            These programs combine leadership principles, emotional intelligence,
            and real-world application — ensuring lasting transformation.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">

            {[
              {
                title: "Practical Learning",
                text: "Apply strategies immediately in real situations.",
              },
              {
                title: "Real Transformation",
                text: "Build clarity, confidence, and long-term growth.",
              },
              {
                title: "Holistic Approach",
                text: "Mindset, behaviour, and leadership combined.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass p-5 rounded-xl text-center"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-400">{item.text}</p>
              </motion.div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-16 text-center">

          <div className="glass-strong p-6 rounded-2xl">

            <h2 className="text-3xl font-semibold">
              Begin Your Growth Journey
            </h2>

            <p className="mt-2 text-gray-400">
              If you’re ready to move forward with clarity and purpose,
              let’s start with a conversation.
            </p>

            <Link
              href="/Contact"
              className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold btn-premium"
            >
              Contact to Enroll
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}