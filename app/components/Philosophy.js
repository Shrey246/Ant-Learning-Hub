"use client";

import { motion } from "framer-motion";
import { Compass, Zap, CheckCircle, TrendingUp } from "lucide-react";

// Animation Variants for the staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Philosophy() {
  const pillars = [
    {
      icon: <Compass size={28} />,
      title: "Clarity",
      description:
        "Define direction, goals, and priorities with sharp focus and intention.",
    },
    {
      icon: <Zap size={28} />,
      title: "Empowerment",
      description:
        "Build confidence and self-belief to take meaningful and consistent action.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Accountability",
      description:
        "Stay on track through structured reflection, feedback, and follow-through.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Growth Mindset",
      description:
        "Develop adaptability and long-term transformation through continuous learning.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#030812] text-white px-4 py-10 sm:px-6 md:px-10">
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl text-center">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
            style={{ paddingBottom: "6px" }}
          >
            Coaching Philosophy
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-400 leading-relaxed">
            A structured approach designed to create clarity, action, and sustainable growth.
          </p>
        </motion.div>

        {/* PILLARS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center rounded-3xl p-6 
                         backdrop-blur-xl border border-white/10 bg-white/[0.03] 
                         shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* TOP LIGHT-LEAK ACCENT */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* ICON */}
              <div className="mb-4 p-3 rounded-2xl bg-teal-500/10 text-[#9ef7ea] 
                              ring-1 ring-teal-500/30 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                {pillar.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold tracking-wide text-white">
                {pillar.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {pillar.description}
              </p>

              {/* BOTTOM ACCENT */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-[2px] 
                              bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

              {/* INNER GLOW */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/[0.03] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}