"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ success → go to admin dashboard
      router.push("/Admin/admin/");

    } catch (err) {
      console.error(err);

      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#030812] flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
      >

        {/* GLOW */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-teal-500/20 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-500/10 blur-[120px]" />

        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50"
          />

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm text-center">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-white text-black font-bold hover:bg-teal-400 transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </motion.div>
    </div>
  );
}