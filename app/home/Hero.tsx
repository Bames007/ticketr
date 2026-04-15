"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import { ChevronRight, Globe, ShieldCheck, Ticket } from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

interface HeroProps {
  onOpenModal: () => void;
}

export default function TicketRHero({ onOpenModal }: HeroProps) {
  return (
    <section
      className={`relative min-h-screen bg-[#FBF9F6] flex items-center overflow-hidden pt-32 pb-16 lg:py-0 ${abel.className}`}
    >
      {/* 1. Background Grid Decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A12_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A12_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Text & Main Actions */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 border-l-4 border-[#008000] bg-white shadow-sm"
            >
              <Globe size={14} className="text-[#008000]" />
              <span className="text-[9px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
                Unified Nigerian Road Safety Protocol
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1
                className={`${michroma.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[1] md:leading-[1.1] tracking-tighter`}
              >
                ELIMINATE <br className="hidden sm:block" />
                <span className="text-[#008000]">STRESS.</span> <br />
                DIGITIZE <br className="hidden sm:block" />
                DOCS.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#1A1A1A]/70 text-sm md:text-xl leading-relaxed max-w-md md:max-w-lg mx-auto lg:mx-0"
            >
              Experience the definitive **Ticket R** ecosystem. Secure your
              Nigerian vehicle dossier for instant agency verification.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-4"
            >
              <button
                onClick={onOpenModal}
                className="bg-[#1A1A1A] text-white px-8 py-4 md:py-5 text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#008000] transition-all duration-500 shadow-xl group w-full"
              >
                <ShieldCheck size={16} />
                Get Your Digital Shield
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 md:py-5 text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#1A1A1A] hover:text-white transition-all w-full">
                The Protocol
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: iPhone Hardware Frame */}
          <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-[#008000]/10 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full flex justify-center"
            >
              {/* iPhone Hardware */}
              <div className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/19.2] bg-[#0F0F0F] rounded-[40px] md:rounded-[50px] p-[7px] md:p-[9px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[1px] border-white/10 ring-1 ring-white/5">
                {/* Dynamic Island */}
                <div className="absolute top-[12px] md:top-[18px] left-1/2 -translate-x-1/2 w-[60px] md:w-[90px] h-[18px] md:h-[26px] bg-black rounded-full z-50 flex items-center justify-center ring-1 ring-white/5">
                  <div className="w-1 h-1 rounded-full bg-[#008000]/40 animate-pulse" />
                </div>

                {/* The Screen */}
                <div className="w-full h-full bg-white rounded-[34px] md:rounded-[42px] overflow-hidden relative border-[1px] border-black/5">
                  <Image
                    src="/ticketr-screenshot.jpeg"
                    alt="Ticket R App Interface"
                    fill
                    sizes="(max-width: 768px) 240px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Status Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 md:-right-8 top-1/4 bg-white p-3 md:p-4 shadow-2xl border border-[#1A1A1A]/5 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 z-50 scale-90 md:scale-100"
              >
                <div className="p-1.5 bg-[#008000]/10 rounded-lg">
                  <Ticket size={16} className="text-[#008000]" />
                </div>
                <div>
                  <p className="text-[7px] md:text-[9px] font-black text-[#1A1A1A]/40 uppercase tracking-widest">
                    Protocol
                  </p>
                  <p
                    className={`${michroma.className} text-[9px] md:text-[11px] text-[#1A1A1A]`}
                  >
                    SECURED
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
