"use client";

import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Rocket,
  GraduationCap,
  Building2,
  UserCog,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function Audience() {
  const audience = [
    { icon: <Briefcase size={28} />, title: "Corporate Leaders" },
    { icon: <UserCog size={28} />, title: "Managers & Team Leaders" },
    { icon: <Rocket size={28} />, title: "Entrepreneurs" },
    { icon: <Building2 size={28} />, title: "HR Professionals" },
    { icon: <GraduationCap size={28} />, title: "Students" },
    { icon: <Users size={28} />, title: "Young Professionals" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#030812] text-white px-4 py-10">
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
          >
            Who This Is For
          </motion.h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-400">
            Tailored coaching for individuals and teams ready to bridge the gap between
            where they are and where they want to be.
          </p>
        </div>

        {/* GRID */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {audience.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center justify-center rounded-3xl p-6 
                         backdrop-blur-md border border-white/10 bg-white/[0.03] 
                         shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            >
              {/* TOP SHIMMER LINE */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* ICON */}
              <div className="mb-4 p-3 rounded-2xl bg-teal-500/10 text-[#9ef7ea] 
                              ring-1 ring-teal-500/30 shadow-[0_0_20px_rgba(20,184,166,0.15)]">
                {item.icon}
              </div>

              <h3 className="text-lg font-medium text-white tracking-wide">
                {item.title}
              </h3>

              {/* BOTTOM ACCENT */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-[2px] 
                              bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}