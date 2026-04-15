"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Michroma } from "next/font/google";
import LoginPage from "./Login";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

export default function UserEntryGate() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Simulate system authorization check
    const timer = setTimeout(() => setIsBooted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FBF9F6] min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!isBooted ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              className="h-[1px] bg-[#008000] mb-4"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className={`${michroma.className} text-[#008000] text-[10px] tracking-[0.5em] uppercase`}
            >
              Authorizing Terminal Access...
            </motion.h2>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <LoginPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
