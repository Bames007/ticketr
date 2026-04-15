"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TicketRPhone from "./TicketRPhone"; // This is the screen content we fixed earlier

export default function TicketRFrame() {
  return (
    <main className="min-h-screen bg-[#FBF9F6] flex flex-col items-center justify-center py-20 px-6 font-sans">
      {/* 1. Hardware Container - iPhone 17 Pro Max concept ratio */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out
        className="relative aspect-[9/19.5] w-full max-w-[340px] bg-[#1A1A1A] rounded-[50px] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] p-[12px] overflow-hidden"
      >
        {/* 2. Hardware: The Dynamic Island - Sleeker, thinner for IP17 */}
        <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-black rounded-full z-50 flex items-center justify-between px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#008000]/10 border border-[#008000]/20 animate-pulse" />
          <div className="w-6 h-1 bg-white/5 rounded-full" />
        </div>

        {/* 3. The Screen Content - We insert the actual app screenshot here */}
        <div className="relative w-full h-full bg-white rounded-[38px] overflow-hidden">
          <Image
            src="/ticketr-screenshot.jpeg"
            alt="Ticket R Dashboard UI"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>
    </main>
  );
}
