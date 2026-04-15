"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function NotFound() {
  return (
    <main
      className={`min-h-screen bg-[#FBF9F6] text-black flex items-center justify-center p-6 ${abel.className}`}
    >
      {/* Background Grid Pattern (Matches Home/Login) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A12_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A12_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Visual Icon */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-[#008000]/20 rounded-full" />
            <AlertCircle
              size={70}
              className="text-[#008000] relative z-10"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>

        {/* Clear Heading */}
        <h1
          className={`${michroma.className} text-5xl md:text-8xl mb-6 tracking-tighter uppercase leading-none`}
        >
          404
        </h1>

        <div className="inline-block px-5 py-2 border border-[#008000]/20 bg-white rounded-full mb-10 shadow-sm">
          <p className="text-[#008000] text-[11px] font-black uppercase tracking-[0.3em]">
            Page Not Found
          </p>
        </div>

        {/* Simplified Prose */}
        <p className="text-black/50 text-lg md:text-xl mb-12 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved to a new
          location.
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:shadow-[0_20px_40px_rgba(0,128,0,0.2)] hover:bg-[#008000] transition-all w-full sm:w-auto justify-center"
          >
            <Home size={16} />
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 border-2 border-black/5 bg-white text-black px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Minimalist Brand Footer */}
        <div className="mt-24 flex flex-col items-center gap-4 opacity-30">
          <div className="h-[1px] w-12 bg-black" />
          <p
            className={`${michroma.className} text-[8px] tracking-[0.8em] uppercase`}
          >
            Ticket R Protocol
          </p>
        </div>
      </div>
    </main>
  );
}
