"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, QrCode, Wifi, Lock, Fingerprint } from "lucide-react";
import { Michroma, Abel } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function RecordPreview() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full max-w-[540px] aspect-[1.6/1] cursor-pointer group ${abel.className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: 2000 }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* FRONT: ICE WHITE PREMIUM */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-[2.5rem] p-10 text-black border border-gray-200 shadow-[0_40px_80px_rgba(0,0,0,0.1)] backface-hidden overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Subtle Green Radial Nuance */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#008000]/10 blur-[80px] rounded-full" />

          <div className="relative h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative bg-black/5 p-2 rounded-xl">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p
                    className={`${michroma.className} text-[10px] tracking-tighter leading-none`}
                  >
                    TICKET R
                  </p>
                  <p className="text-[8px] text-[#008000] font-black uppercase tracking-widest">
                    Verified User
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Wifi size={18} className="text-black/20" />
                <span className="text-[7px] font-black text-black/30 tracking-widest">
                  RFID ENABLED
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1 font-bold">
                  Holder Identity
                </p>
                <p
                  className={`${michroma.className} text-2xl uppercase text-black tracking-tighter`}
                >
                  Olasubomi Adebayo
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1 font-bold">
                    Node Jurisdiction
                  </p>
                  <p className="font-bold text-lg">NG-LA-001</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1 font-bold">
                    System Status
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#008000] rounded-full animate-pulse" />
                    <p className="font-bold text-lg text-[#008000]">SECURED</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end border-t border-gray-100 pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#008000]" size={22} />
                <span className="text-[9px] uppercase tracking-[0.2em] text-black/40 font-bold italic">
                  Tap to Reveal Encryption
                </span>
              </div>
              <div className="bg-black p-2 rounded-xl">
                <QrCode size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* BACK: SECURITY INTERFACE */}
        <div
          className="absolute inset-0 w-full h-full bg-[#0D0D0D] rounded-[2.5rem] p-10 text-white border border-[#008000]/30 shadow-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#008000 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative h-full flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <Lock size={20} className="text-[#008000]" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#008000]">
                ENCRYPTION LAYER ACTIVE
              </span>
            </div>

            <div className="flex flex-col items-center text-center py-4">
              <Fingerprint size={48} className="text-white/10 mb-4" />
              <div className="w-full bg-white/5 border border-white/10 p-4 rounded-xl font-mono text-[10px] tracking-widest text-[#008000] mb-2 uppercase">
                TR-SEC-8829-XLA-9920-PQR
              </div>
              <p className="text-[9px] text-white/40 uppercase tracking-widest">
                Authorized Digital Access Key
              </p>
            </div>

            <div className="bg-[#008000] h-10 w-full rounded-lg opacity-20 flex items-center px-4">
              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  animate={{ x: [0, 100, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="h-full w-1/3 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
