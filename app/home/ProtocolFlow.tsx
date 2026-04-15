"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Fingerprint,
  Database,
  Cpu,
  Activity,
  ShieldCheck,
  QrCode,
  Wifi,
  Lock,
} from "lucide-react";
import { Michroma, Abel } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const STEPS = [
  {
    id: "01",
    title: "Handshake",
    desc: "Establish a secure socket layer between your device and the Ticket R node.",
    icon: <Activity size={24} />,
  },
  {
    id: "02",
    title: "Identity Sync",
    desc: "Your legal record is cross-referenced with primary state jurisdictions.",
    icon: <Fingerprint size={24} />,
  },
  {
    id: "03",
    title: "Data Encryption",
    desc: "Information is fragmented and stored across the secure cloud database.",
    icon: <Database size={24} />,
  },
  {
    id: "04",
    title: "Access Issued",
    desc: "Your digital access card is generated with a unique cryptographic signature.",
    icon: <Cpu size={24} />,
  },
];

export default function ProtocolFlow() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      className={`py-16 md:py-32 bg-white relative overflow-hidden ${abel.className}`}
    >
      {/* Dynamic Glow - Responsive Sizing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1400px] h-[300px] md:h-[800px] bg-[#008000]/10 blur-[60px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 md:w-16 h-[2px] bg-[#008000]" />
            <span className="text-black font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-xs">
              System Operations
            </span>
          </div>
          <h2
            className={`${michroma.className} text-3xl sm:text-4xl md:text-6xl text-black uppercase tracking-tighter leading-[1.1] md:leading-none`}
          >
            Initialization <br className="block md:hidden" />
            <span className="text-[#008000]">Sequence</span>
          </h2>
        </div>

        {/* Steps Grid: Stacked on mobile, Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-px md:bg-black/10 md:border md:border-black/10 md:shadow-2xl md:rounded-[2rem] overflow-hidden mb-20 md:mb-24">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 relative group hover:bg-gray-50 transition-colors duration-500 rounded-[1.5rem] md:rounded-none border border-black/5 md:border-0"
            >
              <span
                className={`${michroma.className} absolute top-6 right-8 text-4xl md:text-6xl text-black/[0.04] group-hover:text-[#008000]/10 transition-colors duration-500`}
              >
                {step.id}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-[#008000] flex items-center justify-center rounded-xl md:rounded-2xl mb-6 md:mb-10 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <h3
                  className={`${michroma.className} text-base md:text-xl text-black mb-3 md:mb-4 uppercase tracking-tight font-bold`}
                >
                  {step.title}
                </h3>
                <p className="text-black text-sm md:text-lg leading-relaxed mb-6 md:mb-8 opacity-70">
                  {step.desc}
                </p>
                <div className="flex gap-1.5">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-6 md:h-1.5 md:w-8 rounded-full ${i <= index ? "bg-[#008000]" : "bg-gray-100"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Card Section */}
        <div className="flex flex-col items-center">
          <div className="mb-10 md:mb-16 text-center">
            <h3
              className={`${michroma.className} text-xl md:text-3xl text-black uppercase mb-4`}
            >
              Digital <span className="text-[#008000]">Access</span> Card
            </h3>
            <p className="max-w-md md:max-w-xl text-black/60 text-sm md:text-xl leading-relaxed mx-auto">
              Tap to flip. Encrypted, non-fungible, and linked to your biometric
              registry.
            </p>
          </div>

          <div
            className="relative w-full max-w-[450px] aspect-[1.58/1] cursor-pointer touch-none"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: 2000 }}
          >
            <motion.div
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full shadow-2xl rounded-[1.2rem] md:rounded-[2.5rem]"
            >
              {/* FRONT OF CARD */}
              <div
                className="absolute inset-0 w-full h-full bg-white rounded-[1.2rem] md:rounded-[2.5rem] p-5 md:p-12 text-black border border-gray-100 overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="relative w-20 h-6 md:w-30 md:h-10">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        fill
                        sizes="120px"
                        className="object-contain"
                      />
                    </div>
                    <Wifi size={18} className="text-black/30" />
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <p className="text-[7px] md:text-[11px] uppercase tracking-widest text-black/40 mb-1 font-black">
                        Holder Identity
                      </p>
                      <p
                        className={`${michroma.className} text-lg md:text-3xl uppercase tracking-tighter truncate`}
                      >
                        Olasubomi Adebayo
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[7px] md:text-[11px] uppercase tracking-widest text-black/40 mb-1 font-black">
                          State Code
                        </p>
                        <p
                          className={`${michroma.className} text-xs md:text-lg`}
                        >
                          NG-LA-001
                        </p>
                      </div>
                      <div className="text-right md:text-left">
                        <p className="text-[7px] md:text-[11px] uppercase tracking-widest text-black/40 mb-1 font-black">
                          System Status
                        </p>
                        <p className="font-bold text-xs md:text-xl text-[#008000]">
                          SECURED
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-3 md:pt-8">
                    <ShieldCheck className="text-[#008000]" size={20} />
                    <div className="bg-black p-2 md:p-3 rounded-lg md:rounded-2xl">
                      <QrCode size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK OF CARD */}
              <div
                className="absolute inset-0 w-full h-full bg-[#FBFBFB] rounded-[1.2rem] md:rounded-[2.5rem] p-5 md:p-12 text-black border border-gray-200 overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="relative h-full flex flex-col justify-between items-center text-center">
                  <div className="flex items-center gap-2">
                    <Lock size={14} className="text-[#008000]" />
                    <span
                      className={`${michroma.className} text-[7px] md:text-[10px] tracking-widest`}
                    >
                      SECURITY LAYER
                    </span>
                  </div>
                  <div className="w-full">
                    <div className="w-10 h-10 md:w-20 md:h-20 bg-white mx-auto shadow-inner rounded-full flex items-center justify-center mb-4 border border-black/5">
                      <Fingerprint size={20} className="text-black/10" />
                    </div>
                    <div className="w-full bg-black text-[#008000] p-2 md:p-5 rounded-lg font-mono text-[7px] md:text-xs tracking-widest mb-2">
                      TR-8829-XLA-9920-SEC
                    </div>
                  </div>
                  <p className="text-[7px] text-black/30 font-bold uppercase tracking-widest">
                    Authorized Network Access
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* System Bar */}
        <div className="mt-16 md:mt-32 p-5 md:p-10 border-2 border-black rounded-[1.5rem] md:rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 bg-white shadow-xl">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-3 h-3 bg-[#008000] rounded-full animate-pulse relative shadow-[0_0_10px_#008000]" />
            <span className="text-black font-black uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-sm">
              Node_24_Lagos // System Stable
            </span>
          </div>
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="flex-1 text-right">
              <p className="text-[8px] md:text-[10px] text-black font-black uppercase tracking-widest mb-1">
                Integrity
              </p>
              <div className="w-full md:w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden border border-black/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  className="h-full bg-black"
                />
              </div>
            </div>
            <ShieldAlert size={20} className="text-black shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
