"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Michroma, Abel } from "next/font/google";
import { useRouter } from "next/navigation";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // --- DEMO MODE BYPASS ---
    setTimeout(() => {
      router.push("/user/dashboard");
      setLoading(false);
    }, 1500);
  };

  return (
    <main
      className={`min-h-screen bg-[#FBF9F6] text-black relative overflow-x-hidden flex flex-col ${abel.className}`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A12_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A12_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px]"></div>
      </div>

      {/* Responsive Top Nav */}
      <nav className="relative z-50 py-6 md:py-8 px-6 md:px-12 flex justify-start items-center">
        <Link href="/" className="block max-w-[120px] md:max-w-none">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </nav>

      {/* Main Login Card - Responsive Padding/Sizing */}
      <div className="flex-grow flex items-center justify-center p-4 md:p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white w-full max-w-[450px] rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-black/5 p-8 md:p-12"
        >
          <div className="text-center mb-8 md:mb-10">
            <h1
              className={`${michroma.className} text-xl md:text-2xl uppercase tracking-tight mb-2`}
            >
              Welcome Back
            </h1>
            <p className="text-black/50 text-base md:text-lg">
              Login to manage your account
            </p>
          </div>

          <form className="space-y-5 md:space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4 md:space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/60 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20"
                    size={18}
                  />
                  <input
                    required
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FBF9F6] py-4 md:py-5 pl-12 pr-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-[#008000]/20 transition-all border border-transparent focus:border-[#008000]/30 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/60">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-[10px] md:text-[11px] text-[#008000] font-bold hover:underline"
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20"
                    size={18}
                  />
                  <input
                    required
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#FBF9F6] py-4 md:py-5 pl-12 pr-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-[#008000]/20 transition-all border border-transparent focus:border-[#008000]/30 text-sm md:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-black text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-[#008000] disabled:bg-white disabled:text-black disabled:border disabled:border-black/10 flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Login</span>
                  <CheckCircle2
                    size={18}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </>
              )}
            </button>
          </form>

          {/* Bottom Link */}
          <div className="mt-8 md:mt-10 text-center pt-6 md:pt-8 border-t border-black/5">
            <p className="text-black/40 text-xs md:text-sm inline-block mr-2">
              Don't have an account?
            </p>
            <Link
              href="/"
              className="text-xs md:text-sm font-bold text-[#008000] hover:underline inline-flex items-center gap-1"
            >
              Create one <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="p-6 md:p-8 text-center mt-auto">
        <p className="text-[9px] md:text-[11px] text-black/30 uppercase font-bold tracking-widest">
          © {new Date().getFullYear()} Ticket R • All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
