"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { name: "Rahul Mehta", role: "Corporate Manager", text: "Praveen helped me gain clarity in my leadership journey and build confidence in decision-making." },
    { name: "Ananya Sharma", role: "Entrepreneur", text: "His coaching helped me overcome limiting beliefs and approach challenges with a growth mindset." },
    { name: "Karan Patel", role: "Young Professional", text: "The sessions helped me develop emotional awareness and improve my professional relationships." },
    { name: "Neha Kapoor", role: "HR Professional", text: "The coaching sessions helped me lead my team with empathy and strategic clarity." },
    { name: "Arjun Nair", role: "Startup Founder", text: "Working with Praveen gave me a completely new perspective on leadership and personal growth." },
    { name: "Sneha Iyer", role: "Student", text: "His guidance helped me build confidence and focus on my career goals with clarity." },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[#030812] text-white px-4 py-24">
      
      {/* CENTRAL GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
        </motion.div>

        <div className="relative mt-20 flex overflow-hidden py-5">
          {/* MASKING GRADIENTS */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#030812] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#030812] to-transparent pointer-events-none" />

          <motion.div
            className="flex gap-8 pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 60, // Slower is more elegant
              repeat: Infinity,
            }}
          >
            {duplicatedTestimonials.map((t, i) => (
              <div
                key={i}
                className="relative min-w-[320px] md:min-w-[380px] rounded-3xl p-8 
                           backdrop-blur-md border border-white/10 bg-white/[0.02] 
                           shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* DECORATIVE QUOTE */}
                <Quote className="absolute top-6 right-8 text-white/[0.03]" size={40} />

                <div>
                  <div className="mb-6 flex gap-1 text-teal-400/60">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base italic">
                    “{t.text}”
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500/20 to-orange-500/10 border border-white/10 flex items-center justify-center text-xs font-bold text-teal-200">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{t.role}</p>
                  </div>
                </div>

                {/* PERMANENT TOP ACCENT LINE */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}