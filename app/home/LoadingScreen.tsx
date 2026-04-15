"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Michroma } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Syncs to roughly 5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[999] bg-[#FBF9F6] flex flex-col items-center justify-center"
    >
      {/* Subtle Green Tint Overlay */}
      <div className="absolute inset-0 bg-[#008000]/5 pointer-events-none" />

      <div className="relative flex items-center justify-center w-64 h-64">
        {/* The Green Rounding Circle */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            stroke="#1A1A1A"
            strokeOpacity="0.05"
            strokeWidth="1"
            fill="transparent"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="48%"
            stroke="#008000"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="100 100"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            strokeLinecap="round"
          />
        </svg>

        {/* Centered Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-50 h-12"
        >
          <Image
            src="/logo.png"
            alt="Ticket R"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Loading Meta Text */}
      <div className="mt-12 text-center">
        <p
          className={`${michroma.className} text-[10px] tracking-[0.6em] text-[#1A1A1A] uppercase mb-2`}
        >
          System Initialization
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-[10px] font-black font-mono text-[#008000]">
            {progress}%
          </span>
          <div className="w-8 h-[1px] bg-[#1A1A1A]/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[#008000]"
              style={{ scaleX: progress / 100, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
